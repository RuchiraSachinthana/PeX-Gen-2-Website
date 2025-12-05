"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BlogHeader from "@/components/BlogHeader";
import CaseStudiesShowcase from "@/components/CaseStudiesShowcase";
import Footer from "@/components/Footer";
import SocialsSection from "@/components/SocialSection";
import BlogContentSection from "../../components/BlogContentSection";
import BlogContentSectionDynamic from "../../components/BlogContentSectionDynamic";
import { fetchBlogs, addBlog } from "@/store/blogSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import BlogCaseStudiesShowcase from "@/components/BlogCaseStudiesShowcase";

export default function BlogPageClient() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const { items: blogData, currentPage, status, error } = useAppSelector(
    (state) => state.blog
  );
  const [selectedBlog, setSelectedBlog] = useState<
    (typeof blogData)[number] | null
  >(null);
  const [loadingBlogById, setLoadingBlogById] = useState(false);

  const hasData = blogData.length > 0;
  const blogIdFromUrl = searchParams.get("id");

  // Fetch blogs list if needed
  useEffect(() => {
    if (!hasData && status === "idle") {
      dispatch(fetchBlogs({ page: currentPage, limit: 10 }));
    }
  }, [dispatch, hasData, status, currentPage]);

  // Handle blog ID from URL
  useEffect(() => {
    const loadBlogById = async () => {
      if (!blogIdFromUrl) {
        setSelectedBlog(null);
        return;
      }

      // First check if blog is already in the loaded data
      const existingBlog = blogData.find((blog) => blog._id === blogIdFromUrl);
      if (existingBlog) {
        setSelectedBlog(existingBlog);
        return;
      }

      // If not found, fetch the specific blog from all possible endpoints
      setLoadingBlogById(true);
      try {
        // Try fetching from the main blogs endpoint first
        let response = await fetch(
          `https://pex-sooty.vercel.app/api/blogs/${blogIdFromUrl}`
        );
        
        if (!response.ok) {
          // If not found, try searching in non-monthly blogs (categories 0, 1, 2)
          const categories = [0, 1, 2];
          for (const category of categories) {
            response = await fetch(
              `https://pex-sooty.vercel.app/api/blogs/non-monthly/${category}`
            );
            if (response.ok) {
              const data = await response.json();
              if (data.success && data.data) {
                const foundBlog = data.data.find(
                  (blog: { _id: string }) => blog._id === blogIdFromUrl
                );
                if (foundBlog) {
                  // Add to Redux store so BlogHeader can access it
                  dispatch(addBlog(foundBlog));
                  setSelectedBlog(foundBlog);
                  return;
                }
              }
            }
          }
          return;
        }

        const data = await response.json();
        if (data.success && data.data) {
          // Add to Redux store so BlogHeader can access it
          dispatch(addBlog(data.data));
          setSelectedBlog(data.data);
        }
      } catch (error) {
        console.error("Error fetching blog by ID:", error);
      } finally {
        setLoadingBlogById(false);
      }
    };

    loadBlogById();
  }, [blogIdFromUrl, blogData, dispatch]);

  return (
    <div className="w-full min-h-screen">
      <BlogHeader blogData={blogData} onBlogSelect={setSelectedBlog} />

      {error && (
        <div className="w-full max-w-4xl mx-auto text-center text-red-600 py-6">
          {error}
        </div>
      )}

      {loadingBlogById ? (
        <div className="w-full max-w-4xl mx-auto text-center text-teal-700 py-20">
          Loading blog...
        </div>
      ) : selectedBlog ? (
        <BlogContentSectionDynamic
          key={selectedBlog._id}
          blogData={selectedBlog}
        />
      ) : (
        <BlogContentSection />
      )}

      <BlogCaseStudiesShowcase />
      <SocialsSection />
      <Footer />
    </div>
  );
}
