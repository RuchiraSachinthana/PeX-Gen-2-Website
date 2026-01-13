"use client";

import { useEffect, useState } from "react";
import BlogPageClient from "./blog-client";
import BlogSkeleton from "@/components/BlogSkeleton";

export default function BlogPageWrapper() {
  const [showContent, setShowContent] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if this is the first load by checking sessionStorage
    const hasLoadedBefore = sessionStorage.getItem("blogPageLoaded");
    
    if (!hasLoadedBefore) {
      // First load - show skeleton for 5 seconds
      setIsFirstLoad(true);
      const timer = setTimeout(() => {
        setShowContent(true);
        sessionStorage.setItem("blogPageLoaded", "true");
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      // Not first load - show content immediately
      setIsFirstLoad(false);
      setShowContent(true);
    }
  }, []);

  if (!showContent && isFirstLoad) {
    return <BlogSkeleton />;
  }

  return <BlogPageClient />;
}

