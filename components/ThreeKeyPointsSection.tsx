import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

// Main section for displaying three key points about PEx Software
export default function ThreeKeyPointsSection() {
  const { t } = useTranslation();

  // Render the main layout and animated content
  return (
    <div className="w-full bg-white py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-5xl py-16  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* left content */}
        <div className="absolute  top-[100] w-100 ">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-normal text-teal-800 mb-6">
            Three key points why <br /> you need to consider <br />
            PEx Software™ as a solution for food safety
          </h2>
          <div className="absolute flex gap-4  ">
            <button className="bg-yellow-400 top-40 right-100 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors">
              01
            </button>
            <button className="bg-yellow-400  top-40 right-100 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors">
              02
            </button>
            <button className="bg-yellow-400  top-40 right-100 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors">
              03
            </button>
          </div>
        </div>

        <div className="relative w-full h-[1700px]">
          <div className="absolute top-[-50] right-0 w-[65%]">
            <div className="relative ">
              <motion.div
                className="relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Image
                  src="/s7_c1.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />

                <motion.div
                  className="absolute w-[425px] left-[-30] top-[-25] p-10 inset-0 z-10 "
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className=" absolute top-7 left-58 text-gray-900 py-3 px-6  hover:bg-yellow-300 transition-colors">
                    <Image
                      src="/Asset 6.svg"
                      alt="Icon"
                      width={24}
                      height={24}
                      className="w-15 h-15"
                    />
                  </div>
                  <div className="absolute top-[25%] text-yellow-500 text-md left-[60]">
                    Pain Point
                  </div>
                  <div className="absolute top-[35%] font-semibold text-xl left-[60]">
                    Documentation overload
                  </div>
                  <div className="absolute top-[55%] text-yellow-500 text-md left-[60]">
                    Traditional Challenge
                  </div>
                  <div className="absolute top-[65%] text-xl left-[60]">
                    Paper-heavy, time-consuming, error-prone compliance records
                  </div>

                  <Image
                    src="/s7_p1.svg"
                    alt={t("benefit1Title")}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>

                <motion.div
                  className="absolute w-[65%] top-10 left-60 p-10 inset-0 z-10 "
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <button className="bg-yellow-400 absolute right-6 text-gray-900 py-3 px-6 rounded-xl text-xl font-semibold hover:bg-yellow-300 transition-colors">
                    ai
                  </button>
                  <Image
                    src="/s7_c1_1.svg"
                    alt={t("benefit1Title")}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>

              <div className="absolute z-10 top-[45%] text-yellow-500 text-md left-[400]">
                How PEx Solves It
              </div>
              <div className="absolute z-10 top-[55%] text-xl left-[400]">
                PEx streamlines documentation, making it faster and more
                accurate
              </div>

              <motion.div
                className="absolute w-[110%] top-50  p-10 inset-0 z-[-10]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Image
                  src="/l1.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <button className="bg-yellow-400 absolute top-40 right-100 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors">
                  02
                </button>
                <button className="bg-yellow-400 absolute top-30 right-0 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors">
                  01
                </button>
              </motion.div>

              <motion.div
                className="absolute w-[80%] top-100 left-[-60%] p-10 inset-0 z-10 "
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute top-25 left-20 text-yellow-500 text-md">
                  Pain Point
                </div>
                <div className="absolute top-30 left-20 ">
                  Lack of Strategic Value
                </div>
                <div className="absolute top-40 left-20 text-yellow-500 text-md">
                  Traditional Challenge
                </div>
                <div className="absolute top-45 left-20">
                  ISO seen as a tick-bix exercise disconnected <br /> from
                  business goals
                </div>

                <Image
                  src="/s7_c2.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute w-[70%] top-110 left-[-55%] p-10 inset-0 z-10 "
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button className=" absolute right-0 top-5 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors">
                  <Image
                    src="/Asset 8.svg"
                    alt={t("benefit1Title")}
                    width={24}
                    height={24}
                    className="w-15 h-15"
                  />
                </button>
                <Image
                  src="/s7_p2.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute w-[72%] top-160 left-[-55%] p-10 inset-0 z-10 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="absolute top-20 left-15 z-20 text-yellow-500 text-m">
                  <div className=" ">How PEx Solves It</div>
                  <div className="text-white">
                    PEx streamlines documentation,
                    <br />
                    making it faster and more accurate
                  </div>
                </div>
                <button className="bg-yellow-400 absolute right-8 text-gray-900 p-2 rounded-xl text-lg hover:bg-yellow-300 transition-colors">
                  <Image
                    src="/Asset 10.svg"
                    alt={t("benefit1Title")}
                    width={24}
                    height={24}
                    className="w-10 h-10"
                  />
                </button>
                <Image
                  src="/s7_c2_1.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute w-[70%] top-120 left-[7%] p-10 inset-0 z-10 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <button className="bg-yellow-400 absolute right-6 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors">
                  03
                </button>
                <Image
                  src="/l2.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute w-[80%] top-140 left-[30%] p-10 inset-0 z-10 "
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  <div className="absolute top-25 left-20 text-yellow-500 text-md">
                    Pain Point
                  </div>
                  <div className="absolute top-30 left-20 ">
                    Time consuming to maintain
                  </div>
                  <div className="absolute top-40 left-20 text-yellow-500 text-md">
                    Traditional Challenge
                  </div>
                  <div className="absolute top-45 left-20">
                    Manual documentation, missing records, <br /> last-minute
                    scrambling
                  </div>
                </div>
                <Image
                  src="/s7_c3.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute w-[70%] top-150 left-[35%] p-10 inset-0 z-10 "
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button className="absolute right-6 text-gray-900   rounded-xl text-lg hover:bg-yellow-300 transition-colors">
                  <Image
                    src="/Asset 11.svg"
                    alt={t("benefit1Title")}
                    width={24}
                    height={24}
                    className="w-15 h-15"
                  />
                </button>
                <Image
                  src="/s7_p2.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute w-[72%] top-200 left-[35%] p-10 inset-0 z-10 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="absolute top-25 left-15 z-20 text-yellow-500 text-m">
                  <div className=" ">How PEx Solves It</div>
                  <div className="text-white">
                    Removes unproductive documentation
                    <br />
                    work and waste activities
                  </div>
                </div>
                <button className="bg-yellow-400 font-sembold absolute right-7 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors">
                  ai
                </button>
                <Image
                  src="/s7_c3_1.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
