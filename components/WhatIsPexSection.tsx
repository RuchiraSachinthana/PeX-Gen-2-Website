"use client";
import { motion } from "framer-motion";

export default function WhatIsPexSection() {
  return (
    <section className="flex flex-col items-center bg-white justify-center py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl  text-gray-900 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What is PEx Gen2™ ?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-800 max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          PEx Gen2™ is a next-generation compliance platform that automates ISO
          9001 and ISO 22000
          <br />
          workflows, eliminates up to 90% of manual documentation and integrates
          AI for predictive insights.
          <br />
          Built by auditors and lean management experts, it helps CEOs, Quality
          Managers, Chefs and Hygiene
          <br />
          Officers move beyond compliance into performance leadership.
        </motion.p>
      </div>
    </section>
  );
}
