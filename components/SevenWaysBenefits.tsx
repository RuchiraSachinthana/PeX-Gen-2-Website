"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

export default function SevenWaysBenefits() {
  const { t } = useTranslation();

  // Data extracted for the Mobile View Loop to ensure clean code
  const benefitsData = [
    {
      id: "01",
      title: "Safeguards Brand Reputation in the Social Media Era",
      desc: "In today's world, a single food safety lapse can go viral within minutes. PEX Software™ ensures every process is monitored, documented, and verified—preventing hotels from reputational damage and giving owners peace of mind.",
    },
    {
      id: "02",
      title: "Reduces Paperwork by 90%",
      desc: "Traditional HACCP / ISO 22000 systems demand heavy documentation. PEX digitizes and automates compliance records, cutting paperwork by up to 90% and freeing staff to focus on service and guest experience.",
    },
    {
      id: "03",
      title: "Automates Monitoring with IoT Devices",
      desc: "Temperature checks, food traceability logs, and other critical control points are automatically captured through IoT sensors. This eliminates manual errors, ensures accuracy, and provides real-time visibility into food safety operations.",
    },
    {
      id: "04",
      title: "Empowers Chefs and Hygiene Managers",
      desc: "Instead of being burdened with compliance paperwork, chefs and hygiene managers can rely on visual dashboards and alerts. This allows them to focus on delivering safe, high-quality food while maintaining compliance effortlessly.",
    },
    {
      id: "05",
      title: "Streamlines Audit Readiness",
      desc: "Preparing for audits is often stressful and time-consuming. With PEX, all compliance data is centralized, digital and instantly retrievable making audits smooth, transparent and stress-free.",
    },
    {
      id: "06",
      title: "Aligns Food Safety with Business Strategy",
      desc: 'PEX transforms food safety from a "compliance burden" into a strategic advantage. By integrating ISO 22000 into daily operations, hotel owners can demonstrate excellence, win guest trust, and differentiate their brand in a competitive marketplace.',
    },
    {
      id: "07",
      title: "Drives Continuous Improvement",
      desc: "With AI insights and performance analytics, PEX helps hotels identify trends, predict risks, and implement proactive improvements. This ensures not just compliance, but a culture of excellence and innovation in food safety.",
    },
  ];

  return (
    <div className="w-full md:bg-[#d7ecbe]  sm:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- Responsive Header --- */}
        {/* Adjusted to be relative/centered on mobile, and absolute on desktop to match your original design */}
        <div className="relative mb-16 text-center lg:text-left lg:absolute lg:left-0 lg:top-[100px] lg:mb-0 z-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-teal-800 font-semibold ">
            <span className="block">7 Ways how hospitality industry</span>
            <span className="block">can benefit by PEx Software™</span>
          </h2>
        </div>

        {/* =========================================
            MOBILE VIEW (Visible on screens < 1024px)
           ========================================= */}
        <div className="lg:hidden max-w-[380px] mx-auto flex flex-col gap-4 pb-10">
          {benefitsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* The Green Card */}
              <div
                className={`rounded-3xl p-8 text-left shadow-lg relative z-10 ${
                  parseInt(item.id) % 2 === 1 ? "bg-teal-800" : "bg-teal-600"
                }`}
              >
                {/* The Yellow Number Badge (Matches Screenshot) */}
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-2xl  w-16 h-16 flex items-center justify-center rounded-xl z-20 border-4 border-white">
                  {item.id}
                </div>

                {/* Content */}
                <h3 className="text-[#facc15] text-xl font-bold mb-4 leading-tight pr-8">
                  {item.title}
                </h3>
                <p className="text-white text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            DESKTOP VIEW (Visible on screens >= 1024px)
            (Your original code, untouched inside this wrapper)
           ========================================= */}
        <div className="hidden lg:block relative w-full h-[1700px]">
          {/* --- Card 01 --- */}
          <motion.div
            className="absolute top-[-50px] right-25 w-[40%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative ">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/Asset 36.svg"
                  alt={String(t("sevenWaysBenefits.benefits.0.title"))}
                  width={310}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 p-6 z-10 flex flex-col top-3 items-left text-left">
                  <div className="text-yellow-400 text-2xl font-semibold mb-3">
                    <div>Safeguards Brand </div>
                    <div>Reputation in the</div>
                    <div>Social Media Era</div>
                  </div>
                  <div className="text-white text-2xl">
                    <div>In today&apos;s world, a single food</div>
                    <div>safety lapse can go viral within</div>
                    <div>minutes. PEX Software™</div>
                    <div>ensures every process is</div>
                    <div>monitored, documented, and</div>
                    <div>verified—preventing hotels from</div>
                    <div>reputational damage and</div>
                    <div>giving owners peace of mind.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Card 02 --- */}
          <motion.div
            className="absolute top-[300px] left-0 w-180 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/Asset 35.svg"
                  alt={String(t("sevenWaysBenefits.benefits.1.title"))}
                  width={0}
                  height={0}
                  className="w-full h-auto"
                />
                <div className="absolute top-18 inset-0 p-6 z-10 flex flex-col justify-center items-left text-left">
                  <div className="text-yellow-400 absolute top-[-35px] left-25 text-2xl font-semibold mb-3">
                    <div>Reduces Paperwork by 90%</div>
                  </div>
                  <div className="text-white text-2xl">
                    <div>Traditional HACCP / ISO 22000</div>
                    <div>systems demand heavy documentation.</div>
                    <div>
                      PEX digitizes and automates compliance records, cutting
                    </div>
                    <div>
                      paperwork by up to 90% and freeing staff to focus on
                    </div>
                    <div>service and guest experience.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Card 03 --- */}
          <motion.div
            className="absolute top-[490px] right-[-80px] w-150"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/Asset 37.svg"
                  alt={String(t("sevenWaysBenefits.benefits.2.title"))}
                  width={280}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute left-10 text-yellow-400 inset-0 p-6 z-10 flex flex-col justify-center items-right text-left">
                  <div className="text-yellow-400 text-2xl ml-60 font-semibold mb-3">
                    <div>Automates</div>
                    <div>Monitoring</div>
                    <div>with IoT Devices</div>
                  </div>
                  <div className="text-white text-2xl">
                    <div>Temperature checks, food traceability</div>
                    <div>logs, and other critical control points are</div>
                    <div>automatically captured through IoT</div>
                    <div>sensors. This eliminates manual errors,</div>
                    <div>ensures accuracy, and provides real-time</div>
                    <div>visibility into food safety operations.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Card 04 --- */}
          <motion.div
            className="absolute top-[700px] left-[-80px] w-150"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/Asset 38.svg"
                  alt={String(t("sevenWaysBenefits.benefits.3.title"))}
                  width={280}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 p-6 z-10 flex flex-col justify-center items-left text-left">
                  <div className="text-yellow-400 text-2xl font-semibold mb-3">
                    <div>Empowers Chefs and Hygiene Managers</div>
                  </div>
                  <div className="text-white text-2xl">
                    <div>Instead of being burdened with compliance</div>
                    <div>paperwork, chefs and hygiene managers can</div>
                    <div>rely on visual dashboards and alerts.</div>
                    <div>This allows them to focus on delivering safe,</div>
                    <div>high-quality food while maintaining compliance</div>
                    <div>effortlessly.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Card 05 --- */}
          <motion.div
            className="absolute top-[950px] right-15 w-120"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative ">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/Asset 39.svg"
                  alt={String(t("sevenWaysBenefits.benefits.4.title"))}
                  width={280}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 p-6 left-5 z-10 flex flex-col justify-center items-left text-left">
                  <div className="text-yellow-400 text-2xl font-semibold mb-3">
                    <div>Streamlines Audit Readiness</div>
                  </div>
                  <div className="text-white text-2xl">
                    <div>Preparing for audits is often</div>
                    <div>stressful and time-consuming.</div>
                    <div>With PEX, all compliance data is</div>
                    <div>centralized, digital and instantly</div>
                    <div>retrievable making audits smooth,</div>
                    <div>transparent and stress-free.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Card 06 --- */}
          <motion.div
            className="absolute top-[1200px] left-0 w-150"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/Asset 40.svg"
                  alt={String(t("sevenWaysBenefits.benefits.5.title"))}
                  width={280}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 left-10 p-6 z-10 flex flex-col justify-center items-left text-left">
                  <div className="text-yellow-400 text-2xl ml-10 font-semibold mb-3">
                    <div>Aligns Food Safety with</div>
                    <div>Business Strategy</div>
                  </div>
                  <div className="text-white text-2xl">
                    <div>PEX transforms food safety from a</div>
                    <div>&quot;compliance burden&quot; into a strategic</div>
                    <div>advantage. By integrating ISO 22000 into</div>
                    <div>daily operations, hotel owners can</div>
                    <div>demonstrate excellence, win guest trust, and</div>
                    <div>differentiate their brand in a competitive</div>
                    <div>marketplace.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Card 07 --- */}
          <motion.div
            className="absolute top-[1340px] right-10  w-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/Asset 41.svg"
                  alt={String(t("sevenWaysBenefits.benefits.6.title"))}
                  width={280}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 p-6 z-10 flex flex-col justify-center items-left text-left">
                  <div className="text-yellow-400 text-2xl font-semibold mb-3">
                    <div>Drives Continuous</div>
                    <div>Improvement</div>
                  </div>
                  <div className="text-white text-2xl">
                    <div>With AI insights and</div>
                    <div>performance analytics, PEX</div>
                    <div>helps hotels identify trends,</div>
                    <div>predict risks, and implement</div>
                    <div>proactive improvements. This</div>
                    <div>ensures not just compliance,</div>
                    <div>but a culture of excellence and</div>
                    <div>innovation in food safety.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
