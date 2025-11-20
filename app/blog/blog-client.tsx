"use client";

import BlogHeader from "@/components/BlogHeader";
import CaseStudiesShowcase from "@/components/CaseStudiesShowcase";
import Footer from "@/components/Footer";
import SocialsSection from "@/components/SocialSection";
import { useState } from "react";
import BlogContentSection from "./../../components/BlogContentSection";

interface Blog {
  _id: string;
  title: string;
  hero_img: string;
  sub_title_1: string;
  paragraph_1: string;
  created_at: string;
  sub_title_2?: string;
  paragraph_2?: string;
  img_url_2?: string;
}

const DUMMY_BLOGS: Blog[] = [
  {
    _id: "1",
    title: "The Hidden Cost of Manual Compliance",
    hero_img: "/Asset 7.jpg",
    sub_title_1: "Why Spreadsheets Are Killing Your Efficiency",
    paragraph_1:
      "Many SMEs rely on spreadsheets to manage their ISO compliance. While it seems cost-effective initially, the hidden costs of version control issues, data errors, and lack of real-time visibility can be crippling. Manual systems create silos where information gets trapped, making it impossible for leadership to make data-driven decisions.",
    created_at: "2023-10-01",
    sub_title_2: "The Automation Advantage",
    paragraph_2:
      "Automating compliance reduces errors by 90% and frees up your team to focus on strategic improvements rather than data entry. With PEx Software, you get a centralized system that ensures everyone is working on the latest version of documents, and non-conformities are tracked and resolved in real-time.",
    img_url_2: "/Asset 8.jpg",
  },
  {
    _id: "2",
    title: "From Compliance to Competitive Advantage",
    hero_img: "/Asset 55.webp",
    sub_title_1: "Turning ISO Standards into Business Growth",
    paragraph_1:
      "ISO standards are often seen as a box-ticking exercise. However, when implemented correctly, they provide a framework for operational excellence. By aligning your quality objectives with your business strategy, you can transform compliance from a cost center into a driver of efficiency and customer satisfaction.",
    created_at: "2023-10-15",
    sub_title_2: "Strategic Alignment",
    paragraph_2:
      "PEx Software helps you link your quality KPIs directly to your strategic goals. This ensures that every audit, every corrective action, and every improvement initiative contributes to the bigger picture of business growth and market leadership.",
    img_url_2: "/Asset 56.webp",
  },
  {
    _id: "3",
    title: "The Future of Quality Management",
    hero_img: "/Asset 60.webp",
    sub_title_1: "AI and Predictive Quality",
    paragraph_1:
      "The future of quality management is predictive. AI-powered insights can help you identify potential risks before they become non-conformities. By analyzing historical data, you can predict trends and take proactive measures to ensure continuous improvement.",
    created_at: "2023-11-01",
    sub_title_2: "Embracing Digital Transformation",
    paragraph_2:
      "Digital transformation is no longer optional. To stay competitive, SMEs must embrace digital tools that provide real-time insights and agility. PEx Software is designed to be the catalyst for your digital transformation journey, making quality management seamless and intelligent.",
    img_url_2: "/Asset 61.webp",
  },
];

export default function BlogPageClient() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [blogData, setBlogData] = useState<Blog[]>(DUMMY_BLOGS);

  return (
    <div className="w-full min-h-screen">
      <BlogHeader />
      {/* <BlogMessageSection  /> */}

      <div className="flex flex-col gap-8">
        {blogData.map((blog) => (
          <BlogContentSection key={blog._id} blogData={blog} />
        ))}
      </div>

      <CaseStudiesShowcase />
      <SocialsSection />
      <Footer />
    </div>
  );
}
