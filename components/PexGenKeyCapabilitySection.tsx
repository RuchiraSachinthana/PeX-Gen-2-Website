"use client";

import Image from "next/image";

/**
 * The main "Key Capabilities" section component.
 */
export default function PexGenKeyCapabilitiesSection() {
  return (
    <section className="flex flex-col items-center bg-white justify-center mb-[-700] px-4">
      <div className="max-w-6xl items-center mx-auto w-full">
        {/* Main Title with underline */}
        <div className="flex flex-col items-center mb-12">
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
        </div>

        {/* Cards container with absolute positioning */}
        <div className="relative  max-w-6xl mx-auto h-[800px]">
          {/* Card 1 - Top Left */}
          <div className="absolute top-[-700px] left-40 w-80">
            <div>
              <Image
                src="/Asset 49.svg"
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
          </div>

          {/* Card 2 - Top Right */}
          <div className="absolute top-[-630px] right-45 w-80">
            <div className="relative">
              <Image
                src="/Asset 50.svg"
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
          </div>

          {/* Card 3 - Middle Left */}
          <div className="absolute top-[-300px] left-30 transform -translate-y-1/2 w-100">
            <div className="relative">
              <Image
                src="/Asset 51.svg"
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
          </div>

          {/* Card 4 - Middle Right */}
          <div className="absolute top-[-240] right-30 transform -translate-y-1/2 w-100">
            <div className="relative">
              <Image
                src="/Asset 52.svg"
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
          </div>

          {/* Card 5 - Bottom Center */}
          <div className="absolute top-[-110] left-1/2 transform -translate-x-1/2 w-90">
            <div className="relative">
              <Image
                src="/Asset 53.svg"
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
          </div>
        </div>
      </div>
    </section>
  );
}
