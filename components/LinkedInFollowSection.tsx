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
           ========================================= */}
        <div className="lg:hidden max-w-[370px] mx-auto">
          {/* Main Title - Top */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-left text-base font-medium text-gray-900 leading-tight">
              {String(t("linkedInFollowSection.title"))}
            </h4>
          </motion.div>

          {/* SVG Background Card with Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/section_5_image.svg"
              alt={String(t("linkedInFollowSection.alt"))}
              width={370}
              height={180}
              className="w-full h-auto"
            />

            {/* FOLLOW US Text - Top Right */}
            <motion.span
              className="absolute top-4 right-6 text-white text-[10px] font-medium uppercase tracking-wide"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Follow Us
            </motion.span>

            {/* Avatars - Bottom Left */}
            <motion.div
              className="absolute bottom-4 left-4 flex gap-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div
                  key={num}
                  className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/avatar.jpg"
                    alt={`Avatar ${num}`}
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* LinkedIn Button - Bottom Right */}
            <motion.button
              className="absolute bottom-4 right-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-3 py-1.5 text-[10px] font-medium rounded-full shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Linkedin <span className="font-bold">1000+</span> followers
            </motion.button>
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
