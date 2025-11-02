"use client";
"use client";
// Import motion from framer-motion
import { useTranslation } from "@/context/LanguageProvider";
import { motion } from "framer-motion";
import type { FC } from "react"; // Added FC type

// --- DECOUPLED CONTENT ---
const content = {
  section: {
    bgImage: "/qs4 (5).webp",
  },
  arrowIcon: {
    // No text content, but component is kept
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
      title: "Small company and how PEx solution",
      bgClass: "bg-teal-800", // Keep color class for styling
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
      bgClass: "bg-gray-800", // Keep color class for styling
    },
  },
};
// --- END DECOUPLED CONTENT ---

// I made a small component for the yellow arrow icon to avoid repeating code.
// Added motion to it for a pop-in animation
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
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  </motion.div>
);

// I also made a component for the "Read more" button.
// Added motion for a slide-up animation
const CaseStudyButton: FC<{ t: (key: string) => unknown }> = ({ t }) => (
  <motion.div
    className="flex items-center space-x-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.5 }}
  >
    <span className="text-xs  uppercase text-white">
      {String(t("successStoriesSection.caseStudyButton.label"))}
    </span>
    <button className="bg-yellow-400 text-gray-900  py-2 px-4 rounded-3xl flex items-center space-x-1">
      <span>
        {String(t("successStoriesSection.caseStudyButton.buttonText"))}
      </span>
      <span>→</span>
    </button>
  </motion.div>
);

const SuccessStoriesSection: FC = () => {
  const { t } = useTranslation();
  return (
    <section
      className="w-full py-16 bg-cover bg-center bg-no-repeat overflow-hidden" // Added overflow-hidden
      // This is your light green background from the target image
      style={{ backgroundImage: `url('${content.section.bgImage}')` }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3 items-stretch">
        {/* --- Column 1 (Was your div1) --- */}
        {/* We need to make this a 'relative' card to position text inside it */}
        <motion.div
          className="relative text-white p-8 rounded-3xl bg-cover bg-center min-h-[450px] flex flex-col justify-between"
          style={{ backgroundImage: `url('${content.column1.bgImage}')` }} // The man's photo
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
            <h3 className="text-6xl ">
              {String(t("successStoriesSection.column1.stat"))}
            </h3>
            <p className="text-2xl">
              {String(t("successStoriesSection.column1.statDescription"))}
            </p>
          </motion.div>
          {/* Banner at the bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="text-xs  uppercase tracking-widest">
              {String(t("successStoriesSection.column1.bannerText"))}
            </span>
          </motion.div>
        </motion.div>

        {/* --- Column 2 (Was your div2) --- */}
        {/* This column is a vertical stack: Title first, then the card */}
        <motion.div
          className="flex flex-col space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* The title is just text, not a red box */}
          <h2 className="text-3xl  text-gray-800">
            {String(t("successStoriesSection.column2.title"))}
          </h2>

          {/* The ISO 9001 Case Study Card */}
          <div
            className={`relative ${content.column2.card.bgClass} text-white p-6 rounded-3xl flex-grow flex flex-col justify-between`}
          >
            <ArrowIcon />
            {/* Using min-h to make sure it has space */}
            <div className="min-h-[150px] flex items-end justify-start">
              <motion.h4
                className="text-2xl text-left max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                {String(t("successStoriesSection.column2.card.title"))}
              </motion.h4>
            </div>
            <CaseStudyButton t={t} />
          </div>
        </motion.div>

        {/* --- Column 3 (Was your div3) --- */}
        {/* This structure was correct! A vertical stack of two items. */}
        <motion.div
          className="flex flex-col space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* The 3-image grid. I removed the 'bg-pink-200' container. */}
          <div className="grid grid-cols-3 gap-4">
            {content.column3.images.map((image, index) => (
              <motion.div
                key={image.id}
                className="h-24 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('${image.src}')` }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }} // Stagger image animation
              ></motion.div>
            ))}
          </div>

          {/* The PEx Solution Case Study Card */}
          <div
            className={`relative ${content.column3.card.bgClass} text-white p-6 rounded-3xl flex-grow flex flex-col justify-between`}
          >
            <ArrowIcon />
            <div className="min-h-[150px] flex items-end justify-start">
              <motion.h4
                className="text-2xl  max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                {String(t("successStoriesSection.column3.card.title"))}
              </motion.h4>
            </div>
            <CaseStudyButton t={t} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
