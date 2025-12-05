"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";

const PexGenTestamonialsSectionNew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
     {
      image: "/Leader (6).png",
      message:
        "PEx Software has added significant value to our Food Safety Management program. We have found PEx Software to be an excellent tool for managing food safety in a completely paperless environment, thereby improving efficiency in our processes.",
      name: "Mangala Hemananda",
      designation: "Executive Manager - Radisson Hotel Kandy",
    },
    {
      image: "/Leader (1).png",
      message:
        "We invested in the purchase of the PEx Software™ Solution, which has added a great value to our company to automate our business processes and maintain a paperless work environment. We have found PEx Software to be an excellent tool for managing our quality management system with a high efficiency.",
      name: "Rakitha De silva",
      designation: "Head of Heyleys - Advantis Freight",
    },
    {
      image: "/Leader (3).png",
      message:
        "We are happy to inform that PEx Software solution has fully met with our requirements to our entire satisfaction. Even the external compliance auditors have been delighted with this system and have commended it’s benefits in meeting with ISO compliance requirements.",
      name: "Sarath Ranasinghe",
      designation: "General Manager - E B Creasy - Denta Tooth Brush Factory",
    },
    {
      image: "/Leader (2).png",
      message:
        "I have no hesitation whatsoever in recommending PEx Software solution which was implemented to manage our integrated management system which has greatly helped us maintain compliance and continual improvement of our business.",
      name: "Sujeewa Walisundara",
      designation: "Director Marketing",
    },
    {
      image: "/Leader (4).png",
      message:
        "The introduction of the PEx Software Solution greatly contributed to enhance our EHS and Quality culture throughout our organization in a paperless environment.",
      name: "Ricky Barnett",
      designation: "Director - Hayleys Energy Services Lanka (Pvt) Ltd.",
    },
    {
      image: "/Leader (5).png",
      message:
        "We consider our decision to invest in the PEx Software Solution is well worth, and the right direction our organization is taking in automating all our business and manufacturing processes.",
      name: "Randy Roche",
      designation: "Director / General Manager - Packwell Lanka (Pvt) Ltd",
    },
    {
      image: "/Leader (7).png",
      message:
        "We have found the Pex Software to be an excellent solution to our total quality management system. It is very user friendly and helped us reduce our paper work to a great extent.",
      name: "Hemani Gunathileke",
      designation: "Head of Quality Assurance – Serendib Flour Mills",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full md:bg-[#0e685b] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:flex gap-6 items-stretch">
          {/* Left Card - Trusted by Industry Leaders */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              width={300}
              height={0}
              src="/Asset 57.svg"
              alt="Trusted by Industry Leaders"
            />
            <div className="absolute inset-0 flex items-center justify-center text-black">
              <div>
                <motion.h2
                  className="mb-4 text-xl font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Trusted by
                  <br /> Industry Leaders
                </motion.h2>
                <motion.p
                  className="text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Over 100 organizations <br /> across hospitality, hotels, <br />
                  manufacturing, logistics <br /> and services rely on PEx <br />
                  Software to maintain <br />
                  ISO compliance and drive <br /> operational excellence.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Testimonial */}
          <motion.div
            className="rounded-tl-3xl rounded-br-3xl rounded-2xl p-10 flex-1 relative border-2 border-yellow-400"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col justify-center"
              >
                <div className="flex gap-6 items-center mt-4 justify-center">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-300">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Asset 80 SVG */}
                  <div className="flex-shrink-0">
                    <Image
                      src="/Asset 80.svg"
                      alt="Quote icon"
                      width={30}
                      height={30}
                    />
                  </div>

                  {/* Quote and Message */}
                  <div className="flex-1">
                    
                    <p className="text-white text-base leading-relaxed">
                      {testimonials[currentIndex].message}
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="">
                  <p className="text-[#FFC700]  text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-[#FFC700] text-sm">
                    {testimonials[currentIndex].designation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next Button */}
            <motion.button
              onClick={handleNext}
              className="absolute top-0 right-0 bg-[#FFC700] hover:bg-[#e6b300] text-black p-3 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              onClick={handlePrevious}
              className="absolute bottom-0 left-0 bg-[#FFC700] hover:bg-[#e6b300] text-black p-3 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden max-w-[370px] space-y-4">
          <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        width={0}
                        height={0}
                        src="/Asset 57.svg"
                        alt="Trusted by Industry Leaders"
                        className=" max-w-[370px] w-70 mx-auto rotate-90"
                      />
                      <div className="absolute top-10 left-15 p-6 max-w-[250px] text-black">
                        <motion.h2
                          className="mb-2 text-base font-semibold"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          Trusted by Industry Leaders
                        </motion.h2>
                        <motion.p
                          className="text-xs leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          Over 100 organizations across hospitality, hotels,
                          manufacturing, logistics and services rely on PEx Software to
                          maintain ISO compliance and drive operational excellence.
                        </motion.p>
                      </div>
                    </motion.div>

          {/* Testimonial Card */}
          <motion.div
            className="bg-[#0e685b] rounded-tl-3xl rounded-br-3xl rounded-xl p-6 relative border-2 border-yellow-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Profile Image and Icon */}
                <div className="flex gap-3 mb-4 items-center">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-300 flex-shrink-0">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Asset 80 SVG */}
                  <div className="flex-shrink-0">
                    <Image
                      src="/Asset 80.svg"
                      alt="Quote icon"
                      width={20}
                      height={20}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex-1">
                    <p className="text-white text-[8px] leading-relaxed">
                      {testimonials[currentIndex].message}
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="text-left mb-2 pl-1">
                  <p className="text-yellow-400 text-xs">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-yellow-400 text-xs">
                    {testimonials[currentIndex].designation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={handleNext}
              className="absolute top-0 right-0 bg-[#FFC700] hover:bg-[#e6b300] text-black p-2 rounded-lg cursor-pointer"
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={handlePrevious}
              className="absolute bottom-0 left-0 bg-[#FFC700] hover:bg-[#e6b300] text-black p-2 rounded-lg cursor-pointer"
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PexGenTestamonialsSectionNew;
