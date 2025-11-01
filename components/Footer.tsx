"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r  from-emerald-900 to-teal-700 text-white px-8 py-12 lg:px-20 relative overflow-hidden">
      {/* Decorative gradient shapes from the image */}
      <div
        className="absolute -right-20 -top-20 w-80 h-80 bg-teal-600/30 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-0 top-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg mb-4 text-yellow-300">
            Contact us
          </h3>
          <ul className="space-y-3 text-sm">
            {/* Contact 1 */}
            <li>
              <p className="">Malik</p>
              <p className="flex items-center gap-2">
                <Phone size={14} />
                +94 777 347 122
                <span className="flex gap-1 text-yellow-300">
                  <Globe size={12} />
                  <Globe size={12} />
                </span>
              </p>
            </li>
            {/* Contact 2 */}
            <li>
              <p >Dinusha</p>
              <p className="flex items-center gap-2">
                <Phone size={14} />
                +94 777 420 504
                <span className="flex gap-1 text-yellow-300">
                  <Globe size={12} />
                  <Globe size={12} />
                </span>
              </p>
            </li>
            {/* Contact 3 */}
            <li>
              <p >Binuri</p>
              <p className="flex items-center gap-2">
                <Phone size={14} />
                +94 719 727 837
                <span className="flex gap-1 text-yellow-300">
                  <Globe size={12} />
                  <Globe size={12} />
                </span>
              </p>
            </li>
          </ul>

          {/* Logo */}
          <div className="mt-8">
            <Image
              src="/logo.webp"
              alt="PEx Logo"
              width={170}
              height={40}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Explore */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg mb-4 text-yellow-300">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                PEx Training
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                ISO Training
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Menu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg  mb-4 text-yellow-300">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Services
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-emerald-950/70 backdrop-blur-sm p-6 rounded-2xl lg:max-w-sm lg:ml-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Company"
              className="w-full px-4 py-3 rounded-lg bg-emerald-800/60 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg bg-emerald-800/60 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 rounded-lg bg-emerald-800/60 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {/* Custom Select Wrapper */}
            <div className="relative">
              <select
                defaultValue=""
                className="w-full px-4 py-3 rounded-lg bg-emerald-800/60 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none"
              >
                <option value="" disabled>
                  Country
                </option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="India">India</option>
                <option value="Singapore">Singapore</option>
                <option value="Other">Other</option>
              </select>
              {/* Chevron Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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

            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-3 rounded-lg bg-emerald-800/60 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-emerald-900  py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              E-mail us
              <ArrowRight size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </footer>
  );
}
