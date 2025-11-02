import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

export default function SevenWaysBenefits() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-linear-to-b from-green-200 via-green-100 to-green-50 py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-6xl py-16  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="absolute left-35  top-[100] w-100 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-teal-800 mb-6">
            {String(t("sevenWaysBenefits.title"))}
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
              <div className="absolute right-1  bg-yellow-400 text-teal-900 rounded-lg px-4 py-2 text-lg z-20">
                01
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/section_4_card1.svg"
                  alt={String(t("sevenWaysBenefits.benefits.0.title"))}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 p-6 z-10 flex flex-col justify-center items-left text-left">
                  <h3 className="text-yellow-400 text-base   mb-3">
                    {String(t("sevenWaysBenefits.benefits.0.title"))}
                  </h3>
                  <p className="text-white text-sm   ">
                    {String(t("sevenWaysBenefits.benefits.0.desc"))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Card 02 --- */}
          <motion.div
            className="absolute top-[400px] left-25 w-[50%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute top-[-3] left-[-15] bg-yellow-400 text-teal-900  rounded-lg px-4 py-2 text-lg z-20">
                02
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/section_4_card2.svg"
                  alt={String(t("sevenWaysBenefits.benefits.1.title"))}
                  width={280}
                  height={240}
                  className="w-full h-auto"
                />
                <div className="absolute top-5 inset-0 p-6 z-10 flex flex-col justify-center items-left text-left">
                  <h2 className="text-yellow-400   text-base mb-3">
                    {String(t("sevenWaysBenefits.benefits.1.title"))}
                  </h2>
                  <p className="text-white text-sm  ">
                    {String(t("sevenWaysBenefits.benefits.1.desc"))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[550px] right-25 w-[40%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -top- -right-2 bg-yellow-400 text-teal-900  rounded-lg px-4 py-2 text-lg z-20">
                03
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/section_4_card3.svg"
                  alt={String(t("sevenWaysBenefits.benefits.2.title"))}
                  width={280}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute mt-12 inset-0 p-6 z-10 flex flex-col justify-center items-right text-right">
                  <p className="text-yellow-400 text-base   mb-3">
                    {String(t("sevenWaysBenefits.benefits.2.title"))}
                  </p>
                  <p className="text-white text-sm  ">
                    {String(t("sevenWaysBenefits.benefits.2.desc"))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[700px] left-25 w-[40%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -top-2 -right-3 bg-yellow-400 text-teal-900  rounded-lg px-4 py-2 text-lg z-20">
                04
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/section_4_card4.svg"
                  alt={String(t("sevenWaysBenefits.benefits.3.title"))}
                  width={280}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 p-6 z-10 flex flex-col justify-center items-left text-left">
                  <h3 className="text-yellow-400 text-base   mb-3">
                    {String(t("sevenWaysBenefits.benefits.3.title"))}
                  </h3>
                  <p className="text-white text-sm  ">
                    {String(t("sevenWaysBenefits.benefits.3.desc"))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[950px] right-25 w-[40%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -top-1 -right-2 bg-yellow-400 text-teal-900  rounded-lg px-4 py-2 text-lg z-20">
                05
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/section_4_card5.svg"
                  alt={String(t("sevenWaysBenefits.benefits.4.title"))}
                  width={280}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 p-6 z-10 flex flex-col justify-center items-left text-left">
                  <h3 className="text-yellow-400 text-base   mb-3">
                    {String(t("sevenWaysBenefits.benefits.4.title"))}
                  </h3>
                  <p className="text-white text-sm  ">
                    {String(t("sevenWaysBenefits.benefits.4.desc"))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[1050px] left-25 w-[40%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative">
              <div className="absolute left-[-15] bg-yellow-400 text-teal-900  rounded-lg px-4 py-2 text-lg z-20">
                06
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/section_4_card6.svg"
                  alt={String(t("sevenWaysBenefits.benefits.5.title"))}
                  width={280}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 p-6 z-10 flex flex-col justify-center items-left text-left">
                  <h3 className="text-yellow-400 text-base   mb-3">
                    {String(t("sevenWaysBenefits.benefits.5.title"))}
                  </h3>
                  <p className="text-white text-sm  ">
                    {String(t("sevenWaysBenefits.benefits.5.desc"))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[1350px] right-25  w-[35%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="relative">
              <div className="absolute top-[2] -right-2 bg-yellow-400 text-teal-900  rounded-lg px-4 py-2 text-lg z-20">
                07
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/section_4_card7.svg"
                  alt={String(t("sevenWaysBenefits.benefits.6.title"))}
                  width={280}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 p-6 z-10 flex flex-col justify-center items-left text-left">
                  <h3 className="text-yellow-400 text-base   mb-3">
                    {String(t("sevenWaysBenefits.benefits.6.title"))}
                  </h3>
                  <p className="text-white text-sm  ">
                    {String(t("sevenWaysBenefits.benefits.6.desc"))}
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
