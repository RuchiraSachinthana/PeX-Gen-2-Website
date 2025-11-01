"use client";
import SectionTwoCard from "./SectionTwoCard";
import { motion } from "framer-motion"; // 1. IMPORT framer-motion

// 2. DEFINE ANIMATION VARIANTS
// Parent container variant: will orchestrate children animations
const containerVariants = {
  hidden: { opacity: 1 }, // Parent is visible, but children are hidden
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Time between each child's animation
    },
  },
};

// Child item variant: how each item will animate
const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // Start hidden and 30px down
  visible: {
    opacity: 1,
    y: 0, // Animate to visible and original position
    transition: { duration: 0.6 },
  },
};

// --- DECOUPLED CONTENT ---
// All user-facing text and data is now in one place for easy translation/maintenance.
const content = {
  title: "Watch video how PEx Software™ can help your business improve productivity",
  cards: [
    {
      id: "updates",
      iconSrc: "/bell_icon.svg",
      iconWidth: 50,
      iconHeight: 50,
      title: "Get the latest updates",
      subtitle: "Stay informed with notifications",
      buttonText: "Sign up",
    },
    {
      id: "demo",
      iconSrc: "/rocket_icon.svg",
      iconWidth: 50,
      iconHeight: 50,
      title: "Request Demo",
      subtitle: "See PEx Software in action",
      buttonText: "Book Now",
    },
  ],
  video: {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "PEx Software Productivity Video",
  },
};
// --- END DECOUPLED CONTENT ---


export default function SectionTwo() {
  return (
    <div
      // 3. ADD overflow-hidden: clips the animation as it slides in
      className="py-10 text-gray-900 bg-[#bae2e0] px-6 overflow-hidden"
    >
      <motion.div // 4. MAKE THIS A motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 justify-around items-center"
        // 5. APPLY VARIANTS & TRIGGERS
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Animate when this element enters the viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
      >
        {/* Left section - This is the FIRST staggered child */}
        <motion.div // 6. APPLY ITEM VARIANT
          className="flex flex-col gap-10"
          variants={itemVariants}
        >
          {/* Top row - Content */}
          <div className="text-left">
            <h2 className="text-2xl mb-4 text-primary">
              {/* Using decoupled content */}
              {content.title}
            </h2>
          </div>

          {/* Bottom row - 2 columns */}
          <div className="grid grid-cols-2 gap-4">
            {/* Mapping over decoupled card data */}
            {content.cards.map((card) => (
              <SectionTwoCard
                key={card.id}
                iconSrc={card.iconSrc}
                iconWidth={card.iconWidth}
                iconHeight={card.iconHeight}
                title={card.title}
                subtitle={card.subtitle}
                buttonText={card.buttonText}
              />
            ))}
          </div>
        </motion.div>

        {/* Right section - This is the SECOND staggered child */}
        <motion.div // 7. APPLY ITEM VARIANT
          className="mt-10 lg:mt-0 flex items-center justify-center relative"
          variants={itemVariants}
        >
          {/* Yellow glow */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-40 scale-[1.2]
                       bg-[radial-gradient(circle,rgba(254,240,138,0.8)_0%,rgba(254,240,138,0)_70%)]"
          ></div>

          {/* Video Wrapper */}
          <div
            className="relative w-4/5 rounded-3xl shadow-2xl p-4 z-10
                       bg-[linear-gradient(to_bottom_right,#0e685b,#10b981,#0e685b)]"
          >
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src={content.video.url} // Using decoupled content
                title={content.video.title} // Using decoupled content
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
