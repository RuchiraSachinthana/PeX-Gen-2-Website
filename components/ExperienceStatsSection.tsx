"use client";
// Import motion from framer-motion
import { motion } from "framer-motion";
import type { FC } from "react";
import { Fragment } from "react";
import { useTranslation } from "../context/LanguageProvider";
import ReusableShape from "./ReusableShape";
import { ArrowRight } from "lucide-react";

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
      className="w-full  bg-cover bg-center bg-no-repeat relative overflow-hidden" // Added overflow-hidden
      style={{ backgroundImage: "url('/office_promo_bg.webp')" }}
    >
      <div className="max-w-6xl mx-auto h-full px-4 py-20 sm:px-6 lg:px-8 relative z-10">
        <div className="h-full grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 items-center">
          {/* Left Section - Stats Card - Animated */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }} // CHANGED
            viewport={{ once: true }} // ADDED
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="p-6 rounded-3xl bg-black/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // CHANGED
              viewport={{ once: true }} // ADDED
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="grid grid-cols-2 p-4 gap-8">
                <div>
                  <motion.div
                    className="text-5xl text-white mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} // CHANGED
                    viewport={{ once: true }} // ADDED
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                   <p className="text-yellow-400">{stats.years.value}</p> 
                  </motion.div>
                  <div className="text-2xl text-white uppercase tracking-wide">
                    {stats.years.labelLine1}
                    <br />
                    {stats.years.labelLine2}
                  </div>
                </div>
                <div>
                  <motion.div
                    className="text-5xl  text-white mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} // CHANGED
                    viewport={{ once: true }} // ADDED
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                     <p className="text-yellow-400">{stats.clients.value}</p>
                  </motion.div>
                  <div className="text-2xl text-white uppercase tracking-wide">
                    {stats.clients.label}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // CHANGED
              viewport={{ once: true }} // ADDED
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.button // CHANGED
                className="bg-cyan-500 text-black  py-2.5 px-6 rounded-full flex items-center gap-2 text-md hover:bg-cyan-600 transition-colors"
                whileHover={{ scale: 1.05 }} // ADDED
                whileTap={{ scale: 0.95 }} // ADDED
              >
                <span>{buttons.readMore}</span>
                 <ArrowRight className="w-5 h-5 text-black" />
              </motion.button>
              <motion.button // CHANGED
                className="bg-yellow-400 text-black  py-2.5 px-6 rounded-full flex items-center gap-2 text-md hover:bg-yellow-500 transition-colors"
                whileHover={{ scale: 1.05 }} // ADDED
                whileTap={{ scale: 0.95 }} // ADDED
              >
                <span>{buttons.learnMore}</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </motion.button>
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
            whileInView={{ opacity: 1, x: 0 }} // CHANGED
            viewport={{ once: true }} // ADDED
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ReusableShape
             width={320}
             height={170}
             cutoutWidth={80}
             cutoutHeight={80}
             cutoutRadius={16}
              cutoutBgColor="#00aaa4"
              cutoutPosition="top-right"
              color="#facc15" // Tailwind yellow-400
              radius={24} // rounded-3xl
              className="relative text-gray-900 flex flex-col justify-between"
            >
              {/* Top-right arrow box */}
              <motion.div
                className="absolute top-0 right-0 bg-yellow-400 p-5 rounded-2xl "
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }} // CHANGED
                viewport={{ once: true }} // ADDED
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 10 }} // ADDED
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
                whileInView={{ opacity: 1, y: 0 }} // CHANGED
                viewport={{ once: true }} // ADDED
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
                whileInView={{ opacity: 1, y: 0 }} // CHANGED
                viewport={{ once: true }} // ADDED
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <span className="text-teal-700 uppercase text-sm">
                  {demoCard.connectLabel}
                </span>
                <motion.button // CHANGED
                  className="bg-teal-700 text-white py-3 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-teal-800 transition-colors text-sm"
                  whileHover={{ scale: 1.05 }} // ADDED
                  whileTap={{ scale: 0.95 }} // ADDED
                >
                  <span className="text-md">{buttons.bookNow}</span>
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
                </motion.button>
              </motion.div>
            </ReusableShape>
          </motion.div>
        </div>
      </div>
    </section>
  );
};