import React from "react";

export default function Awards() {
  return (
    <div className="w-full max-w-full px-[200px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl text-gray-900 dark:text-sectionTitle">
          Awards & Certifications
        </h2>
        <p className="max-w-4xl mx-auto mt-5 text-base font-normal text-gray-600 dark:text-titleDescription mb-12">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Horem
          ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      {/* First section - Grid on mobile, inline on larger screens */}
      <div className="">
        <div className="grid grid-rows-2 grid-cols-3 md:grid-rows-none md:flex md:justify-between md:items-center gap-4 sm:gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
                <img
                  src="/images/homePage/awards.png"
                  alt="industrial cleaning"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Grid - More responsive */}
    </div>
  );
}
