import { motion } from "framer-motion";
import { useTranslation } from "../context/LanguageProvider";
import HeroHeader from "./HeroHeader";

export default function PexQualityHeader() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Fixed and Responsive */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/pex_quality_header.webp')",
          backgroundAttachment: "scroll",
        }}
      />

      {/* Container for Logo, Navbar, and Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto ">
        {/* Top Row: Logo, Language Selector, and Navbar */}
        <HeroHeader />

        {/* Main Content - Centered */}
        <div className="flex items-end justify-left  min-h-[60vh] sm:min-h-[70vh]">
          <div className="text-left max-w-6xl">
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold  mb-2 sm:mb-3 text-white drop-shadow-lg uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {String(t("pexQualityHeader.desc1"))}
            </motion.p>
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold  mb-2 sm:mb-3 text-white drop-shadow-lg uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {String(t("pexQualityHeader.desc2"))}
            </motion.p>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold  mb-2 sm:mb-3 text-white drop-shadow-lg uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {String(t("pexQualityHeader.desc3"))}
            </motion.p>
            <motion.p
              className="text-2xl   mb-2 sm:mb-3 text-[#41c4b7] drop-shadow-lg uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {String(t("pexQualityHeader.desc4"))}
            </motion.p>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-3xl  mb-4 sm:mb-6 text-white drop-shadow-lg uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {String(t("pexQualityHeader.desc5"))}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
