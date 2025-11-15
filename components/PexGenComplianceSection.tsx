"use client";

import { motion } from "framer-motion";

export default function PexGenComplianceSection() {
  return (
    <section className="flex flex-col items-center  bg-white justify-center py-16 px-4 text-center">
      <div className="max-w-6xl bg-white">
        {/* Line 1: Heading */}
        <motion.h1
          className="text-4xl  text-teal-700 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your Compliance Journey, Reimagined.
        </motion.h1>

        {/* Line 2: Main Heading (Part 1) */}
        <motion.h2
          className="text-3xl font-bold text-teal-700 uppercase "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          FROM ISO COMPLIANCE BURDEN TO BUSINESS ADVANTAGE
        </motion.h2>

        {/* Line 3: Main Heading (Part 2) */}
        <motion.h2
          className="text-3xl font-bold text-teal-700 uppercase mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          WITH PEX SOFTWARE GEN 2™
        </motion.h2>

        {/* Lines 4-7: Paragraph with forced line breaks */}
        <motion.p
          className="text-xl text-gray-800 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          PEx Gen2™ is an AI-powered, paperless compliance and performance
          management system designed for
          <br />
          organizations certified under ISO 9001 Quality Management and ISO
          22000 Food Safety Management
          <br />
          systems—or those preparing for certification. It transforms
          documentation pain points into operational
          <br />
          clarity, empowering teams to focus on what matters: quality, safety,
          and growth.
        </motion.p>
      </div>
    </section>
  );
}
