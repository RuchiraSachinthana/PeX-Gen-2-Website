"use client";
import Image from "next/image";

const BlogMessageSection = () => {
  return (
    <div className="relative w-full flex bg-white items-center py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto  ">
        <div className="relative">
          <Image width={850} height={50} src="/Asset 67.svg" alt="Client 2" />
          <p className="text-xl absolute top-10 left-10 leading-10">
            Digital transformation is no longer optional — it&apos;s a strategic
            imperative. Having <br /> worked as a CEO, Process Engineer and
            business consultant for nearly 30 years <br /> and working with over
            150 organizations across industries, I’ve seen a recurring <br />{" "}
            and costly mistake: companies rush into ERP implementations without
            first <br /> re-engineering their business processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogMessageSection;
