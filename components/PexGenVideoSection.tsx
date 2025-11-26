"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PexGenVideoSection() {
  return (
    <>
      {/* ========================================== */}
      {/* Desktop & Medium Version */}
      {/* ========================================== */}
      <section className="hidden md:flex flex-col bg-[#0e685b] items-center justify-center py-8 md:py-10 px-4 text-center overflow-x-hidden">
        <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl text-center justify-center flex mx-auto relative w-full">
          <motion.div
            className="relative w-full rounded-3xl shadow-2xl p-2 md:p-3 z-10 bg-[linear-gradient(to_bottom_right,#0e685b,#10b981,#0e685b)]"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative md:w-120 md:h-90">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/9RjT0j7LtrY?si=run9EXq-vCZfCc6a"
                title="PEx Gen2 Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
          {/* Green Dragon positioned absolutely to the right - responsive */}
          <motion.div
            className="absolute right-0 md:right-[-60px] lg:right-[-100px] bottom-[-40px] md:bottom-[-60px] lg:bottom-[-90px] z-20"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              width={350}
              height={0}
              src="/dragon.png"
              alt="Green Dragon"
              className="w-[180px] md:w-[240px] lg:w-[350px] h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* Mobile Version - Optimized for mobile screens */}
      {/* ========================================== */}
      <section className="md:hidden mx-auto flex flex-col bg-[#0e685b] items-center justify-center py-8 px-4 text-center">
        <div className="max-w-[380px]  text-center justify-center flex mx-auto relative">
          <motion.div
            className="relative w-full rounded-3xl shadow-2xl p-2 z-0 bg-[linear-gradient(to_bottom_right,#0e685b,#10b981,#0e685b)]"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/9RjT0j7LtrY?si=run9EXq-vCZfCc6a"
                title="PEx Gen2 Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
          {/* Green Dragon positioned below video on mobile */}
          <motion.div
            className="absolute top-40 left-40 z-0"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              width={200}
              height={0}
              src="/dragon.png"
              alt="Green Dragon"
              className="mx-auto"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
