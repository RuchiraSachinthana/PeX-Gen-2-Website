"use client";

import { useEffect, useState } from "react";
import BlogHeader from "@/components/BlogHeader";
import CaseStudiesShowcase from "@/components/CaseStudiesShowcase";
import Footer from "@/components/Footer";
import SocialsSection from "@/components/SocialSection";
import BlogContentSection from "../../components/BlogContentSection";
import BlogContentSectionDynamic from "../../components/BlogContentSectionDynamic";
import { fetchBlogs } from "@/store/blogSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import BlogCaseStudiesShowcase from "@/components/BlogCaseStudiesShowcase";

export default function BlogPageClient() {
  const dispatch = useAppDispatch();
  const { items: blogData, currentPage, status, error } = useAppSelector(
    (state) => state.blog
  );
  const [selectedBlog, setSelectedBlog] = useState<
    (typeof blogData)[number] | null
  >(null);

  const hasData = blogData.length > 0;

  useEffect(() => {
    if (!hasData && status === "idle") {
      dispatch(fetchBlogs({ page: currentPage, limit: 10 }));
    }
  }, [dispatch, hasData, status, currentPage]);

  return (
    <div className="w-full min-h-screen">
      <BlogHeader blogData={blogData} onBlogSelect={setSelectedBlog} />

      {error && (
        <div className="w-full max-w-4xl mx-auto text-center text-red-600 py-6">
          {error}
        </div>
      )}

      {selectedBlog ? (
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
