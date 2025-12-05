"use client"; // Added for Framer Motion

import { motion } from "framer-motion"; // Import motion
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";

interface Blog {
  _id: string;
  title: string;
}

interface BlogInfo {
  id: string | null;
  title: string | null;
}

interface BlogApiResponse {
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

export default function CaseStudiesShowcaseQuality() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [blogInfo, setBlogInfo] = useState<[BlogInfo, BlogInfo]>([
    { id: null, title: null },
    { id: null, title: null },
  ]);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchBlogTitles = async () => {
      try {
        const response = await fetch("https://pex-sooty.vercel.app/api/blogs/non-monthly/2");
        const data: BlogApiResponse = await response.json();
        if (data.success && data.data.length > 0) {
          const firstBlog = data.data[0];
          const secondBlog = data.data[1];
          setBlogInfo([
            { id: firstBlog?._id || null, title: firstBlog?.title || null },
            { id: secondBlog?._id || null, title: secondBlog?.title || null },
          ]);
        }
      } catch (error) {
        console.error("Error fetching blog titles:", error);
      }
    };

    fetchBlogTitles();
  }, []);

  return (
    <>
      {/* Desktop Version - Hidden on mobile */}
      <div
        style={{
          backgroundImage: 'url("/Asset 18.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="hidden lg:block w-full py-20 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div>
            <div className="flex flex-row justify-between gap-6 items-end">
              <motion.div
                className="absolute top-0 text-[#0e685b] text-4xl left-110"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>Businesses that have</p>
                <p>grown with us</p>
              </motion.div>
              {/* image grid */}
              <motion.div
                className="absolute right-0 top-30 items-left text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className=" flex flex-row gap-2">
                  <Image
                    width={130}
                    height={0}
                    src="/qs4 (1).webp"
                    alt="Background Decoration"
                  />
                  <Image
                    width={130}
                    height={0}
                    src="/qs4 (2).webp"
                    alt="Background Decoration"
                  />
                  <Image
                    width={130}
                    height={0}
                    src="/qs4 (3).webp"
                    alt="Background Decoration"
                  />
                </div>
              </motion.div>
              {/* left card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <Image
                  width={440}
                  height={0}
                  src="/qs4 (4).webp"
                  alt="Background Decoration"
                />
                {/* transparent image */}
                <div className="absolute top-10 left-10 transparent opacity-20">
                  <Image
                    width={190}
                    height={0}
                    src="/Asset 21.svg"
                    alt="Background Decoration"
                  />
                </div>            
                <div className="absolute bottom-3 left-10">
                  <p className="text-sm ml-10 text-yellow-400 px-2 py-1 rounded-full whitespace-nowrap">
                    THIS MONTH&apos;S SUCCESS STORY
                  </p>
                </div>
                <Image
                  width={60}
                  height={0}
                  src="/Asset 22.svg"
                  alt="Background Decoration"
                  className="absolute top-12 left-40"
                />
                <div className="absolute top-30 left-20 max-w-[150px]">
                  <p className="text-lg text-yellow-400 mb-1">The ERP Trap:</p>
                  <p className="text-sm text-white">
                    Why Digital Transformation Fails without Business Process Re-engineering.
                  </p>
                </div>
              </motion.div>
              {/* center card */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <Image
                  width={340}
                  height={0}
                  src="/Asset 19.svg"
                  alt="Background Decoration"
                />
                <div className="absolute top-20 left-8">
                  <div className="mb-16 ml-7 text-left text-3xl text-white max-w-[200px]">
                    {blogInfo[0].title ? (
                      <p>{blogInfo[0].title.length > 45 ? blogInfo[0].title.slice(0, 45) + "..." : blogInfo[0].title}</p>
                    ) : (
                      <p>A blog post has not been added yet.</p>
                    )}
                  </div>
                  <div className="flex flex-row justify-between align-middle items-center gap-4 ">
                    <p className="text-sm text-yellow-400">CASE STUDY</p>
                    <motion.button
                      className="bg-yellow-400 text-black p-2 px-4 text-sm rounded-full cursor-pointer transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => router.push(blogInfo[0].id ? `/blog?id=${blogInfo[0].id}` : "/blog")}
                    >
                      <div className="flex">
                        Read More &nbsp;
                        <ArrowRight className="w-5 h-5 text-black" />
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              {/* right card */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <Image
                  width={440}
                  height={0}
                  src="/Asset 20.svg"
                  alt="Background Decoration"
                />
                <div className="mb-10 absolute top-7 left-12 text-left text-2xl text-white max-w-[250px]">
                  {blogInfo[1].title ? (
                    <p>{blogInfo[1].title.length > 45 ? blogInfo[1].title.slice(0, 45) + "..." : blogInfo[1].title}</p>
                  ) : (
                    <p>A blog post has not been added yet.</p>
                  )}
                </div>
                <div className="flex absolute top-35 left-28 flex-row justify-between items-center gap-4">
                  <p className="text-sm text-yellow-400">CASE STUDY</p>
                  <motion.button
                    className="bg-yellow-400 text-black p-2 px-4 text-sm rounded-full cursor-pointer transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push(blogInfo[1].id ? `/blog?id=${blogInfo[1].id}` : "/blog")}
                  >
                    <div className="flex">
                      Read More &nbsp;{" "}
                      <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version - Visible only on mobile */}
      <div className="lg:hidden  mx-auto w-full">
        {/* First Card with Background Image */}
        <div
          style={{
            backgroundImage: 'url("/Asset 18.svg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full"
        >
          <motion.div
            className=" mx-auto rounded-3xl  max-w-[370px]  overflow-hidden p-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Main Content - Image and Text side by side */}
            <div className="flex gap-2 items-start mb-4">
              {/* Left side - Image with badges */}
              <div className="relative shrink-0 w-[180px]">
                <Image
                  width={180}
                  height={0}
                  src="/qs4 (4).webp"
                  alt="Success Story"
                  className="w-full h-auto rounded-2xl"
                />
                {/* 90% Badge */}
                <div
                  className="absolute  top-3 left-3 from-[#0e685b] to-[#05423b] rounded-md p-2 py-6 px-3"
                >
                  <p className="text-lg font- text-yellow-400 mb-1">The ERP Trap:</p>
                  <p className="text-[8px] text-white leading-tight max-w-[100px]">
                    Why Digital Transformation Fails without Business Process Re-engineering.
                  </p>
                </div>

                {/* Small label at bottom */}
                <div className="absolute bottom-3 left-3">
                  <p className="text-[8px] text-yellow-400 px-2 py-1 rounded-full whitespace-nowrap">
                    THIS MONTH&apos;S SUCCESS STORY
                  </p>
                </div>
              </div>

              {/* Right side - Title and Images */}
              <div className="flex-1 flex flex-col justify-between h-full pt-2">
                <div className="text-2xl text-teal-700">
                 
                    Businesses that have grown with us
                 
                </div>

                {/* Scrollable Image Grid - Horizontal Row */}
                <div className="relative">
                  <div
                    ref={scrollContainerRef}
                    className="flex gap-2 overflow-x-scroll scrollbar-hide scroll-smooth"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      WebkitOverflowScrolling: "touch",
                    }}
                  >
                    <div className="shrink-0">
                      <Image
                        width={80}
                        height={50}
                        src="/qs4 (1).webp"
                        alt="Client 1"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="shrink-0">
                      <Image
                        width={80}
                        height={50}
                        src="/qs4 (2).webp"
                        alt="Client 2"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="shrink-0">
                      <Image
                        width={80}
                        height={50}
                        src="/qs4 (3).webp"
                        alt="Client 3"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Scroll Right Button - Transparent Overlay */}
                  <motion.button
                    onClick={scrollRight}
                    className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-end pr-1 z-10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className=" ">
                      <ChevronRight className="w-8 h-8 text-teal-700" />
                    </div>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* White Background Section for remaining cards */}
        <div className=" bg-white mx-auto max-w-[380px] mt-5  px-6">
          <div className="max-w-md mx-auto flex flex-col gap-6">
            {/* Second Card - ISO 9001 Card */}
            <motion.div
              className="relative bg-[#0e685b] rounded-3xl p-8 pb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button
                className="absolute top-[-5px] right-[-5px] p-4  border-6 border-white rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5 text-yellow-400 -rotate-45" />
              </motion.button>

              <div className="p-4">
                <h3 className="text-white text-2xl mb-2">
                  {blogInfo[0].title ? (
                    blogInfo[0].title.length > 20 ? blogInfo[0].title.slice(0, 20) + "..." : blogInfo[0].title
                  ) : (
                    <>
                      A blog post has not been added yet.
                    </>
                  )}
                </h3>

                <div className="flex flex-col gap-3">
                  <p className="text-yellow-400 text-xs  tracking-wider">
                    CASE STUDY
                  </p>
                  <motion.button
                    className="bg-yellow-400 text-black py-3 px-6 rounded-full font-medium text-sm w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push(blogInfo[0].id ? `/blog?id=${blogInfo[0].id}` : "/blog")}
                  >
                    Read More
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Third Card - PEx Solution Card */}
            <motion.div
              className="relative bg-[#4a5568] rounded-3xl p-8 pb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                className="absolute top-[-5px] right-[-5px] p-4  border-6 border-white rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5 text-yellow-400 -rotate-45" />
              </motion.button>

              <div className="mt-4">
                <h3 className="text-white text-2xl leading-tight pt-2 mb-4">
                  {blogInfo[1].title || "Blog post is not added yet."}
                </h3>

                <div className="flex flex-col gap-3">
                  <p className="text-yellow-400 text-xs ">
                    CASE STUDY
                  </p>
                  <motion.button
                    className="bg-yellow-400 text-black py-3 px-6 rounded-full font-medium text-sm w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push(blogInfo[1].id ? `/blog?id=${blogInfo[1].id}` : "/blog")}
                  >
                    Read More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
