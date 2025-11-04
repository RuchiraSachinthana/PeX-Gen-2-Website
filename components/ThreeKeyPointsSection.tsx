import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

// Component: Main ThreeKeyPointsSection - Displays three key points about PEx Software with animations
export default function ThreeKeyPointsSection() {
  const { t } = useTranslation();

  // Get content from translations
  const mainTitle = {
    line1: String(t("threeKeyPointsSection.mainTitle.line1")),
    line2: String(t("threeKeyPointsSection.mainTitle.line2")),
    line3: String(t("threeKeyPointsSection.mainTitle.line3")),
  };

  const keyPoints = t("threeKeyPointsSection.keyPoints") as Array<{
    painPoint: {
      label: string;
      title: string;
      challengeLabel: string;
      challenge: string;
    };
    solution: {
      label: string;
      description: string;
    };
  }>;

  // Static images data (not translated)
  const imagesData = [
    {
      main: "/s7_c1.svg",
      pain: "/s7_p1.svg",
      solution: "/s7_c1_1.svg",
      icon: "/Asset 6.svg",
      line: "/l1.svg",
      aiPowered: true,
    },
    {
      main: "/s7_c2.svg",
      pain: "/s7_p2.svg",
      solution: "/s7_c2_1.svg",
      icon: "/Asset 8.svg",
      solutionIcon: "/Asset 10.svg",
      line: "/l2.svg",
      aiPowered: false,
    },
    {
      main: "/s7_c3.svg",
      pain: "/s7_p2.svg",
      solution: "/s7_c3_1.svg",
      icon: "/Asset 11.svg",
      line: "", // No line for third point
      aiPowered: true,
    },
  ];

  // Render the main layout and animated content
  return (
    // Component: Main Section Container - Full width white background with overflow hidden
    <div className="w-full bg-white pt-40 mb-[-250] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Component: Left Title Section - Displays the main title and navigation buttons */}
        <div className="absolute  top-[100] w-100 ">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl  text-teal-800 mb-6">
            {mainTitle.line1} <br /> {mainTitle.line2} <br />
            {mainTitle.line3}
          </h2>
          <div className="absolute flex gap-4  ">
            {keyPoints.map((point, index) => (
              <button
                key={index}
                className="bg-yellow-400 top-40 right-100 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors cursor-pointer"
              >
                {(index + 1).toString().padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>

        {/* Component: Right Animated Content Container - Contains all the animated key point sections */}
        <div className="relative w-full h-[1700px]">
          <div className="absolute top-[-50] right-0 w-[65%]">
            <div className="relative ">
              {/* Component: First Key Point Animation - Documentation overload section */}
              <motion.div
                className="relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Main image for the first key point */}
                <Image
                  src={imagesData[0].main}
                  alt={keyPoints[0].painPoint.title}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />

                {/* Component: First Key Point Pain Point Details - Left overlay with pain point info */}
                <motion.div
                  className="absolute w-[425px] left-[-30] top-[-25] p-10 inset-0 z-10 "
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className=" absolute top-7 left-58 text-gray-900 py-3 px-6  hover:bg-yellow-300 transition-colors">
                    <Image
                      src={imagesData[0].icon}
                      alt="Icon"
                      width={24}
                      height={24}
                      className="w-15 h-15"
                    />
                  </div>
                  <div className="absolute top-[25%] text-yellow-500 text-md left-[60]">
                    {keyPoints[0].painPoint.label}
                  </div>
                  <div className="absolute top-[35%]  text-xl left-[60]">
                    {keyPoints[0].painPoint.title}
                  </div>
                  <div className="absolute top-[55%] text-yellow-500 text-md left-[60]">
                    {keyPoints[0].painPoint.challengeLabel}
                  </div>
                  <div className="absolute top-[65%] text-xl left-[60]">
                    {keyPoints[0].painPoint.challenge}
                  </div>

                  <Image
                    src={imagesData[0].pain}
                    alt={keyPoints[0].painPoint.title}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>

                {/* Component: First Key Point Solution Details - Right overlay with solution info */}
                <motion.div
                  className="absolute w-[65%] top-10 left-60 p-10 inset-0 z-10 "
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {imagesData[0].aiPowered && (
                    <button className="bg-yellow-400 absolute right-6 text-gray-900 py-3 px-6 rounded-xl text-xl hover:bg-yellow-300 transition-colors cursor-pointer">
                      ai
                    </button>
                  )}
                  <Image
                    src={imagesData[0].solution}
                    alt={keyPoints[0].solution.description}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Component: First Key Point Solution Description - Text overlay for solution */}
              <div className="absolute z-10 top-[45%] text-yellow-500 text-md left-[400]">
                {keyPoints[0].solution.label}
              </div>
              <div className="absolute z-10 top-[55%] text-xl left-[400]">
                {keyPoints[0].solution.description}
              </div>

              {/* Component: Decorative Line and Navigation - Connecting line with navigation buttons */}
              <motion.div
                className="absolute w-[110%] top-50  p-10 inset-0 z-[-10]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Image
                  src={imagesData[0].line}
                  alt="Decorative line"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <button className="bg-yellow-400 absolute top-40 right-100 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors cursor-pointer">
                  02
                </button>
                <button className="bg-yellow-400 absolute top-30 right-0 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors cursor-pointer">
                  01
                </button>
              </motion.div>

              {/* Component: Second Key Point Animation - Lack of Strategic Value section */}
              <motion.div
                className="absolute w-[80%] top-100 left-[-60%] p-10 inset-0 z-10 "
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute top-25 left-20 text-yellow-500 text-md">
                  {keyPoints[1].painPoint.label}
                </div>
                <div className="absolute top-30 left-20 text-xl">
                  {keyPoints[1].painPoint.title}
                </div>
                <div className="absolute top-40 left-20 text-yellow-500 text-md">
                  {keyPoints[1].painPoint.challengeLabel}
                </div>
                <div className="absolute top-45 left-20 text-xl max-w-xs break-words">
                  {keyPoints[1].painPoint.challenge}
                </div>

                <Image
                  src={imagesData[1].main}
                  alt={keyPoints[1].painPoint.title}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Component: Second Key Point Icon Button - Icon overlay for second point */}
              <motion.div
                className="absolute w-[70%] top-110 left-[-55%] p-10 inset-0 z-10 "
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button className=" absolute right-0 top-5 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors cursor-pointer">
                  <Image
                    src={imagesData[1].icon}
                    alt="Icon"
                    width={24}
                    height={24}
                    className="w-15 h-15"
                  />
                </button>
                <Image
                  src={imagesData[1].pain}
                  alt={keyPoints[1].painPoint.title}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Component: Second Key Point Solution Overlay - Solution details for second point */}
              <motion.div
                className="absolute w-[72%] top-160 left-[-55%] p-10 inset-0 z-10 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="absolute top-12 left-15 z-20 text-yellow-500 text-m">
                  <div className=" ">{keyPoints[1].solution.label}</div>
                  <div className="text-white text-xl  max-w-xs break-words">
                    {keyPoints[1].solution.description}
                  </div>
                </div>
                <button className="bg-yellow-400 absolute right-8 text-gray-900 p-2 rounded-xl text-lg hover:bg-yellow-300 transition-colors cursor-pointer">
                  <Image
                    src={imagesData[1].solutionIcon || ""}
                    alt="Solution icon"
                    width={24}
                    height={24}
                    className="w-10 h-10"
                  />
                </button>
                <Image
                  src={imagesData[1].solution}
                  alt={keyPoints[1].solution.description}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Component: Second Key Point Navigation - Navigation button for third point */}
              <motion.div
                className="absolute w-[70%] top-120 left-[7%] p-10 inset-0 z-10 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <button className="bg-yellow-400 absolute right-6 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors cursor-pointer">
                  03
                </button>
                <Image
                  src={imagesData[1].line}
                  alt="Decorative line"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Component: Third Key Point Animation - Time consuming to maintain section */}
              <motion.div
                className="absolute w-[80%] top-140 left-[30%] p-10 inset-0 z-10 "
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  <div className="absolute top-25 left-20 text-yellow-500 text-md">
                    {keyPoints[2].painPoint.label}
                  </div>
                  <div className="absolute top-30 text-xl left-20 ">
                    {keyPoints[2].painPoint.title}
                  </div>
                  <div className="absolute top-40 left-20 text-yellow-500 text-md">
                    {keyPoints[2].painPoint.challengeLabel}
                  </div>
                  <div className="absolute top-45 text-xl  max-w-xs break-words left-20">
                    {keyPoints[2].painPoint.challenge}
                  </div>
                </div>
                <Image
                  src={imagesData[2].main}
                  alt={keyPoints[2].painPoint.title}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Component: Third Key Point Icon Button - Icon overlay for third point */}
              <motion.div
                className="absolute w-[70%] top-150 left-[35%] p-10 inset-0 z-10 "
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button className="absolute right-6 text-gray-900   rounded-xl text-lg hover:bg-yellow-300 transition-colors cursor-pointer">
                  <Image
                    src={imagesData[2].icon}
                    alt="Icon"
                    width={24}
                    height={24}
                    className="w-15 h-15"
                  />
                </button>
                <Image
                  src={imagesData[2].pain}
                  alt={keyPoints[2].painPoint.title}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Component: Third Key Point Solution Overlay - Solution details for third point */}
              <motion.div
                className="absolute w-[72%] top-200 left-[35%] p-10 inset-0 z-10 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="absolute top-25 left-15 z-20 text-yellow-500 text-m">
                  <div className=" ">{keyPoints[2].solution.label}</div>
                  <div className="text-white  max-w-xs text-xl break-words">
                    {keyPoints[2].solution.description}
                  </div>
                </div>
                {imagesData[2].aiPowered && (
                  <button className="bg-yellow-400  absolute right-7 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors cursor-pointer">
                    ai
                  </button>
                )}
                <Image
                  src={imagesData[2].solution}
                  alt={keyPoints[2].solution.description}
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
