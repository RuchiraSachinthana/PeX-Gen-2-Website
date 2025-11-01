import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

// Define the data structure for each FAQ item
type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

// Data extracted from your image
const faqData: FAQItem[] = [
  {
    id: "q1",
    question: "Who is PEX Software designed for?",
    answer:
      "PEX Software is purpose-built for ISO 9001 certified organizations, as well as CEOs and Quality Managers seeking to elevate their compliance programs into performance-driven systems. It also supports organizations preparing for ISO certification by streamlining documentation, workflows, and audit readiness.",
  },
  {
    id: "q2",
    question: "Can PEX Software support other international standards?",
    answer:
      "Yes, PEX Software is designed to be flexible and can support various other international standards beyond ISO 9001, including ISO 14001, ISO 45001, and more.",
  },
  {
    id: "q3",
    question: "Can PEX Software integrate with existing enterprise systems?",
    answer:
      "Absolutely. We offer robust API capabilities to ensure PEX Software can seamlessly integrate with your existing ERP, CRM, HRIS, and other critical enterprise systems.",
  },
  {
    id: "q4",
    question: "How does AI enhance the capabilities of PEX Software?",
    answer:
      "AI powers intelligent document analysis, automates compliance checks, provides predictive insights into potential non-conformities, and assists in optimizing workflows for continuous improvement.",
  },
  {
    id: "q5",
    question:
      "Is PEX Software suitable for small and medium-sized enterprises (SMEs)?",
    answer:
      "Yes, PEX Software is scalable and offers flexible pricing tiers, making it a suitable and cost-effective solution for SMEs as well as large corporations.",
  },
  {
    id: "q6",
    question: "How secure is our data within PEX Software?",
    answer:
      "Data security is our top priority. We employ end-to-end encryption, regular security audits, and comply with international data protection regulations like GDPR to ensure your data is always secure.",
  },
];

// Reusable Accordion Item Component
interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Question Header (Button) */}

      <button
        onClick={onToggle}
        className="flex w-full max-w-full sm:max-w-2xl mx-auto items-center justify-between rounded-full bg-teal-800 pl-0 pr-2 sm:pr-3 py-2 sm:py-3 text-left text-white"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-3">
          <div className="flex h-12 w-12  items-center justify-center rounded-full bg-yellow-400 text-teal-900">
            <span className="font-bold text-base">
              {item.id.replace("q", "Q")}
            </span>
          </div>
          <span className="font-semibold">{item.question}</span>
        </div>
        <ChevronDown
          className={`h-6 w-6 shrink-0 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Answer Content (Animated) */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className=" rounded-b-xl bg-white p-6 text-gray-700 shadow-md max-w-full sm:max-w-2xl mx-auto">
          {item.answer}
        </div>
      </div>
    </motion.div>
  );
};

// Main FAQ Section Component
const FAQSection: React.FC = () => {
  // State to track the currently open item. 'q1' is open by default per your image.
  const [openId, setOpenId] = useState<string | null>("q1");

  const handleToggle = (id: string) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full mx-auto h-full px-4 sm:px-6 py-10 lg:px-8 relative z-10 bg-lime-50">
      <motion.h2
        className="mb-8 text-3xl font-bold text-teal-900 max-w-full sm:max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        FAQs
      </motion.h2>
      <div>
        {faqData.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
