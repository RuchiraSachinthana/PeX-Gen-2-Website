"use client";
import { motion } from "framer-motion";
import { useTranslation } from "../context/LanguageProvider";
import HeroHeader from "./HeroHeader";

export default function PexFoodHeader() {
  const { t } = useTranslation();
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Fixed and Responsive */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/pex_food_header.webp')",
            backgroundAttachment: "scroll",
          }}
        />

       
       

        {/* Container for Logo, Navbar, and Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                {String(t("pexFoodHeaderDesc1"))}
              </motion.p>
              <motion.p
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {String(t("pexFoodHeaderDesc2"))}
              </motion.p>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {String(t("pexFoodHeaderDesc3"))}
              </motion.p>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  mb-4 sm:mb-6 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {String(t("pexFoodHeaderDesc4"))}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
