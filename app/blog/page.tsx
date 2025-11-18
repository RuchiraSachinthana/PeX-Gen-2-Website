import type { Metadata } from "next";
import BlogPageClient from "./blog-client";

export const metadata: Metadata = {
  title: "Blog - Compliance, Quality Management & Performance Insights",
  description:
    "Expert insights on ISO compliance, quality management, performance improvement, and operational excellence for SMEs. Learn from industry best practices, case studies, and strategic guidance for CEOs and Quality Managers.",
  keywords: [
    "ISO compliance blog",
    "quality management insights",
    "SME best practices",
    "performance improvement",
    "operational excellence",
    "compliance tips",
    "quality management articles",
    "ISO 9001 best practices",
    "quality management case studies",
    "SME growth strategies",
    "compliance strategies",
    "quality improvement",
  ],
  openGraph: {
    title: "Blog - Compliance, Quality Management & Performance Insights",
    description:
      "Expert insights on ISO compliance, quality management, and operational excellence for SMEs.",
    url: "https://pex-solutions.com/blog",
  },
  alternates: {
    canonical: "https://pex-solutions.com/blog",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
