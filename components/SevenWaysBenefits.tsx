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
            <p>7 Ways how hospitality industry</p>
            <p>can benefit by PEx Software™</p>
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
                  <h3 className="text-yellow-400 text-2xl font-semibold mb-3">
                    <p>Safeguards Brand </p>
                    <p>Reputation in the</p>
                    <p>Social Media Era</p>
                  </h3>
                  <p className="text-white text-2xl">
                    <p>In today&apos;s world, a single food</p>
                    <p>safety lapse can go viral within</p>
                    <p>minutes. PEX Software™</p>
                    <p>ensures every process is</p>
                    <p>monitored, documented, and</p>
                    <p>verified—preventing hotels from</p>
                    <p>reputational damage and</p>
                    <p>giving owners peace of mind.</p>
                  </p>
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
                  <h3 className="text-yellow-400 absolute top-[-35] left-25 text-2xl font-semibold mb-3">
                    <p>Reduces Paperwork by 90%</p>
                  </h3>
                  <p className="text-white text-2xl">
                    <p>Traditional HACCP / ISO 22000</p>
                    <p>systems demand heavy documentation.</p>
                    <p>
                      PEX digitizes and automates compliance records, cutting
                    </p>
                    <p>paperwork by up to 90% and freeing staff to focus on</p>
                    <p>service and guest experience.</p>
                  </p>
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
                  <h3 className="text-yellow-400 text-2xl ml-60 font-semibold mb-3">
                    <p>Automates</p>
                    <p>Monitoring</p>
                    <p>with IoT Devices</p>
                  </h3>
                  <p className="text-white text-2xl">
                    <p>Temperature checks, food traceability</p>
                    <p>logs, and other critical control points are</p>
                    <p>automatically captured through IoT</p>
                    <p>sensors. This eliminates manual errors,</p>
                    <p>ensures accuracy, and provides real-time</p>
                    <p>visibility into food safety operations.</p>
                  </p>
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
                  <h3 className="text-yellow-400 text-2xl font-semibold mb-3">
                    <p>Empowers Chefs and Hygiene Managers</p>
                  </h3>
                  <p className="text-white text-2xl">
                    <p>Instead of being burdened with compliance</p>
                    <p>paperwork, chefs and hygiene managers can</p>
                    <p>rely on visual dashboards and alerts.</p>
                    <p>This allows them to focus on delivering safe,</p>
                    <p>high-quality food while maintaining compliance</p>
                    <p>effortlessly.</p>
                  </p>
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
                  <h3 className="text-yellow-400 text-2xl font-semibold mb-3">
                    <p>Streamlines Audit Readiness</p>
                  </h3>
                  <p className="text-white text-2xl">
                    <p>Preparing for audits is often</p>
                    <p>stressful and time-consuming.</p>
                    <p>With PEX, all compliance data is</p>
                    <p>centralized, digital and instantly</p>
                    <p>retrievable making audits smooth,</p>
                    <p>transparent and stress-free.</p>
                  </p>
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
                  <h3 className="text-yellow-400 text-2xl ml-10 font-semibold mb-3">
                    <p>Aligns Food Safety with</p>
                    <p>Business Strategy</p>
                  </h3>
                  <p className="text-white text-2xl">
                    <p>PEX transforms food safety from a</p>
                    <p>&quot;compliance burden&quot; into a strategic</p>
                    <p>advantage. By integrating ISO 22000 into</p>
                    <p>daily operations, hotel owners can</p>
                    <p>demonstrate excellence, win guest trust, and</p>
                    <p>differentiate their brand in a competitive</p>
                    <p>marketplace.</p>
                  </p>
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
                  <h3 className="text-yellow-400 text-2xl font-semibold mb-3">
                    <p>Drives Continuous</p>
                    <p>Improvement</p>
                  </h3>
                  <p className="text-white text-2xl">
                    <p>With AI insights and</p>
                    <p>performance analytics, PEX</p>
                    <p>helps hotels identify trends,</p>
                    <p>predict risks, and implement</p>
                    <p>proactive improvements. This</p>
                    <p>ensures not just compliance,</p>
                    <p>but a culture of excellence and</p>
                    <p>innovation in food safety.</p>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
