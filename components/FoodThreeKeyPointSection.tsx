"use client"; // Required for Framer Motion
import { motion } from "framer-motion"; // Import motion
import Image from "next/image";

export default function FoodThreeKeyPointsIntroSection() {
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
            <p>food safety</p>
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
            src="/Asset 46.svg"
            alt="Background Decoration"
            width={700}
            height={0}
            className=""
          />
          <div className="absolute top-10 left-12 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">Pain Point</p>
            <div className="text-2xl font-semibold text-white">
              <p>Heavy</p>
              <p>Documentation</p>
            </div>
          </div>
          <div className="absolute top-40 left-12 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">Traditional Challenge</p>
            <div className="text-2xl text-white">
              <p>Staff overwhelmed</p>
              <p>with HACCP/</p>
              <p>ISO 22000</p>
              <p>paperword</p>
            </div>
          </div>
          <div className="absolute top-40 left-80 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">How PEx Solves It</p>
            <div className="text-2xl text-white">
              <p>Automated processes</p>
              <p>reduce paper documentation</p>
              <p>by 90%</p>
             
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
            src="/Asset 44.svg"
            alt="Background Decoration"
            width={500}
            height={0}
            className=""
          />
          <div className="absolute top-10 left-12 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">Pain Point</p>
            <div className="text-2xl font-semibold text-white">
              <p>Manual</p>
              <p>Monitoring</p>
            </div>
          </div>
          <div className="absolute top-35 left-12 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">Traditional Challenge</p>
            <div className="text-2xl text-white">
              <p>Temperature checks and logs</p>
              <p>done by hand are prone to errors</p>
            </div>
          </div>
          <div className="absolute top-80 left-12 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">How PEx Solves It</p>
            <div className="text-2xl text-white">
              <p>IOT devices capture and</p>
              <p>record data in real time</p>
              
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
            src="/Asset 45.svg"
            alt="Background Decoration"
            width={400}
            height={0}
            className=""
          />
          <div className="absolute top-12 left-12 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">Pain Point</p>
            <div className="text-2xl font-semibold text-white">
              <p>Compliance</p>
              <p>Burden</p>
            </div>
          </div>
          <div className="absolute top-38 left-12 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">Traditional Challenge</p>
            <div className="text-2xl text-white">
              <p>Audits and inspection cause</p>
              <p>stress and extra workload</p>
            
            </div>
          </div>
          <div className="absolute top-75 left-12 text-left text-lg justify-center leading-8">
            <p className="text-yellow-500 text-sm">How PEx Solves It</p>
            <div className="text-2xl text-white">
              <p>AI dashboards provide</p>
              <p>instant compliance visibility</p>
              <p>and audit-ready reports</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
