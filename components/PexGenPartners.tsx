"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PexGenPartners = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full my-8 relative pb-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl justify-center items-center align-middle mx-auto">
        <div className="flex gap-2 justify-between">
          <motion.div
            className="relative"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <Image
              width={150}
              height={0}
              src="/partner (1).png"
              alt="PEx Software Video Thumbnail"
              className="grayscale"
            />
          </motion.div>
          <motion.div
            className="relative flex items-end align-bottom"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <Image
              width={150}
              height={0}
              src="/partner (2).png"
              alt="PEx Software Video Thumbnail"
              className="grayscale"
            />
          </motion.div>
          <motion.div
            className="relative flex items-end align-bottom"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <Image
              width={150}
              height={0}
              src="/partner (3).png"
              alt="PEx Software Video Thumbnail"
              className="grayscale"
            />
          </motion.div>
          <motion.div
            className="relative flex items-end align-bottom"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <Image
              width={150}
              height={0}
              src="/partner (4).png"
              alt="PEx Software Video Thumbnail"
              className="grayscale"
            />
          </motion.div>
          <motion.div
            className="relative flex items-end align-bottom"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <Image
              width={150}
              height={0}
              src="/partner (5).png"
              alt="PEx Software Video Thumbnail"
              className="grayscale"
            />
          </motion.div>
          <motion.div
            className="relative flex items-end align-bottom"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <Image
              width={150}
              height={0}
              src="/partner (6).png"
              alt="PEx Software Video Thumbnail"
              className="grayscale"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PexGenPartners;
