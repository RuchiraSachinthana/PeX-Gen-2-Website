"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "../context/LanguageProvider";
import HeroHeader from "./HeroHeader";

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

const BlogHeader = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    total_pages: 1,
    has_next: false,
    has_prev: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const fetchBlogs = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://pex-sooty.vercel.app/api/blogs?page=${page}&limit=4`
      );
      const data: BlogResponse = await response.json();
      if (data.success) {
        setBlogs(data.data);
        setPagination({
          total_pages: data.pagination.total_pages,
          has_next: data.pagination.has_next,
          has_prev: data.pagination.has_prev,
        });
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (pagination.has_next) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (pagination.has_prev) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  if (loading) {
    return (
      <div className="relative w-full min-h-screen flex items-center justify-center py-20">
        <div className="text-teal-700 text-2xl">Loading blogs...</div>
      </div>
    );
  }

  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1, 4);

  return (
    <div className="relative w-full min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Image - Fixed and Responsive */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Asset 8.webp')",
          backgroundAttachment: "scroll",
        }}
      />

      {/* Fixed Hero Header at the top */}
      <div className="absolute top-20 left-0 right-0 z-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroHeader />
        </div>
      </div>

      {/* Desktop Version */}
      <motion.div
        className="hidden md:block w-full max-w-6xl mx-auto z-10 mt-25"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex justify-between">
          {/* Left Side - Main Featured Article */}
          {featuredBlog && (
            <motion.div className="w-full max-w-md">
              <div className="">
                {/* Featured Image */}
                <div className="w-full">
                  <img
                    src={featuredBlog.hero_img}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Article Content */}
                <div className="mt-4">
                  <h2 className="text-3xl text-teal-700 leading-relaxed">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-sm text-gray-700 mt-2">
                    {formatDate(featuredBlog.created_at)}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Right Side - Article List */}
          <motion.div className="w-full max-w-md">
            <div className="space-y-4">
              {otherBlogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  className="flex gap-4"
                  variants={fadeInRight}
                >
                  <div className="w-60">
                    <img
                      src={blog.hero_img}
                      alt={blog.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-teal-700 mb-2">
                        {blog.title}
                      </h4>
                      <p className="text-sm text-gray-700">
                        {formatDate(blog.created_at)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrevPage}
            disabled={!pagination.has_prev}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              pagination.has_prev
                ? "bg-teal-700 text-white hover:bg-teal-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <span className="text-teal-700 ">
            Page {currentPage} of {pagination.total_pages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={!pagination.has_next}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              pagination.has_next
                ? "bg-teal-700 text-white hover:bg-teal-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Mobile Version */}
      <motion.div
        className="md:hidden w-full max-w-[370px] mx-auto z-10 mt-32 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="space-y-6">
          {/* Featured Article (Row 1) */}
          {featuredBlog && (
            <motion.div variants={fadeInUp}>
              <div className="w-full">
                <img
                  src={featuredBlog.hero_img}
                  alt={featuredBlog.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="mt-3">
                <h2 className="text-xl text-teal-700 mb-2 font-bold">
                  {featuredBlog.title}
                </h2>
                <p className="text-xs text-gray-700">
                  {formatDate(featuredBlog.created_at)}
                </p>
              </div>
            </motion.div>
          )}

          {/* Other Articles (Rows 2-4) */}
          <div className="space-y-4">
            {otherBlogs.map((blog) => (
              <motion.div
                key={blog._id}
                className="flex gap-3"
                variants={fadeInUp}
              >
                <div className="w-32 shrink-0">
                  <img
                    src={blog.hero_img}
                    alt={blog.title}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-teal-700 mb-1">
                    {blog.title}
                  </h4>
                  <p className="text-xs text-gray-700">
                    {formatDate(blog.created_at)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={handlePrevPage}
              disabled={!pagination.has_prev}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors ${
                pagination.has_prev
                  ? "bg-teal-700 text-white hover:bg-teal-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>
            <span className="text-teal-700 text-sm font-semibold">
              {currentPage}/{pagination.total_pages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={!pagination.has_next}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors ${
                pagination.has_next
                  ? "bg-teal-700 text-white hover:bg-teal-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogHeader;
