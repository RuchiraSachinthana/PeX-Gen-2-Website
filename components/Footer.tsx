"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Phone } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

// --- ADDED ---
// Variants for staggering list items
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time between each item
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};
// --- END ---

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-teal-700 text-white py-12 relative overflow-hidden">
      {/* Gradient Blurs */}
      <div
        className="absolute -right-20 -top-20 w-80 h-80 bg-teal-600/30 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-md"
          >
            <h3 className="text-lg mb-4 text-yellow-300">
              {String(t("footer.sections.contactUs"))}
            </h3>
            {/* --- ADDED motion.ul --- */}
            <motion.ul
              className="space-y-3 text-sm"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemVariants}>
                <p>Malik</p>
                <p className="flex items-center gap-2">
                  <Phone size={14} />
                  +94 777 347 122
                  <span className="flex gap-1 text-yellow-300">
                    <Globe size={12} />
                    <Globe size={12} />
                  </span>
                </p>
              </motion.li>
              <motion.li variants={itemVariants}>
                <p>Dinusha</p>
                <p className="flex items-center gap-2">
                  <Phone size={14} />
                  +94 777 420 504
                  <span className="flex gap-1 text-yellow-300">
                    <Globe size={12} />
                    <Globe size={12} />
                  </span>
                </p>
              </motion.li>
              <motion.li variants={itemVariants}>
                <p>Binuri</p>
                <p className="flex items-center gap-2">
                  <Phone size={14} />
                  +94 719 727 837
                  <span className="flex gap-1 text-yellow-300">
                    <Globe size={12} />
                    <Globe size={12} />
                  </span>
                </p>
              </motion.li>
            </motion.ul>

            <motion.div // --- ADDED motion ---
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logo.webp"
                alt="PEx Logo"
                width={170}
                height={40}
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg mb-4 text-yellow-300">
              {String(t("footer.sections.explore"))}
            </h3>
            {/* --- ADDED motion.ul --- */}
            <motion.ul
              className="space-y-2 text-sm"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemVariants}>
                <motion.a // --- ADDED motion ---
                  href="#"
                  className="hover:text-yellow-400"
                  whileHover={{ x: 5, color: "#facc15" }} // Tailwind yellow-400
                  whileTap={{ scale: 0.95 }}
                >
                  {String(t("footer.explore.pexTraining"))}
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a // --- ADDED motion ---
                  href="#"
                  className="hover:text-yellow-400"
                  whileHover={{ x: 5, color: "#facc15" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {String(t("footer.explore.isoTraining"))}
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg mb-4 text-yellow-300">
              {String(t("footer.sections.menu"))}
            </h3>
            {/* --- ADDED motion.ul --- */}
            <motion.ul
              className="space-y-2 text-sm"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemVariants}>
                <motion.a // --- ADDED motion ---
                  href="#"
                  className="hover:text-yellow-400"
                  whileHover={{ x: 5, color: "#facc15" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {String(t("footer.menu.blog"))}
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a // --- ADDED motion ---
                  href="#"
                  className="hover:text-yellow-400"
                  whileHover={{ x: 5, color: "#facc15" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {String(t("footer.menu.aboutUs"))}
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a // --- ADDED motion ---
                  href="#"
                  className="hover:text-yellow-400"
                  whileHover={{ x: 5, color: "#facc15" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {String(t("footer.menu.services"))}
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        {/* Right Section - Contact Form */}
        <motion.div
          className="bg-emerald-950/60 backdrop-blur-md px-10 py-8 rounded-4xl shadow-lg w-full max-w-md ml-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="text-white text-sm w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.company"))}
              </label>
              <input
                type="text"
                className="flex-1 px-4 py-3 rounded-full bg-[#0e685b] text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-white text-sm w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.name"))}
              </label>
              <input
                type="text"
                className="flex-1 px-4 py-3 rounded-full bg-[#0e685b] text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-white text-sm w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.email"))}
              </label>
              <input
                type="email"
                className="flex-1 px-4 py-3 rounded-full bg-[#0e685b] text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-white text-sm w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.country"))}
              </label>
              <div className="relative flex-1">
                <select
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-full bg-[#0e685b] text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none"
                >
                  <option value="Sri Lanka">
                    {String(t("footer.contactForm.countries.sriLanka"))}
                  </option>
                  <option value="India">
                    {String(t("footer.contactForm.countries.india"))}
                  </option>
                  <option value="Singapore">
                    {String(t("footer.contactForm.countries.singapore"))}
                  </option>
                  <option value="Other">
                    {String(t("footer.contactForm.countries.other"))}
                  </option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-white text-sm w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.phone"))}
              </label>
              <input
                type="text"
                className="flex-1 px-4 py-3 rounded-full bg-[#0e685b] text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <motion.button // --- ADDED motion ---
              type="submit"
              className="ml-auto flex items-center justify-center gap-2 bg-yellow-400 text-emerald-900 py-2 px-6 rounded-full hover:bg-yellow-300 transition font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {String(t("footer.contactForm.submitButton"))}
              <ArrowRight size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </footer>
  );
}