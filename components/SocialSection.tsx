"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useTranslation } from "../context/LanguageProvider";

const posts = [
  { id: 1, img: "/social (1).webp" },
  { id: 2, img: "/social (2).webp" },
  { id: 3, img: "/social (3).webp" },
  { id: 4, img: "/social (4).webp" },
];

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
    <section
      style={{
        backgroundImage: "url('/qs4 (6).webp')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
      }}
      className="w-full py-12 px-6 lg:px-20 bg-white relative  overflow-hidden"
    >
      {/* Layer image on the right side */}

      {/* Content with relative positioning to stay above the background layer */}
      <div className="relative z-10">
        <motion.h2
          className="text-center text-3xl  text-emerald-900 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {String(t("socialSection.title"))}
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Carousel */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full hover:bg-emerald-50"
            >
              <ChevronLeft className="text-emerald-700" size={50} />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar w-[800px] lg:w-[900px]"
            >
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="min-w-[280px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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

            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full hover:bg-emerald-50"
            >
              <ChevronRight className="text-emerald-700" size={50} />
            </button>
          </motion.div>

          <motion.div
            className="col-span-2 text-left flex flex-col  gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className=" p-4 rounded-3xl min-h-80  bg-contain bg-right bg-no-repeat relative flex items-center justify-end"
              style={{ backgroundImage: "url('/Asset 4.svg')" }}
            >
              <div className="absolute top-0 right-0">
                <Image
                  src="/Asset 5.svg"
                  alt="Rocket icon"
                  width={50}
                  height={50}
                  className="w-15 h-15"
                />
              </div>

              {/* Content wrapper - right aligned */}
              <div className="flex flex-col items-start justify-center gap-4 text-left">
                {/* Title and Subtitle */}
                <div>
                  <h3 className="text-white text-secondary text-2xl mb-4">
                    {String(t("socialSection.partnerSection.title"))}
                  </h3>
                  <p className="text-white text-2xl mt-6">
                    {String(t("socialSection.partnerSection.followUs"))}
                  </p>
                </div>

                {/* Yellow Button */}
                <button className="bg-yellow-400 px-6 hover:bg-yellow-500 text-gray-900 py-2 rounded-full shadow-lg transition-colors">
                  <div className="flex justify-between items-center gap-2">
                    {String(
                      t("socialSection.partnerSection.linkedinButton.platform")
                    )}
                    <span>
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
                </button>

                {/* Bottom Round Avatars */}
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 1"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 2"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src="/avatar.jpg"
                      alt="Avatar 3"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
