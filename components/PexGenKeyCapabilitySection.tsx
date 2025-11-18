"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * The main "Key Capabilities" section component.
 */
export default function PexGenKeyCapabilitiesSection() {
  return (
    <section className="flex flex-col items-center bg-white justify-center mb-[-700px] px-4">
      <div className="max-w-6xl items-center mx-auto w-full">
        {/* Main Title with underline */}
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl text-center text-teal-700 mb-4">
            Key Capabilities
          </h2>
          <Image
            src="/Asset 48.svg"
            alt="decorative line"
            width={320}
            height={20}
            className="w-60 h-auto"
          />
        </motion.div>

        {/* Cards container with absolute positioning */}
        <div className="relative  max-w-6xl mx-auto h-[800px]">
          {/* Card 1 - Top Left */}
          <motion.div
            className="absolute top-[-700px] left-40 w-80"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <Image
                src="/Asset 48 (1).svg"
                alt="Paperless documentation and audit-ready records"
                width={300}
                height={150}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 flex items-center left-12">
                <h3 className="text-white text-2xl font-semibold text-left  ">
                  Paperless <br /> documentation <br /> and audit-ready <br />{" "}
                  records
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Top Right */}
          <motion.div
            className="absolute top-[-630px] right-45 w-80"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <Image
                src="/Asset 48 (2).svg"
                alt="IoT integration for real-time monitoring"
                width={300}
                height={150}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 flex items-center left-10">
                <h3 className="text-white text-2xl font-semibold text-left ">
                  IoT integration <br /> for real-time <br /> monitoring
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Middle Left */}
          <motion.div
            className="absolute top-[-300px] left-30 transform -translate-y-1/2 w-100"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative">
              <Image
                src="/Asset 48 (3).svg"
                alt="AI-powered risk detection and predictive alerts"
                width={300}
                height={150}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-start left-15">
                <h3 className="text-white text-2xl font-semibold text-left ">
                  AI-powered risk <br /> detection and <br /> predictive alerts
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Middle Right */}
          <motion.div
            className="absolute top-[-240px] right-30 transform -translate-y-1/2 w-100"
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="relative">
              <Image
                src="/Asset 48 (4).svg"
                alt="KPI dashboards and corrective action workflows"
                width={300}
                height={150}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 flex items-center left-15">
                <h3 className="text-white text-2xl font-semibold text-left ">
                  KPI dashboards <br /> and corrective action <br /> workflows
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Card 5 - Bottom Center */}
          <motion.div
            className="absolute top-[-110px] left-1/2 transform -translate-x-1/2 w-90"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="relative">
              <Image
                src="/Asset 48 (5).svg"
                alt="Scalable for SMEs and large enterprises"
                width={350}
                height={150}
                className="w-full h-auto object-contain"
              />
              <div className="absolute left-10 inset-0 flex items-center justify-start ">
                <h3 className="text-white text-2xl font-semibold text-left ">
                  Scalable for SMEs <br /> and large enterprises
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
