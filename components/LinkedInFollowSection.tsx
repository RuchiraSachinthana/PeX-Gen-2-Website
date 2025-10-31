"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

export default function LinkedInFollowSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-5 left-6 w-full z-10 pointer-events-none">
            <h4 className="text-left text-md font-normal sm:text2xl lg:text-2xl text-yellow-400 drop-shadow-lg mt-6">
              {t("linkedInSectionTitle")}
            </h4>
          </div>
          <Image
            src="/section_5_image.svg"
            alt={t("linkedInSectionAlt")}
            width={1200}
            height={200}
            className="w-full h-auto"
          />
          <div className="absolute bottom-6 left-6 flex gap-4 z-20">
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
              <Image
                src="/avatar.jpg"
                alt="Avatar 1"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
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
          <button className="absolute bottom-6 right-6 font-normal bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full shadow-lg z-20">
            {t("linkedInButtonText")}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
