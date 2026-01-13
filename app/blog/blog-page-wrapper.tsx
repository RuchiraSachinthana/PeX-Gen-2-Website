"use client";

import { useEffect, useState, useRef } from "react";
import BlogPageClient from "./blog-client";
import BlogSkeleton from "@/components/BlogSkeleton";

export default function BlogPageWrapper() {
  const [showContent, setShowContent] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

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
      // Use requestAnimationFrame to defer state update
      requestAnimationFrame(() => {
        setIsFirstLoad(false);
        setShowContent(true);
      });
    }
  }, []);

  if (!showContent && isFirstLoad) {
    return <BlogSkeleton />;
  }

  return <BlogPageClient />;
}

