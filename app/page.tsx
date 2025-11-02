"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroHeader from "../components/HeroHeader";

import LinkedInFollowSection from "@/components/LinkedInFollowSection";
import SectionFour from "@/components/SectionFour";
import SevenWaysBenefits from "@/components/SevenWaysBenefits";
import { useTranslation } from "../context/LanguageProvider";

import PExSoftwareBenefits from "@/components/PExSoftwareBenefits";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen">
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

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Animated Gradient Shapes */}
        <motion.div
          className="absolute top-10 right-10 w-48 h-48 md:w-72 md:h-72 bg-teal-400 rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-400 rounded-full opacity-15 blur-3xl"
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

      {/* Additional Content Section */}
      <div className="w-full bg-linear-to-t from-yellow-500 to-yellow-300 relative overflow-hidden">
        {/* Animated Background Shapes */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-30 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-600 rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -25, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-800 ">
              {String(t("pexFoodAdditionalContent"))}
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section with Description and Video */}
      <div className="w-full bg-linear-to-b from-white to-gray-50 py-16 sm:py-20 relative overflow-hidden">
        {/* Animated Background Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-56 h-56 bg-teal-300 rounded-full opacity-10 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-300 rounded-full opacity-10 blur-3xl"
          animate={{ x: [0, -35, 0], y: [0, -20, 0] }}
          transition={{ duration: 13, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Description */}
            <div className="space-y-6">
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl  text-teal-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                PEx Software™ for Food Safety Management where compliance meets
                confidence, and kitchens run smarter.
              </motion.h2>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image
                  src="/signup_image.webp"
                  alt="Sign up"
                  width={350}
                  height={60}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
                <Image
                  src="/booknow_image.webp"
                  alt="Book now"
                  width={350}
                  height={60}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
              </motion.div>
            </div>

            {/* Right Side - Video Player */}
            <motion.div
              className="relative flex justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <div className="bg-white rounded-2xl overflow-hidden">
                  <Image
                    width={600}
                    height={450}
                    src="/video_player.webp"
                    alt="Video player interface"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 7 Ways Benefits Section */}
      <SevenWaysBenefits />

      {/* LinkedIn Follow Section */}
      <LinkedInFollowSection />

      <SectionFour />
      <PExSoftwareBenefits />
    </div>
  );
}
