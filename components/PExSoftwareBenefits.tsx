import { motion, useInView } from "framer-motion"; // Import framer-motion
import Image from "next/image"; // Import next/image
import React, { useRef } from "react"; // Import React

// --- Type Definitions ---
interface PainPointInfoProps {
  title: string;
  challenge: string;
  iconSrc: string;
}

interface SolutionInfoProps {
  solution: string;
  iconLabel: string;
}

interface CardLayoutColProps {
  number: string;
  painPointProps: PainPointInfoProps;
  solutionProps: SolutionInfoProps;
}

interface CardLayoutRowProps {
  number: string;
  painPointProps: PainPointInfoProps;
  solutionProps: SolutionInfoProps;
  className?: string; // Added className prop
}

// --- Animation Variants ---
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// --- Helper Component for "Pain Point" ---
export const PainPointInfo: React.FC<PainPointInfoProps> = ({
  title,
  challenge,
  iconSrc,
}) => (
  <>
    <div className="flex justify-between items-start">
      <div>
        <p className="text-yellow-400 text-sm">Pain Point</p>
        <h3 className="text-2xl">{title}</h3>
      </div>
      <div className="p-2 rounded-lg shrink-0">
        <Image
          src={iconSrc}
          alt={`${title} Icon`}
          className="w-10 h-10"
          width={40}
          height={40}
        />
      </div>
    </div>
    <div>
      <h4 className="text-yellow-400 text-sm mb-1">Traditional Challenge</h4>
      <p className="text-sm opacity-90">{challenge}</p>
    </div>
  </>
);

// --- Helper Component for "How PEx Solves It" ---
export const SolutionInfo: React.FC<SolutionInfoProps> = ({
  solution,
  iconLabel,
}) => (
  <>
    <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 w-10 h-10 rounded-lg flex items-center justify-center text-lg">
      {iconLabel}
    </div>
    <div>
      <h4 className="text-yellow-400 text-sm mb-1">How PEx Solves It</h4>
      <p className="text-sm opacity-90">{solution}</p>
    </div>
  </>
);

// --- Component for Card 1 (2-Column Layout) ---
export const CardLayoutCol: React.FC<CardLayoutColProps> = ({
  number,
  painPointProps,
  solutionProps,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="md:col-span-2"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative bg-teal-800 text-white p-6 rounded-3xl shadow-lg ring-2 ring-teal-600/50 flex items-end justify-center">
        {/* Number circle */}
        <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 w-12 h-12 flex items-center justify-center rounded-xl text-lg shadow-md">
          {number}
        </div>

        {/* Card 1 content (2-column grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center rounded-2xl items-end">
          {/* Left Column (Text) */}
          <div className="flex flex-col p-6 space-y-4 md:col-span-2">
            <PainPointInfo {...painPointProps} />
          </div>

          {/* Right Column (Inner Card) */}
          <div className="relative bg-teal-700 p-6 rounded-2xl items-center align-center flex flex-col">
            <SolutionInfo {...solutionProps} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Component for Cards 2 & 3 (2-Row Layout) ---
const CardLayoutRow: React.FC<CardLayoutRowProps> = ({
  number,
  painPointProps,
  solutionProps,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Set animation delay based on card number
  const delay = number === "02" ? 0.8 : 1.1;

  return (
    <motion.div
      ref={ref}
      className={`lg:col-span-1 ${className}`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="relative bg-teal-800 text-white p-6 rounded-3xl shadow-lg ring-2 ring-teal-600/50 min-h-[400px] flex flex-col space-y-4">
        {/* Number circle */}
        <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 w-12 h-12 flex items-center justify-center rounded-xl text-lg shadow-md">
          {number}
        </div>

        {/* Top Row (Text) */}
        <div className="flex flex-col space-y-4">
          <PainPointInfo {...painPointProps} />
        </div>

        {/* Bottom Row (Inner Card) */}
        <div className="relative bg-teal-700 p-4 rounded-2xl flex flex-col justify-center grow">
          <SolutionInfo {...solutionProps} />
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Exported Component ---
export default function PExSoftwareBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-white text-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section: Title and Numbered Buttons */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-8">
          <motion.h2
            className="text-4xl leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Three key points why you need to consider{" "}
            <span className="text-yellow-400">PEx Software™</span> as a solution
            for your business
          </motion.h2>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-xl text-lg hover:bg-yellow-300 transition-colors cursor-pointer">
              01
            </button>
            <button className="bg-gray-700 text-gray-200 py-3 px-6 rounded-xl text-lg hover:bg-gray-600 transition-colors cursor-pointer">
              02
            </button>
            <button className="bg-gray-700 text-gray-200 py-3 px-6 rounded-xl text-lg hover:bg-gray-600 transition-colors cursor-pointer">
              03
            </button>
          </motion.div>
        </div>

        {/* Right Section: Feature Cards (Now using our new components) */}
        <div className="w-full lg:w-2/3 relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {/* line one */}
          <motion.div
            className="absolute z-20 left-45 top-15 transform scale-150"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.7 }} // After Card 1 (delay 0.2)
          >
            <Image
              src="/l1.svg"
              alt="fhgvhf"
              className="w-100 h-100"
              width={64}
              height={80}
            />
          </motion.div>
          {/* line two */}
          <motion.div
            className="absolute z-20 left-90 top-100 transform scale-150"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 1.3 }} // After Card 2 (delay 0.8)
          >
            <Image
              src="/l2.svg"
              alt="fhgvhf"
              className="w-45 h-45"
              width={64}
              height={80}
            />
          </motion.div>
          {/* --- Animated SVG Connecting Lines (REMOVED) --- */}

          {/* --- Card 1 --- */}
          <CardLayoutCol
            number="01"
            painPointProps={{
              title: "Documentation Overload",
              challenge:
                "Paper-heavy, time-consuming, error-prone compliance records",
              iconSrc: "/Asset 6.svg",
            }}
            solutionProps={{
              solution:
                "Automated and AI powered paperless workflows to manage compliance",
              iconLabel: "ai",
            }}
          />

          {/* --- Card 2 --- */}
          <CardLayoutRow
            number="02"
            className="lg:mt-16" // Added top margin
            painPointProps={{
              title: "Lack of Strategic Value",
              challenge:
                "ISO seen as a tick-bix exercise disconnected from business goals",
              iconSrc: "/Asset 8.svg", // Assuming this is the correct icon
            }}
            solutionProps={{
              solution:
                "Includes management tools for CEO s for planning and monitoring strategic direction of business",
              iconLabel: "ai", // You can change this if it's an icon
            }}
          />

          {/* --- Card 3 --- */}
          <CardLayoutRow
            number="03"
            className="lg:mt-64" // Increased top margin even more (was lg:mt-48)
            painPointProps={{
              title: "Time consuming to maintain",
              challenge:
                "Manual documentation, missing records, last-minute scrambling",
              iconSrc: "/Asset 8.svg", // You used Asset 8 again, update if needed
            }}
            solutionProps={{
              solution:
                "Removes unproductive documentation work and waste activities",
              iconLabel: "ai",
            }}
          />
        </div>
      </div>
    </section>
  );
}
