"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * The main "Key Capabilities" section component.
 */
export default function PexGenKeyCapabilitiesSection() {
  return (
    <>
      <section className="flex flex-col items-center bg-white justify-center mb-[-400px] md:mb-[-550px] lg:mb-[-700px] px-4">
        <div className="max-w-6xl items-center mx-auto w-full">
          {/* Main Title with underline */}
          <motion.div
            className="flex flex-col items-center mb-8 md:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-teal-700 mb-3 md:mb-4">
              Key Capabilities
            </h2>
            <Image
              src="/Asset 48.svg"
              alt="decorative line"
              width={320}
              height={20}
              className="w-32 md:w-48 lg:w-60 h-auto"
            />
          </motion.div>

          {/* Cards container with absolute positioning */}
          <div className="relative max-w-6xl mx-auto h-[450px] md:h-[600px] lg:h-[800px]">
            {/* Card 1 - Top Left */}
            <motion.div
              className="absolute top-[-400px] md:top-[-550px] lg:top-[-700px] left-2 md:left-20 lg:left-40 w-36 md:w-56 lg:w-80"
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
                <div className="absolute inset-0 flex items-center left-4 md:left-8 lg:left-12 pl-2 md:px-0">
                  <h3 className="text-white text-[10px] md:text-base lg:text-2xl font-semibold text-left leading-tight md:leading-normal">
                    Paperless <br /> documentation{" "}
                    <br /> and audit-ready{" "}
                    <br /> records
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Top Right */}
            <motion.div
              className="absolute top-[-360px] md:top-[-480px] lg:top-[-630px] right-2 md:right-[100px] lg:right-[180px] w-36 md:w-56 lg:w-80"
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
                <div className="absolute inset-0 flex items-center left-4 md:left-6 lg:left-10 px-1 md:px-0 pl-2 md:pl-0">
                  <h3 className="text-white text-[10px] md:text-base lg:text-2xl font-semibold text-left leading-tight md:leading-normal">
                    IoT integration <br /> for
                    real-time <br /> monitoring
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Middle Left */}
            <motion.div
              className="absolute top-[-180px] md:top-[-230px] lg:top-[-300px] left-1 md:left-[60px] lg:left-[120px] transform -translate-y-1/2 w-36 md:w-72 lg:w-[400px]"
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
                <div className="absolute inset-0 flex items-center justify-start left-4 md:left-[40px] lg:left-[60px] px-1 md:px-0 pl-2 md:pl-0">
                  <h3 className="text-white text-[10px] md:text-base lg:text-2xl font-semibold text-left leading-tight md:leading-normal">
                    AI-powered risk <br />{" "}
                    detection and <br /> predictive
                    alerts
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Middle Right */}
            <motion.div
              className="absolute top-[-150px] md:top-[-190px] lg:top-[-240px] right-1 md:right-[60px] lg:right-[120px] transform -translate-y-1/2 w-36 md:w-72 lg:w-[400px]"
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
                <div className="absolute inset-0 flex items-center left-4 md:left-[40px] lg:left-[60px] px-1 md:px-0 pl-2 md:pl-0">
                  <h3 className="text-white text-[10px] md:text-base lg:text-2xl font-semibold text-left leading-tight md:leading-normal">
                    KPI dashboards <br /> and
                    corrective action <br />{" "}
                    workflows
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Card 5 - Bottom Center */}
            <motion.div
              className="absolute top-[-70px] md:top-[-90px] lg:top-[-110px] left-1/2 transform -translate-x-1/2 w-40 md:w-64 lg:w-[360px]"
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
                <div className="absolute left-4 md:left-6 lg:left-10 inset-0 flex items-center justify-start px-1 md:px-0 pl-2 md:pl-0  ">
                  <h3 className="text-white text-[10px] md:text-base lg:text-2xl font-semibold text-left leading-tight md:leading-normal">
                    Scalable for SMEs <br /> and
                    large enterprises
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </>
  );
}

