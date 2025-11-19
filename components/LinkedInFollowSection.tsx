"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

export default function LinkedInFollowSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white py-4 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================
            MOBILE VIEW (Visible on screens < 1024px)
            Recreated using CSS to look like the image
           ========================================= */}
        <div className="lg:hidden max-w-[380px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" relative"
          >
            <Image
              src="/section_5_image.svg"
              alt={String(t("linkedInFollowSection.alt"))}
              width={0}
              height={0}
              className="w-full h-auto"
            />

            {/* Main Text */}
            <h4 className="text-left absolute left-4 top-2 text-xs sm:text-3xl  text-white pr-16 mb-8 leading-tight">
              {String(t("linkedInFollowSection.title"))}
            </h4>

            {/* Content Stack */}
            <div className="flex flex-col gap-6 items-start">
              {/* Button */}
              <button className="bg-yellow-400 absolute top-11 left-4 hover:bg-yellow-500 text-gray-900 px-2 py-1 text-[10px] rounded-full sm:w-auto text-center">
                Linkedin <span className="font-bold">1000+</span> followers
              </button>

              {/* Follow Us + Avatars */}
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-white text-[10px] absolute top-7 right-10 uppercase opacity-90">
                  Follow Us
                </span>
                <div className="absolute bottom-4 left-45 flex gap-1 z-20">
                  <div className="w-6 h-6 relative rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 1"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-6 h-6  rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 2"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 3"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 4"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="/avatar.jpg"
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
            <div className="absolute top-0 left-6 w-full z-10 pointer-events-none">
              <h4 className="text-left md:text-3xl text-yellow-400 drop-shadow-lg md:mt-6">
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

            <div className="absolute bottom-6 left-60 flex gap-2 z-20">
              <div className="md:w-12 md:h-12 relative rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image
                  src="/avatar.jpg"
                  alt="Avatar 1"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-5 left-[-120px] text-white">
                FOLLOW US
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image
                  src="/avatar.jpg"
                  alt="Avatar 2"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image
                  src="/avatar.jpg"
                  alt="Avatar 3"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image
                  src="/avatar.jpg"
                  alt="Avatar 4"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image
                  src="/avatar.jpg"
                  alt="Avatar 5"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <button className="absolute bottom-6 right-10 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full shadow-lg z-20 cursor-pointer">
              Linkedin <span className="font-semibold">&nbsp;1000+</span>
              &nbsp;followers
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
