"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useTranslation } from "../context/LanguageProvider";

// Phone Icon Component (Custom filled design)
const PhoneIcon = ({
  size = 14,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 252.73 252.96"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M199.22,22.69c81.66,56.46,67.15,184.21-25.03,220.91C79.05,281.47-18.84,198.61,3.12,98.62,22.21,11.68,124.9-28.69,199.22,22.69ZM89.49,52.36c-1.95-1.28-7.55-1.62-9.97-1.5-15.65.78-27.78,14.05-28.59,29.44-2.09,39.69,23.22,81.8,55.84,102.55,21.28,13.54,72.43,32.18,90.07,6,4.08-6.06,7.03-17.71,4.13-24.63-1.42-3.39-4.35-2.78-7-3.44-11.62-2.92-24.23-6.31-35.96-8.48-3.36-.62-6.73-1.83-9.01,1.47-1.29,1.87-5.76,12.44-6.74,12.96-.64.34-6.45-1.82-7.6-2.33-20.29-8.92-39.13-28.16-47.05-48.76-.31-.8-1.68-4.2-1.54-4.65,2.55-2.93,13.99-6.06,15.06-9.26.29-.86.28-2.05.21-2.97-1.03-13.32-8.08-29.39-9.6-43.05-.18-1.01-1.45-2.81-2.26-3.34Z" />
  </svg>
);

// WhatsApp Icon Component (Custom filled design)
const WhatsAppIcon = ({
  size = 12,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 296.76 296.52"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g>
      <path d="M263.49,55.12c80.73,100.31,4.83,247.39-123.16,241.22C45.6,291.77-20.24,198.53,5.69,107.3,38.34-7.58,188.23-38.4,263.49,55.12ZM221.96,220.62c63.64-60.3,27.89-168.71-59.35-178.45C85.83,33.59,26.8,108.84,53.41,181.55c1.64,4.49,6.96,12.76,6.97,16.63,0,3.46-4,17.11-5.16,21.46-2.75,10.29-6.6,20.31-8.77,30.77,17.75-4.09,35.35-8.86,52.84-13.93,7.11,1.92,13.56,5.54,20.7,7.72,35.92,10.93,74.76,2.19,101.97-23.58Z" />
      <path d="M142.34,58.57c45.56-3.85,89.28,29.68,94.31,75.61,6.96,63.55-50.26,112.54-112.17,93.45-7.8-2.4-14.03-6.73-21.58-9.23l-28.54,7.73c-1.7.2-3.27.54-3.05-1.81.81-8.42,8.1-21.68,7.15-29.77-.56-4.74-6.75-13.7-8.76-19.01-19.74-52.21,16.88-112.25,72.63-116.96ZM176.52,161.9c-4.23,4.89-3.62,7.94-11.27,5.04-8.3-3.14-19.25-11.67-25.22-18.26-2.58-2.84-9.69-11.8-10.14-15.28-.69-5.31,8.37-7.2,8.39-14.33,0-3.51-6.29-19.02-8.27-22.58-3.76-6.75-13.83-6.58-18.97-1.6-23.74,22.99,7.88,62.43,27.26,77.25,15.45,11.83,47.9,29.16,65.44,13.64,4.03-3.57,9.85-14.65,6.1-19.36-3.17-3.98-19.22-9-24.26-12.01-3.57-.47-6.88,4.96-9.06,7.47Z" />
    </g>
  </svg>
);

// LinkedIn Icon Component (Custom filled design with rounded corners)
const LinkedInIcon = ({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
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

type ContactFormData = {
  company: string;
  name: string;
  email: string;
  country: string;
  phone: string;
  message: string;
};

const CONTACT_API_ENDPOINT = "https://pex-sooty.vercel.app/api/contact";

const initialFormState: ContactFormData = {
  company: "",
  name: "",
  email: "",
  country: "Sri Lanka",
  phone: "",
  message: "",
};

export default function Footer() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>(() => ({
    ...initialFormState,
  }));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const successFallback = String(t("footer.contactForm.successMessage"));
  const errorFallback = String(t("footer.contactForm.errorMessage"));
  const submitLabel = String(t("footer.contactForm.submitButton"));
  const sendingLabel = String(t("footer.contactForm.sending"));

  const handleChange =
    (field: keyof ContactFormData) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const response = await fetch(CONTACT_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data?.success) {
        throw new Error(data?.message ?? errorFallback);
      }

      setStatus({
        type: "success",
        message: data.message ?? successFallback,
      });

      setFormData(() => ({ ...initialFormState }));
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error && error.message
            ? error.message
            : errorFallback,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="footer" className="bg-gradient-to-r from-emerald-900 to-teal-700 text-white py-8 lg:py-12 relative overflow-hidden w-full">
      {/* Gradient Blurs */}
      <div
        className="absolute -right-20 -top-20 w-80 h-80 bg-teal-600/30 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        {/* Left Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg mb-4 text-yellow-300">
              {String(t("footer.sections.contactUs"))}
            </h3>
            {/* --- ADDED motion.ul --- */}
            <motion.ul
              className="space-y-3 text-sm flex flex-col items-center md:items-start"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemVariants}>
                <p className="font-medium mb-1">Malik</p>
                <div className="flex items-center">
                  <PhoneIcon
                    size={14}
                    className="flex-shrink-0 mr-1 text-yellow-300"
                  />
                  <a
                    href="tel:+94777347122"
                    className="hover:text-yellow-300 transition-colors whitespace-nowrap inline-block min-w-[130px]"
                  >
                    +94 777 347 122
                  </a>
                  <span className="flex gap-1 text-yellow-300 items-center ml-1">
                    <a
                      href="https://wa.me/94777347122"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                    >
                      <WhatsAppIcon size={16} className="text-yellow-300" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/malik-pex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                    >
                      <LinkedInIcon size={16} className="text-yellow-300" />
                    </a>
                  </span>
                </div>
              </motion.li>
              <motion.li variants={itemVariants}>
                <p className="font-medium mb-1">Dinusha</p>
                <div className="flex items-center">
                  <PhoneIcon
                    size={14}
                    className="flex-shrink-0 mr-1 text-yellow-300"
                  />
                  <a
                    href="tel:+94777420504"
                    className="hover:text-yellow-300 transition-colors whitespace-nowrap inline-block min-w-[130px]"
                  >
                    +94 777 420 504
                  </a>
                  <span className="flex gap-1 text-yellow-300 items-center ml-1">
                    <a
                      href="https://wa.me/94777420504"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                    >
                      <WhatsAppIcon size={16} className="text-yellow-300" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dinusha-pex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                    >
                      <LinkedInIcon size={16} className="text-yellow-300" />
                    </a>
                  </span>
                </div>
              </motion.li>
              <motion.li variants={itemVariants}>
                <p className="font-medium mb-1">Binuri</p>
                <div className="flex items-center">
                  <PhoneIcon
                    size={14}
                    className="flex-shrink-0 mr-1 text-yellow-300"
                  />
                  <a
                    href="tel:+94719727837"
                    className="hover:text-yellow-300 transition-colors whitespace-nowrap inline-block min-w-[130px]"
                  >
                    +94 719 727 837
                  </a>
                  <span className="flex gap-1 text-yellow-300 items-center ml-1">
                    <a
                      href="https://wa.me/94719727837"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                    >
                      <WhatsAppIcon size={16} className="text-yellow-300" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/binuri-pex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                    >
                      <LinkedInIcon size={16} className="text-yellow-300" />
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
            className="md:ml-10 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg mb-4 text-yellow-300">
              {String(t("footer.sections.explore"))}
            </h3>
            {/* --- ADDED motion.ul --- */}
            <motion.ul
              className="space-y-2 text-sm flex flex-col items-center md:items-start"
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
            className="text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg mb-4 text-yellow-300">
              {String(t("footer.sections.menu"))}
            </h3>
            {/* --- ADDED motion.ul --- */}
            <motion.ul
              className="space-y-2 text-sm flex flex-col items-center md:items-start"
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
          className="bg-emerald-950/60 backdrop-blur-md px-6 lg:px-10 py-4 rounded-4xl shadow-lg w-full max-w-md mx-auto lg:ml-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form className="space-y-3 lg:space-y-2" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <label className="text-white text-sm w-full sm:w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.company"))}
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange("company")}
                required
                autoComplete="organization"
                className="flex-1 px-4 py-3 rounded-full bg-[#0e685b] text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <label className="text-white text-sm w-full sm:w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.name"))}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange("name")}
                required
                autoComplete="name"
                className="flex-1 px-4 py-3 rounded-full bg-[#0e685b] text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <label className="text-white text-sm w-full sm:w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.email"))}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange("email")}
                required
                autoComplete="email"
                className="flex-1 px-4 py-3 rounded-full bg-[#0e685b] text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <label className="text-white text-sm w-full sm:w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.country"))}
              </label>
              <div className="relative flex-1">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange("country")}
                  required
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

            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <label className="text-white text-sm w-full sm:w-20 shrink-0">
                {String(t("footer.contactForm.placeholders.phone"))}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange("phone")}
                required
                autoComplete="tel"
                className="flex-1 px-4 py-3 rounded-full bg-[#0e685b] text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-1">
              <label className="text-white text-sm w-full sm:w-20 shrink-0 pt-2 sm:pt-1">
                {String(t("footer.contactForm.placeholders.message"))}
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange("message")}
                required
                className="flex-1 px-4 py-3 rounded-3xl bg-[#0e685b] text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                placeholder={String(t("footer.contactForm.placeholders.message"))}
              />
            </div>

            <motion.button // --- ADDED motion ---
              type="submit"
              className="ml-auto flex items-center justify-center gap-2 bg-yellow-400 text-emerald-900 py-2 px-6 rounded-full hover:bg-yellow-300 transition font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? sendingLabel : submitLabel}
              <ArrowRight size={18} />
            </motion.button>
            {status.type !== "idle" && (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-emerald-200" : "text-red-200"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </footer>
  );
}
