"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PexGenMeetLeaders() {
  const leaders = [
    {
      id: 1,
      name: "Malik Perera",
      title: "CEO & Transformation Architect.",
      experience: "+30 years experience.",
      image: "/Asset 5.png",
      linkedinUrl: "#",
    },
    {
      id: 2,
      name: "Dinusha Wijegunawarden",
      title: "Director of Operations, Compliance and Audits.",
      experience: "+20 years experience.",
      image: "/Asset 6.png",
      linkedinUrl: "#",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Header Section */}
          <div>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl  text-[#0B7A6F] mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Meet our Leaders
            </motion.h2>
            
            <motion.p
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our team blends deep expertise in ISO standards, lean management, 
              software engineering, and AI integration. We're not just developers—we're 
              auditors, trainers, and transformation architects.
            </motion.p>
          </div>

          {/* Right Column - Leaders Grid (2 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                className="flex flex-col items-center sm:items-start h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              >
                {/* Profile Image */}
                <motion.div
                  className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 mb-4 rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
                  />
                </motion.div>

                {/* Profile Info - Flex container to align links */}
                <div className="text-center sm:text-left flex flex-col flex-1 w-full">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B7A6F] mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0B7A6F] mb-1">
                      {leader.title}
                    </p>
                    <p className="text-xs sm:text-sm text-[#0B7A6F] mb-3 font-medium">
                      {leader.experience}
                    </p>
                  </div>

                  {/* LinkedIn Link - Aligned at bottom */}
                  <a
                    href={leader.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-700 hover:text-[#0B7A6F] transition-colors duration-300 group justify-center sm:justify-start"
                  >
                    <span className="text-xs sm:text-sm font-medium">
                      See my profile
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image 
                        src="/Asset 7.png"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain" 
                      />
                    </motion.div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
