"use client";

import BlogHeader from "@/components/BlogHeader";
import CaseStudiesShowcase from "@/components/CaseStudiesShowcase";
import Footer from "@/components/Footer";
import SocialsSection from "@/components/SocialSection";
import { useEffect, useState } from "react";
import BlogContentSection from "./../../components/BlogContentSection";
import BlogMessageSection from "./../../components/BlogMessageSection";

interface Blog {
  _id: string;
  title: string;
  hero_img: string;
  sub_title_1: string;
  paragraph_1: string;
  created_at: string;
}

interface BlogResponse {
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
  const [blogData, setBlogData] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://pex-sooty.vercel.app/api/blogs?page=1&limit=1"
        );
        const data: BlogResponse = await response.json();
        if (data.success && data.data.length > 0) {
          setBlogData(data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-teal-700 text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <BlogHeader />
      {/* <BlogMessageSection  /> */}
      <BlogContentSection blogData={blogData} />
      <CaseStudiesShowcase />
      <SocialsSection />
      <Footer />
    </div>
  );
}
