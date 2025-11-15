"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";
import HeroHeader from "./HeroHeader";

const BlogHeader = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Image - Fixed and Responsive */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Asset 8.webp')",
          backgroundAttachment: "scroll",
        }}
      />

      {/* Fixed Hero Header at the top */}
      <div className="absolute top-20 left-0 right-0 z-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroHeader />
        </div>
      </div>

      {/* Main Content Container */}
      <motion.div
        className="w-full max-w-6xl mx-auto z-10  mt-25"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex gap-6">
          {/* Left Side - Main Featured Article */}
          <motion.div className="w-[45%]" variants={fadeInUp}>
            <div className="">
              {/* Featured Image */}
              <div className="w-full">
                <Image
                  src="/Asset 9.webp"
                  alt="Featured Article"
                  width={600}
                  height={400}
                  className="w-full h-full"
                />
              </div>

              {/* Article Content */}
              <div className="mt-4">
                <h2 className="text-3xl  text-teal-700 mb-4">The ERP Trap:</h2>
                <h3 className="text-3xl  text-teal-700 leading-relaxed">
                  <p>Why Digital Transformation Fails</p>{" "}
                  <p>Without Business Process</p> <p>Re-engineering</p>
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Article List */}
          <motion.div className="w-1/2" variants={fadeInUp}>
            <div className="">
              {/* Article Item 1 */}
              <motion.div className="flex gap-4 mb-4" variants={fadeInRight}>
                <div className="w-60">
                  <Image
                    src="/Asset 64.webp"
                    alt="Article 1"
                    width={240}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex items-center gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-teal-700 mb-2">
                      BE AUDIT-READY AT <br /> ANY MOMENT:
                    </h4>
                    <p className="text-teal-700 mb-2">
                      How PEx Simplifies Internal Audits
                    </p>
                    <p className="text-sm text-gray-700">
                      5th November 2025 | Author
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Article Item 2 */}
              <motion.div className="flex gap-4 mb-4" variants={fadeInRight}>
                <div className="w-60">
                  <Image
                    src="/Asset 65.webp"
                    alt="Article 2"
                    width={240}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex items-center gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-teal-700 mb-2">
                      SANJU&apos;S STORY
                    </h4>
                    <p className="text-sm text-gray-900 mt-8">
                      5th November 2025 | Author
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Article Item 3 */}
              <motion.div className="flex gap-4 mb-4" variants={fadeInRight}>
                <div className="w-60">
                  <Image
                    src="/Asset 66.webp"
                    alt="Article 3"
                    width={240}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex items-center gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-teal-700 mb-2">
                      BE AUDIT-READY AT <br /> ANY MOMENT:
                    </h4>
                    <p className="text-teal-700  mb-2">
                      How PEx Simplifies Internal Audits
                    </p>
                    <p className="text-sm text-gray-700">
                      5th November 2025 | Author
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogHeader;
