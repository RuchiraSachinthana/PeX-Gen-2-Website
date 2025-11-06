import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "../context/LanguageProvider";

// Define the data structure for each FAQ item
type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

// Main FAQ Section Component

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
        className="flex w-full max-w-full sm:max-w-4xl mx-auto items-center justify-between rounded-full bg-teal-800 pl-0 pr-2 sm:pr-3 py-2 sm:py-5 text-left text-white cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center relative space-x-3">
          <div className="flex h-17 w-17 absolute  items-center justify-center rounded-full bg-yellow-400 text-teal-900">
            <span className="text-xl">{item.id.replace("q", "Q")}</span>
          </div>
          <span className="ml-20 text-xl">{item.question}</span>
        </div>
        <ChevronDown
          className={`h-6 w-6 text-yellow-400 shrink-0 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Answer Content (Animated) */}
      <div
        className={`overflow-hidden  transition-all duration-300  ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className=" rounded-2xl  bg-white px-20 py-10 text-gray-700 shadow-md max-w-4xl mx-auto">
          {item.answer}
        </div>
      </div>
    </motion.div>
  );
};

// Main FAQ Section Component
const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  const faqData = t("faqSection.faqs") as FAQItem[];

  // State to track the currently open item. 'q1' is open by default per your image.
  const [openId, setOpenId] = useState<string | null>("q1");

  const handleToggle = (id: string) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full mx-auto h-full px-4 relative sm:px-6 py-10 lg:px-8 z-10 bg-[#d7ecbe]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="mb-8 text-3xl text-left text-teal-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {String(t("faqSection.title"))}
        </motion.h2>
      </div>
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
