"use client"; // Added for Framer Motion

import { motion } from "framer-motion"; // Import motion

import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function FoodCaseStudiesShowcase() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: 100,
          behavior: "smooth",
        });
      }
    };
  
  return (
   <>
      {/* Desktop Version - Hidden on mobile */}
      <div
        style={{
          backgroundImage: 'url("/Asset 23.webp")',
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
                className="relative"
              >
                <Image
                  width={440}
                  height={0}
                  src="/Asset 81.png"
                  alt="Background Decoration"
                  className="border-4 border-teal-700 rounded-4xl opacity-80"
                />
                
                {/* Green gradient overlay from bottom to half */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-600/80 to-transparent rounded-b-4xl pointer-events-none" />
                        
                <div className="absolute bottom-3 left-10">
                  
                  <p className="text-[10px] mb-5 ml-10 text-white px-2 py-1 rounded-full whitespace-nowrap">
                    THIS MONTH&apos;S SUCCESS STORY
                  </p>
                </div>
                
                <div className="absolute top-5 left-5 max-w-[170px] bg-teal-700 p-4 rounded-2xl">
                  
                  <p className="text-xl text-white">
                    First time in her whole career she felt relieved from work stress...
                  </p>
                  <div className="mt-5 text-white">
                    <p className="text-md">Sanju</p>
                    <p className="text-[8px] text-white">
                    quality and compliance officer 
                  </p></div>
                  
                </div>
                
                {/* Yellow arrow button at bottom right */}
                <motion.button
                  className="absolute bottom-3 right-3 bg-yellow-400 p-3 rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/blog")}
                >
                  <ArrowRight className="w-7 h-7 text-black -rotate-45" />
                </motion.button>
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
                  src="/Asset 73.svg"
                  alt="Background Decoration"
                />
                <div className="absolute top-20 left-8">
                  <div className="mb-16 ml-7 text-left text-3xl text-white">
                    <p>Can a small</p>
                    <p>company get</p>
                    <p>ISO 9001</p>
                    <p>certification?</p>
                  </div>
                  <div className="flex flex-row justify-between align-middle items-center gap-4 ">
                    <p className="text-sm text-yellow-400">CASE STUDY</p>
                    <motion.button
                      className="bg-yellow-400 text-black p-2 px-4 text-sm rounded-full cursor-pointer transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => router.push("/blog")}
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
                  src="/Asset 72.svg"
                  alt="Background Decoration"
                />
                <div className="mb-10 absolute top-7 left-12 text-left text-2xl text-white">
                  <p>How PEx solution</p>
                  <p>saved 1.6 million</p>
                  <p>in the first quarter</p>
                </div>
                <div className="flex absolute top-35 left-28 flex-row justify-between items-center gap-4">
                  <p className="text-sm text-yellow-400">CASE STUDY</p>
                  <motion.button
                    className="bg-yellow-400 text-black p-2 px-4 text-sm rounded-full cursor-pointer transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push("/blog")}
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
            backgroundImage: 'url("/Asset 23.webp")',
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
                  src="/Asset 81.png"
                  alt="Success Story"
                  className="w-full h-auto rounded-2xl border-2 border-teal-700 opacity-80"
                />
                
                {/* Green gradient overlay from bottom to half */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-600/80 to-transparent rounded-b-2xl pointer-events-none" />
                
                {/* Testimonial content box */}
                <div className="absolute top-2 left-2 max-w-[80px] bg-teal-700 p-2 rounded-xl">
                  <p className="text-[8px] text-white">
                    First time in her whole career she felt relieved from work stress...
                  </p>
                  <div className="mt-2 text-white">
                    <p className="text-[10px] font-medium">Sanju</p>
                    <p className="text-[4px] text-white">
                      quality and compliance officer 
                    </p>
                  </div>
                </div>

                {/* Small label at bottom */}
                <div className="absolute bottom-2 left-2">
                  <p className="text-[5px] text-white px-2 py-1 rounded-full whitespace-nowrap">
                    THIS MONTH&apos;S SUCCESS STORY
                  </p>
                </div>
                
                {/* Yellow arrow button at bottom right */}
                <motion.button
                  className="absolute bottom-2 right-2 bg-yellow-400 p-2 rounded-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/blog")}
                >
                  <ArrowRight className="w-4 h-4 text-black -rotate-45" />
                </motion.button>
              </div>

              {/* Right side - Title and Images */}
              <div className="flex-1 flex flex-col justify-between h-full pt-2">
                <div className="text-2xl text-teal-700">
                
                    Businesses
                 
                 
                    that have
                 
           
                    grown
               
                
                    with us
                
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
                className="absolute top-[-5px] right-[-5px] bg-yellow-400 p-4  border-6 border-white rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5 text-black -rotate-45" />
              </motion.button>

              <div className="p-4">
                <h3 className="text-white text-2xl mb-2">
                  Can a small company get ISO 9001 certification?
                </h3>

                <div className="flex flex-col gap-3">
                  <p className="text-yellow-400 text-xs  tracking-wider">
                    CASE STUDY
                  </p>
                  <motion.button
                    className="bg-yellow-400 text-black py-3 px-6 rounded-full font-medium text-sm w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push("/blog")}
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
                className="absolute top-[-5px] right-[-5px] bg-yellow-400 p-4  border-6 border-white rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5 text-black -rotate-45" />
              </motion.button>

              <div className="mt-4">
                <h3 className="text-white text-2xl leading-tight pt-2 mb-4">
                  How PEx solution saved 1.6 million in the first quarter
                </h3>

                <div className="flex flex-col gap-3">
                  <p className="text-yellow-400 text-xs ">
                    CASE STUDY
                  </p>
                  <motion.button
                    className="bg-yellow-400 text-black py-3 px-6 rounded-full font-medium text-sm w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push("/blog")}
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
