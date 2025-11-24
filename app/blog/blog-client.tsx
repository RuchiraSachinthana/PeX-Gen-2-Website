"use client";

import BlogHeader from "@/components/BlogHeader";
import CaseStudiesShowcase from "@/components/CaseStudiesShowcase";
import Footer from "@/components/Footer";
import SocialsSection from "@/components/SocialSection";
import { useEffect, useState } from "react";
import BlogContentSection from "./../../components/BlogContentSection";
import BlogContentSectionDynamic from "./../../components/BlogContentSectionDynamic";
import BlogMessageSection from "@/components/BlogMessageSection";

interface Blog {
  _id: string;
  title: string;
  hero_img: string;
  sub_title_1: string;
  paragraph_1: string;
  created_at: string;
  sub_title_2?: string;
  paragraph_2?: string;
  img_url_2?: string;
  updated_at?: string;
  __v?: number;
}

interface BlogApiResponse {
  success: boolean;
  data: Blog[];
  pagination: {
    current_page: number;
    total_pages: number;
    total_blogs: number;
    per_page: number;
    has_next: boolean;
    has_prev: boolean;
  };
}

export default function BlogPageClient() {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    total_pages: 1,
    total_blogs: 0,
    per_page: 4,
    has_next: false,
    has_prev: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://pex-sooty.vercel.app/api/blogs?page=${currentPage}&limit=10`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const result: BlogApiResponse = await response.json();

        if (result.success && result.data) {
          setBlogData(result.data);
          setPagination(result.pagination);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching blogs:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen">
        <BlogHeader 
          blogData={[]} 
          pagination={pagination}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onBlogSelect={setSelectedBlog}
        />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blogs...</p>
          </div>
        </div>
        <CaseStudiesShowcase />
        <SocialsSection />
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen">
        <BlogHeader 
          blogData={blogData} 
          pagination={pagination}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onBlogSelect={setSelectedBlog}
        />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error loading blogs: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
        <CaseStudiesShowcase />
        <SocialsSection />
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <BlogHeader 
        blogData={blogData} 
        pagination={pagination}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onBlogSelect={setSelectedBlog}
      />
      {/* <BlogMessageSection /> */}
      
      {/* Show BlogContentSection initially, BlogContentSectionDynamic when blog is selected */}
      {selectedBlog ? (
        <BlogContentSectionDynamic key={selectedBlog._id} blogData={selectedBlog} />
      ) : (
        <BlogContentSection />
      )}
     
      <CaseStudiesShowcase />
      <SocialsSection />
      <Footer />
    </div>
  );
}
