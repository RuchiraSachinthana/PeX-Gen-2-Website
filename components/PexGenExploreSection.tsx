"use client";

import { ArrowRight } from "lucide-react";

export default function PexGenExploreSection() {
  return (
    <div
      className="w-full  px-4 bg-white relative"
      style={{
        backgroundImage: "url('/Asset 56.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main container for the two content blocks */}
        <div className="flex flex-col md:flex-row gap-1 py-10">
          {/* Left Block: Quality Management */}
          <div className="relative flex-1  flex flex-col justify-center">
            <div className="relative z-10">
              <p className="text-yellow-400 mb-2 text-2xl uppercase">EXPLORE</p>
              <h3 className="text-xl md:text-3xl  text-white uppercase mb-1">
                PEX SOFTWARE&trade; FOR
              </h3>
              <div className="flex items-center  text-white space-x-4">
                <h2 className="text-4xl font-extrabold uppercase ">
                  QUALITY MANAGEMENT
                </h2>
                <button className="bg-yellow-400 p-3 rounded-2xl flex items-center justify-center transition-transform duration-200 hover:scale-105">
                  <ArrowRight className="text-black w-6 h-6 transform -rotate-45" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Block: Food Safety */}
          <div className="relative flex flex-col ">
            <div className="relative z-10 ">
              <p className="text-green-900 text-xl mb-2 font-semibold uppercase">
                EXPLORE
              </p>
              <h3 className="text-xl md:text-3xl font-bold uppercase ">
                PEX SOFTWARE&trade; FOR
              </h3>
              <div className="flex items-center space-x-4">
                <h2 className=" text-4xl font-extrabold uppercase ">
                  FOOD SAFETY
                </h2>
                <button className="bg-green-900 p-3 rounded-2xl flex items-center justify-center transition-transform duration-200 hover:scale-105">
                  <ArrowRight className="text-white w-6 h-6 transform -rotate-45" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
