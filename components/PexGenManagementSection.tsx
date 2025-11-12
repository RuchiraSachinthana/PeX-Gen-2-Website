"use client";

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
    <div className="w-full  items-center justify-center py-20">
      <div className="max-w-7xl mx-auto">
        {/* Category Headers */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className=" text-white z-10 flex items-center justify-center relative"
            >
              <Image
                src={category.svgPath}
                alt={category.title}
                width={200}
                height={80}
                className="w-full max-w-md h-auto object-contain"
              />
              <div className="absolute text-2xl p-4 left-4 top-0 whitespace-pre-line font-bold text-left w-full leading-tight">
                {category.title}
              </div>
            </div>
          ))}
        </div>

        {/* Cards Grid - 3x4 Layout */}
        <div className="grid grid-cols-3 grid-rows-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#d1ecb8]  rounded-3xl  min-h-[260px] relative"
            >
              <div className="absolute top-8 left-8 right-8">
                <h4 className="text-2xl  font-extrabold text-black whitespace-pre-line mb-3">
                  {card.title}
                </h4>
                <p className="text-gray-700 font-semibold  text-md leading-relaxed whitespace-pre-line ">
                  {card.description}
                </p>
              </div>

              <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm flex items-center justify-center  absolute bottom-0 right-0 hover:bg-yellow-500 transition-colors">
                Read more <ChevronDown className="w-7 h-7" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PexGenManagementSection;
