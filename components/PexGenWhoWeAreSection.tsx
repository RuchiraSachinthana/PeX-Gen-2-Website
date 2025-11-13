"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PexGenWhoWeAreSection = () => {
  return (
    <section className="w-full relative">
      {/* White Background Section - Full Width */}
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - 2/3 space */}
            <motion.div
              className="lg:col-span-2 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl  text-teal-800 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Who We Are
              </motion.h2>
              <motion.p
                className="text-gray-700 text-md leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                We are Swiss Advantage Systems (Pvt) Ltd, a business process
                re-engineering company in <br />
                operation for over 24 years. We are experts in business process
                management and ISO compliance <br />
                systems and is a transformation partner to over 200
                organisations across Asia.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Yellow Background Section - Full Width */}
      <div className="w-full relative bg-yellow-300 py-16 px-4">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - 2/3 space */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Year Experience Card */}
                <motion.div
                  className="bg-teal-700 rounded-2xl p-6 text-white shadow-lg"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl text-yellow-400 mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    +24
                  </motion.div>
                  <div className="text-2xl ">YEAR</div>
                  <div className="text-2xl ">EXPERIENCE</div>
                </motion.div>

                {/* ISO Projects Card */}
                <motion.div
                  className="bg-teal-700 rounded-2xl p-6 text-white shadow-lg"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="text-4xl text-yellow-400 md:text-5xl  mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    +200
                  </motion.div>
                  <div className="text-2xl ">ISO PROJECTS</div>
                  <div className="text-2xl ">COMPLETED</div>
                </motion.div>

                {/* Employees Trained Card */}
                <motion.div
                  className="bg-teal-700 rounded-2xl p-6 text-white shadow-lg"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl text-yellow-400 mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    +10,000
                  </motion.div>
                  <div className="text-2xl ">EMPLOYEES</div>
                  <div className="text-2xl ">TRAINED</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute top-0 right-10 "
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Image
          width={450}
          height={0}
          src="/Asset 61.webp"
          alt="PEx Software Video Thumbnail"
        />
      </motion.div>
      {/* Award Caption */}
      <motion.div
        className="text-center top-115 right-40 absolute mt-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <p className="text-sm md:text-base  text-gray-800">
          Winner of the National Best Quality <br /> Software Award in Sri
          Lanka.
        </p>
      </motion.div>
    </section>
  );
};

export default PexGenWhoWeAreSection;
