import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

export default function ThreeKeyPointsSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-6xl py-16  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="absolute  top-[100] w-100 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-teal-800 mb-6">
            Three key points why you need to consider PEx Software™ as a
            solution for food safety
          </h2>
        </div>

        <div className="relative w-full h-[1700px]">
          <motion.div
            className="absolute top-[-50] right-0 w-[65%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative ">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/s7_c1.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />

                <div className="absolute w-[450px] top-[-10] p-10 inset-0 z-10 ">
                  <p className="text-yellow-400 text-lg  absolute  p-10 z-10  font-normal ">
                    Pain Point
                  </p>
                  <p className="text-white text-sm absolute top-30 font-normal ">
                    Heavy Documentation
                  </p>
                  <Image
                    src="/s7_p1.svg"
                    alt={t("benefit1Title")}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="absolute w-[570] top-15 left-65 p-10 inset-0 z-10 ">
                  <Image
                    src="/s7_c1_1.svg"
                    alt={t("benefit1Title")}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                  />

                  {/* <h3 className="text-yellow-400 text-base  font-normal mb-3">
                    {t("benefit1Title")}
                  </h3>
                  <p className="text-white text-sm  font-normal ">
                    {t("benefit1Desc")}
                  </p> */}
                </div>
              </div>
              <div className="absolute w-[110%] top-50  p-10 inset-0 z-10 ">
                <Image
                  src="/l1.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute w-[80%] top-100 left-[-60%] p-10 inset-0 z-10 ">
                <Image
                  src="/s7_c2.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute w-[70%] top-110 left-[-55%] p-10 inset-0 z-10 ">
                <Image
                  src="/s7_p2.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute w-[70%] top-170 left-[-55%] p-10 inset-0 z-10 ">
                <Image
                  src="/s7_c2_1.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute w-[70%] top-120 left-[8%] p-10 inset-0 z-10 ">
                <Image
                  src="/l2.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute w-[80%] top-140 left-[35%] p-10 inset-0 z-10 ">
                <Image
                  src="/s7_c3.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute w-[70%] top-150 left-[40%] p-10 inset-0 z-10 ">
                <Image
                  src="/s7_p2.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute w-[70%] top-210 left-[40%] p-10 inset-0 z-10 ">
                <Image
                  src="/s7_c3_1.svg"
                  alt={t("benefit1Title")}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
