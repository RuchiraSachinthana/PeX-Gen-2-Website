"use client";
import { useTranslation } from "@/context/LanguageProvider";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { FC } from "react";
import { Fragment, useEffect, useState } from "react";

const BusinessImprovementSlider: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  // Get slides from translations
  const slidesData = t("businessImprovementSlider.slides");

  // Debug: Log the slides data
  useEffect(() => {
    console.log("Slides data:", slidesData);
    console.log("Type:", typeof slidesData);
    console.log("Is array:", Array.isArray(slidesData));

    // Try to see what the full businessImprovementSlider object looks like
    const fullData = t("businessImprovementSlider");
    console.log("Full businessImprovementSlider:", fullData);
  }, [slidesData, t]);

  const slides = Array.isArray(slidesData)
    ? slidesData.map(
        (slide: { id: string; title: string; content: string }) => ({
          id: slide.id,
          title: slide.title,
          content: slide.content,
        })
      )
    : [];

  // Auto-slide effect
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Show loading state if slides are not loaded yet
  if (slides.length === 0) {
    return (
      <div
        className="py-10 text-gray-900 min-h-[400px] flex items-center justify-center"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  // Ensure currentSlide is valid
  const currentSlideData = slides[currentSlide] || slides[0];

  return (
    <div
      className=" py-10 text-gray-900"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-6 gap-10 items-end">
        {/* Left section - 1/4 - Animated slide-in from left */}
        <motion.div
          className="col-span-2 text-left flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className=" p-4 rounded-3xl min-h-80 bg-contain bg-right bg-no-repeat relative flex items-center justify-end"
            style={{ backgroundImage: "url('/Asset 4.svg')" }}
          >
            {/* Animated rocket icon */}
            <motion.div
              className="absolute top-0 right-0"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {/* Replaced Next.js Image with standard img tag */}
              <img
                src="/Asset 5.svg"
                alt="Rocket icon"
                width={50}
                height={50}
                className="w-15 h-15"
              />
            </motion.div>

            {/* Content wrapper - right aligned */}
            <div className="flex flex-col items-start justify-center gap-4 text-left">
              {/* Title and Subtitle */}
              <div>
                {/* Animated Title */}
                <motion.h3
                  className="text-white text-secondary text-2xl mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {/* Mapped title lines */}
                  <Fragment>
                    {String(t("businessImprovementSlider.leftSection.title.line1"))}
                    <br />
                    {String(t("businessImprovementSlider.leftSection.title.line2"))}
                    <br />
                    {String(t("businessImprovementSlider.leftSection.title.line3"))}
                  </Fragment>
                </motion.h3>
                {/* Animated Subtitle */}
                <motion.p
                  className="text-white text-2xl mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {String(t("businessImprovementSlider.leftSection.subtitle"))}
                </motion.p>
              </div>

              {/* Yellow Button - Animated */}
              <motion.button
                className="bg-yellow-400 px-6 hover:bg-yellow-500 text-gray-900 py-2 rounded-full shadow-lg transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex justify-between items-center gap-2">
                  {String(t("businessImprovementSlider.leftSection.linkedinButton"))}
                  <span>{"1000+"}</span>
                  {String(t("businessImprovementSlider.leftSection.followers"))}
                </div>
              </motion.button>

              {/* Bottom Round Avatars - Animated as a group */}
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {/* Hardcoded avatars */}
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src="/avatar.jpg"
                    alt="Avatar 1"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src="/avatar.jpg"
                    alt="Avatar 2"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src="/avatar.jpg"
                    alt="Avatar 3"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right section - 3/4 - Animated slide-in from right */}
        <motion.div
          className="col-span-4 text-center align-center justify-center flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="bg-white rounded-3xl shadow-md bg-cover bg-center bg-no-repeat min-h-100 relative"
            style={{
              backgroundImage: "url('/image_navigator_background.webp')",
            }}
          >
            {/* Yellow Button - Top Absolute - Animated */}
            <motion.button
              className="bg-yellow-400 px-6 py-2 rounded-full shadow-lg hover:bg-yellow-500 z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {String(t("businessImprovementSlider.topButton"))}
            </motion.button>

            <div className="p-10 flex flex-col h-full">
              {/* Content area - takes available space */}
              <div className="flex-1 flex flex-col items-center justify-center px-16">
                {/* Content - Added min-h to prevent jank during text transition */}
                <div className="text-center mb-8 min-h-[220px]">
                  {/* AnimatePresence handles the fade-out of old slide and fade-in of new slide */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide} // Key is crucial for AnimatePresence
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }} // Defines how the old slide exits
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-yellow-500 text-3xl mb-4 text-primary">
                        {currentSlideData.title}
                      </h3>
                      <p className="text-3xl text-white mb-6">
                        {currentSlideData.content}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Read More Button - Below content - Animated */}
                <motion.button
                  className="flex items-center gap-2 text-gray-900 px-6 py-3 rounded-full shadow-lg transition-colors mx-auto hover:opacity-90"
                  style={{ backgroundColor: "#04afbc" }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <span className="text-sm text-white">
                    {String(t("businessImprovementSlider.readMoreButton"))}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white " />
                </motion.button>
              </div>
            </div>

            {/* Left Arrow - Fixed at left side - Animated */}
            <motion.button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-4 shadow-lg hover:opacity-80 transition-opacity z-20"
              style={{ backgroundColor: "#0e685b" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </motion.button>

            {/* Right Arrow - Fixed at right side - Animated */}
            <motion.button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-4 shadow-lg hover:opacity-80 transition-opacity z-20"
              style={{ backgroundColor: "#0e685b" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </motion.button>

            {/* Navigation Dots - Fixed at bottom - Animated */}
            <motion.div
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="flex justify-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? "w-8 opacity-100" : "opacity-50"
                    }`}
                    style={{ backgroundColor: "#0e685b" }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessImprovementSlider;
