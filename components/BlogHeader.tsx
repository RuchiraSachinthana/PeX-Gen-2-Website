
"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import HeroHeader from "./HeroHeader";

interface Blog {
  _id: string;
  title: string;
  hero_img: string;
  sub_title_1: string;
  paragraph_1: string;
  sub_title_2?: string;
  paragraph_2?: string;
  img_url_2?: string;
  created_at: string;
}

interface BlogHeaderProps {
  blogData: Blog[];
  onBlogSelect?: (blog: Blog | null) => void;
}

const BlogHeader = ({ blogData = [], onBlogSelect }: BlogHeaderProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // State to track the sliding window offset for right panel
  const [slideIndex, setSlideIndex] = useState(0);

  // Get blog ID from URL
  const blogIdFromUrl = searchParams.get("id");

  // Update slideIndex based on URL blog ID and blogData
  useEffect(() => {
    const updateSlideIndex = () => {
      if (blogIdFromUrl && blogData && blogData.length > 0) {
        const blogIndex = blogData.findIndex((blog) => blog._id === blogIdFromUrl);
        if (blogIndex !== -1) {
          // slideIndex = blogIndex + 1 (because slideIndex 1 shows blog[0])
          setSlideIndex(blogIndex + 1);
          return;
        }
      }
      // If no blog ID in URL or blog not found, reset to initial state (show hardcoded blog)
      if (!blogIdFromUrl) {
        setSlideIndex(0);
      }
    };

    // Use setTimeout to avoid synchronous setState in effect
    setTimeout(updateSlideIndex, 0);
  }, [blogIdFromUrl, blogData]);

  const formatDateShort = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    const ordinal = (n: number) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };
    return `${ordinal(day)} ${month} ${year}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const splitTitle = (title: string) => {
    const words = title.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      if ((currentLine + word).length <= 30) {
        currentLine += (currentLine ? " " : "") + word;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine) lines.push(currentLine);
    return lines;
  };

  // Get featured blog for left panel
  // Initially shows hardcoded blog, then updates to show the selected blog from right panel
  // Flow: Initial (0) -> 1st blog (1) -> 2nd blog (2) -> 3rd blog (3), etc.
  const getFeaturedBlog = () => {
    // If slideIndex is 0, show hardcoded blog (initial state)
    if (slideIndex === 0) {
      return null; // null means show hardcoded
    }
    // Otherwise, show the blog at slideIndex - 1
    // slideIndex 1 -> blog[0] (1st blog)
    // slideIndex 2 -> blog[1] (2nd blog)
    // slideIndex 3 -> blog[2] (3rd blog)
    if (blogData && blogData.length > 0 && slideIndex > 0) {
      const blogIndex = slideIndex - 1;
      if (blogIndex >= 0 && blogIndex < blogData.length) {
        return blogData[blogIndex];
      }
    }
    return null;
  };

  const featuredBlog = getFeaturedBlog();

  // Get blogs for right panel using sliding window pattern
  // Pattern: 123, 234, 345, 456, etc.
  // slideIndex 0: Right = blogs[0-2] (Left = hardcoded)
  // slideIndex 1: Right = blogs[1-3] (Left = blogs[0])
  // slideIndex 2: Right = blogs[2-3] (Left = blogs[1]) if only 4 blogs
  // slideIndex 3: Right = blogs[3] (Left = blogs[2]) if only 4 blogs
  // slideIndex 4: Right = blogs[3] (Left = blogs[3]) if only 4 blogs
  const getRightPanelBlogs = () => {
    if (!blogData || blogData.length === 0) return [];
    
    // Calculate the start index for the right panel
    let startIndex = slideIndex;
    
    // If slideIndex is at or beyond the last blog, show the last 3 blogs (or fewer)
    const maxStartIndex = Math.max(0, blogData.length - 3);
    if (startIndex > maxStartIndex) {
      startIndex = maxStartIndex;
    }
    
    // Ensure we don't go beyond the array length
    const endIndex = Math.min(startIndex + 3, blogData.length);
    return blogData.slice(startIndex, endIndex);
  };

  const rightPanelBlogs = getRightPanelBlogs();
  
  // Can slide next if there are more blogs to navigate through
  // Allow navigation through all blogs (0 to blogData.length)
  // slideIndex 0 = hardcoded, 1 = blog[0], 2 = blog[1], ..., blogData.length = blog[blogData.length - 1]
  const canSlideNext = blogData && blogData.length > 0 && slideIndex < blogData.length;
  const canSlidePrev = slideIndex > 0;

  const handleNext = () => {
    if (canSlideNext) {
      setSlideIndex((prev) => {
        const newIndex = prev + 1;
        // Notify parent about selected blog
        // newIndex 0 -> null (hardcoded)
        // newIndex 1 -> blog[0] (1st blog)
        // newIndex 2 -> blog[1] (2nd blog)
        return newIndex;
      });
    }
  };

  const handlePrev = () => {
    if (canSlidePrev) {
      setSlideIndex((prev) => {
        const newIndex = prev - 1;
        // Notify parent about selected blog
        // newIndex 0 -> null (hardcoded)
        // newIndex 1 -> blog[0] (1st blog)
        // newIndex 2 -> blog[1] (2nd blog)
        return newIndex;
      });
    }
  };

  // Handle blog item click - navigate to blog page with ID
  const handleBlogClick = (blog: Blog) => {
    // Navigate to blog page with the blog ID as query parameter
    router.push(`/blog?id=${blog._id}`);
  };

  // Notify parent when slideIndex changes (including initial state)
  useEffect(() => {
    if (onBlogSelect && blogData && blogData.length > 0) {
      if (slideIndex === 0) {
        onBlogSelect(null); // Initial state - hardcoded blog
      } else if (slideIndex > 0) {
        const blogIndex = slideIndex - 1;
        if (blogIndex >= 0 && blogIndex < blogData.length) {
          onBlogSelect(blogData[blogIndex]);
        }
      }
    }
  }, [slideIndex, blogData, onBlogSelect]);

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

  return (
    <div className="relative w-full min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Image - Fixed and Responsive */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Asset 8.jpg')",
          // backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20210825/pngtree-food-safety-promotion-and-quality-assurance-panel-background-material-image_743031.jpg')",
          backgroundAttachment: "scroll",
        }}
      />

      {/* Fixed Hero Header at the top */}
      <div className="absolute top-20 left-0 right-0 z-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroHeader />
        </div>
      </div>

      {/* Desktop Version - Responsive for Tablets and Desktops */}
      <motion.div
        className="hidden md:block w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto z-10 mt-25 px-4 md:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex gap-4 md:gap-6 lg:gap-8">
          {/* Left Side - Main Featured Article */}
          <motion.div className="w-1/2">
            <div className={featuredBlog ? "cursor-pointer" : ""} onClick={featuredBlog ? () => handleBlogClick(featuredBlog) : undefined}>
              {featuredBlog ? (
                <>
                  {/* Featured Image from API */}
                  <div className="w-full">
                    <Image
                      src={featuredBlog.hero_img}
                      alt={featuredBlog.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-lg transition-opacity hover:opacity-90"
                    />
                  </div>

                  {/* Article Content from API */}
                  <div className="mt-3 md:mt-4">
                    {splitTitle(featuredBlog.title).map((line, index) => (
                      <h2
                        key={index}
                        className="text-xl md:text-2xl lg:text-3xl text-teal-700 leading-relaxed hover:text-teal-600 transition-colors"
                      >
                        {line}
                      </h2>
                    ))}
                    <p className="text-xs md:text-sm text-gray-700 mt-2">
                      {formatDate(featuredBlog.created_at)}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Hardcoded Featured Image (Initial State) */}
                  <div className="w-full">
                    <Image
                      src="/Asset 9.webp"
                      alt="Featured Article"
                      width={600}
                      height={400}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Hardcoded Article Content (Initial State) */}
                  <div className="mt-3 md:mt-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-teal-700 mb-3 md:mb-4">The ERP Trap:</h2>
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-teal-700 leading-relaxed">
                      <p>Why Digital Transformation Fails</p>{" "}
                      <p>Without Business Process</p> <p>Re-engineering</p>
                    </h3>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Right Side - Article List */}
          <motion.div className="w-1/2">
            <div className="space-y-3 md:space-y-4">
              {rightPanelBlogs.length > 0 ? (
                rightPanelBlogs.map((blog, index) => {
                  return (
                    <motion.div
                      key={blog._id}
                      onClick={() => handleBlogClick(blog)}
                      className="flex gap-2 md:gap-3 lg:gap-4 rounded-lg transition-all cursor-pointer hover:bg-teal-50"
                      variants={fadeInRight}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-40 md:w-48 lg:w-60 flex-shrink-0">
                        <Image
                          src={blog.hero_img}
                          alt={blog.title}
                          width={240}
                          height={160}
                          className="w-full h-full object-cover rounded transition-all"
                        />
                      </div>
                      <div className="flex-1 flex items-center">
                        <div>
                          <h4
                            className={`text-sm md:text-base lg:text-lg font-bold mb-1 md:mb-2 leading-tight`}
                          >
                            <span className="hidden lg:inline">
                              {blog.title.length > 50
                                ? `${blog.title.substring(0, 50)}...`
                                : blog.title}
                            </span>
                            <span className="lg:hidden">
                              {blog.title.length > 40
                                ? `${blog.title.substring(0, 40)}...`
                                : blog.title}
                            </span>
                          </h4>
                          <p
                            className={`text-xs md:text-sm`}
                          >
                            {formatDateShort(blog.created_at)} 
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-gray-500 text-xs md:text-sm items-center justify-center">
                  <div className="flex items-center justify-center">
                    <div className="text-gray-500 text-xs md:text-sm mt-4">
                      No recent blogs available
                    </div>
                  </div>
                </div>
              )}
            </div>

            {rightPanelBlogs.length > 0 ? (
                <div className="flex items-center justify-center gap-3 md:gap-4 mt-4 md:mt-6">
                <button
                  onClick={handlePrev}
                  disabled={!canSlidePrev}
                  className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm transition-colors ${
                    canSlidePrev
                      ? "bg-teal-700 text-white hover:bg-teal-600 cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden md:inline">Previous</span>
                  <span className="md:hidden">Prev</span>
                </button>
                <button
                  onClick={handleNext}
                  disabled={!canSlideNext}
                  className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm transition-colors ${
                    canSlideNext
                      ? "bg-teal-700 text-white hover:bg-teal-600 cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Next
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            ) : null }

            

         
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Version */}
      <motion.div
        className="md:hidden w-full max-w-[370px] mx-auto z-10 mt-32 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          {/* Left Side - Main Featured Article (Row 1) */}
          <motion.div variants={fadeInUp}>
            <div className={featuredBlog ? "cursor-pointer" : ""} onClick={featuredBlog ? () => handleBlogClick(featuredBlog) : undefined}>
              {featuredBlog ? (
                <>
                  <div className="w-full">
                    <Image
                      src={featuredBlog.hero_img}
                      alt={featuredBlog.title}
                      width={370}
                      height={250}
                      className="w-full h-auto object-cover rounded-lg transition-opacity hover:opacity-90"
                    />
                  </div>
                  <div className="mt-3">
                    <h2 className="text-xl text-teal-700 mb-2 font-bold leading-tight hover:text-teal-600 transition-colors">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-xs text-gray-700">
                      {formatDate(featuredBlog.created_at)}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full">
                    <Image
                      src="/Asset 9.webp"
                      alt="Featured Article"
                      width={370}
                      height={250}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="mt-3">
                    <h2 className="text-xl text-teal-700 mb-2 font-bold">
                      The ERP Trap:
                    </h2>
                    <h3 className="text-lg text-teal-700 leading-relaxed">
                      Why Digital Transformation Fails Without Business Process
                      Re-engineering
                    </h3>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Right Side - Article List (Small Tiles - Horizontal Scroll for Mobile) */}
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {rightPanelBlogs.length > 0 ? (
              rightPanelBlogs.map((blog, index) => {
                return (
                  <motion.div
                    key={blog._id}
                    onClick={() => handleBlogClick(blog)}
                    className="flex-shrink-0 w-[160px] flex flex-col gap-1.5 p-2 rounded-lg transition-all bg-white/90 backdrop-blur-sm shadow-sm cursor-pointer hover:bg-teal-50"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-full h-24 flex-shrink-0">
                      <Image
                        src={blog.hero_img}
                        alt={blog.title}
                        width={160}
                        height={96}
                        className="w-full h-full object-cover rounded transition-all"
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`text-xs font-bold mb-0.5 leading-tight text-teal-700 line-clamp-2`}
                      >
                        {blog.title.length > 40
                          ? `${blog.title.substring(0, 40)}...`
                          : blog.title}
                      </h4>
                      <p
                        className={`text-[10px] text-gray-600`}
                      >
                        {formatDateShort(blog.created_at)}
                      </p>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-gray-500 text-xs">
                <div className="flex items-center justify-center">
                  <div className="text-gray-500 text-sm mt-4">
                    No recent blogs available
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Pagination Controls - Mobile - Sliding Window */}
      
          {rightPanelBlogs.length > 0 ? (
            <>
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={handlePrev}
              disabled={!canSlidePrev}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors ${
                canSlidePrev
                  ? "bg-teal-700 text-white hover:bg-teal-600 cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>
       
            <button
              onClick={handleNext}
              disabled={!canSlideNext}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors ${
                canSlideNext
                  ? "bg-teal-700 text-white hover:bg-teal-600 cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
            </div>
          </>
          ) : null }

          
        </div>
      </motion.div>
    </div>
  );
};

export default BlogHeader;

