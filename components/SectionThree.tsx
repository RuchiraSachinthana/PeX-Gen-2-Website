"use client";
import { Maximize, Pause, Play, Volume2 } from "lucide-react";
import SectionTwoCard from "./SectionTwoCard";

export default function SectionThree() {
  return (
    <div
      className="p-8 my-12 text-gray-900"
      style={{ backgroundColor: "#bae2e0" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2  justify-around items-center">
        {/* Left section - 2 rows */}
        <div className="flex flex-col gap-10">
          {/* Top row - Content */}
          <div className="text-left">
            <p className="text-2xl mb-4 text-primary">
              Watch video how PEx Software™ can help your business improve
              productivity
            </p>
          </div>

          {/* Bottom row - 2 columns with images */}
          <div className="grid grid-cols-2 gap-4">
            <SectionTwoCard
              iconSrc="/bell_icon.svg"
              iconWidth={50}
              iconHeight={50}
              title="Get the latest updates"
              subtitle="Stay informed with notifications"
              buttonText="Sign up"
            />
            <SectionTwoCard
              iconSrc="/rocket_icon.svg"
              iconWidth={50}
              iconHeight={50}
              title="Request Demo"
              subtitle="See PEx Software in action"
              buttonText="Book Now"
            />
          </div>
        </div>

        {/* Right section - YouTube Video */}
        <div className="flex items-center justify-center relative">
          {/* Yellow glow behind video */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(254, 240, 138, 0.8) 0%, rgba(254, 240, 138, 0) 70%)",
              transform: "scale(1.2)",
            }}
          ></div>

          <div
            className="relative w-4/5 rounded-3xl shadow-2xl p-4 z-10"
            style={{
              background:
                "linear-gradient(to bottom right, #0e685b, #10b981, #0e685b)",
            }}
          >
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Controls */}
            <div className="mt-4 flex items-center justify-center gap-4 pb-2">
              <button
                className="p-2 rounded-full text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#0e685b" }}
              >
                <Play className="w-5 h-5" />
              </button>
              <button
                className="p-2 rounded-full text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#0e685b" }}
              >
                <Pause className="w-5 h-5" />
              </button>
              <button
                className="p-2 rounded-full text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#0e685b" }}
              >
                <Volume2 className="w-5 h-5" />
              </button>
              <button
                className="p-2 rounded-full text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#0e685b" }}
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
