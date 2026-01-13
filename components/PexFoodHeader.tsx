"use client";
import { motion } from "framer-motion";
import HeroHeader from "./HeroHeader";

export default function PexFoodHeader() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative w-full md:min-h-screen flex items-center py-5 md:py-0 justify-center overflow-hidden">
        {/* Background Image - Fixed and Responsive */}
        <div
          className="absolute inset-0 w-full md:h-full h-130 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/PEX-Website---Food.jpg')",
            backgroundAttachment: "scroll",
          }}
        />

       
       

        {/* Container for Logo, Navbar, and Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Top Row: Logo, Language Selector, and Navbar */}
          <HeroHeader />

          {/* Main Content - Centered */}
          <div className="flex items-end justify-start min-h-100 md:min-h-[60vh] sm:min-h-[70vh]">
            <div className="text-left sm:ml-0 ml-5 max-w-4xl ">
              <motion.p
                    className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold   sm:mb-0 text-white drop-shadow-lg uppercase leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                AUTOMATED


              </motion.p>
              <motion.p
                   className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold   sm:mb-0 text-white drop-shadow-lg uppercase leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
               FOOD SAFETY MANAGEMENT
              </motion.p>
              <motion.p
                className="text-md  sm:text-md md:text-2xl lg:text-3xl  sm:mb-3 text-white drop-shadow-lg uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                  PEx Software™ for FOOD SAFETY
            
              </motion.p>
             
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
