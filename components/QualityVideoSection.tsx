"use client";
import { motion } from "framer-motion";
import { useTranslation } from "../context/LanguageProvider";
import SectionTwoCard from "./SectionTwoCard";

// DEFINE ANIMATION VARIANTS
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function QualityVideoSection() {
  const { t } = useTranslation();

  // DECOUPLED CONTENT using translations
  const content = {
    title: t("qualityVideoSection.title"),
    cards: [
      {
        id: "updates",
        iconSrc: "/bell_icon.svg",
        iconWidth: 50,
        iconHeight: 50,
        title: t("qualityVideoSection.cards.updates.title"),
        subtitle: t("qualityVideoSection.cards.updates.subtitle"),
        buttonText: t("qualityVideoSection.cards.updates.buttonText"),
      },
      {
        id: "demo",
        iconSrc: "/rocket_icon.svg",
        iconWidth: 50,
        iconHeight: 50,
        title: t("qualityVideoSection.cards.demo.title"),
        subtitle: t("qualityVideoSection.cards.demo.subtitle"),
        buttonText: t("qualityVideoSection.cards.demo.buttonText"),
      },
    ],
    video: {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: t("qualityVideoSection.video.title"),
    },
  };
  return (
    <div className="py-10 text-gray-900 bg-[#bae2e0] px-6 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 justify-around items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left section */}
        <motion.div className="flex flex-col gap-10" variants={itemVariants}>
          <div className="text-left">
            <h2 className="text-2xl mb-4 text-primary">{String(content.title)}</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {content.cards.map((card) => (
              <SectionTwoCard
                key={card.id}
                iconSrc={card.iconSrc}
                iconWidth={card.iconWidth}
                iconHeight={card.iconHeight}
                title={String(card.title)}
                subtitle={String(card.subtitle)}
                buttonText={String(card.buttonText)}
              />
            ))}
          </div>
        </motion.div>

        {/* Right section - Video */}
        <motion.div
          className="mt-10 lg:mt-0 flex items-center justify-center relative"
          variants={itemVariants}
        >
          {/* Yellow glow */}
          <div className="absolute inset-0 rounded-full blur-3xl opacity-40 scale-[1.2] bg-[radial-gradient(circle,rgba(254,240,138,0.8)_0%,rgba(254,240,138,0)_70%)]"></div>

          {/* Video Wrapper */}
          <div className="relative w-4/5 rounded-3xl shadow-2xl p-4 z-10 bg-[linear-gradient(to_bottom_right,#0e685b,#10b981,#0e685b)]">
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src={content.video.url}
                title={String(content.video.title)}
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
