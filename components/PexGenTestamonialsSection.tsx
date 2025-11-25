"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const PexGenTestamonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: "/Leader (1).png",
      message: "We invested in the purchase of the PEx Sofware™ \nSolution, which has added a great value to our \ncompany to automate our business processes and \nmaintain a paperless work environment. We have \nfound PEx Software to be an excellent tool for \nmanaging our quality management system with a \nhigh efficiency.",
      name: "Rakitha De silva",
      designation: "Head of Heyleys",
      location: "Advantis Freight "
    },
    {
      image: "/Leader (3).png",
      message: "The dedication and professionalism  demonstrated \nby all members of the team from Swiss Advantage \nSystems is highly commendable and has helped our organization achieve a high level of standardization \nthrough the introduction of best practices in \nmanagement systems via PEx Software™ system. ",
      name: "Sarath Ranasinghe",
      designation: "General Manager",
      location: "E B Creasy - Denta Tooth Brush Factory"
    },
    {
      image: "/Leader (2).png",
      message: "I have no hesitation whatsoever in \nrecommending PEx Software solution which \nwas implemented to manage our integrated \nmanagement system which has greatly helped \nus maintain compliance \nand continual improvement of our business.",
      name: "Sujeewa Walisundara",
      designation: "Director Marketing",
      location: ""
    },
    {
      image: "/Leader (4).png",
      message: "The introduction of the PEx Software Solution \ndeveloped and implemented by Swiss \nAdvantage Systems has greatly contributed to \nenhancing our EHS and Quality culture throughout \nour organization in a paperless environment. \nWe have no hesitation in recommending their \nproducts and services to any organization.",
      name: "Ricky Barnett",
      designation: "Director",
      location: "Hayleys Energy Services Lanka (Pvt) Ltd."
    },
    {
      image: "/Leader (5).png",
      message: "The ISO Certification Auditors were fully satisfied \nand commended on the excellent features of the \nPEx Software system. We consider our decision \nto invest on the PEx Software is well worth \nand in the right direction our organization is \ntaking in automating all our business and \nmanufacturing processes.",
      name: "Randy Roche",
      designation: "Director / General Manager",
      location: "Packwell Lanka (Pvt) Ltd"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block w-full h-100 bg-[#0e685b] py-20">
        <div className="max-w-6xl  justify-between flex gap-3 mx-auto">
          <motion.div
            className=" relative "
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              width={300}
              height={0}
              src="/Asset 57.svg"
              alt="PEx Software Video Thumbnail"
            />
            <div className=" top-0 p-6  absolute  text-black">
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
          </motion.div>
          <motion.div
            className=" relative "
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <Image
                width={750}
                height={0}
                src="/Asset 75.svg"
                alt="PEx Software Video Thumbnail"
                className="relative "
              />
              
              {/* Top Right Arrow Button */}
              <motion.button
                onClick={handleNext}
                className="absolute top-0 cursor-pointer right-0 bg-yellow-400 p-4 rounded-2xl flex items-center justify-center hover:bg-yellow-500 "
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="text-black w-6 h-6" />
              </motion.button>

              {/* Bottom Left Arrow Button */}
              <motion.button
                onClick={handlePrevious}
                className="absolute cursor-pointer bottom-0 left-0 bg-yellow-400 p-4 rounded-2xl  flex items-center justify-center hover:bg-yellow-500"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="text-black w-6 h-6 transform rotate-180" />
              </motion.button>

              {/* Left Side Center Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${currentIndex}`}
                  className="absolute left-5 top-12 w-[150px] rounded-2xl h-[150px] overflow-hidden"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-full rounded-2xl h-full">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt="Profile"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* message */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`message-${currentIndex}`}
                className=" top-17 left-55 text-sm absolute  text-white"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                {testimonials[currentIndex].message.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < testimonials[currentIndex].message.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {/* designation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`designation-${currentIndex}`}
                className="text-yellow-400 absolute top-55 left-20 text-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-semibold">{testimonials[currentIndex].name}</p>
                {testimonials[currentIndex].designation} <br /> {testimonials[currentIndex].location}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <motion.div
            className=" relative "
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              width={300}
              height={0}
              src="/Asset 59.svg"
              alt="PEx Software Video Thumbnail"
            />
            <motion.div
              className="absolute top-4 text-2xl text-yellow-300  left-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Your reliable <br />
              partner in <br />
              business growth
            </motion.div>

            <a href="https://www.linkedin.com/company/pex-software-solutions" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="bg-yellow-400 absolute top-45 left-5 px-4 hover:bg-yellow-500 text-gray-900 py-2 rounded-full shadow-lg transition-colors cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex justify-between text-sm items-center gap-2">
                  Linkedin
                  <span className="font-semibold">1000+</span>
                  followers
                </div>
              </motion.button>
            </a>
            <motion.div
              className="flex gap-2 top-57 absolute left-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.3 }}
              >
                <Image
                  src="/user (1).png"
                  alt="Avatar 1"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                <Image
                  src="/user (2).png"
                  alt="Avatar 2"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.5 }}
              >
                <Image
                  src="/user (3).png"
                  alt="Avatar 3"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.6 }}
              >
                <Image
                  src="/user (4).png"
                  alt="Avatar 4"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.7 }}
              >
                <Image
                  src="/user (5).png"
                  alt="Avatar 5"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden w-full ">
        <div className="max-w-[370px] mx-auto space-y-3">
          {/* Trusted by Section */}
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

          {/* Middle Testimonial Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              width={350}
              height={0}
              src="/Asset 75.svg"
              alt="Testimonial"
              className="mx-auto max-w-[370px] h-auto"
            />
            
            {/* Top Right Arrow Button - Mobile */}
            <motion.button
              onClick={handleNext}
              className="absolute top-0 cursor-pointer right-2 bg-yellow-400 p-2 rounded-xl flex items-center justify-center hover:bg-yellow-500 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="text-black w-4 h-4" />
            </motion.button>

            {/* Bottom Left Arrow Button - Mobile */}
            <motion.button
              onClick={handlePrevious}
              className="absolute cursor-pointer bottom-0 left-2 bg-yellow-400 p-2 rounded-xl flex items-center justify-center hover:bg-yellow-500 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="text-black w-4 h-4 transform rotate-180" />
            </motion.button>

            {/* Left Side Center Image - Mobile */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-image-${currentIndex}`}
                className="absolute left-8 top-8 w-[70px] h-[70px] rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full rounded-xl">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt="Profile"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Message - Mobile */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-message-${currentIndex}`}
                className="absolute top-8 left-35 text-white text-[8px] max-w-[180px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {testimonials[currentIndex].message.replace(/\n/g, ' ')}
              </motion.div>
            </AnimatePresence>

            {/* Designation - Mobile */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-designation-${currentIndex}`}
                className="absolute bottom-3 left-15 text-yellow-400 text-[6px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-semibold">{testimonials[currentIndex].name}</p>
                <p>{testimonials[currentIndex].designation} <br/> {testimonials[currentIndex].location}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="lg:hidden max-w-[370px] mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className=" relative"
                    >
                      <Image
                        src="/section_5_image.svg"
                        alt="linkedin card"
                        width={0}
                        height={0}
                        className="w-full h-auto"
                      />
          
                      {/* Main Text */}
                      <h4 className="text-left absolute left-4 top-3 text-xs sm:text-3xl  text-white  mb-8 leading-tight">
                       Your reliable partner in business growth
                      </h4>
          
                      {/* Content Stack */}
                      <div className="flex flex-col gap-6 items-start">
                        {/* Button */}
                        <a href="https://www.linkedin.com/company/pex-software-solutions" target="_blank" rel="noopener noreferrer">
                          <button className="bg-yellow-400 absolute top-11 left-4 hover:bg-yellow-500 text-gray-900 px-2 py-1 text-[10px] rounded-full sm:w-auto text-center">
                            Linkedin <span className="font-bold">1000+</span> followers
                          </button>
                        </a>
          
                        {/* Follow Us + Avatars */}
                        <div className="flex flex-col gap-2 mt-2">
                          <span className="text-white text-[10px] absolute top-7 right-10 uppercase opacity-90">
                            Follow Us
                          </span>
                          <div className="absolute top-12 left-45 flex gap-1 z-20">
                            <div className="w-6 h-6 relative rounded-full border-2 border-white overflow-hidden bg-gray-200">
                              <Image
                                src="/user (5).png"
                                alt="Avatar 1"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
          
                            <div className="w-6 h-6  rounded-full border-2 border-white overflow-hidden bg-gray-200">
                              <Image
                                src="/user (4).png"
                                alt="Avatar 2"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                              <Image
                                src="/user (3).png"
                                alt="Avatar 3"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                              <Image
                                src="/user (2).png"
                                alt="Avatar 4"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                              <Image
                                src="/user (1).png"
                                alt="Avatar 5"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
        </div>
      </div>
    </>
  );
};

export default PexGenTestamonialsSection;
