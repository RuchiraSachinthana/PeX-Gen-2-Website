"use client";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SectionThree() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Turn compliance into strategy",
      content:
        "Align ISO 9001 with business goals, making it a CEO’s decision-making toolkit.",
    },
    {
      title: "Go fully paperless",
      content:
        "Eliminate manual documentation with automated workflows and digital records.",
    },
    {
      title: "Boost efficiency",
      content:
        "Reduce audit preparation time, and free Quality Managers to focus on improvements.",
    },
    {
      title: "Enhance visibility",
      content:
        "Real-time dashboards and AI insights give leaders clarity on performance and risks.",
    },
    {
      title: "Drive continuous improvement",
      content:
        "Built-in Lean management and best practices in management ensure processes evolve with the business.",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className=" py-10 text-gray-900"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-6 gap-10 items-end">
        {/* Left section - 1/4 */}
        <div className="col-span-2 text-left flex flex-col  gap-4">
          <div
            className="bg-white p-4 rounded-3xl min-h-80 shadow-md bg-contain bg-right bg-no-repeat relative flex items-center justify-end"
            style={{ backgroundImage: "url('/Asset 4.svg')" }}
          >
            <div className="absolute top-0 right-0">
              <Image
                src="/Asset 5.svg"
                alt="Rocket icon"
                width={50}
                height={50}
                className="w-15 h-15"
              />
            </div>

            {/* Content wrapper - right aligned */}
            <div className="flex flex-col items-start justify-center gap-4 text-left">
              {/* Title and Subtitle */}
              <div>
                <h3 className="text-white text-secondary text-2xl mb-4">
                  Your reliable <br /> partner in <br /> business growth
                </h3>
                <p className="text-white text-2xl mt-6">Follow us</p>
              </div>

              {/* Yellow Button */}
              <button className="bg-yellow-400 px-6 hover:bg-yellow-500 text-gray-900 py-2 rounded-full shadow-lg transition-colors">
                <div className="flex justify-between items-center gap-2">
                  Linkedin
                  <span>1000+</span>
                  followers
                </div>
              </button>

              {/* Bottom Round Avatars */}
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <Image
                    src="/avatar.jpg"
                    alt="Avatar 1"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <Image
                    src="/avatar.jpg"
                    alt="Avatar 2"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <Image
                    src="/avatar.jpg"
                    alt="Avatar 3"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right section - 3/4 */}
        <div className="col-span-4 text-center align-center justify-center flex flex-col gap-4">
          <div
            className="bg-white rounded-3xl shadow-md bg-cover bg-center bg-no-repeat min-h-100 relative"
            style={{
              backgroundImage: "url('/image_navigator_background.webp')",
            }}
          >
            {/* Yellow Button - Top Absolute */}
            <button className="bg-yellow-400 px-6 py-2 rounded-full shadow-lg hover:bg-yellow-500  z-10">
              How PEx Software™ can improve business process
            </button>

            <div className="p-10 flex flex-col h-full">
              {/* Content area - takes available space */}
              <div className="flex-1 flex flex-col items-center justify-center px-16">
                {/* Content */}
                <div className="text-center mb-8">
                  <h3 className="text-yellow-500 text-3xl mb-4 text-primary">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-3xl text-white mb-6">
                    {slides[currentSlide].content}
                  </p>
                  {/* Read More Button - Below content */}
                  <button
                    className="flex items-center gap-2 text-gray-900 px-6 py-3 rounded-full shadow-lg transition-colors mx-auto hover:opacity-90"
                    style={{ backgroundColor: "#04afbc" }}
                  >
                    <span className="text-sm text-white">Read More</span>
                    <ArrowRight className="w-5 h-5 text-white " />
                  </button>
                </div>
              </div>
            </div>

            {/* Left Arrow - Fixed at left side */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-4 shadow-lg hover:opacity-80 transition-opacity z-20"
              style={{ backgroundColor: "#0e685b" }}
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Right Arrow - Fixed at right side */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-4 shadow-lg hover:opacity-80 transition-opacity z-20"
              style={{ backgroundColor: "#0e685b" }}
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Navigation Dots - Fixed at bottom */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex justify-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? "w-8 opacity-100" : "opacity-50"
                    }`}
                    style={{ backgroundColor: "#0e685b" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
