"use client";
// Import motion from framer-motion
import { motion } from "framer-motion";
import type { FC } from "react"; // Added FC type
import { Fragment } from "react"; // Added Fragment for title lines
import { useTranslation } from "../context/LanguageProvider";
import ReusableShape from "./ReusableShape";

export const ExperienceStatsSection: FC = () => {
  const { t } = useTranslation();

  // Get translated content
  const stats = t("experienceStatsSection.stats") as {
    years: { value: string; labelLine1: string; labelLine2: string };
    clients: { value: string; label: string };
  };
  const buttons = t("experienceStatsSection.buttons") as {
    readMore: string;
    learnMore: string;
    bookNow: string;
  };
  const promoText = String(t("experienceStatsSection.promoText"));
  const demoCard = t("experienceStatsSection.demoCard") as {
    titleLines: string[];
    connectLabel: string;
  };
  return (
    <section
      className="w-full h-[400px] bg-cover bg-center bg-no-repeat relative overflow-hidden" // Added overflow-hidden
      style={{ backgroundImage: "url('/office_promo_bg.webp')" }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="h-full grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 items-center">
          {/* Left Section - Stats Card - Animated */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="bg-transparent backdrop-blur-lg p-6 rounded-3xl border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <motion.div
                    className="text-5xl text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {stats.years.value}
                  </motion.div>
                  <div className="text-sm text-white uppercase tracking-wide">
                    {stats.years.labelLine1}
                    <br />
                    {stats.years.labelLine2}
                  </div>
                </div>
                <div>
                  <motion.div
                    className="text-5xl  text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    {stats.clients.value}
                  </motion.div>
                  <div className="text-sm text-white uppercase tracking-wide">
                    {stats.clients.label}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <button className="bg-cyan-500 text-white  py-2.5 px-6 rounded-full flex items-center gap-2 text-sm hover:bg-cyan-600 transition-colors">
                <span>{buttons.readMore}</span>
                <span>→</span>
              </button>
              <button className="bg-yellow-400 text-gray-900  py-2.5 px-6 rounded-full flex items-center gap-2 text-sm hover:bg-yellow-500 transition-colors">
                <span>{buttons.learnMore}</span>
                <span>→</span>
              </button>
              <span className="text-yellow-400 text-sm ">{promoText}</span>
            </motion.div>
          </motion.div>

          {/* Middle Section - Person Image (empty for now) */}
          <div className="hidden lg:flex  h-full">
            {/* Person image will be positioned here */}
          </div>

          {/* Right Section - Request Demo Card (ReusableShape) - Animated */}
          <motion.div
            className="w-full lg:w-[400px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ReusableShape
              width="100%"
              cutoutBgColor="#00786d"
              height={280}
              cutoutPosition="top-right"
              color="#facc15" // Tailwind yellow-400
              radius={24} // rounded-3xl
            
              className="relative text-gray-900 flex flex-col justify-between"
            >
              {/* Top-right arrow box */}
              <motion.div
                className="absolute top-[-10] right-0 bg-yellow-400 p-5 rounded-2xl "
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <h3 className="text-3xl text-teal-700 mb-2">
                  {demoCard.titleLines.map((line: string, index: number) => (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
                </h3>
              </motion.div>

              {/* CTA row */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <span className="text-teal-700 uppercase text-sm">
                  {demoCard.connectLabel}
                </span>
                <button className="bg-teal-700 text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-teal-800 transition-colors text-sm">
                  <span>{buttons.bookNow}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </motion.div>
            </ReusableShape>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
