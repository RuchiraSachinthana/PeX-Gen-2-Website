"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useTranslation } from "../context/LanguageProvider";
import ReusableShape from "./ReusableShape";

interface MobileSocialCardProps {
  className?: string;
}

/**
 * MobileSocialCard
 *
 * A mobile-optimized partner card using ReusableShape. It mirrors the
 * SocialSection partner card but designed for small screens. Desktop
 * layout remains unaffected; use this with `block lg:hidden` where needed.
 */
const MobileSocialCard: React.FC<MobileSocialCardProps> = ({
  className = "",
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className={`w-full flex items-center justify-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <ReusableShape
        width={800}
        height={850}
        color="#0e685b"
        radius={36}
        cutoutWidth={100}
        cutoutHeight={100}
        cutoutBgColor="#ffffff"
        borderWidth={1}
        borderColor="#d4ebbe"
        cutoutPosition="top-right"
        cutoutRadius={20}
        className=""
      >
        {/* Rocket icon */}
        <div className="absolute top-0 right-0">
          <Image src="/Asset 5.svg" alt="Rocket" width={90} height={90} />
        </div>

        {/* Content */}
        <div className="flex flex-col items-left text-left gap-3 pt-6">
          <h3 className="text-white text-lg leading-snug max-w-[180] wrap-break-word">
            {String(t("socialSection.partnerSection.title"))}
          </h3>
          <p className="text-white text-base">
            {String(t("socialSection.partnerSection.followUs"))}
          </p>

          <button className="bg-yellow-400 px-5 py-2 rounded-full text-gray-900 text-sm font-medium hover:bg-yellow-500 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 ">
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
                t("socialSection.partnerSection.linkedinButton.followersText")
              )}
            </div>
          </button>

          <div className="flex gap-2 mt-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden"
              >
                <Image
                  src="/avatar.jpg"
                  alt={`Avatar ${i}`}
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </ReusableShape>
    </motion.div>
  );
};

export default MobileSocialCard;
