"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HomeNavbar from "./HomeNavbar";
import InlineLanguageButton from "./InlineLanguageButton";

export default function HeroHeader() {
  const router = useRouter();
  return (
    <div className="flex items-center max-w-7xl justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
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
      ></motion.div>

      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-end h-11"
      >
        <div className="flex gap-4 items-center">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-1.5 bg-white/10 text-white px-3 py-1 rounded-full backdrop-blur-md border border-[#04afbc] hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl h-9 cursor-pointer"
          >
            <Home size={15} />
          </button>
          <HomeNavbar />
          <InlineLanguageButton />
        </div>
      </motion.div>
    </div>
  );
}
