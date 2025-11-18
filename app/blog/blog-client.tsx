"use client";

import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import BlogMessageSection from "./../../components/BlogMessageSection";
import BlogContentSection from "./../../components/BlogContentSection";
import SocialsSection from "@/components/SocialSection";
import CaseStudiesShowcase from "@/components/CaseStudiesShowcase";

export default function BlogPageClient() {
  return (
    <div className="w-full min-h-screen">
      <BlogHeader />
      <BlogMessageSection />
      <BlogContentSection />
      <CaseStudiesShowcase />
      <SocialsSection />
      <Footer />
    </div>
  );
}

