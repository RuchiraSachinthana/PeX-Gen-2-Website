import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

// Content data structure - decoupled from the component
const SECTION_CONTENT = {
  mainTitle: {
    line1: "Three key points why",
    line2: "you need to consider",
    line3: "PEx Software™ as a solution for food safety",
  },
  keyPoints: [
    {
      id: "01",
      painPoint: {
        label: "Pain Point",
        title: "Documentation overload",
        challengeLabel: "Traditional Challenge",
        challenge:
          "Paper-heavy, time-consuming, error-prone compliance records",
      },
      solution: {
        label: "How PEx Solves It",
        description:
          "PEx streamlines documentation, making it faster and more accurate",
      },
      images: {
        main: "/s7_c1.svg",
        pain: "/s7_p1.svg",
        solution: "/s7_c1_1.svg",
        icon: "/Asset 6.svg",
        line: "/l1.svg",
      },
      aiPowered: true,
    },
    {
      id: "02",
      painPoint: {
        label: "Pain Point",
        title: "Lack of Strategic Value",
        challengeLabel: "Traditional Challenge",
        challenge:
          "ISO seen as a tick-bix exercise disconnected from business goals",
      },
      solution: {
        label: "How PEx Solves It",
        description:
          "PEx streamlines documentation, making it faster and more accurate",
      },
      images: {
        main: "/s7_c2.svg",
        pain: "/s7_p2.svg",
        solution: "/s7_c2_1.svg",
        icon: "/Asset 8.svg",
        solutionIcon: "/Asset 10.svg",
        line: "/l2.svg",
      },
      aiPowered: false,
    },
    {
      id: "03",
      painPoint: {
        label: "Pain Point",
        title: "Time consuming to maintain",
        challengeLabel: "Traditional Challenge",
        challenge:
          "Manual documentation, missing records, last-minute scrambling",
      },
      solution: {
        label: "How PEx Solves It",
        description:
          "Removes unproductive documentation work and waste activities",
      },
      images: {
        main: "/s7_c3.svg",
        pain: "/s7_p2.svg",
        solution: "/s7_c3_1.svg",
        icon: "/Asset 11.svg",
      },
      aiPowered: true,
    },
  ],
};

// Main section for displaying three key points about PEx Software
export default function ThreeKeyPointsSection() {
  const { t } = useTranslation();
  const content = SECTION_CONTENT;

  // Render the main layout and animated content
  return (
    <div className="w-full bg-white pt-40 mb-[-250] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* left content */}
        <div className="absolute  top-[100] w-100 ">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-normal text-teal-800 mb-6">
            {content.mainTitle.line1} <br /> {content.mainTitle.line2} <br />
            {content.mainTitle.line3}
          </h2>
          <div className="absolute flex gap-4  ">
            {content.keyPoints.map((point) => (
              <button
                key={point.id}
                className="bg-yellow-400 top-40 right-100 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors"
              >
                {point.id}
              </button>
            ))}
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
                      src={content.keyPoints[0].images.icon}
                      alt="Icon"
                      width={24}
                      height={24}
                      className="w-15 h-15"
                    />
                  </div>
                  <div className="absolute top-[25%] text-yellow-500 text-md left-[60]">
                    {content.keyPoints[0].painPoint.label}
                  </div>
                  <div className="absolute top-[35%] font-semibold text-xl left-[60]">
                    {content.keyPoints[0].painPoint.title}
                  </div>
                  <div className="absolute top-[55%] text-yellow-500 text-md left-[60]">
                    {content.keyPoints[0].painPoint.challengeLabel}
                  </div>
                  <div className="absolute top-[65%] text-xl left-[60]">
                    {content.keyPoints[0].painPoint.challenge}
                  </div>

                  <Image
                    src={content.keyPoints[0].images.pain}
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
                  {content.keyPoints[0].aiPowered && (
                    <button className="bg-yellow-400 absolute right-6 text-gray-900 py-3 px-6 rounded-xl text-xl font-semibold hover:bg-yellow-300 transition-colors">
                      ai
                    </button>
                  )}
                  <Image
                    src={content.keyPoints[0].images.solution}
                    alt={t("benefit1Title")}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>

              <div className="absolute z-10 top-[45%] text-yellow-500 text-md left-[400]">
                {content.keyPoints[0].solution.label}
              </div>
              <div className="absolute z-10 top-[55%] text-xl left-[400]">
                {content.keyPoints[0].solution.description}
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
                  {content.keyPoints[1].painPoint.label}
                </div>
                <div className="absolute top-30 left-20 ">
                  {content.keyPoints[1].painPoint.title}
                </div>
                <div className="absolute top-40 left-20 text-yellow-500 text-md">
                  {content.keyPoints[1].painPoint.challengeLabel}
                </div>
                <div className="absolute top-45 left-20">
                  {content.keyPoints[1].painPoint.challenge}
                </div>

                <Image
                  src={content.keyPoints[1].images.main}
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
                    src={content.keyPoints[1].images.icon}
                    alt={t("benefit1Title")}
                    width={24}
                    height={24}
                    className="w-15 h-15"
                  />
                </button>
                <Image
                  src={content.keyPoints[1].images.pain}
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
                  <div className=" ">{content.keyPoints[1].solution.label}</div>
                  <div className="text-white">
                    {content.keyPoints[1].solution.description}
                  </div>
                </div>
                <button className="bg-yellow-400 absolute right-8 text-gray-900 p-2 rounded-xl text-lg hover:bg-yellow-300 transition-colors">
                  <Image
                    src={content.keyPoints[1].images.solutionIcon || ""}
                    alt={t("benefit1Title")}
                    width={24}
                    height={24}
                    className="w-10 h-10"
                  />
                </button>
                <Image
                  src={content.keyPoints[1].images.solution}
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
                    {content.keyPoints[2].painPoint.label}
                  </div>
                  <div className="absolute top-30 left-20 ">
                    {content.keyPoints[2].painPoint.title}
                  </div>
                  <div className="absolute top-40 left-20 text-yellow-500 text-md">
                    {content.keyPoints[2].painPoint.challengeLabel}
                  </div>
                  <div className="absolute top-45 left-20">
                    {content.keyPoints[2].painPoint.challenge}
                  </div>
                </div>
                <Image
                  src={content.keyPoints[2].images.main}
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
                    src={content.keyPoints[2].images.icon}
                    alt={t("benefit1Title")}
                    width={24}
                    height={24}
                    className="w-15 h-15"
                  />
                </button>
                <Image
                  src={content.keyPoints[2].images.pain}
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
                  <div className=" ">{content.keyPoints[2].solution.label}</div>
                  <div className="text-white">
                    {content.keyPoints[2].solution.description}
                  </div>
                </div>
                {content.keyPoints[2].aiPowered && (
                  <button className="bg-yellow-400 font-sembold absolute right-7 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors">
                    ai
                  </button>
                )}
                <Image
                  src={content.keyPoints[2].images.solution}
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
