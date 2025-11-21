"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function PexGenWhyMattersSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div className="w-full mx-auto md:py-10 py-5 px-4">
      <div className="max-w-6xl justify-center items-center align-middle  mx-auto">
        <div className="flex flex-wrap md:flex-nowrap justify-between max-w-5xl mx-auto gap-10 items-center">
          {/* Left Yellow Box: As you provided */}
          <motion.div
            className="bg-yellow-300 rounded-3xl mx-auto p-8 flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="md:text-4xl text-2xl text-center md:text-left md:mb-4 mb-2">Why It Matters</h2>
            <p className="md:text-lg text-[10px] text-center md:text-left text-black">
              PEx Gen2&trade; turns ISO systems from a documentation <br />
              burden into a strategic asset—aligning compliance with <br />
              business goals, reducing audit stress.
            </p>
          </motion.div>

          {/* Right Green Box: MODIFIED FOR ABSOLUTE POSITIONING */}
          {/* 1. Added 'relative' to the wrapper to act as a positioning container */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/Asset 55.webp" // Your image source
              alt="Request demo for PEx Gen2" // Descriptive alt text
              width={300} // Base width for aspect ratio
              // 2. Changed height to 200 for a 3:2 aspect ratio (taller, like the image)
              height={200}
              // 3. Changed to 'object-cover' to fill the box as a background
              className="w-100 h-full object-cover"
            />

            {/* --- Overlay Content --- */}
            {/* 4. This 'div' sits on top of the image */}
            <div className="absolute inset-0 mx-auto  p-5">
              {/* Main Text */}
              <h3 className="text-yellow-400 md:text-4xl text-2xl md:mt-10 ">Request demo</h3>

              {/* Bottom Content */}
              <div className="absolute bottom-5 left-5 flex items-center gap-4">
                <span className="text-yellow-400 text-sm hidden inline">
                  LET&apos;S CONNECT
                </span>
                <motion.button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-2 text-sm rounded-full cursor-pointer transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cal-namespace="15min"
                  data-cal-link="pexsoftwaresolutions/15min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  <div className="flex ">
                    <p className="text-[17px]"> Book now </p>
                    <ArrowRight className="w-6 h-6 text-black -rotate-45" />
                  </div>
                </motion.button>
              </div>
            </div>
            {/* --- End Overlay Content --- */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
