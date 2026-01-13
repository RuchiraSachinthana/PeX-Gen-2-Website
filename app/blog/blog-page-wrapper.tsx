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
      const timer = setTimeout(() => {
        setShowContent(true);
        setIsFirstLoad(false);
        sessionStorage.setItem("blogPageLoaded", "true");
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      // Not first load - show content immediately
      // Use setTimeout to defer state update and avoid synchronous setState
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        setShowContent(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);

  // Always show BlogPageClient - it handles its own loading state
  // Only show skeleton on first load before timeout
  if (!showContent && isFirstLoad) {
    return <BlogSkeleton />;
  }

  return <BlogPageClient />;
}

