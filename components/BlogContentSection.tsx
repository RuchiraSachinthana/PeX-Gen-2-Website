"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BlogMessageSection from "./BlogMessageSection";



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
    <>
    <BlogMessageSection />
    <div className="relative w-full bg-white items-center py-8 md:py-10 overflow-hidden px-4 md:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl bg-teal-700 rounded-xl md:rounded-2xl lg:rounded-3xl z-10 mx-auto p-4 md:p-6 lg:p-8 mb-2 text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* //first page */}

        <h3 className="text-yellow-400 text-base md:text-lg lg:text-xl pb-3 md:pb-4 lg:pb-6">
        The Myth of ERP as a Cure-All
        </h3>

        <p className="text-sm md:text-base lg:text-xl pb-2 mb-2 md:mb-3 lg:mb-4">
        Many organizations believe that investing in an ERP system will automatically solve their operational inefficiencies. It won&apos;t. Without process re-engineering, an ERP simply digitizes the same broken workflows. The result? A high-cost system that delivers financial reports — yes — but at the expense of bottom-level staff who bear the brunt of manual data entry, repetitive tasks, and burnout.
        </p>
        <p className="text-sm md:text-base lg:text-xl pb-2">
          I&apos;ve seen this pattern repeat across industries:
        </p>
        <ul className="pb-3 md:pb-4 lg:pb-6 ml-4 md:ml-5 lg:ml-6 text-yellow-400 text-xs md:text-sm lg:text-base space-y-2 md:space-y-2.5 lg:space-y-3 list-disc">
          <li>Finance teams get their reports on time.</li>
          <li>Operational teams drown in inefficiency.</li>
          <li>Employees complain of increased workload and wasteful activity.</li>
          <li>
            ROI remains elusive — because no one can quantify the value of the
            transformation.
          </li>
        </ul> 

         <h3 className="text-yellow-400 text-base md:text-lg lg:text-xl uppercase ">
          Why This Happens
        </h3>

        <p className="text-sm md:text-base lg:text-xl">
          This mistake stems from two critical gaps:
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 my-3 md:my-3.5 lg:my-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              number: 1,
              text: "Top management's lack awareness about what Business Process Re-engineering (BPR) truly means.",
            },
            {
              number: 2,
              text: "ERP vendors' limited competence in process design — most focus on system deployment, not operational excellence.",
            },
          ].map((item) => (
            <motion.div
              key={item.number}
              className="bg-teal-600 text-white p-3 md:p-4 lg:p-6 rounded-lg shadow-lg"
              variants={cardVariants}
            >
              <div className="flex items-start gap-2 md:gap-3 lg:gap-4">
                <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-yellow-400 text-teal-800 rounded-full flex items-center justify-center text-base md:text-xl lg:text-2xl font-bold">
                  {item.number}
                </div>
                <div className="text-left">
                  <p className="text-sm md:text-base lg:text-xl text-white leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
         <p className="text-sm md:text-base lg:text-xl">
          ERP systems are powerful tools — but only when built on optimized
          processes. Without BPR, organizations end <br /> up automating
          inefficiency.
        </p>
      </motion.div>
      <motion.div
        className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl bg-white border leading-relaxed text-sm md:text-base lg:text-xl mb-2 rounded-xl md:rounded-2xl lg:rounded-3xl z-10 mx-auto p-4 md:p-6 lg:p-8 text-border"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-2 text-base md:text-lg lg:text-xl font-semibold">
        What Is Business Process Re-engineering?
          </h2>
          BPR is the science of identifying and eliminating wasteful activities to create lean, efficient, and customer-centric processes. It&apos;s not just about cost-cutting — it&apos;s about consistency, scalability, and satisfaction.
      </motion.div>
     
        <motion.div
          className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto mb-2 rounded-xl md:rounded-2xl lg:rounded-3xl"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="https://pex-sooty.vercel.app/api/images/6921fa5556430a2e1b25c81f"
            alt="blog_image 2"
            width={1000}
            height={40}
            className="w-full h-full object-cover rounded-xl md:rounded-2xl lg:rounded-3xl"
          />
        </motion.div>
      
      <motion.div
        className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl bg-[#d2edb9] leading-relaxed text-sm md:text-base lg:text-xl mb-4 md:mb-5 rounded-xl md:rounded-2xl lg:rounded-3xl z-10 mx-auto p-4 md:p-6 lg:p-8 text-border"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="uppercase text-sm md:text-base lg:text-lg font-semibold">The Smarter Path: Start with PEx Software™</p>
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
        className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl bg-white leading-relaxed mt-4 md:mt-6 lg:mt-8 flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 md:justify-between z-10 mx-auto"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-sm md:text-base lg:text-lg p-3 md:p-4 lg:p-6">
          <p className="uppercase mb-2 md:mb-3 lg:mb-4 font-bold text-sm md:text-base">Final Thought</p>
          Digital transformation isn&apos;t just about technology — <br />
          it&apos;s about process clarity, people empowerment, and <br />
          strategic alignment. Before you invest
          <br /> in an ERP, invest in understanding and improving your
          processes. <br /> PEx Software™ helps you do exactly that.
        </div>
        <div className="bg-[#d2edb9] p-4 md:p-6 lg:p-8 py-6 md:py-12 lg:py-16 text-xs md:text-sm rounded-xl md:rounded-2xl lg:rounded-3xl">
          <p className="text-xs md:text-sm mb-2 font-bold">
            {" "}
            About the Author{" "}
          </p>
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
    </>
  );
};

export default BlogContentSection;
