"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="relative w-full flex bg-white items-center py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto  ">
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image width={850} height={50} src="/Asset 67.svg" alt="Client 2" />
          <motion.p
            className="text-xl absolute top-10 left-10 leading-10"
            variants={textVariants}
          >
            Digital transformation is no longer optional — it&apos;s a strategic
            imperative. Having <br /> worked as a CEO, Process Engineer and
            business consultant for nearly 30 years <br /> and working with over
            150 organizations across industries, I’ve seen a recurring <br />{" "}
            and costly mistake: companies rush into ERP implementations without
            first <br /> re-engineering their business processes.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogMessageSection;
