"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface CardData {
  title: string;
  description: string;
}

const PexGenManagementSection = () => {
  const categories = [
    {
      id: "operations",
      svgPath: "/Asset 54.svg",
      title: "OPERATIONS\nSUPPORT",
    },
    {
      id: "monitoring",
      svgPath: "/Asset 54.svg",
      title: "MONITORING &\nIMPROVEMENT",
    },
    { id: "management", svgPath: "/Asset 54.svg", title: "MANAGEMENT\nTOOLS" },
  ];

  const cards: CardData[] = [
    {
      title: "DOCUMENT\nMANAGEMENT",
      description:
        "Control and access ISO documents with\nversion history and approval workflows.",
    },
    {
      title: "STRATEGIC\nDIRECTION PLANNING",
      description:
        "Align your business goals through\nstructured strategic planning.",
    },
    {
      title: "INTERNAL\nAUDITS",
      description:
        "Plan, execute, and document internal\naudits with full traceability and compliance.",
    },
    {
      title: "CUSTOMER\nCOMPLAINTS\nMANAGEMENT",
      description:
        "Respond to customer complaints with\nspeed, transparency, and accountability.",
    },
    {
      title: "KEY PERFORMANCE\nINDICATORS",
      description:
        "Set measurable goals and track\nperformance across departments and\nprocesses.",
    },
    {
      title: "CUSTOMER\nSATISFACTION\nSURVEY",
      description:
        "Lorem ipsum dolor sit amet, consectetuer\nadipiscing elit, sed diam nonummy\nconsectetuer adipiscing",
    },
    {
      title: "SUPPLIER\nMANAGEMENT",
      description:
        "Evaluate and monitor suppliers to ensure\nconsistent quality and compliance.",
    },
    {
      title: "RISK ANALYSIS",
      description:
        "Identify, assess, and mitigate risks that\ncould impact quality and compliance.",
    },
    {
      title: "PRODUCT\nNONCONFORMITY\nMANAGEMENT",
      description:
        "Detect, document, and resolve product\nnonconformities with full audit trails.",
    },
  ];

  return (
    <div id="management-section">
      {/* Desktop Version */}
      <div className="hidden md:block w-full mb-[-170] pt-20  items-center justify-center ">
        <div className="max-w-7xl mx-auto">
          {/* Category Headers */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className=" text-white z-10 flex items-center justify-center relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <Image
                  src={category.svgPath}
                  alt={category.title}
                  width={200}
                  height={80}
                  className="w-full max-w-md h-auto object-contain"
                />
                <motion.div
                  className="absolute text-2xl p-4 left-4 top-0 whitespace-pre-line font-bold text-left w-full leading-tight"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  {category.title}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Cards Grid - 3x4 Layout */}
          <div className="grid grid-cols-3 grid-rows-4 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-[#d1ecb8]  rounded-3xl  min-h-[260px] relative"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
              >
                <div className="absolute top-8 left-8 right-8">
                  <motion.h4
                    className="text-2xl  font-extrabold text-black whitespace-pre-line mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                  >
                    {card.title}
                  </motion.h4>
                  <motion.p
                    className="text-gray-700 font-semibold  text-md leading-relaxed whitespace-pre-line "
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                  >
                    {card.description}
                  </motion.p>
                </div>

                <motion.button
                  className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm flex items-center justify-center  absolute bottom-0 right-0 hover:bg-yellow-500 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read more <ChevronDown className="w-7 h-7" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden w-full py-8 px-4">
        <div className="max-w-[370px] mx-auto space-y-8">
          {/* OPERATIONS SUPPORT Section */}
          <div>
            <motion.div
              className="text-white z-10 flex items-center justify-center relative mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/Asset 54.svg"
                alt="Operations Support"
                width={200}
                height={80}
                className="w-full h-auto object-contain"
              />
              <motion.div
                className="absolute text-lg p-3 left-3 top-0 whitespace-pre-line font-bold text-left w-full leading-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {"OPERATIONS\nSUPPORT"}
              </motion.div>
            </motion.div>

            {/* Operations Cards */}
            <div className="space-y-4">
              {cards.slice(0, 3).map((card, index) => (
                <motion.div
                  key={index}
                  className="bg-[#d1ecb8] rounded-2xl min-h-[200px] relative p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.h4
                    className="text-lg font-extrabold text-black mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    {card.title.replace(/\n/g, " ")}
                  </motion.h4>
                  <motion.p
                    className="text-gray-700 font-semibold text-sm leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {card.description.replace(/\n/g, " ")}
                  </motion.p>
                  <motion.button
                    className="bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-xs flex items-center justify-center absolute bottom-0 right-0 hover:bg-yellow-500 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read more <ChevronDown className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* MONITORING & IMPROVEMENT Section */}
          <div>
            <motion.div
              className="text-white z-10 flex items-center justify-center relative mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/Asset 54.svg"
                alt="Monitoring & Improvement"
                width={200}
                height={80}
                className="w-full h-auto object-contain"
              />
              <motion.div
                className="absolute text-lg p-3 left-3 top-0 whitespace-pre-line font-bold text-left w-full leading-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {"MONITORING &\nIMPROVEMENT"}
              </motion.div>
            </motion.div>

            {/* Monitoring Cards */}
            <div className="space-y-4">
              {cards.slice(3, 6).map((card, index) => (
                <motion.div
                  key={index + 3}
                  className="bg-[#d1ecb8] rounded-2xl min-h-[200px] relative p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.h4
                    className="text-lg font-extrabold text-black mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    {card.title.replace(/\n/g, " ")}
                  </motion.h4>
                  <motion.p
                    className="text-gray-700 font-semibold text-sm leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {card.description.replace(/\n/g, " ")}
                  </motion.p>
                  <motion.button
                    className="bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-xs flex items-center justify-center absolute bottom-0 right-0 hover:bg-yellow-500 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read more <ChevronDown className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* MANAGEMENT TOOLS Section */}
          <div>
            <motion.div
              className="text-white z-10 flex items-center justify-center relative mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/Asset 54.svg"
                alt="Management Tools"
                width={200}
                height={80}
                className="w-full h-auto object-contain"
              />
              <motion.div
                className="absolute text-lg p-3 left-3 top-0 whitespace-pre-line font-bold text-left w-full leading-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {"MANAGEMENT\nTOOLS"}
              </motion.div>
            </motion.div>

            {/* Management Cards */}
            <div className="space-y-4">
              {cards.slice(6, 9).map((card, index) => (
                <motion.div
                  key={index + 6}
                  className="bg-[#d1ecb8] rounded-2xl min-h-[200px] relative p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.h4
                    className="text-lg font-extrabold text-black mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    {card.title.replace(/\n/g, " ")}
                  </motion.h4>
                  <motion.p
                    className="text-gray-700 font-semibold text-sm leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {card.description.replace(/\n/g, " ")}
                  </motion.p>
                  <motion.button
                    className="bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-xs flex items-center justify-center absolute bottom-0 right-0 hover:bg-yellow-500 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read more <ChevronDown className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PexGenManagementSection;
