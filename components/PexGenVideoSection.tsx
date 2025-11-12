"use client";

export default function PexGenVideoSection() {
  return (
    <section className="flex flex-col  bg-teal-700 items-center justify-center py-10 px-4 text-center">
      <div className="max-w-6xl text-center justify-center flex mx-auto">
        <div className="relative w-full rounded-3xl shadow-2xl p-3 z-10 bg-[linear-gradient(to_bottom_right,#0e685b,#10b981,#0e685b)]">
          <div className="relative w-120 h-90">
            <iframe
              className=" w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/9RjT0j7LtrY?si=run9EXq-vCZfCc6a"
              title="PEx Gen2 Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
