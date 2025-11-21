"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PexGenTestamonialsSection = () => {
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
            <Image
              width={750}
              height={0}
              src="/Asset 58.webp"
              alt="PEx Software Video Thumbnail"
            />
            <motion.div
              className=" top-17 left-53 text-sm absolute  text-white"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              We have also invested in the purchase of the PEx <br />
              Sofware Solution, which has added a great value to <br />
              our company to automate our business processes <br />
              and maintain a paperless work environment. We <br />
              have found PEx Software to be an excellent tool for <br />
              managing our quality management system with <br /> a high
              efficiency.
            </motion.div>
            <motion.div
              className="text-yellow-400 absolute top-55 left-20 text-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="font-semibold"> Rakitha De silva </p>
              Head of Advantis Freight <br /> Sri Lanka
            </motion.div>
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
                  src="/avatar.jpg"
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
                  src="/avatar.jpg"
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
                  src="/avatar.jpg"
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
                  src="/avatar.jpg"
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
                  src="/avatar.jpg"
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
              src="/Asset 58.webp"
              alt="Testimonial"
              className="mx-auto max-w-[370px] h-auto"
            />
            <motion.div
              className="absolute top-6 left-20 text-white text-[8px] px-12"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We have also invested in the purchase of the PEx Sofware Solution,
              which has added a great value to our company to automate our
              business processes and maintain a paperless work environment. We
              have found PEx Software to be an excellent tool for managing our
              quality management system with a high efficiency.
            </motion.div>
            <motion.div
              className="absolute bottom-3 left-15 text-yellow-400 text-[6px]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="font-semibold">Rakitha De silva</p>
              <p>Head of Advantis Freight <br/> Sri Lanka</p>
            </motion.div>
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
                          <div className="absolute bottom-4 left-45 flex gap-1 z-20">
                            <div className="w-6 h-6 relative rounded-full border-2 border-white overflow-hidden bg-gray-200">
                              <Image
                                src="/avatar.jpg"
                                alt="Avatar 1"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
          
                            <div className="w-6 h-6  rounded-full border-2 border-white overflow-hidden bg-gray-200">
                              <Image
                                src="/avatar.jpg"
                                alt="Avatar 2"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                              <Image
                                src="/avatar.jpg"
                                alt="Avatar 3"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                              <Image
                                src="/avatar.jpg"
                                alt="Avatar 4"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                              <Image
                                src="/avatar.jpg"
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
