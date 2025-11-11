"use client"; // Required for Framer Motion
import { motion } from "framer-motion"; // Import motion
import Image from "next/image";

export default function KeyPointsIntroSection() {
  return (
    <>
      {/* Desktop Version - Hidden on mobile */}
      <div className="hidden lg:block w-full bg-white pt-30 pb-190 relative overflow-hidden">
        <div className="max-w-6xl mx-auto p-6 relative px-4 sm:px-6 lg:px-8 mb-100 z-10">
          <motion.div
            className="absolute left-0 text-[#0e685b] top-0 w-full h-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="text-left text-4xl justify-center leading-12">
              <p>Three key points why</p>
              <p>you need to consider</p>
              <p>PEx Software™</p>
              <p>as a solution for</p>
              <p>your business</p>
              <Image
                src="/Asset 17.svg"
                alt="Background Decoration"
                width={200}
                height={0}
                className="mt-5"
              />
            </div>
          </motion.div>
          {/* first card */}
          <motion.div
            className="right-15 top-0 absolute"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Image
              src="/Asset 12.svg"
              alt="Background Decoration"
              width={700}
              height={0}
              className=""
            />
            <div className="absolute top-10 left-12 text-left text-lg justify-center leading-8">
              <p className="text-yellow-500 text-sm font-bold">Pain Point</p>
              <div className="text-2xl font-semibold text-white">
                <p>Documentation</p>
                <p>Overload</p>
              </div>
            </div>
            <div className="absolute top-35 left-12 text-left text-lg justify-center leading-8">
              <p className="text-yellow-500 text-sm font-bold">
                Traditional Challenge
              </p>
              <div className="text-2xl text-white">
                <p>Paper-heavy,</p>
                <p>time-consuming,</p>
                <p>error-prone</p>
                <p>compliance records</p>
              </div>
            </div>
            <div className="absolute top-35 left-95 text-left text-lg justify-center leading-8">
              <p className="text-yellow-500 text-sm font-bold">
                How PEx Solves It
              </p>
              <div className="text-2xl text-white">
                <p>Automated and</p>
                <p>Ai powered paperless</p>
                <p>workflows to</p>
                <p>manage compliance</p>
              </div>
            </div>
          </motion.div>
          {/* line 1 */}
          <motion.div
            className="absolute right-[-15] top-52"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
              src="/Asset 13.svg"
              alt="Background Decoration"
              width={900}
              height={0}
              className=""
            />
          </motion.div>
          {/* 2nd card */}
          <motion.div
            className="absolute left-10 z-10 top-110"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/Asset 14.svg"
              alt="Background Decoration"
              width={500}
              height={0}
              className=""
            />
            <div className="absolute top-10 left-12 text-left text-lg justify-center leading-8">
              <p className="text-yellow-500 text-sm font-bold">Pain Point</p>
              <div className="text-2xl font-semibold text-white">
                <p>Lack of</p>
                <p>Strategic value</p>
              </div>
            </div>
            <div className="absolute top-33 left-12 text-left text-lg justify-center leading-8">
              <p className="text-yellow-500 text-sm font-bold">
                Traditional Challenge
              </p>
              <div className="text-2xl text-white">
                <p>ISO seen as a &quot;tick-box&quot; exercise,</p>
                <p>disconnected from business goals</p>
              </div>
            </div>
            <div className="absolute top-75 left-12 text-left text-lg justify-center leading-8">
              <p className="text-yellow-500 text-sm font-bold">
                How PEx Solves It
              </p>
              <div className="text-2xl text-white">
                <p>Includes management tools</p>
                <p>for CEO&apos;s for planning and</p>
                <p>monitoring strategic direction</p>
                <p>of business</p>
              </div>
            </div>
          </motion.div>
          {/* line 2 */}
          <motion.div
            className="absolute left-120 z-1 top-120"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/Asset 15.svg"
              alt="Background Decoration"
              width={400}
              height={0}
              className=""
            />
          </motion.div>
          {/* 3rd card */}
          <motion.div
            className="absolute z-10 left-160 top-140"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/Asset 16.svg"
              alt="Background Decoration"
              width={400}
              height={0}
              className=""
            />
            <div className="absolute top-10 left-12 text-left text-lg justify-center leading-8">
              <p className="text-yellow-500 text-sm font-bold">Pain Point</p>
              <div className="text-2xl font-semibold text-white">
                <p>Time consuming</p>
                <p>to maintain</p>
              </div>
            </div>
            <div className="absolute top-33 left-12 text-left text-lg justify-center leading-8">
              <p className="text-yellow-500 text-sm font-bold">
                Traditional Challenge
              </p>
              <div className="text-2xl text-white">
                <p>Manual documentation,</p>
                <p>missing records,</p>
                <p>last-minute scrambling</p>
              </div>
            </div>
            <div className="absolute top-95 left-12 text-left text-lg justify-center leading-8">
              <p className="text-yellow-500 text-sm font-bold">
                How PEx Solves It
              </p>
              <div className="text-2xl text-white">
                <p>Removes unproductive</p>
                <p>documentation work</p>
                <p>and waste activities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Version - Visible only on mobile */}
      <div className="lg:hidden w-full bg-white py-12 px-4">
        <div className="max-w-md mx-auto">
          {/* Title Section */}
          <motion.div
            className="text-left mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0e685b] text-2xl font-semibold leading-tight mb-3">
              Three key points why you need to consider PEx Software™ as a
              solution for your business
            </h2>
            {/* Number badges */}
            <div className="flex gap-2 mt-4">
              <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                01
              </span>
              <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                02
              </span>
              <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                03
              </span>
            </div>
          </motion.div>

          {/* Card 1 - Documentation Overload */}
          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/Asset 12.svg"
              alt="Documentation Overload"
              width={400}
              height={0}
              className="w-full h-auto"
            />
            <div className="absolute top-6 left-6 text-left">
              <p className="text-yellow-500 text-xs font-bold mb-2">
                Pain Point
              </p>
              <div className="text-lg font-semibold text-white mb-4">
                <p>Documentation</p>
                <p>Overload</p>
              </div>
            </div>
            <div className="absolute top-24 left-6 text-left">
              <p className="text-yellow-500 text-xs font-bold mb-2">
                Traditional Challenge
              </p>
              <div className="text-sm text-white mb-4">
                <p>Paper-heavy,</p>
                <p>time-consuming,</p>
                <p>error-prone</p>
                <p>compliance records</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-left">
              <p className="text-yellow-500 text-xs font-bold mb-2">
                How PEx Solves It
              </p>
              <div className="text-sm text-white">
                <p>Automated and</p>
                <p>AI powered paperless</p>
                <p>workflows to</p>
                <p>manage compliance</p>
              </div>
            </div>
          </motion.div>

          {/* Connector line */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/Asset 13.svg"
              alt="Connector"
              width={100}
              height={0}
              className="h-12 w-auto opacity-50"
            />
          </motion.div>

          {/* Card 2 - Lack of Strategic Value */}
          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/Asset 14.svg"
              alt="Lack of Strategic Value"
              width={400}
              height={0}
              className="w-full h-auto"
            />
            <div className="absolute top-6 left-6 text-left">
              <p className="text-yellow-500 text-xs font-bold mb-2">
                Pain Point
              </p>
              <div className="text-lg font-semibold text-white mb-4">
                <p>Lack of</p>
                <p>Strategic value</p>
              </div>
            </div>
            <div className="absolute top-24 left-6 text-left">
              <p className="text-yellow-500 text-xs font-bold mb-2">
                Traditional Challenge
              </p>
              <div className="text-sm text-white mb-4">
                <p>ISO seen as a &quot;tick-box&quot;</p>
                <p>exercise, disconnected from</p>
                <p>business goals</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-left">
              <p className="text-yellow-500 text-xs font-bold mb-2">
                How PEx Solves It
              </p>
              <div className="text-sm text-white">
                <p>Includes management tools</p>
                <p>for CEO&apos;s for planning and</p>
                <p>monitoring strategic direction</p>
                <p>of business</p>
              </div>
            </div>
          </motion.div>

          {/* Connector line */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/Asset 15.svg"
              alt="Connector"
              width={100}
              height={0}
              className="h-12 w-auto opacity-50"
            />
          </motion.div>

          {/* Card 3 - Time Consuming to Maintain */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/Asset 16.svg"
              alt="Time consuming to maintain"
              width={400}
              height={0}
              className="w-full h-auto"
            />
            <div className="absolute top-6 left-6 text-left">
              <p className="text-yellow-500 text-xs font-bold mb-2">
                Pain Point
              </p>
              <div className="text-lg font-semibold text-white mb-4">
                <p>Time consuming</p>
                <p>to maintain</p>
              </div>
            </div>
            <div className="absolute top-24 left-6 text-left">
              <p className="text-yellow-500 text-xs font-bold mb-2">
                Traditional Challenge
              </p>
              <div className="text-sm text-white mb-4">
                <p>Manual documentation,</p>
                <p>missing records,</p>
                <p>last-minute scrambling</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-left">
              <p className="text-yellow-500 text-xs font-bold mb-2">
                How PEx Solves It
              </p>
              <div className="text-sm text-white">
                <p>Removes unproductive</p>
                <p>documentation work</p>
                <p>and waste activities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}