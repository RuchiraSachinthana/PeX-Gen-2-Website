"use client";
import { motion } from "framer-motion";

const BlogMessageSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="relative w-full  flex bg-white items-center py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto  ">
        <motion.div
          className="relative border-2 mx-10 border-teal-600 rounded-lg p-8 bg-white shadow-lg lg:mx-50 md:mx-20 sm:mx-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="md:text-xl text-xs md:leading-relaxed text-gray-800"
            variants={textVariants}
          >
            Digital transformation is no longer optional — it&apos;s a strategic
            imperative. Having worked as a CEO, Process Engineer and
            business consultant for nearly 30 years and working with over
            150 organizations across industries, I&apos;ve seen a recurring
            and costly mistake: companies rush into ERP implementations without
            first re-engineering their business processes.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogMessageSection;
