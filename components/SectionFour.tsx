// I made a small component for the yellow arrow icon to avoid repeating code.
const ArrowIcon = () => (
  <div className="absolute top-0 right-0 bg-yellow-400 p-4 rounded-2xl text-gray-900">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  </div>
);

// I also made a component for the "Read more" button.
const CaseStudyButton = () => (
  <div className="flex items-center space-x-4">
    <span className="text-xs font-bold uppercase text-white">Case Study</span>
    <button className="bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-3xl flex items-center space-x-1">
      <span>Read more</span>
      <span>→</span>
    </button>
  </div>
);

export default function SectionFour() {
  return (
    <section
      className="w-full py-16 bg-cover bg-center bg-no-repeat"
      // This is your light green background from the target image
      style={{ backgroundImage: "url('/qs4 (5).webp')" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3 items-stretch">
        {/* --- Column 1 (Was your div1) --- */}
        {/* We need to make this a 'relative' card to position text inside it */}
        <div
          className="relative text-white p-8 rounded-3xl bg-cover bg-center min-h-[450px] flex flex-col justify-between"
          style={{ backgroundImage: "url('/qs4 (4).webp')" }} // The man's photo
        >
          <ArrowIcon />
          {/* Text content at the top */}
          <div>
            <h3 className="text-6xl font-bold">90%</h3>
            <p className="text-2xl">document reduction</p>
          </div>
          {/* Banner at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
            <span className="text-xs font-bold uppercase tracking-widest">
              This Months Success Story
            </span>
          </div>
        </div>

        {/* --- Column 2 (Was your div2) --- */}
        {/* This column is a vertical stack: Title first, then the card */}
        <div className="flex flex-col space-y-4">
          {/* The title is just text, not a red box */}
          <h2 className="text-3xl font-bold text-gray-800">
            Businesses that have grown with us
          </h2>

          {/* The ISO 9001 Case Study Card */}
          <div className="relative bg-teal-800 text-white p-6 rounded-3xl flex-grow flex flex-col justify-between">
            <ArrowIcon />
            {/* Using min-h to make sure it has space */}
            <div className="min-h-[150px] flex items-end justify-start">
              <h4 className="text-2xl font-semibold text-left max-w-xs">
                Small company and how PEx solution
              </h4>
            </div>
            <CaseStudyButton />
          </div>
        </div>

        {/* --- Column 3 (Was your div3) --- */}
        {/* This structure was correct! A vertical stack of two items. */}
        <div className="flex flex-col space-y-4">
          {/* The 3-image grid. I removed the 'bg-pink-200' container. */}
          <div className="grid grid-cols-3 gap-4">
            <div
              className="h-24 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/qs4 (1).webp')" }}
            ></div>
            <div
              className="h-24 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/qs4 (2).webp')" }}
            ></div>
            <div
              className="h-24 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/qs4 (3).webp')" }}
            ></div>
          </div>

          {/* The PEx Solution Case Study Card */}
          <div className="relative bg-gray-800 text-white p-6 rounded-3xl flex-grow flex flex-col justify-between">
            <ArrowIcon />
            <div className="min-h-[150px] flex items-end justify-start">
              <h4 className="text-2xl font-semibold max-w-xs">
                How PEx solution saved 1.6 million in the first quarter
              </h4>
            </div>
            <CaseStudyButton />
          </div>
        </div>
      </div>
    </section>
  );
}
