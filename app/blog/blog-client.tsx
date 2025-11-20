"use client";

import BlogHeader from "@/components/BlogHeader";
import CaseStudiesShowcase from "@/components/CaseStudiesShowcase";
import Footer from "@/components/Footer";
import SocialsSection from "@/components/SocialSection";
import { useState, useEffect } from "react";
import BlogContentSection from "./../../components/BlogContentSection";

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
}

export default function BlogPageClient() {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/blogs');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        
        const data = await response.json();
        setBlogData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching blogs:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen">
        <BlogHeader />
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
        <BlogHeader />
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
      <BlogHeader />
      {/* <BlogMessageSection  /> */}

      <div className="flex flex-col gap-8">
        {blogData.length > 0 ? (
          blogData.map((blog) => (
            <BlogContentSection key={blog._id} blogData={blog} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No blogs available at the moment.</p>
          </div>
        )}
      </div>

      <CaseStudiesShowcase />
      <SocialsSection />
      <Footer />
    </div>
  );
}
