"use client";

export default function PexGenComplianceSection() {
  return (
    <section className="flex flex-col items-center  bg-white justify-center py-16 px-4 text-center">
      <div className="max-w-6xl bg-white">
        {/* Line 1: Heading */}
        <h1 className="text-4xl  text-teal-700 mb-4">
          Your Compliance Journey, Reimagined.
        </h1>

        {/* Line 2: Main Heading (Part 1) */}
        <h2 className="text-3xl font-bold text-teal-700 uppercase ">
          FROM ISO COMPLIANCE BURDEN TO BUSINESS ADVANTAGE
        </h2>

        {/* Line 3: Main Heading (Part 2) */}
        <h2 className="text-3xl font-bold text-teal-700 uppercase mb-8">
          WITH PEX SOFTWARE GEN 2™
        </h2>

        {/* Lines 4-7: Paragraph with forced line breaks */}
        <p className="text-xl text-gray-800 leading-relaxed">
          PEx Gen2™ is an AI-powered, paperless compliance and performance
          management system designed for
          <br />
          organizations certified under ISO 9001 Quality Management and ISO
          22000 Food Safety Management
          <br />
          systems—or those preparing for certification. It transforms
          documentation pain points into operational
          <br />
          clarity, empowering teams to focus on what matters: quality, safety,
          and growth.
        </p>
      </div>
    </section>
  );
}
