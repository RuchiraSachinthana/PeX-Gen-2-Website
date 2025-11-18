"use client"; // Required for Framer Motion
import { motion } from "framer-motion"; // Import motion
import Image from "next/image";

export default function KeyPointsIntroSection() {
  return (
    <>
      {/* ========================================== */}
      {/* Desktop Version - UNCHANGED (As requested) */}
      {/* ========================================== */}
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

      {/* ========================================== */}
      {/* Mobile Version - HARDCODED (No components) */}
      {/* ========================================== */}
      <div className="lg:hidden w-full bg-white py-12 px-4">
        <div className="max-w-md mx-auto flex flex-col items-center">
          
          {/* Title */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0e685b] text-xl font-bold leading-tight">
              Three key points why you need to consider PEx Software™ as a
              solution for your business
            </h2>
          </motion.div>

          {/* ---------------------- */}
          {/* CARD 01 - HARDCODED    */}
          {/* ---------------------- */}
          <motion.div
            className="w-full bg-[#023c35] rounded-3xl overflow-hidden shadow-lg relative p-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             {/* Top Section */}
             <div className="p-6 pb-2">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex flex-col items-start">
                      <div className="flex items-center gap-2">
                         <span className="text-[#fbbf24] text-xs font-bold">Pain Point</span>
                         <span className="bg-[#fbbf24] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#023c35]">01</span>
                      </div>
                   </div>
                   {/* Icon Placeholder */}
                   <div className="text-[#2dd4bf] opacity-80">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                   </div>
                </div>

                <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
                   Documentation Overload
                </h3>

                <div className="mb-6">
                   <p className="text-[#fbbf24] text-xs font-bold mb-1">Traditional Challenge</p>
                   <p className="text-white text-sm opacity-90 leading-relaxed">
                      Paper-heavy, time-consuming, error-prone compliance records
                   </p>
                </div>
             </div>

             {/* Bottom Section (Inner Card) */}
             <div className="bg-[#00675b] rounded-2xl p-5 mx-1 mb-1 relative min-h-[110px] flex flex-col justify-center">
                <div className="absolute right-4 top-4 bg-[#fbbf24] p-1.5 rounded-md text-black">
                   <span className="font-bold text-xs">ai</span>
                </div>
                <p className="text-[#fbbf24] text-xs font-bold mb-1">How PEx Solves It</p>
                <p className="text-white text-sm leading-relaxed pr-8">
                   Automated and Ai powered paperless workflows to manage compliance
                </p>
             </div>
          </motion.div>

          {/* Arrow Connector 1 */}
          <motion.div 
              className="h-12 w-full flex justify-center items-center my-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
          >
            <svg width="20" height="50" viewBox="0 0 24 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V100" stroke="#06b6d4" strokeWidth="2" />
              <path d="M6 94L12 100L18 94" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>

          {/* ---------------------- */}
          {/* CARD 02 - HARDCODED    */}
          {/* ---------------------- */}
          <motion.div
            className="w-full bg-[#023c35] rounded-3xl overflow-hidden shadow-lg relative p-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
             {/* Top Section */}
             <div className="p-6 pb-2">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex flex-col items-start">
                      <div className="flex items-center gap-2">
                         <span className="text-[#fbbf24] text-xs font-bold">Pain Point</span>
                         <span className="bg-[#fbbf24] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#023c35]">02</span>
                      </div>
                   </div>
                   <div className="text-[#2dd4bf] opacity-80">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                   </div>
                </div>

                <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
                   Lack of Strategic Value
                </h3>

                <div className="mb-6">
                   <p className="text-[#fbbf24] text-xs font-bold mb-1">Traditional Challenge</p>
                   <p className="text-white text-sm opacity-90 leading-relaxed">
                      ISO seen as a &quot;tick-box&quot; exercise, disconnected from business goals
                   </p>
                </div>
             </div>

             {/* Bottom Section (Inner Card) */}
             <div className="bg-[#00675b] rounded-2xl p-5 mx-1 mb-1 relative min-h-[110px] flex flex-col justify-center">
                <div className="absolute right-4 top-4 bg-[#fbbf24] p-1.5 rounded-md text-black">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </div>
                <p className="text-[#fbbf24] text-xs font-bold mb-1">How PEx Solves It</p>
                <p className="text-white text-sm leading-relaxed pr-8">
                   Includes management tools for CEO&apos;s for planning and monitoring strategic direction of business
                </p>
             </div>
          </motion.div>

          {/* Arrow Connector 2 */}
          <motion.div 
              className="h-12 w-full flex justify-center items-center my-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
          >
            <svg width="20" height="50" viewBox="0 0 24 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V100" stroke="#06b6d4" strokeWidth="2" />
              <path d="M6 94L12 100L18 94" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>

          {/* ---------------------- */}
          {/* CARD 03 - HARDCODED    */}
          {/* ---------------------- */}
          <motion.div
            className="w-full bg-[#023c35] rounded-3xl overflow-hidden shadow-lg relative p-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             {/* Top Section */}
             <div className="p-6 pb-2">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex flex-col items-start">
                      <div className="flex items-center gap-2">
                         <span className="text-[#fbbf24] text-xs font-bold">Pain Point</span>
                         <span className="bg-[#fbbf24] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#023c35]">03</span>
                      </div>
                   </div>
                   <div className="text-[#2dd4bf] opacity-80">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                   </div>
                </div>

                <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
                   Time consuming to maintain
                </h3>

                <div className="mb-6">
                   <p className="text-[#fbbf24] text-xs font-bold mb-1">Traditional Challenge</p>
                   <p className="text-white text-sm opacity-90 leading-relaxed">
                      Manual documentation, missing records, last-minute scrambling
                   </p>
                </div>
             </div>

             {/* Bottom Section (Inner Card) */}
             <div className="bg-[#00675b] rounded-2xl p-5 mx-1 mb-1 relative min-h-[110px] flex flex-col justify-center">
                <div className="absolute right-4 top-4 bg-[#fbbf24] p-1.5 rounded-md text-black">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                </div>
                <p className="text-[#fbbf24] text-xs font-bold mb-1">How PEx Solves It</p>
                <p className="text-white text-sm leading-relaxed pr-8">
                   Removes unproductive documentation work and waste activities
                </p>
             </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}