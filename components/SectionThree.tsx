"use client";
import Image from "next/image";

export default function SectionThree() {
  return (
    <div
      className=" py-10 text-gray-900"
      style={{ backgroundColor: "#bae2e0" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-6 gap-10">
        {/* Left section - 1/4 */}
        <div className="col-span-2 text-left flex flex-col  gap-4">
          <div
            className="bg-white p-4 rounded-lg min-h-100 shadow-md bg-contain bg-center bg-no-repeat relative flex items-center justify-center"
            style={{ backgroundImage: "url('/Asset 4.svg')" }}
          >
            <div className="absolute top-0 right-0">
              <Image
                src="/Asset 5.svg"
                alt="Rocket icon"
                width={50}
                height={50}
                className="w-20 h-20"
              />
            </div>

            {/* Content wrapper - centered */}
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
                  <span className="font-bold">1000+</span>
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
        <div className="col-span-4 text-center justify-center flex flex-col gap-4">
          <div
            className="bg-white rounded-lg shadow-md bg-cover bg-center bg-no-repeat min-h-100"
            style={{
              backgroundImage: "url('/image_navigator_background.webp')",
            }}
          >
            <div className="p-6 border-black border-2">
              <h3 className="font-bold text-lg mb-2">Card 3</h3>
              <p className="text-sm">Content for card 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
