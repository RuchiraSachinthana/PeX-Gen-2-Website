"use client";

import { motion } from "framer-motion";
import { useTranslation } from "../context/LanguageProvider";
import HeroHeader from "./HeroHeader";

const BlogHeader = () => {
  const { t } = useTranslation();

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
      <div className="w-full max-w-6xl mx-auto z-10  mt-25">
        <div className="flex gap-6">
          {/* Left Side - Main Featured Article */}
          <div className="w-1/2">
            <div className="">
              {/* Featured Image */}
              <div className="w-full">
                <img
                  src="/Asset 9.webp"
                  alt="Featured Article"
                  className="w-full h-full "
                />
              </div>
              
              {/* Article Content */}
              <div className="p-8">
                <h2 className="text-3xl  text-teal-700 mb-4">
                  The ERP Trap:
                </h2>
                <h3 className="text-3xl  text-teal-700">
                  Why Digital Transformation Fails
                </h3>
                <h3 className="text-3xl  text-teal-700 ">
                  Without Business Process <br /> Re-engineering
                </h3>
              </div>
            </div>
          </div>

          {/* Right Side - Article List */}
          <div className="w-1/2">
            <div className="">
              {/* Article Item 1 */}
              <div className="flex gap-4 mb-4 ">
                <div className="w-60">
                  <img
                    src="/Asset 64.webp"
                    alt="Article 1"
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
              </div>

              {/* Article Item 2 */}
              <div className="flex gap-4 mb-4">
                <div className="w-60 ">
                  <img
                    src="/Asset 65.webp"
                    alt="Article 2"
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
              </div>

              {/* Article Item 3 */}
              <div className="flex gap-4">
                <div className="w-60 ">
                  <img
                    src="/Asset 66.webp"
                    alt="Article 3"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;