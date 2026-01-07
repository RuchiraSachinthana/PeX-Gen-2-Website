"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  "/partner (1).png",
  "/partner (2).png",
  "/partner (3).png",
  "/partner (4).png",
  "/partner (5).png",
  "/partner (6).png",
];

const PexGenPartners = () => {
  return (
    <div className="w-full py-10 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        {/* Optional: Add a title if needed, or keep it clean as requested */}
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">


        {/* Scrolling Track */}
        <motion.div
          className="flex gap-8 md:gap-16 lg:gap-24 items-center flex-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Adjust speed here (higher = slower)
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {/* Render partners twice for seamless loop */}
          {[...partners, ...partners].map((src, index) => (
            <div
              key={index}
              className="relative w-[100px] md:w-[130px] lg:w-[150px] flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={150}
                height={80}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PexGenPartners;
