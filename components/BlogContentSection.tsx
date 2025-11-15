"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BlogContentSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="relative w-full  bg-white items-center pb-20 overflow-hidden">
      <motion.div
        className="w-full max-w-6xl bg-teal-700 min-h-200 rounded-3xl z-10 mx-auto p-8 mb-2 text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* <h3 className="text-yellow-400 text-xl pb-6">
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

        <p className=" text-md">Here&apos;s how:</p> */}

        {/* Grid Container */}

        {/* card grid */}

        {/* <div className="relative text-center text-white">
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
          </div> */}

        {/* Card 02 */}
        {/* <div className="relative text-center text-white">
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
          </div> */}

        {/* Card 03 - UPDATED */}
        {/* <div className="relative text-center text-white">
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
          </div> */}

        {/* Card 04 - UPDATED */}
        {/* <div className="relative text-center text-white">
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
          </div> */}

        {/* Card 05 - UPDATED */}
        {/* <div className="relative text-center text-white">
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
          </div> */}

        {/* //first page */}

        <h3 className="text-yellow-400 text-xl pb-6">
          The Myth of ERP as a Cure-All
        </h3>

        <p className=" text-xl pb-2 mb-4">
          Many organizations believe that investing in an ERP system will
          automatically solve their operational inefficiencies. It won’t. <br />
          Without process re-engineering, an ERP simply digitizes the same
          broken workflows. The result? A high-cost <br />
          system that delivers financial reports — yes — but at the expense of
          bottom-level staff who bear the brunt of <br />
          manual data entry, repetitive tasks, and burnout.
        </p>
        <p className=" text-xl pb-2">
          I’ve seen this pattern repeat across industries:
        </p>
        <p className="pb-6 ml-4 text-yellow-400 text-md">
          • Finance teams get their reports on time.
          <br />
          • Operational teams drown in inefficiency.
          <br />
          • Employees complain of increased workload and wasteful activity.
          <br />• ROI remains elusive — because no one can quantify the value of
          the <br />
          transformation.{" "}
        </p>

        <h3 className="text-yellow-400 text-xl uppercase ">Why This Happens</h3>

        <p className=" text-xl">This mistake stems from two critical gaps:</p>
        <motion.div
          className="grid grid-cols-2 gap-6 my-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative text-center text-white"
            variants={cardVariants}
          >
            <Image width={850} height={50} src="/Asset 3.svg" alt="card4" />
            <div className="absolute text-xl text-teal-800 top-10 left-20 text-left">
              Top management&apos;s lack awareness about <br />
              what Business Process Re-engineering (BPR) <br /> truly means.
            </div>
          </motion.div>
          <motion.div
            className="relative text-center text-white"
            variants={cardVariants}
          >
            <Image width={850} height={50} src="/Asset 69.svg" alt="card4" />
            <div className="absolute text-xl text-teal-800 top-10 left-20 text-left">
              ERP vendors’ limited competence in process <br />
              design — most focus on system deployment, <br />
              not operational excellence.
            </div>
          </motion.div>
        </motion.div>
        <p className="text-xl">
          ERP systems are powerful tools — but only when built on optimized
          processes. Without BPR, organizations end <br /> up automating
          inefficiency.
        </p>
      </motion.div>
      <motion.div
        className="w-full max-w-6xl bg-white border-1 leading-relaxed text-xl mb-2  rounded-3xl z-10 mx-auto p-8 text-border"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        What Is Business Process Re-engineering? <br /> <br /> BPR is the
        science of identifying and eliminating wasteful activities to create
        lean, efficient, and customer-centric <br />
        processes. It’s not just about cost-cutting — it’s about consistency,
        scalability, and satisfaction. <br />
        Done right, BPR: <br />• Reduces operational costs <br />• Improves
        delivery timelines <br />• Enhances employee productivity <br />•
        Strengthens customer experience
      </motion.div>
      <motion.div
        className="w-full max-w-6xl mx-auto mb-2 rounded-3xl"
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/Asset 16.webp"
          alt="Avatar 4"
          width={1000}
          height={40}
          className="w-full h-full object-cover rounded-3xl"
        />
      </motion.div>
      <motion.div
        className="w-full max-w-6xl bg-[#d2edb9] leading-relaxed text-xl mb-5  rounded-3xl z-10 mx-auto p-8 text-border"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
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
      </motion.div>
      <motion.div
        className="w-full max-w-6xl bg-white leading-relaxed mt-8 flex justify-between z-10 mx-auto"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-md p-6">
          <p className="uppercase mb-4">Final Thought</p>
          Digital transformation isn’t just about technology — <br />
          it’s about process clarity, people empowerment, and <br />
          strategic alignment. Before you invest
          <br /> in an ERP, invest in understanding and improving your
          processes. <br /> PEx Software™ helps you do exactly that.
        </div>
        <div className="bg-[#d2edb9] p-8 py-16 text-xs rounded-3xl">
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
      </motion.div>
    </div>
  );
};

export default BlogContentSection;
