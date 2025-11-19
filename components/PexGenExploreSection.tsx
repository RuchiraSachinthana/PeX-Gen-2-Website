"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PexGenExploreSection() {
  return (
    <>
      {/* Desktop Version */}
      <div
        className="hidden md:flex w-full px-4 bg-white relative"
        style={{
          backgroundImage: "url('/Asset 56.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main container for the two content blocks */}
          <div className="flex flex-col md:flex-row gap-16 py-10">
            {/* Left Block: Quality Management */}
            <motion.div
              className="relative flex-1  flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative z-10">
                <motion.p
                  className="text-yellow-400 mb-2 text-2xl uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  EXPLORE
                </motion.p>
                <motion.h3
                  className="text-xl md:text-3xl  text-white uppercase mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  PEX SOFTWARE&trade; FOR
                </motion.h3>
                <div className="flex items-center  text-white space-x-4">
                  <motion.h2
                    className="text-4xl font-extrabold uppercase "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    QUALITY MANAGEMENT
                  </motion.h2>
                  <motion.button
                    className="bg-yellow-400 p-3 rounded-2xl flex items-center justify-center transition-transform duration-200 hover:scale-105"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="text-black w-6 h-6 transform -rotate-45" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Block: Food Safety */}
            <motion.div
              className="relative flex flex-col "
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative z-10 ">
                <motion.p
                  className="text-green-900 text-2xl mb-2 font-semibold uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  EXPLORE
                </motion.p>
                <motion.h3
                  className="text-xl md:text-3xl font-bold uppercase "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  PEX SOFTWARE&trade; FOR
                </motion.h3>
                <div className="flex items-center space-x-4">
                  <motion.h2
                    className=" text-4xl font-extrabold uppercase "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    FOOD SAFETY
                  </motion.h2>
                  <motion.button
                    className="bg-green-900 p-3 rounded-2xl flex items-center justify-center transition-transform duration-200 hover:scale-105"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="text-white w-6 h-6 transform -rotate-45" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div
        className="md:hidden w-full px-4 bg-white relative"
        style={{
          backgroundImage: "url('/Asset 56.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[370px] mx-auto">
          {/* Main container for the two content blocks in one row */}
          <div className="flex flex-row gap-16 py-2">
            {/* Left Block: Quality Management */}
            <motion.div
              className="relative flex-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative z-10">
                <motion.p
                  className="text-yellow-400 mb-1 text-xs uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  EXPLORE
                </motion.p>
                <motion.h3
                  className="text-xs text-white uppercase mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  PEX SOFTWARE&trade; FOR
                </motion.h3>
                <div className="flex items-center text-white space-x-1">
                  <motion.h2
                    className="text-sm font-extrabold uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    QUALITY MANAGEMENT
                  </motion.h2>
                  <motion.button
                    className="bg-yellow-400 p-1 rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-105"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="text-black w-3 h-3 transform -rotate-45" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Block: Food Safety */}
            <motion.div
              className="relative flex-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative z-10">
                <motion.p
                  className="text-green-900 text-xs mb-1 font-semibold uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  EXPLORE
                </motion.p>
                <motion.h3
                  className="text-xs font-bold uppercase mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  PEX SOFTWARE&trade; FOR
                </motion.h3>
                <div className="flex items-center space-x-1">
                  <motion.h2
                    className="text-sm font-extrabold uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    FOOD SAFETY
                  </motion.h2>
                  <motion.button
                    className="bg-green-900 p-1 rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-105"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="text-white w-3 h-3 transform -rotate-45" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
