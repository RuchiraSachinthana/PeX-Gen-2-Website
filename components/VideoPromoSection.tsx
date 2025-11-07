"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

export default function VideoPromoSection() {
  const { t } = useTranslation();
  return (
    // Component: Main Section Container - Full width white background with overflow hidden
    <div
      style={{
        backgroundImage: 'url("/Asset 24.webp")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full pt-20 pb-20  relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative   z-10">
        <div className=" flex gap-2 justify-between ">
          {/* left section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-4xl  text-[#0e685b] text-left mb-5"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>Watch video how PEx Software™</p>
              <p>Can automate ISO compliance</p>
              <p> management</p>
            </motion.h2>
            <motion.div
              className="flex relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                width={300}
                height={0}
                src="/Asset 25.svg"
                alt="PEx Software Video Thumbnail"
              />

              <motion.div
                className="text-2xl left-6 top-6 absolute text-yellow-400"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p>Get the</p>
                <p>Latest Updates</p>
              </motion.div>
              <motion.div
                className="flex absolute justify-between gap-2 items-baseline left-7 top-25"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <p className="text-sm text-white">GET NOTIFICATION</p>
                {/* --- ADDED motion --- */}
                <motion.button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-3 text-sm rounded-full cursor-pointer transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex ">
                    <p className="text-[17px]"> Sign Up </p>
                    <ArrowRight className="w-6 h-6 text-black -rotate-45" />
                  </div>
                </motion.button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Image
                  width={300}
                  height={0}
                  src="/Asset 26.svg"
                  alt="PEx Software Video Thumbnail"
                  className="absolute left-80 top-15"
                />
              </motion.div>
              <motion.div
                className="text-2xl left-85 top-25 absolute text-yellow-400"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <p>Request</p>
                <p>Demo</p>
              </motion.div>
              <motion.div
                className="flex absolute w-full gap-3 items-baseline left-85 top-43"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <p className="text-sm text-white">LETS CONNECT</p>
                {/* --- ADDED motion --- */}
                <motion.button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-2 text-sm rounded-full cursor-pointer transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex ">
                    <p className="text-[17px]"> Book now </p>
                    <ArrowRight className="w-6 h-6 text-black -rotate-45" />
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* right section */}
          <motion.div
            className="relative w-3/7 h-90 bg-emerald-400 rounded-3xl p-4 shadow-2xl "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.02 }} // --- ADDED ---
          >
            <iframe
              className=" top-0 left-0 w-full h-full rounded-2xl "
              src={"https://www.youtube.com/embed/Xpk67YzOn5w"}
              title={"PEx Software Productivity Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>{" "}
            {/* Absolute frame around the video */}
            <div
              className="absolute inset-0 rounded-3xl mb-10 pointer-events-none"
              
            ></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
