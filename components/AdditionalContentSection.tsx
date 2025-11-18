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
    <div className="flex w-full justify-center bg-yellow-400 md:py-10 gap-3 sm:gap-4">
      <div className="max-w-6xl w-full px-6">
        <motion.div
          className="md:text-left text-center text-black text-sm md:text-2xl py-10 leading-relaxed"
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
  );
}
