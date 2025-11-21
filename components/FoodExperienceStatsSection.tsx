"use client";
// Import motion from framer-motion
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Fragment, type FC, useEffect } from "react";
import { useTranslation } from "../context/LanguageProvider";
import { useRouter } from "next/navigation";
import { getCalApi } from "@calcom/embed-react";

export const FoodExperienceStatsSection: FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  
  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

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
    <>
      {/* ========================================== */}
      {/* Desktop Version - UNCHANGED (As requested) */}
      {/* ========================================== */}
      <section
        className="hidden lg:block w-full bg-cover bg-no-repeat relative overflow-hidden" // Added overflow-hidden
        style={{
          backgroundImage: "url('/food_expirence_bg.webp')",
          backgroundPosition: "80% center",
        }}
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
                  onClick={() => router.push("/blog")}
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
              className="w-full  lg:w-[350px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }} // CHANGED
              viewport={{ once: true }} // ADDED
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} // CHANGED
                viewport={{ once: true }} // ADDED
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <h3 className="text-3xl top-40 right-55 absolute text-teal-700 mb-2">
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
                className="flex items-center absolute top-60 right-20 gap-4"
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
                  data-cal-namespace="15min"
                  data-cal-link="pexsoftwaresolutions/15min"
                  data-cal-config='{"layout":"month_view"}'
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
              <Image
                src="/Asset 47.svg"
                alt="Avatar 1"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* Mobile Version - Following ExperienceStatsSection pattern */}
      {/* ========================================== */}
      <section
        className="lg:hidden w-full bg-cover bg-no-repeat relative overflow-hidden min-h-[500px]"
        style={{
          backgroundImage: "url('/food_expirence_bg.webp')",
          backgroundPosition: "60% center",
        }}
      >
        <div className="max-w-md mx-auto h-full px-4 py-10 relative z-10">
          {/* Stats Card - Top Left - BIGGER */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-6 rounded-3xl bg-black/60 backdrop-blur-sm">
              <div className="mb-5">
                <p className="text-5xl text-yellow-400 mb-2">
                  {stats.years.value}
                </p>
                <p className="text-sm text-white uppercase leading-tight font-medium">
                  {stats.years.labelLine1}
                  <br />
                  {stats.years.labelLine2}
                </p>
              </div>
              <div>
                <p className="text-5xl text-yellow-400 mb-2">
                  {stats.clients.value}
                </p>
                <p className="text-sm text-white uppercase font-medium">
                  {stats.clients.label}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Request Demo Card - Right Side - SMALLER */}
          <motion.div
            className="flex justify-end mb-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-yellow-400 rounded-xl p-3 w-52">
              {/* Top-right arrow box */}
              <motion.div
                className="absolute -top-1 -right-1 bg-yellow-400 p-2 rounded-lg shadow-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="w-4 h-4 text-black -rotate-45 " />
              </motion.div>

              <div className="mb-2">
                <h3 className="text-sm text-teal-700 leading-tight">
                  {demoCard.titleLines.map((line: string, index: number) => (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-teal-700 uppercase text-[9px]">
                  {demoCard.connectLabel}
                </span>
                <motion.button
                  className="bg-teal-700 text-white py-1.5 px-2.5 rounded-full flex items-center gap-1 text-[10px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cal-namespace="15min"
                  data-cal-link="pexsoftwaresolutions/15min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  <span>{buttons.bookNow}</span>
                  <ArrowRight className="w-3 h-3" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Buttons - ONE LINE, SMALLER */}
          <motion.div
            className="flex items-center gap-2 flex-nowrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="bg-cyan-500 text-black py-1.5 px-3 rounded-full flex items-center gap-1 text-[10px] font-medium whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/blog")}
            >
              <span>{buttons.readMore}</span>
              <ArrowRight className="w-3 h-3" />
            </motion.button>
            <motion.button
              className="bg-yellow-400 text-black py-1.5 px-3 rounded-full flex items-center gap-1 text-[10px] font-medium whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{buttons.learnMore}</span>
              <ArrowRight className="w-3 h-3" />
            </motion.button>
            <span className="text-yellow-400 text-[9px] font-medium whitespace-nowrap">
              ← {promoText}
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
};
