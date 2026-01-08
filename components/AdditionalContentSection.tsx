"use client";

import { motion, Variants } from "framer-motion";

export default function AdditionalContentSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      {/* ========================================== */}
      {/* Desktop Version - UNCHANGED */}
      {/* ========================================== */}
      <div className="hidden lg:flex w-full justify-center bg-yellow-400 py-10 gap-4">
        <div className="max-w-6xl w-full px-6">
          <motion.div
            className="text-left text-black text-2xl py-10 leading-relaxed"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={itemVariants}>
              PEx Software™ for Food Safety transforms HACCP & ISO 22000
              compliance into a
            </motion.p>
            <motion.p variants={itemVariants}>
              seamless, AI-powered system — reducing paper documentation by 90%,
              automating
            </motion.p>
            <motion.p variants={itemVariants}>
              monitoring, and giving hotel & restaurant owners peace of mind that
              every meal{" "}
            </motion.p>
            <motion.p variants={itemVariants}>
              served is safe, consistent, and brand-protecting.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ========================================== */}
      {/* Tablet Version - Intermediate sizing */}
      {/* ========================================== */}
      <div className="hidden md:flex lg:hidden w-full justify-center bg-yellow-400 py-8 gap-3">
        <div className="max-w-4xl w-full px-6">
          <motion.div
            className="text-left text-black text-xl py-8 leading-relaxed"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={itemVariants}>
              PEx Software™ for Food Safety transforms HACCP & ISO 22000
              compliance into a
            </motion.p>
            <motion.p variants={itemVariants}>
              seamless, AI-powered system — reducing paper documentation by 90%,
              automating{" "}
            </motion.p>
            <motion.p variants={itemVariants}>
              monitoring, and giving hotel & restaurant owners peace of mind that
              every meal{" "}
            </motion.p>
            <motion.p variants={itemVariants}>
              served is safe, consistent, and brand-protecting.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ========================================== */}
      {/* Mobile Version */}
      {/* ========================================== */}
      <div className="flex md:hidden w-full justify-center bg-yellow-400 py-6 gap-3">
        <div className="max-w-[370px] w-full px-4">
          <motion.div
            className="text-center text-black text-sm py-6 leading-relaxed"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={itemVariants}>
              PEx Software™ for Food Safety transforms HACCP & ISO 22000
              compliance into a
            </motion.p>
            <motion.p variants={itemVariants}>
              seamless, AI-powered system — reducing paper documentation by 90%,
              automating{" "}
            </motion.p>
            <motion.p variants={itemVariants}>
              monitoring, and giving hotel & restaurant owners peace of mind that
              every meal{" "}
            </motion.p>
            <motion.p variants={itemVariants}>
              served is safe, consistent, and brand-protecting.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
