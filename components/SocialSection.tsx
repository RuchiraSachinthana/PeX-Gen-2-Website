"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useTranslation } from "../context/LanguageProvider";
import ReusableShape from "./ReusableShape";

const posts = [
  { id: 1, img: "/social (1).webp" },
  { id: 2, img: "/social (2).webp" },
  { id: 3, img: "/social (3).webp" },
  { id: 4, img: "/social (4).webp" },
];

// --- ADDED ---
// Variants for staggering the avatars
const avatarContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const avatarItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
// --- END ---

export default function SocialSection() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-10 px-6 lg:px-20 bg-white relative  overflow-hidden">
      <Image
        src="/layer.webp"
        alt="Layer background"
        width={1500}
        height={0}
        className="absolute right-[-800] top-0 z-0 object-cover"
      />

      {/* Content with relative positioning to stay above the background layer */}
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-end relative justify-center">
          {/* Carousel */}
          <motion.div
            className="flex items-center relative gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* --- WRAPPED IN MOTION --- */}
            <motion.div
              className="text-center text-4xl absolute top-[-100] left-80  text-emerald-900 "
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {" "}
              {String(t("socialSection.title"))}
            </motion.div>
            
            <motion.button // --- CONVERTED ---
              onClick={() => scroll("left")}
              className="p-3 rounded-full hover:bg-emerald-50"
              whileHover={{ scale: 1.1 }} // --- ADDED ---
              whileTap={{ scale: 0.9 }} // --- ADDED ---
            >
              <ChevronLeft className="text-emerald-700" size={50} />
            </motion.button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4  scroll-smooth no-scrollbar w-[800px] lg:w-[900px]"
            >
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="overflow-hidden shadow-md hover:shadow-lg transition"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }} // --- ADDED ---
                >
                  <Image
                    src={post.img}
                    alt={`Social Post ${post.id}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <motion.button // --- CONVERTED ---
              onClick={() => scroll("right")}
              className="p-3 rounded-full hover:bg-emerald-50"
              whileHover={{ scale: 1.1 }} // --- ADDED ---
              whileTap={{ scale: 0.9 }} // --- ADDED ---
            >
              <ChevronRight className="text-emerald-700" size={50} />
            </motion.button>
          </motion.div>

          <motion.div
            className="text-left flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ReusableShape
              width={300}
              height={350}
              color="#0e685b"
              radius={28}
              cutoutWidth={100}
              cutoutHeight={100}
              // cutoutBgColor="#32af85"
              cutoutPosition="top-right"
              cutoutRadius={18}
              className="relative flex items-center justify-start"
            >
              {/* Rocket */}
              {/* --- WRAPPED IN MOTION --- */}
              <motion.div
                className="absolute top-[-30] right-[-20]"
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              >
                <Image
                  src="/Asset 27.svg"
                  alt="Rocket icon"
                  width={0}
                  height={0}
                  className="w-19 h-19"
                />
              </motion.div>

              {/* Content wrapper - left aligned */}
              <motion.div // --- WRAPPED CONTENT ---
                className="flex flex-col items-start  gap-1 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div>
                  <p className="text-yellow-400 text-secondary text-2xl ">
                    {String(t("socialSection.partnerSection.title1"))}
                  </p>
                  <p className="text-yellow-400 text-secondary text-2xl ">
                    {String(t("socialSection.partnerSection.title2"))}
                  </p>
                  <p className="text-yellow-400 text-secondary text-2xl ">
                    {String(t("socialSection.partnerSection.title3"))}
                  </p>
                  <p className="text-white text-sm mt-4">
                    {String(t("socialSection.partnerSection.followUs"))}
                  </p>
                </div>

                <motion.button // --- CONVERTED ---
                  className="bg-yellow-400 px-4 mt-2 hover:bg-yellow-500 text-gray-900 py-2 rounded-full shadow-lg transition-colors"
                  whileHover={{ scale: 1.05 }} // --- ADDED ---
                  whileTap={{ scale: 0.95 }} // --- ADDED ---
                >
                  <div className="flex justify-between text-md items-center gap-1">
                    {String(
                      t("socialSection.partnerSection.linkedinButton.platform")
                    )}
                    <span className="font-semibold">
                      {String(
                        t(
                          "socialSection.partnerSection.linkedinButton.followersCount"
                        )
                      )}
                    </span>
                    {String(
                      t(
                        "socialSection.partnerSection.linkedinButton.followersText"
                      )
                    )}
                  </div>
                </motion.button>

                {/* --- WRAPPED AVATARS --- */}
                <motion.div
                  className="flex gap-2 mt-4"
                  variants={avatarContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div // --- ADDED ---
                    className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
                    variants={avatarItemVariants} // --- ADDED ---
                  >
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 1"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div // --- ADDED ---
                    className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
                    variants={avatarItemVariants} // --- ADDED ---
                  >
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 2"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div // --- ADDED ---
                    className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
                    variants={avatarItemVariants} // --- ADDED ---
                  >
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 3"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div // --- ADDED ---
                    className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
                    variants={avatarItemVariants} // --- ADDED ---
                  >
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 3"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div // --- ADDED ---
                    className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
                    variants={avatarItemVariants} // --- ADDED ---
                  >
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 3"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </ReusableShape>
          </motion.div>
        </div>
      </div>
    </section>
  );
}