import React from "react";
import Image from "next/image";

const BlogContentSection = () => {
  return (
    <div className="relative w-full  bg-white items-center pb-20 overflow-hidden">
      <div className="w-full max-w-6xl bg-teal-700 min-h-200 rounded-3xl z-10 mx-auto p-8 mb-2 text-white">
        <h3 className="text-yellow-400 text-xl pb-6">
          THE PROBLEM WITH TRADITIONAL AUDIT PREPARATION
        </h3>

        <p className=" text-xl pb-2">
          Most companies treat audits as one-off events. They prepare
          reactively, often relying on:
        </p>
        <p className="pb-6 ml-4 text-yellow-400 text-md">
          Paper-based records or scattered spreadsheets
          <br />
          Manual checklists and fragmented SOPs
          <br />
          Staff memory to explain process flows
          <br />
          Last-minute fixes to cover gaps
        </p>

        <p className=" text-xl pb-2">
          This approach is not only inefficient — it&apos;s risky. It leads to:
        </p>
        <p className="pb-6 ml-4 text-yellow-400 text-md">
          Non-conformities and audit findings
          <br />
          Employee stress and burnout
          <br />
          Poor visibility into process performance
          <br />
          Missed opportunities for improvement
        </p>

        <h3 className="text-yellow-400 text-xl ">
          THE PEX APPROACH: BUILT FOR CONTINUAL AUDIT READINESS
        </h3>

        <p className=" text-xl">
          PEX Software™ is a Business Process Management System (BPMS) designed
          to keep your organization audit-ready
          <br />— every day, not just during audit season.
        </p>

        <p className=" text-md">Here&apos;s how:</p>

        {/* Grid Container */}
        <div className="grid grid-cols-2 gap-6 mt-4">
          {/* Card 01 */}
          <div className="relative text-center text-white">
            <Image width={850} height={50} src="/Asset 68.svg" alt="card1" />
            <div className="absolute text-xl text-teal-800 top-10 left-20 text-left">
              <h2 className="uppercase font-semibold">
                Process Mapping with Clarity
              </h2>
              <br /> PEx Software™ helps you document every <br />
              process step, role, and control point, aligned <br /> with ISO
              9001 / ISO 22000 and other <br />
              standards. Auditors can trace workflows <br /> from start to
              finish without ambiguity.
            </div>
          </div>

          {/* Card 02 */}
          <div className="relative text-center text-white">
            <Image width={850} height={50} src="/Asset 68.svg" alt="card2" />
            <div className="absolute text-xl text-teal-800 top-10 left-20 text-left">
              <h2 className="uppercase font-semibold mb-6">
                Centralized Document Control
              </h2>
              No more hunting for SOPs, records, or <br /> approvals. PEx
              Software™ stores all <br /> compliance documents in one place,
              with
              <br /> version control and access logs. Finish <br /> without
              ambiguity.
            </div>
          </div>

          {/* Card 03 - UPDATED */}
          <div className="relative text-center text-white">
            <Image width={850} height={50} src="/Asset 68.svg" alt="card3" />
            <div className="absolute text-xl text-teal-800 top-10 left-20 text-left">
              <h2 className="uppercase font-semibold mb-6">
                Real-Time Monitoring
              </h2>
              Dashboards show live data on process <br />
              performance, non-conformities, and <br />
              corrective actions. You don&apos;t just <br />
              prepare for audits — you live in a state <br />
              of readiness.
            </div>
          </div>

          {/* Card 04 - UPDATED */}
          <div className="relative text-center text-white">
            <Image width={850} height={50} src="/Asset 68.svg" alt="card4" />
            <div className="absolute text-xl text-teal-800 top-10 left-20 text-left">
              <h2 className="uppercase font-semibold mb-6">
                Continual Improvement Tracking
              </h2>
              PEx Software™ captures Improvement <br />
              Initiatives, root cause analyses, and <br />
              change logs, demonstrating your <br />
              commitment to quality and growth.
            </div>
          </div>

          {/* Card 05 - UPDATED */}
          <div className="relative text-center text-white">
            <Image width={850} height={50} src="/Asset 68.svg" alt="card5" />
            <div className="absolute text-xl text-teal-800 top-10 left-20 text-left">
              <h2 className="uppercase font-semibold mb-6">
                Mobile-First Accessibility
              </h2>
              Frontline staff can log incidents, <br />
              complete checklists, and upload <br />
              evidence directly from their mobile <br />
              devices, ensuring nothing is missed.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl bg-white border-1 leading-relaxed text-xl mb-2  rounded-3xl z-10 mx-auto p-8 text-border">
        What Is Business Process Re-engineering? <br /> <br /> BPR is the
        science of identifying and eliminating wasteful activities to create
        lean, efficient, and customer-centric <br />
        processes. It’s not just about cost-cutting — it’s about consistency,
        scalability, and satisfaction. <br />
        Done right, BPR: <br />• Reduces operational costs <br />• Improves
        delivery timelines <br />• Enhances employee productivity <br />•
        Strengthens customer experience
      </div>
      <div className="w-full max-w-6xl mx-auto mb-2 rounded-3xl">
        <Image
          src="/Asset 16.webp"
          alt="Avatar 4"
          width={1000}
          height={40}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full max-w-6xl bg-[#d2edb9] leading-relaxed text-xl mb-5  rounded-3xl z-10 mx-auto p-8 text-border">
        <p className="uppercase ">The Smarter Path: Start with PEx Software™</p>
        <br /> PEx Software™ is a Business Process Management System (BPMS)
        built on ISO 9001 principles. It helps <br />
        organizations: <br />
        • Map and optimize processes <br />• Identify inefficiencies and
        bottlenecks <br />• Drive continual improvement <br />• Prepare for ERP
        integration with clarity and control <br />
        <br /> By implementing PEx before an ERP, organizations gain:
        <br />
        • A lean operational foundation <br />• Clear process ownerships <br />•
        Measurable ROI <br />• A smoother, more effective ERP rollout
      </div>
      <div className="w-full max-w-6xl bg-white leading-relaxed  flex justify-between z-10 mx-auto  ">
        <div className="text-md p-6">
          <p className="uppercase">Final Thought</p>
          Digital transformation isn’t just about technology — <br />
          it’s about process clarity, people empowerment, and <br />
          strategic alignment. Before you invest
          <br /> in an ERP, invest in understanding and improving your
          processes. <br /> PEx Software™ helps you do exactly that.
        </div>
        <div className="bg-[#d2edb9] p-8 py-10 text-xs rounded-3xl">
         <p className="text-sm mb-2"> About the Author </p>
          Malik Perera is a transformation architect, executive coach, and CEO
          of Swiss <br />
          Advantage Systems. With 30 years consulting experience across 150+
          client <br />
          projects and training over 10,000 employees, he specializes in
          business process <br />
          re-engineering, ISO compliance, and digital innovation. Malik is also
          the creator <br />
          of PEx Software™ – a BPMS designed to help organizations maintain
          compliance <br />
          to best management standards and achieve continual improvement in all{" "}
          <br />
          operations.
        </div>
      </div>
    </div>
  );
};

export default BlogContentSection;
