"use client";

// Import motion from framer-motion
import { motion } from "framer-motion";
import type { FC } from "react"; // Added FC type
import ReusableShape from "./ReusableShape"; // Assuming this component exists in this path

// --- DECOUPLED CONTENT ---
// All text content is now pulled from here for simplicity.
const content = {
  section: {
    // bgImage removed, we'll use a solid color
    bgColor: "#d6ecbe", // This color is from your first screenshot
  },
  arrowIcon: {
    // No text content
  },
  caseStudyButton: {
    label: "Case Study",
    buttonText: "Read more",
  },
  column1: {
    bgImage: "/qs4 (4).webp",
    stat: "90%",
    statDescription: "document reduction",
    bannerText: "This Months Success Story",
  },
  column2: {
    title: "Businesses that have grown with us",
    card: {
      title: "Can a small company get ISO 9001 certification?", // Updated from image
      color: "#0e685b", // teal-800
    },
  },
  column3: {
    images: [
      { id: 1, src: "/qs4 (1).webp" },
      { id: 2, src: "/qs4 (2).webp" },
      { id: 3, src: "/qs4 (3).webp" },
    ],
    card: {
      title: "How PEx solution saved 1.6 million in the first quarter",
      color: "#1f2937", // gray-800
    },
  },
};
// --- END DECOUPLED CONTENT ---

// ArrowIcon component (unchanged, but included for completeness)
const ArrowIcon: FC = () => (
  <motion.div
    className="absolute top-0 right-0 bg-yellow-400 p-4 rounded-2xl text-gray-900"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.4 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  </motion.div>
);

// CaseStudyButton component (refactored to accept props)
const CaseStudyButton: FC<{ label: string; buttonText: string }> = ({
  label,
  buttonText,
}) => (
  <motion.div
    className="flex items-center space-x-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.5 }}
  >
    <span className="text-xs uppercase text-white">{label}</span>
    <button className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-3xl flex items-center space-x-1">
      <span>{buttonText}</span>
      <span>→</span>
    </button>
  </motion.div>
);

const SuccessStoriesSection: FC = () => {
  // const { t } = useTranslation(); // Removed this hook for simplicity
  return (
    <section
      className="w-full py-16 overflow-hidden"
      // Use the solid background color from our content object
      style={{ backgroundColor: content.section.bgColor }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3 items-stretch">
        {/* --- Column 1 (Man image) --- */}
        <motion.div
          className="relative text-white p-8 rounded-3xl bg-cover bg-center min-h-[450px] flex flex-col justify-between"
          style={{ backgroundImage: `url('${content.column1.bgImage}')` }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ArrowIcon />
          {/* Text content at the top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-6xl">{content.column1.stat}</h3>
            <p className="text-2xl">{content.column1.statDescription}</p>
          </motion.div>
          {/* Banner at the bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest">
              {content.column1.bannerText}
            </span>
          </motion.div>
        </motion.div>

        {/* --- Column 2 (Title + Teal Card) --- */}
        <motion.div
          className="flex flex-col space-y-6" // This spacing is good
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Title */}
          <h2 className="text-3xl text-gray-800">{content.column2.title}</h2>

          {/* The ISO 9001 Case Study Card (Teal) */}
          <ReusableShape
            // No fixed width or height. Added flex-1 to make it grow.
            width={400}
            color={content.column2.card.color}
            radius={28}
            cutoutWidth={100}
            cutoutHeight={110}
            cutoutBgColor={content.section.bgColor} // Use matching bg color
            cutoutPosition="top-right"
            cutoutRadius={20}
            // Use flex-1 to grow, and flex-col justify-end to push content to bottom
            className="relative flex flex-col justify-end  flex-1 text-white"
          >
            <div className="absolute top-[-80] right-0">
              {" "}
              <ArrowIcon />
            </div>
            {/* Content group at the bottom */}
            <div className="flex flex-col gap-4">
              <motion.h4
                className="text-2xl text-left max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                {content.column2.card.title}
              </motion.h4>
              <CaseStudyButton
                label={content.caseStudyButton.label}
                buttonText={content.caseStudyButton.buttonText}
              />
            </div>
          </ReusableShape>
        </motion.div>

        {/* --- Column 3 (Image grid + Dark Card) --- */}
        <motion.div
          className="flex flex-col space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* The 3-image grid (Unchanged) */}
          <div className="grid grid-cols-3 gap-4">
            {content.column3.images.map((image, index) => (
              <motion.div
                key={image.id}
                className="h-24 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('${image.src}')` }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              ></motion.div>
            ))}
          </div>

          {/* The PEx Solution Case Study Card (Dark Gray) */}
          <ReusableShape
            // No fixed width or height. Added flex-1.
            color={content.column3.card.color}
            radius={28}
            width={400}
            cutoutWidth={100}
            cutoutHeight={110}
            cutoutBgColor={content.section.bgColor} // Use matching bg color
            cutoutPosition="top-right"
            cutoutRadius={20}
            // Use flex-1 to grow, and flex-col justify-end to push content to bottom
            className="relative text-white flex flex-col justify-end  flex-1"
          >
            <div className="absolute top-[-60] right-0">
              {" "}
              <ArrowIcon />
            </div>
            {/* Content group at the bottom */}
            <div className="flex flex-col gap-4">
              <motion.h4
                className="text-2xl max-w-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                {content.column3.card.title}
              </motion.h4>
              <CaseStudyButton
                label={content.caseStudyButton.label}
                buttonText={content.caseStudyButton.buttonText}
              />
            </div>
          </ReusableShape>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
