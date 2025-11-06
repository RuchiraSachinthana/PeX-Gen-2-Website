"use client"; // Added for Framer Motion

import { motion } from "framer-motion"; // Import motion
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CaseStudiesShowcase() {
  return (
    // Component: Main Section Container - Full width white background with overflow hidden
    <div
      style={{
        backgroundImage: 'url("/Asset 18.svg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div>
          <div className="flex flex-row justify-between gap-6 items-end">
            <motion.div
              className="absolute top-0 text-[#0e685b] text-4xl left-110"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>Businesses that have</p>
              <p>grown with us</p>
            </motion.div>
            {/* image grid */}
            <motion.div
              className="absolute right-0 top-30 items-left text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className=" flex flex-row gap-2">
                <Image
                  width={130}
                  height={0}
                  src="/qs4 (1).webp"
                  alt="Background Decoration"
                />
                <Image
                  width={130}
                  height={0}
                  src="/qs4 (2).webp"
                  alt="Background Decoration"
                />
                <Image
                  width={130}
                  height={0}
                  src="/qs4 (3).webp"
                  alt="Background Decoration"
                />
              </div>
            </motion.div>
            {/* left card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Image
                width={440}
                height={0}
                src="/qs4 (4).webp"
                alt="Background Decoration"
              />
              {/* transparent image */}
              <div className="absolute top-10 left-10 transparent opacity-20">
                <Image
                  width={190}
                  height={0}
                  src="/Asset 21.svg"
                  alt="Background Decoration"
                />
              </div>
              <div></div>
              <Image
                width={60}
                height={0}
                src="/Asset 22.svg"
                alt="Background Decoration"
                className="absolute top-12 left-40"
              />
              <div className="absolute top-30 left-20">
                <p className="text-4xl text-yellow-400">90%</p>
                <p className="text-2xl">document</p>
                <p className="text-2xl">reduction</p>
              </div>
            </motion.div>
            {/* center card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Image
                width={340}
                height={0}
                src="/Asset 19.svg"
                alt="Background Decoration"
              />
              <div className="absolute top-20 left-8">
                <div className="mb-10 ml-10 text-left text-2xl">
                  <p>Can a small</p>
                  <p>company get</p>
                  <p>ISO 9001</p>
                  <p>certification?</p>
                </div>
                <div className="flex flex-row justify-between align-middle items-center gap-4">
                  <p className="text-sm text-yellow-400">CASE STUDY</p>
                  <motion.button
                    className="bg-yellow-400 text-black p-2 px-4 text-sm rounded-full cursor-pointer transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex">
                      Read More &nbsp;
                      <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
            {/* right card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Image
                width={440}
                height={0}
                src="/Asset 20.svg"
                alt="Background Decoration"
              />
              <div className="mb-10 absolute top-7 left-12 text-left text-2xl">
                <p>How PEx solution</p>
                <p>saved 1.6 million</p>
                <p>in the first quarter</p>
              </div>
              <div className="flex absolute top-35 left-28 flex-row justify-between items-center gap-4">
                <p className="text-sm text-yellow-400">CASE STUDY</p>
                <motion.button
                  className="bg-yellow-400 text-black p-2 px-4 text-sm rounded-full cursor-pointer transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex">
                    Read More &nbsp;{" "}
                    <ArrowRight className="w-5 h-5 text-black" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
