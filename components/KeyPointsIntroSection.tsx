"use client"; // Required for Framer Motion
import { motion } from "framer-motion"; // Import motion
import Image from "next/image";

export default function KeyPointsIntroSection() {
  return (
    // Component: Main Section Container - Full width white background with overflow hidden
    <div className="w-full bg-white pt-30 pb-190 relative overflow-hidden">
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
          <div className="absolute top-10 left-10 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">Pain Point</p>
            <div className="text-2xl font-semibold">
              <p>Documentation</p>
              <p>Overload</p>
            </div>
          </div>
          <div className="absolute top-35 left-10 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">Traditional Challenge</p>
            <div className="text-2xl">
              <p>Paper-heavy,</p>
              <p>time-consuming,</p>
              <p>error-prone</p>
              <p>compliance records</p>
            </div>
          </div>
          <div className="absolute top-35 left-95 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">How PEx Solves It</p>
            <div className="text-2xl">
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
          transition={{ duration: 0.7, delay: 0.2 }} // Delay resets as it's a new trigger
        >
          <Image
            src="/Asset 14.svg"
            alt="Background Decoration"
            width={500}
            height={0}
            className=""
          />
          <div className="absolute top-7 left-10 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">Pain Point</p>
            <div className="text-2xl font-semibold">
              <p>Lack of</p>
              <p>Strategic value</p>
            </div>
          </div>
          <div className="absolute top-30 left-10 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">Traditional Challenge</p>
            <div className="text-2xl">
              <p>ISO seen as a &quot;tick-box&quot; exercise,</p>
              <p>disconnected from business goals</p>
            </div>
          </div>
          <div className="absolute top-70 left-10 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">How PEx Solves It</p>
            <div className="text-2xl">
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
          transition={{ duration: 0.7, delay: 0.2 }} // Delay resets as it's a new trigger
        >
          <Image
            src="/Asset 16.svg"
            alt="Background Decoration"
            width={400}
            height={0}
            className=""
          />
          <div className="absolute top-7 left-10 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">Pain Point</p>
            <div className="text-2xl font-semibold">
              <p>Time consuming</p>
              <p>to maintain</p>
            </div>
          </div>
          <div className="absolute top-30 left-10 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">Traditional Challenge</p>
            <div className="text-2xl">
              <p>Manual documentation,</p>
              <p>missing records,</p>
              <p>last-minute scrambling</p>
            </div>
          </div>
          <div className="absolute top-85 left-10 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">How PEx Solves It</p>
            <div className="text-2xl">
              <p>Removes inproductive</p>
              <p>documentation word</p>
              <p>and waste activities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
