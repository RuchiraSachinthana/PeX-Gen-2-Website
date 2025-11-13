"use client";

import { motion } from "framer-motion";

const PexGenPhilosopySection = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat relative py-16 text-white before:absolute before:inset-0 before:bg-black before:opacity-50" // Added padding and default text color
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
            That’s why we built PEx Gen2™
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
  );
};

export default PexGenPhilosopySection;
