"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CardData {
  id: string;
  title: string;
  description: string;
  detailedContent: string;
}

const PexGenManagementSection = () => {
  // Track the ID of the expanded card.
  // If you want multiple cards open at once, change this to an array of strings.
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const categories = [
    {
      id: "operations",
      svgPath: "/Asset 74.svg",
      title: "OPERATIONS\nSUPPORT",
    },
    {
      id: "monitoring",
      svgPath: "/Asset 74.svg",
      title: "MONITORING &\nIMPROVEMENT",
    },
    { id: "management", svgPath: "/Asset 74.svg", title: "MANAGEMENT\nTOOLS" },
  ];

  const cards: CardData[] = [
    {
      id: "card-1",
      title: "DOCUMENT\nMANAGEMENT",
      description:
        "Control and access ISO documents with\nversion history and approval workflows.",
      detailedContent:
        "This module offers centralized document storage, automated version control, and role-based access. Users can create, review, approve, and archive documents with full traceability. AI-powered semantic search allows instant retrieval of procedures, policies, and records—reducing audit preparation time significantly.",
    },
    {
      id: "card-2",
      title: "STRATEGIC\nDIRECTION PLANNING",
      description:
        "Align your business goals through\nstructured strategic planning.",
      detailedContent:
        "This module helps leadership teams define and document the organization's strategic direction, including mission, vision, values, and long-term objectives. It ensures alignment with ISO requirement for integrating stakeholder expectations, market trends, and internal capabilities (SWOT / PESTLE analysis) into a living strategy map. AI tools assist in identifying gaps, tracking strategic initiatives, and linking them to operational KPIs.",
    },
    {
      id: "card-3",
      title: "INTERNAL\nAUDITS",
      description:
        "Plan, execute, and document internal\naudits with full traceability and compliance.",
      detailedContent:
        "Compliant with ISO standards, this module streamlines audit scheduling, auditor assignment, checklist creation, and evidence capture. It supports multi-site audits, automated scoring, and CAPA integration. Audit findings are linked to relevant clauses, and AI tools assist in identifying recurring issues and audit fatigue across departments.",
    },
    {
      id: "card-4",
      title: "CUSTOMER\nCOMPLAINTS\nMANAGEMENT",
      description:
        "Respond to customer complaints with\nspeed, transparency, and accountability.",
      detailedContent:
        "This module supports capturing complaints, assigning resolution workflows, and tracking response times. It includes escalation rules, communication logs, and satisfaction follow-ups. AI tools categorize complaints by root cause and frequency, helping teams prioritize systemic fixes over reactive responses.",
    },
    {
      id: "card-5",
      title: "KEY PERFORMANCE\nINDICATORS",
      description:
        "Set measurable goals and track\nperformance across departments and\nprocesses.",
      detailedContent:
        "Aligned with ISO standards, this module supports SMART goal setting, automated KPI dashboards, and real-time performance tracking. Users can link objectives to strategic plans, assign ownership, and monitor progress with visual indicators.",
    },
    {
      id: "card-6",
      title: "CUSTOMER\nSATISFACTION\nSURVEY",
      description:
        "Gather feedback to drive improvements\nand enhance customer loyalty.",
      detailedContent:
        "This module enables organizations to design and deploy customer satisfaction surveys. It includes customizable templates, automated distribution, and real-time analytics. Feedback is categorized by themes and AI sentiment analysis helps uncover hidden trends and improvement opportunities.",
    },
    {
      id: "card-7",
      title: "SUPPLIER\nMANAGEMENT",
      description:
        "Evaluate and monitor suppliers to ensure\nconsistent quality and compliance.",
      detailedContent:
        "Aligned with ISO requirements, this module enables organizations to onboard, assess, and monitor suppliers based on performance, risk, and compliance. It includes supplier scorecards, audit logs, and corrective action tracking. AI analytics highlight supplier trends, flag underperformers, and support strategic sourcing decisions.",
    },
    {
      id: "card-8",
      title: "RISK ANALYSIS",
      description:
        "Identify, assess, and mitigate risks that\ncould impact quality and compliance.",
      detailedContent:
        "Aligned with ISO standards, this module provides a structured framework for risk-based thinking. Users can categorize risks by process, severity, and likelihood, and assign mitigation actions with deadlines and responsible owners. AI tools help predict emerging risks based on historical data and operational trends, ensuring proactive decision-making and continuous improvement.",
    },
    {
      id: "card-9",
      title: "PRODUCT\nNONCONFORMITY\nMANAGEMENT",
      description:
        "Detect, document, and resolve product\nnonconformities with full audit trails.",
      detailedContent:
        "Aligned with ISO requirements, this module allows users to log nonconforming outputs, assign corrective actions, and track resolution status. It supports root cause analysis, containment actions, and verification of effectiveness. AI tools help identify patterns across product lines and suggest preventive measures to reduce recurrence.",
    },
  ];

  return (
    <div id="management-section" className="relative">
      {/* Section Title */}
     

      {/* Desktop Version */}
      <div className="hidden mb-10 md:block w-full  py-20 items-center justify-center">
        <div className="max-w-7xl mx-auto">
           <div className="w-full text-center mb-10 ">
        <h2 className="text-3xl md:text-4xl  text-[#0B5B52] ">
          Management tools for you
        </h2>
      </div>
          {/* Category Headers */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="text-white z-10 flex items-center justify-center relative"
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

          {/* Cards Grid */}
          {/* Changed from grid-rows-4 to auto flow so height adjusts naturally */}
          <div className="grid grid-cols-3 gap-6 items-start">
            {cards.map((card, index) => {
              const isExpanded = expandedId === card.id;

              return (
                <motion.div
                  layout // This prop enables the smooth resize animation
                  key={index}
                  className="bg-[#d1ecb8] rounded-3xl relative overflow-hidden flex flex-col min-h-[280px]"
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    layout: { duration: 0.3, type: "spring", bounce: 0 },
                    opacity: { duration: 0.5 },
                  }}
                >
                  <motion.div layout className="p-8">
                    <motion.h4
                      layout="position"
                      className="text-2xl font-extrabold text-black whitespace-pre-line mb-3"
                    >
                      {card.title}
                    </motion.h4>
                    <motion.p
                      layout="position"
                      className="text-gray-700 font-semibold text-md leading-relaxed whitespace-pre-line"
                    >
                      {card.description}
                    </motion.p>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="h-px w-full bg-black/10 my-4" />
                          <p className="text-gray-800 text-base leading-relaxed">
                            {card.detailedContent}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Button Area - Using Flexbox logic instead of absolute to push down correctly */}
                  <div className=" flex justify-end mt-auto">
                    <motion.button
                      layout="position"
                      onClick={() => toggleExpand(card.id)}
                      className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm flex items-center justify-center hover:bg-yellow-500 transition-colors z-20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded ? "Show less" : "Read more"}{" "}
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 ml-1" />
                      ) : (
                        <ChevronDown className="w-5 h-5 ml-1" />
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden w-full py-8 px-4">
        <div className="max-w-[370px] mx-auto space-y-8">
          {/* Group 1 */}
          <div className="w-full text-center mb-5 ">
        <h2 className="text-xl text-[#0B5B52] ">
          Management tools for you
        </h2>
      </div>
          <div>
            <SectionHeader title="OPERATIONS\nSUPPORT" />
            <div className="space-y-4">
              {cards.slice(0, 3).map((card, index) => (
                <MobileCard
                  key={card.id}
                  card={card}
                  index={index}
                  isExpanded={expandedId === card.id}
                  onToggle={() => toggleExpand(card.id)}
                />
              ))}
            </div>
          </div>

          {/* Group 2 */}
          <div>
            <SectionHeader title="MONITORING &\nIMPROVEMENT" />
            <div className="space-y-4">
              {cards.slice(3, 6).map((card, index) => (
                <MobileCard
                  key={card.id}
                  card={card}
                  index={index}
                  isExpanded={expandedId === card.id}
                  onToggle={() => toggleExpand(card.id)}
                />
              ))}
            </div>
          </div>

          {/* Group 3 */}
          <div>
            <SectionHeader title="MANAGEMENT\nTOOLS" />
            <div className="space-y-4">
              {cards.slice(6, 9).map((card, index) => (
                <MobileCard
                  key={card.id}
                  card={card}
                  index={index}
                  isExpanded={expandedId === card.id}
                  onToggle={() => toggleExpand(card.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper for Mobile Cards (Reuse logic)
const MobileCard = ({
  card,
  index,
  isExpanded,
  onToggle,
}: {
  card: CardData;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => (
  <motion.div
    layout
    className="bg-[#d1ecb8] rounded-2xl relative overflow-hidden flex flex-col"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <motion.div layout className="p-6">
      <motion.h4
        layout="position"
        className="text-lg font-extrabold text-black mb-2"
      >
        {card.title.replace(/\n/g, " ")}
      </motion.h4>
      <motion.p
        layout="position"
        className="text-gray-700 font-semibold text-sm leading-relaxed"
      >
        {card.description.replace(/\n/g, " ")}
      </motion.p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-px w-full bg-black/10 my-4" />
            <p className="text-gray-800 text-sm leading-relaxed">
              {card.detailedContent}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>

    <div className="flex justify-end mt-auto">
      <motion.button
        layout="position"
        onClick={onToggle}
        className="bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-xs flex items-center justify-center hover:bg-yellow-500 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isExpanded ? "Show less" : "Read more"}{" "}
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 ml-1" />
        ) : (
          <ChevronDown className="w-4 h-4 ml-1" />
        )}
      </motion.button>
    </div>
  </motion.div>
);

// Helper for Header
const SectionHeader = ({ title }: { title: string }) => (
  <motion.div
    className="text-white z-10 flex items-center justify-center relative mb-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Image
      src="/Asset 74.svg"
      alt={title.replace(/\n/g, " ")}
      width={200}
      height={80}
      className="w-full h-auto object-contain"
    />
    <motion.div className="absolute text-lg p-6  left-3 top-0 font-bold text-left w-full leading-tight">
      {title.split("\\n").map((line, index, array) => (
        <span key={index}>
          {line}
          {index < array.length - 1 && <br />}
        </span>
      ))}
    </motion.div>
  </motion.div>
);

export default PexGenManagementSection;
