import { motion } from "framer-motion";
import HeroHeader from "./HeroHeader";

export default function PexGenHeader() {
  return (
    <>
      {/* ========================================== */}
      {/* Desktop Version - UNCHANGED (As requested) */}
      {/* ========================================== */}
      <div className="hidden lg:flex relative w-full lg:min-h-screen items-center py-5 lg:py-0 justify-center overflow-hidden">
        {/* Background Image - Fixed and Responsive */}
        <div
          className="absolute inset-0 w-full lg:h-full h-130 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/pexgen2_header.webp')",
            backgroundAttachment: "scroll",
          }}
        />

        {/* Container for Logo, Navbar, and Content */}
        <div className="relative w-full max-w-6xl mx-auto ">
          {/* Top Row: Logo, Language Selector, and Navbar */}
          <HeroHeader />

          {/* Main Content - Centered */}
          <div className="flex flex-row-reverse items-end min-h-100 lg:min-h-[60vh] sm:min-h-[70vh]">
            <div className="text-right sm:ml-0 ml-5 max-w-6xl">
              <motion.p
                className="text:sm sm:text-2xl md:text-3xl mb-1 lg:text-3xl text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                PEx Software™ Gen2
              </motion.p>
              <motion.p
                className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold  mb-1 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Tame the
              </motion.p>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-1 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Compliance Dragon.
              </motion.p>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 font-semibold text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Unleash Performance.
              </motion.p>
              <motion.p
                className="text:sm sm:text-2xl md:text-3xl lg:text-3xl mb-1 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                AI-powered. Paperless. Audit-ready.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* Tablet Version - Intermediate sizing */}
      {/* ========================================== */}
      <div className="hidden md:flex lg:hidden relative w-full min-h-[80vh] items-center py-5 justify-center overflow-hidden">
        {/* Background Image - Tablet optimized */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/pexgen2_header.webp')",
            backgroundAttachment: "scroll",
          }}
        />

        {/* Container for Logo, Navbar, and Content */}
        <div className="relative w-full max-w-4xl mx-auto px-6">
          {/* Top Row: Logo, Language Selector, and Navbar */}
          <HeroHeader />

          {/* Main Content - Tablet optimized */}
          <div className="flex flex-row-reverse items-end min-h-[50vh]">
            <div className="text-right max-w-xl">
              <motion.p
                className="text-xl mb-1 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                PEx Software™ Gen2
              </motion.p>
              <motion.p
                className="text-2xl font-semibold mb-1 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Tame the
              </motion.p>
              <motion.p
                className="text-2xl font-semibold mb-1 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Compliance Dragon.
              </motion.p>
              <motion.p
                className="text-2xl font-semibold mb-1 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Unleash Performance.
              </motion.p>
              <motion.p
                className="text-xl mb-1 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                AI-powered. Paperless. Audit-ready.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* Mobile Version - Following PexFoodHeader pattern */}
      {/* ========================================== */}
      <div className="md:hidden relative w-full  flex items-center py-5 justify-center overflow-hidden">
        {/* Background Image - Mobile optimized */}
        <div
          className="absolute inset-0 w-full  bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/pexgen2_header.webp')",
            backgroundAttachment: "cover",
            backgroundPosition: "60% center",
          }}
        />

        {/* Container for Logo, Navbar, and Content */}
        <div className="relative w-full max-w-6xl mx-auto px-4">
          {/* Top Row: Logo, Language Selector, and Navbar */}
          <HeroHeader />

          {/* Main Content - Mobile optimized */}
          <div className="flex items-end justify-end min-h-50">
            <div className="text-right mr-5 ">
              <motion.p
                className="text-xs  text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                PEx Software™ Gen2
              </motion.p>
              <motion.p
                className="text-base font-semibold  text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Tame the
              </motion.p>
              <motion.p
                className="text-base font-semibold text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Compliance Dragon.
              </motion.p>
              <motion.p
                className="text-base font-semibold text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Unleash Performance.
              </motion.p>
              <motion.p
                className="text-xs mb-4 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                AI-powered. Paperless. Audit-ready.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
