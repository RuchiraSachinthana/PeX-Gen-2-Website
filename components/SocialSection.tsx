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

export default function SocialSection() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 250;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden lg:block w-full py-10 px-6 lg:px-20 bg-white relative overflow-hidden">
        <Image
          src="/layer.webp"
          alt="Layer background"
          width={1500}
          height={0}
          className="absolute right-[-800px] top-0 z-0 object-cover"
        />

        {/* Content with relative positioning to stay above the background layer */}
        <div className="relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-end justify-center">
            {/* Carousel */}
            <motion.div
              className="flex items-center relative gap-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div
                className="text-center text-4xl absolute top-[-100px] left-80 text-emerald-900"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {String(t("socialSection.title"))}
              </motion.div>

              <motion.button
                onClick={() => scroll("left")}
                className="p-3 rounded-full hover:bg-emerald-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="text-emerald-700" size={50} />
              </motion.button>

              <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar w-[600px] lg:w-[700px]"
              >
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="overflow-hidden shadow-md hover:shadow-lg transition"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
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

              <motion.button
                onClick={() => scroll("right")}
                className="p-3 rounded-full hover:bg-emerald-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
                width={255}
                height={280}
                color="#0e685b"
                radius={28}
                cutoutWidth={100}
                cutoutHeight={100}
                cutoutPosition="top-right"
                cutoutRadius={18}
                className="relative flex items-center justify-start"
              >
                {/* Rocket */}
                <motion.div
                  className="absolute top-0 right-2"
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
                    className="w-16 h-16"
                  />
                </motion.div>

                {/* Content wrapper - left aligned */}
                <motion.div
                  className="flex flex-col items-start max-w-4xl gap-2 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div>
                    <p className="text-yellow-300 text-secondary text-xl">
                      {String(t("socialSection.partnerSection.title1"))}
                    </p>
                    <p className="text-yellow-300 text-secondary text-xl">
                      {String(t("socialSection.partnerSection.title2"))}
                    </p>
                    <p className="text-yellow-300 text-secondary text-xl">
                      {String(t("socialSection.partnerSection.title3"))}
                    </p>
                    <p className="text-white text-sm mt-4">
                      {String(t("socialSection.partnerSection.followUs"))}
                    </p>
                  </div>

                  <motion.button
                    className="bg-yellow-400 px-2 mt-2 hover:bg-yellow-500 text-gray-900 py-2 rounded-full shadow-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex justify-between text-sm px-2 items-center gap-2">
                      {String(
                        t(
                          "socialSection.partnerSection.linkedinButton.platform"
                        )
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

                  <motion.div
                    className="flex gap-1 mt-5"
                    variants={avatarContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <motion.div
                        key={num}
                        className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
                        variants={avatarItemVariants}
                      >
                        <Image
                          src="/avatar.jpg"
                          alt={`Avatar ${num}`}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </ReusableShape>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden w-full py-8 px-4 bg-white">
        <div className="max-w-md mx-auto">
          {/* Title */}
          <motion.h2
            className="text-[#0e685b] text-xl  mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {String(t("socialSection.title"))}
          </motion.h2>

          {/* Scrollable Posts Section */}
          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-scroll scroll-smooth no-scrollbar pb-2"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  className="flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={post.img}
                    alt={`Social Post ${post.id}`}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Scroll Right Button - Transparent Overlay */}
            <motion.button
              onClick={() => scroll("right")}
              className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-white via-white/50 to-transparent flex items-center justify-end pr-1 z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className=" ">
                <ChevronRight className="w-8 h-8 text-gray-900" />
              </div>
            </motion.button>
          </motion.div>

          {/* Partner Card */}
          <motion.div
            className="bg-[#0e685b] max-w-[380px] rounded-3xl mx-auto p-5 relative shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Icon Badge - Top Right */}
            <div className="absolute top-2 right-4 bg-yellow-400 ">
              <div className="w-9 h-9 flex items-center justify-center">
                <Image
                  src="/Asset 27.svg"
                  alt="Icon"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <div className="mb-4 pr-8">
              <h3 className="text-white max-w-[250px] text-base">
                {String(t("socialSection.partnerSection.title1"))}{" "}
                {String(t("socialSection.partnerSection.title2"))}{" "}
                {String(t("socialSection.partnerSection.title3"))}
              </h3>
            </div>

            {/* Bottom Section - Button and Avatars */}
            <div className="flex items-center justify-between">
              {/* LinkedIn Button */}
              <motion.button
                className="bg-yellow-400 px-3 py-1.5 rounded-full shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-1 text-[8px] font-medium text-gray-900">
                  <span>
                    {String(
                      t("socialSection.partnerSection.linkedinButton.platform")
                    )}
                  </span>
                  <span className="font-bold">
                    {String(
                      t(
                        "socialSection.partnerSection.linkedinButton.followersCount"
                      )
                    )}
                  </span>
                  <span>
                    {String(
                      t(
                        "socialSection.partnerSection.linkedinButton.followersText"
                      )
                    )}
                  </span>
                </div>
              </motion.button>

              {/* Avatars */}
              <motion.div
                className="flex gap-1"
                variants={avatarContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <motion.div
                    key={num}
                    className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden border border-white"
                    variants={avatarItemVariants}
                  >
                    <Image
                      src="/avatar.jpg"
                      alt={`Avatar ${num}`}
                      width={28}
                      height={28}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    </>
  );
}
