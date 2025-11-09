"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "../context/LanguageProvider";

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 12 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

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

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                <p className="font-medium mb-1">Malik</p>
                <div className="flex items-center">
                  <Phone size={14} className="text-yellow-300 flex-shrink-0 mr-1" />
                  <a href="tel:+94777347122" className="hover:text-yellow-300 transition-colors whitespace-nowrap inline-block min-w-[130px]">
                    +94 777 347 122
                  </a>
                  <span className="flex gap-1 text-yellow-300 items-center ml-1">
                    <a href="https://wa.me/94777347122" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      <WhatsAppIcon size={12} />
                    </a>
                    <a href="https://www.linkedin.com/in/malik-pex" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      <Linkedin size={12} />
                    </a>
                  </span>
                </div>
              </motion.li>
              <motion.li variants={itemVariants}>
                <p className="font-medium mb-1">Dinusha</p>
                <div className="flex items-center">
                  <Phone size={14} className="text-yellow-300 flex-shrink-0 mr-1" />
                  <a href="tel:+94777420504" className="hover:text-yellow-300 transition-colors whitespace-nowrap inline-block min-w-[130px]">
                    +94 777 420 504
                  </a>
                  <span className="flex gap-1 text-yellow-300 items-center ml-1">
                    <a href="https://wa.me/94777420504" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      <WhatsAppIcon size={12} />
                    </a>
                    <a href="https://www.linkedin.com/in/dinusha-pex" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      <Linkedin size={12} />
                    </a>
                  </span>
                </div>
              </motion.li>
              <motion.li variants={itemVariants}>
                <p className="font-medium mb-1">Binuri</p>
                <div className="flex items-center">
                  <Phone size={14} className="text-yellow-300 flex-shrink-0 mr-1" />
                  <a href="tel:+94719727837" className="hover:text-yellow-300 transition-colors whitespace-nowrap inline-block min-w-[130px]">
                    +94 719 727 837
                  </a>
                  <span className="flex gap-1 text-yellow-300 items-center ml-1">
                    <a href="https://wa.me/94719727837" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      <WhatsAppIcon size={12} />
                    </a>
                    <a href="https://www.linkedin.com/in/binuri-pex" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      <Linkedin size={12} />
                    </a>
                  </span>
                </div>
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
          className="bg-emerald-950/60 backdrop-blur-md px-10 py-4 rounded-4xl shadow-lg w-full max-w-md ml-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form className="space-y-2">
            <div className="flex items-center gap-1">
              <label className="text-white text-sm w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.company"))}
              </label>
              <input
                type="text"
                className="flex-1 px-4 py-3 rounded-full bg-[#0e685b] text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex items-center gap-1">
              <label className="text-white text-sm w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.name"))}
              </label>
              <input
                type="text"
                className="flex-1 px-4 py-3 rounded-full bg-[#0e685b] text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex items-center gap-1">
              <label className="text-white text-sm w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.email"))}
              </label>
              <input
                type="email"
                className="flex-1 px-4 py-3 rounded-full bg-[#0e685b] text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex items-center gap-1">
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

            <div className="flex items-center gap-1">
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