"use client";

import { motion } from "framer-motion";

const PexGenPhilosopySection = () => {
  return (
    <>
      {/* Desktop Version */}
      <div
        className="hidden lg:block w-full bg-cover bg-center bg-no-repeat relative py-16 text-white before:absolute before:inset-0 before:bg-black before:opacity-50"
        style={{ backgroundImage: "url('/Asset 62.webp')" }}
      >
        <div className="max-w-6xl mx-auto flex justify-around gap-10 divide-x divide-white divide-opacity-25 relative z-10">
          {/* Philosophy Section */}
          <motion.div
            className="flex-1 text-center z-10 px-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our Philosophy:
            </motion.h2>
            <motion.p
              className="text-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We believe compliance should empower, <br /> not burden—your
              business. <br />
              That&apos;s why we built PEx Gen2™
            </motion.p>
          </motion.div>

          {/* Commitment Section */}
          <motion.div
            className="flex-1 text-center px-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2
              className="text-4xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Our Commitment:
            </motion.h2>
            <motion.p
              className="text-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              We build tools that empower your team, <br /> protect your brand,
              and deliver results.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Tablet Version */}
      <div
        className="hidden md:block lg:hidden w-full bg-cover bg-center bg-no-repeat relative py-12 text-white before:absolute before:inset-0 before:bg-black before:opacity-50"
        style={{ backgroundImage: "url('/Asset 62.webp')" }}
      >
        <div className="max-w-2xl mx-auto flex justify-around gap-6 divide-x divide-white divide-opacity-25 relative z-10">
          {/* Philosophy Section */}
          <motion.div
            className="flex-1 text-center z-10 px-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our Philosophy:
            </motion.h2>
            <motion.p
              className="text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We believe compliance should empower, not burden—your
              business. That&apos;s why we built PEx Gen2™
            </motion.p>
          </motion.div>

          {/* Commitment Section */}
          <motion.div
            className="flex-1 text-center px-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2
              className="text-2xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Our Commitment:
            </motion.h2>
            <motion.p
              className="text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              We build tools that empower your team, protect your brand,
              and deliver results.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Mobile Version */}
      <div
        className="md:hidden w-full bg-cover bg-center bg-no-repeat relative py-12 text-white before:absolute before:inset-0 before:bg-black before:opacity-50"
        style={{ backgroundImage: "url('/Asset 62.webp')" }}
      >
        <div className="max-w-[370px] mx-auto relative z-10 space-y-8">
          {/* Philosophy Section - Row 1 */}
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our Philosophy:
            </motion.h2>
            <motion.p
              className="text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We believe compliance should empower, <br /> not burden—your business.
              That&apos;s why we built PEx Gen2™
            </motion.p>
          </motion.div>

          {/* Commitment Section - Row 2 */}
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2
              className="text-2xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Our Commitment:
            </motion.h2>
            <motion.p
              className="text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              We build tools that empower your team, protect your brand, and
              deliver results.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PexGenPhilosopySection;
