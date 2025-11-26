"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

export default function LinkedInFollowSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white py-4 md:py-8 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================
            MOBILE & MEDIUM VIEW (Visible on screens < 1024px)
            Recreated using CSS to look like the image
           ========================================= */}
        <div className="lg:hidden max-w-[380px] sm:max-w-[420px] md:max-w-[500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/section_5_image.svg"
              alt={String(t("linkedInFollowSection.alt"))}
              width={0}
              height={0}
              className="w-full h-auto"
            />

            {/* Main Text */}
            <h4 className="text-left absolute left-3 sm:left-4 md:left-6 top-2 sm:top-3 md:top-4 text-xs sm:text-sm md:text-base lg:text-lg text-white pr-10 sm:pr-14 md:pr-20 mb-8 leading-tight">
              {String(t("linkedInFollowSection.title"))}
            </h4>

            {/* Content Stack */}
            <div className="flex flex-col gap-6 items-start">
              {/* Button */}
              <a href="https://www.linkedin.com/company/pex-software-solutions" target="_blank" rel="noopener noreferrer">
                <button className="bg-yellow-400 absolute top-10 sm:top-12 md:top-14 left-3 sm:left-4 md:left-6 hover:bg-yellow-500 text-gray-900 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1 md:py-1.5 text-[10px] sm:text-[11px] md:text-xs rounded-full text-center whitespace-nowrap">
                  Linkedin <span className="font-bold">1000+</span> followers
                </button>
              </a>

              {/* Follow Us + Avatars */}
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-white text-[10px] sm:text-[11px] md:text-xs absolute top-5 sm:top-6 md:top-8 left-3 md:left-6 uppercase opacity-90">
                  Follow Us
                </span>
                <div className="absolute top-10 sm:top-11 md:top-14 left-[160px] sm:left-[180px] md:left-[200px] flex gap-1 sm:gap-1 md:gap-1.5 z-20">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 relative rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="/user (1).png"
                      alt="Avatar 1"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="/user (2).png"
                      alt="Avatar 2"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="/user (3).png"
                      alt="Avatar 3"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="/user (4).png"
                      alt="Avatar 4"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="/user (5).png"
                      alt="Avatar 5"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            DESKTOP VIEW (Visible on screens >= 1024px)
            (Your original code, untouched inside this wrapper)
           ========================================= */}
        <div className="hidden lg:block">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 left-4 lg:left-6 xl:left-8 w-full z-10 pointer-events-none">
              <h4 className="text-left text-2xl lg:text-3xl xl:text-4xl text-yellow-400 drop-shadow-lg mt-4 lg:mt-6">
                {String(t("linkedInFollowSection.title"))}
              </h4>
            </div>
            <Image
              src="/section_5_image.svg"
              alt={String(t("linkedInFollowSection.alt"))}
              width={1200}
              height={200}
              className="w-full h-auto"
            />

            <div className="absolute bottom-4 lg:bottom-6 left-48 lg:left-60 xl:left-72 flex gap-2 z-20">
              <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 relative rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image
                  src="/user (1).png"
                  alt="Avatar 1"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-3 lg:top-5 left-[-100px] lg:left-[-120px] xl:left-[-140px] text-white text-xs lg:text-sm xl:text-base">
                FOLLOW US
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image
                  src="/user (2).png"
                  alt="Avatar 2"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image
                  src="/user (3).png"
                  alt="Avatar 3"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image
                  src="/user (4).png"
                  alt="Avatar 4"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image
                  src="/user (5).png"
                  alt="Avatar 5"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <a href="https://www.linkedin.com/company/pex-software-solutions" target="_blank" rel="noopener noreferrer">
              <button className="absolute bottom-4 lg:bottom-6 right-6 lg:right-10 xl:right-12 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 lg:px-6 xl:px-8 py-2 lg:py-3 text-sm lg:text-base rounded-full shadow-lg z-20 cursor-pointer">
                Linkedin <span className="font-semibold">&nbsp;1000+</span>
                &nbsp;followers
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
