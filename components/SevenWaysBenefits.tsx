"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

export default function SevenWaysBenefits() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#d7ecbe] py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-6xl py-16  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="absolute left-0  top-[100] ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-teal-800 mb-6">
            <span className="block">7 Ways how hospitality industry</span>
            <span className="block">can benefit by PEx Software™</span>
          </h2>
        </div>

        {/* Custom Positioned Cards Container */}
        <div className="relative w-full h-[1700px]">
          {/* --- Card 01 --- */}
          <motion.div
            className="absolute top-[-50] right-25 w-[40%]"
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
            className="absolute top-[300] left-0 w-180 "
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
                  <div className="text-yellow-400 absolute top-[-35] left-25 text-2xl font-semibold mb-3">
                    <div>Reduces Paperwork by 90%</div>
                  </div>
                  <div className="text-white text-2xl">
                    <div>Traditional HACCP / ISO 22000</div>
                    <div>systems demand heavy documentation.</div>
                    <div>
                      PEX digitizes and automates compliance records, cutting
                    </div>
                    <div>paperwork by up to 90% and freeing staff to focus on</div>
                    <div>service and guest experience.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[490] right-[-80] w-150"
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

          <motion.div
            className="absolute top-[700] left-[-80] w-150"
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
