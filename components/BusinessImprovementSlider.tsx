"use client";
import { useTranslation } from "@/context/LanguageProvider";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { FC } from "react";
import { useEffect, useState } from "react";
import ReusableShape from "./ReusableShape";

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
        className="py-10 text-gray-900 flex items-center justify-center"
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
    <div className="md:py-10 py-5 text-gray-900" style={{ backgroundColor: "#ffffff" }}>
      {/* Desktop Version */}
      <div className="hidden lg:block max-w-6xl mx-auto py-6 md:py-20 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-2">
          {/* Card section - First on desktop */}
          <motion.div
            className="text-left flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ReusableShape
              width={250}
              height={300}
              color="#0e685b"
              radius={28}
              cutoutWidth={75}
              cutoutHeight={75}
              cutoutBgColor="#ffffff"
              cutoutPosition="top-right"
              cutoutRadius={10}
              className="relative flex items-center justify-start"
            >
              {/* Rocket */}
              <div className="absolute top-[-7px] right-3">
                <Image
                  src="/Asset 5.svg"
                  alt="Rocket icon"
                  width={0}
                  height={0}
                  className="w-17 h-17"
                />
              </div>

              {/* Content wrapper - left aligned */}
              <div className="flex flex-col items-start gap-2 text-left">
                <div>
                  <p className="text-white text-secondary text-2xl">
                    {String(t("socialSection.partnerSection.title1"))}
                  </p>
                  <p className="text-white text-secondary text-2xl">
                    {String(t("socialSection.partnerSection.title2"))}
                  </p>
                  <p className="text-white text-secondary text-2xl">
                    {String(t("socialSection.partnerSection.title3"))}
                  </p>
                </div>

                {/* Follow Us text at top */}
                <p className="text-white text-sm mt-4">
                  {String(t("socialSection.partnerSection.followUs"))}
                </p>

                {/* Row 1: LinkedIn button */}
                <button className="bg-yellow-400 px-4 hover:bg-yellow-500 text-gray-900 py-2 rounded-full shadow-lg transition-colors cursor-pointer">
                  <div className="flex justify-between text-sm items-center gap-2">
                    Linkedin
                    <span className="font-semibold">
                      {String(
                        t(
                          "socialSection.partnerSection.linkedinButton.followersCount"
                        )
                      )}
                    </span>
                    {String(
                      t(
                        "socialSection.partnerSection.linkedinButton.followersText"
                      )
                    )}
                  </div>
                </button>

                {/* Row 2: Avatars */}
                <div className="flex gap-1">
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 1"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 2"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 3"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 4"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 5"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ReusableShape>
          </motion.div>

          {/* Slider section - Second on desktop */}
          <motion.div
            className="w-full flex-1 text-center flex flex-col gap-4"
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
              <div className="absolute left-20 top-10 border-[#00EEFF] border-2 w-175 h-75 rounded-xl"></div>

              {/* Yellow Button - Top Absolute - Animated */}
              <motion.button
                className="bg-yellow-400 absolute top-[-20] left-110 transform -translate-x-1/2 text-xl px-6 py-2 rounded-full shadow-lg hover:bg-yellow-500 z-10 cursor-pointer whitespace-nowrap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -22 }}
                whileTap={{ scale: 0.95, y: -20 }}
              >
                {String(t("businessImprovementSlider.topButton"))}
              </motion.button>

              <div className="p-10 flex flex-col h-full">
                {/* Content area - takes available space */}
                <div className="flex-1 flex flex-col mt-15 px-16">
                  {/* Content - Added min-h to prevent jank during text transition */}
                  <div className="text-center mb-8">
                    {/* AnimatePresence handles the fade-out of old slide and fade-in of new slide */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
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
                    className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-gray-900 px-6 py-3 rounded-full shadow-lg transition-colors hover:opacity-100 cursor-pointer"
                    style={{ backgroundColor: "#04afbc" }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm text-white">
                      {String(t("businessImprovementSlider.readMoreButton"))}
                    </span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Left Arrow - Fixed at left side - Animated */}
              <motion.button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-4 shadow-lg hover:opacity-100 transition-opacity z-20 cursor-pointer"
                style={{ backgroundColor: "#0e685b" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-8 h-8 hover:text-yellow-400 text-white" />
              </motion.button>

              {/* Right Arrow - Fixed at right side - Animated */}
              <motion.button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-4 shadow-lg hover:opacity-100 transition-opacity z-20 cursor-pointer"
                style={{ backgroundColor: "#0e685b" }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-8 h-8 hover:text-yellow-400 text-white" />
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
                      className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                        currentSlide === index
                          ? "w-8 opacity-100"
                          : "opacity-50"
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

      {/* Mobile Version */}
      <div className="lg:hidden max-w-md mx-auto px-1">
        {/* Slider Card with teal background container */}
        <motion.div
          className="mb-6  rounded-[2.5rem] "
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Yellow Top Button */}
          <motion.div
            className="flex justify-center "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-yellow-400 relative top-2 z-10  px-4 py-1 rounded-full shadow-lg">
              <p className="text-xs  text-gray-900 whitespace-nowrap">
                {String(t("businessImprovementSlider.topButton"))}
              </p>
            </div>
          </motion.div>

          {/* Inner content card with gradient */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-lg"
            style={{
              background: "linear-gradient(135deg, #00a99d 0%, #0d7377 100%)",
              minHeight: "180px",
            }}
          >
            {/* Cyan Border Box */}
            <div className="absolute left-4 top-4 right-4 bottom-10 border-[#00EEFF] border-2 rounded-xl"></div>

            {/* Content */}
            <div className="relative z-10 px-6 py-6 text-xs flex flex-col items-center justify-center  ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <h3 className="text-yellow-400 text-lg font-semibold ">
                    {currentSlideData.title}
                  </h3>
                  <p className="text-white text-xs px-4">
                    {currentSlideData.content}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Read More Button */}
              <motion.button
                className="absolute top-25 bg-[#04afbc] text-white px-3 py-1.5 rounded-full flex items-center gap-2 text-xs shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>
                  {String(t("businessImprovementSlider.readMoreButton"))}
                </span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Left Arrow */}
            <motion.button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0e685b] rounded-full p-1 shadow-lg z-20"
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0e685b] rounded-full p-1 shadow-lg z-20"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>

            {/* Navigation Dots */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="flex justify-center gap-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index
                        ? "w-6 bg-[#0e685b]"
                        : "w-2 bg-[#0e685b]/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-[#0e685b] mx-6 rounded-3xl p-4 max-w-sm relative shadow-lg">
            {/* LinkedIn Icon Badge */}
            <div className="absolute top-[-5px] right-[-5px] bg-yellow-400 rounded-xl p-2 px-4 border-white border-4 ">
              <div className="text-2xl font-bold text-[#0e685b]">in</div>
            </div>

            {/* Title */}
            <div className="mb-4 pr-8">
              <h3 className="text-white text-md ">
                {String(t("socialSection.partnerSection.title1"))}
                {String(t("socialSection.partnerSection.title2"))}
                {String(t("socialSection.partnerSection.title3"))}
              </h3>
            </div>

            {/* Bottom section */}
            <div className="flex items-end justify-between">
              <div className="flex flex-row items-center gap-3">
                {/* LinkedIn Button */}
                <motion.button
                  className="bg-yellow-400 px-2 py-1 rounded-full shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-1 text-[8px]  text-gray-900">
                    <span>LinkedIn</span>
                    <span className="font-bold">
                      {String(
                        t(
                          "socialSection.partnerSection.linkedinButton.followersCount"
                        )
                      )}
                    </span>
                    <span>
                      {String(
                        t(
                          "socialSection.partnerSection.linkedinButton.followersText"
                        )
                      )}
                    </span>
                  </div>
                </motion.button>

                {/* Avatars */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div
                      key={num}
                      className="w-5 h-5 rounded-full bg-gray-300 overflow-hidden border-2 border-white"
                    >
                      <Image
                        src="/avatar.jpg"
                        alt={`Avatar ${num}`}
                        width={22}
                        height={22}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow Us text */}
              <div className="text-right absolute bottom-10 right-6">
                <p className="text-white text-[0.5rem] uppercase ">
                  {String(t("socialSection.partnerSection.followUs"))}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessImprovementSlider;
