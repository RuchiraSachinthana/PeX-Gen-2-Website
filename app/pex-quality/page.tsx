"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import HeroHeader from "../../components/HeroHeader";
import { useTranslation } from "../../context/LanguageProvider";

export default function PexQualityPage() {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Fixed and Responsive */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/pex_quality_header.webp')",
            backgroundAttachment: "scroll",
          }}
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Animated Gradient Shapes */}
        <motion.div
          className="absolute top-10 right-10 w-48 h-48 md:w-72 md:h-72 bg-purple-400 rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 md:w-96 md:h-96 bg-indigo-400 rounded-full opacity-15 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Container for Logo, Navbar, and Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Top Row: Logo, Language Selector, and Navbar */}
          <HeroHeader />

          {/* Main Content - Centered */}
          <div className="flex items-end justify-left min-h-[60vh] sm:min-h-[70vh]">
            <div className="text-left max-w-4xl">
              <motion.p
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {t("pexQualityHeaderDesc1")}
              </motion.p>
              <motion.p
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {t("pexQualityHeaderDesc2")}
              </motion.p>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2 sm:mb-3 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {t("pexQualityHeaderDesc3")}
              </motion.p>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-4 sm:mb-6 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {t("pexQualityHeaderDesc4")}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Content Section */}
      <div className="w-full bg-white">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Quality Standards
            </h2>
            <p className="text-lg text-gray-600">
              Uncompromising quality assurance for excellence in every detail.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
}
