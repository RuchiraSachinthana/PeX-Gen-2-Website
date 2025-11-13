"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PexGenVideoSection() {
  return (
    <section className="flex flex-col  bg-[#0e685b] items-center justify-center py-10 px-4 text-center">
      <div className="max-w-6xl text-center justify-center flex mx-auto relative">
        <motion.div
          className="relative w-full rounded-3xl shadow-2xl p-3 z-10 bg-[linear-gradient(to_bottom_right,#0e685b,#10b981,#0e685b)]"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-120 h-90">
            <iframe
              className=" w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/9RjT0j7LtrY?si=run9EXq-vCZfCc6a"
              title="PEx Gen2 Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
        {/* Green Dragon positioned absolutely to the right */}
        <motion.div
          className="absolute right-[-340] bottom-[-90] z-20"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            width={350}
            height={0}
            src="/Asset 63.png"
            alt="Green Dragon"
          />
        </motion.div>
      </div>
    </section>
  );
}
