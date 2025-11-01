"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HomeNavbar from "./HomeNavbar";
import InlineLanguageButton from "./InlineLanguageButton";

export default function HeroHeader() {
  return (
    <div className="flex items-center justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center h-11"
      >
        <Image
          src="/logo.webp"
          alt="PEX Logo"
          width={140}
          height={72}
          className="h-10 w-auto sm:h-11"
          priority
        />
      </motion.div>

      {/* Language Selector - Centered */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="shrink-0 flex items-center h-11"
      >
        <InlineLanguageButton />
      </motion.div>

      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-end h-11"
      >
        <HomeNavbar />
      </motion.div>
    </div>
  );
}
