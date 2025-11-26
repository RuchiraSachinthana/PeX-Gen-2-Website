"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PexGenExploreSection() {
  return (
    <section className="w-full py-10 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Left Block: Quality Management */}
          <motion.div
            className="flex-1 bg-[#0B5B52] rounded-[20px] p-5 md:p-12 flex flex-row items-end justify-between relative group cursor-pointer "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-start md:items-end z-10 flex-1 text-left md:text-right">
              <motion.p
                className="text-yellow-400  tracking-wider mb-2 uppercase text-xs md:text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                EXPLORE
              </motion.p>
              <motion.h3
                className="text-white text-xs md:text-base  uppercase mb-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                PEX SOFTWARE&trade; FOR
              </motion.h3>
              <motion.h2
                className="text-white text-xl md:text-3xl font-bold uppercase leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                QUALITY MANAGEMENT
              </motion.h2>
            </div>
            
            <Link href="/pex-quality">
              <motion.div 
                className="bg-yellow-400 p-3 md:p-4 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ml-4 mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="text-[#0B5B52] w-6 h-6 md:w-8 md:h-8 transform -rotate-45" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Right Block: Food Safety */}
          <motion.div
            className="flex-1 bg-yellow-400 rounded-[20px] p-5 md:p-12 flex flex-row items-end  justify-between gap-6  md:justify-center   relative group cursor-pointer "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <div className="flex flex-col  items-start z-10 ">
              <div className="flex flex-col items-start  text-left">
                <motion.p
                  className="text-[#0B5B52]  tracking-wider mb-2 uppercase text-xs md:text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  EXPLORE
                </motion.p>
                <motion.h3
                  className="text-black text-xs md:text-base  uppercase mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  PEX SOFTWARE&trade; FOR
                </motion.h3>
                <motion.h2
                  className="text-black text-xl md:text-3xl font-bold uppercase leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  FOOD SAFETY
                </motion.h2>
              </div>
            </div>

            <Link href="/pex-food">
              <motion.div 
                className="bg-[#0B5B52] p-3 md:p-4 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="text-yellow-400 w-6 h-6 md:w-8 md:h-8 transform -rotate-45" />
              </motion.div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
