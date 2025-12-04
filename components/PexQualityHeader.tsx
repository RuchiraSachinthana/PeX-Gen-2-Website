import { motion } from "framer-motion";
import { useTranslation } from "../context/LanguageProvider";
import HeroHeader from "./HeroHeader";

export default function PexQualityHeader() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full md:min-h-screen flex items-center py-5 md:py-0 justify-center overflow-hidden">
      {/* Background Image - Fixed and Responsive */}
      <div
        className="absolute inset-0 w-full md:h-full h-130 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/PEX-Quality-Header.jpg')",
          backgroundAttachment: "scroll",
          backgroundPosition: typeof window !== 'undefined' && window.innerWidth < 768 ? "30% center" : "50% center",
        }}
      />

      {/* Container for Logo, Navbar, and Content */}
      <div className="relative z-100 w-full max-w-6xl mx-auto ">
        {/* Top Row: Logo, Language Selector, and Navbar */}
        <HeroHeader />

        {/* Main Content - Centered */}
        <div className="flex items-end justify-end min-h-100  md:min-h-[60vh] sm:min-h-[70vh]">
          <div className="text-right  sm:ml-0 mr-5 max-w-6xl">
            <motion.p
              className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold   sm:mb-3 text-white drop-shadow-lg uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
             Reduce Your
            </motion.p>
            <motion.p
              className="text-md sm:text-3xl md:text-44xl lg:text-4xl font-semibold   sm:mb-3 text-white drop-shadow-lg uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
             ISO 9001 PAPER
            </motion.p>
           
            <motion.p
              className="text-md sm:text-3xl md:text-44xl lg:text-4xl font-semibold   sm:mb-3 text-white drop-shadow-lg uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
             DOCUMENTATION BY 90%
            </motion.p>
      
          </div>
        </div>
      </div>
    </div>
  );
}
