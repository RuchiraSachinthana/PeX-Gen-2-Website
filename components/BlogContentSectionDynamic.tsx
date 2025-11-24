"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Blog {
  _id: string;
  title: string;
  hero_img: string;
  sub_title_1: string;
  paragraph_1: string;
  sub_title_2?: string;
  paragraph_2?: string;
  sub_title_3?: string;
  paragraph_3?: string;
  final_thought?: string;
  about_the_author?: string;
  img_url_2?: string;
  created_at: string;
}

interface BlogContentSectionDynamicProps {
  blogData: Blog | null;
}

const BlogContentSectionDynamic = ({ blogData }: BlogContentSectionDynamicProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="relative w-full bg-white items-center py-10 overflow-hidden px-4 md:px-0">
      <motion.div
        className="w-full max-w-6xl bg-teal-700  rounded-2xl md:rounded-3xl z-10 mx-auto p-4 md:p-8 mb-2 text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* //first page */}

        <h3 className="text-yellow-400 text-base md:text-xl pb-4 md:pb-6">
          {blogData?.sub_title_1 || ""}
        </h3>

        <p className="text-sm md:text-xl pb-2 mb-3 md:mb-4">
          {blogData?.paragraph_1 || ""}
        </p>
     
         <p className="text-sm md:text-xl">
          ERP systems are powerful tools — but only when built on optimized
          processes. Without BPR, organizations end <br /> up automating
          inefficiency.
        </p>
      </motion.div>
      <motion.div
        className="w-full max-w-6xl bg-white border leading-relaxed text-sm md:text-xl mb-2 rounded-2xl md:rounded-3xl z-10 mx-auto p-4 md:p-8 text-border"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-2">{blogData?.sub_title_2}</h2>
        {blogData?.paragraph_2}
      </motion.div>
      {blogData?.img_url_2 && (
        <motion.div
          className="w-full max-w-6xl mx-auto mb-2 rounded-2xl md:rounded-3xl"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={blogData.img_url_2}
            alt="blog_image 2"
            width={1000}
            height={40}
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>
      )}
      <motion.div
        className="w-full max-w-6xl bg-[#d2edb9] leading-relaxed text-sm md:text-xl mb-5 rounded-2xl md:rounded-3xl z-10 mx-auto p-4 md:p-8 text-border"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="uppercase ">{blogData?.sub_title_3 || ""}</p>
        <br /> {blogData?.paragraph_3 || ""}
      </motion.div>
      <motion.div
        className="w-full max-w-6xl bg-white leading-relaxed mt-6 md:mt-8 flex flex-col md:flex-row gap-4 md:justify-between z-10 mx-auto"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-sm md:text-md p-4 md:p-6">
          <p className="uppercase mb-3 md:mb-4 font-bold">Final Thought</p>
          {blogData?.final_thought || ""}
       
        </div>
        <div className="bg-[#d2edb9] p-4 md:p-8 py-8 md:py-16 text-xs rounded-2xl md:rounded-3xl">
          <p className="text-xs md:text-sm mb-2 font-bold">
            {" "}
            About the Author{" "}
          </p>
          {blogData?.about_the_author || ""}
    
        </div>
      </motion.div> 
    </div>
  );
};

export default BlogContentSectionDynamic;
