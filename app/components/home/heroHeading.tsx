import React from "react";

function HeroHeading() {
  return (
    <div>
      <div className="w-full mb-8 md:mb-0">
        <h1 className="text-[48px] sm:text-[60px] md:text-[80px] lg:text-[120px] leading-[1.2] text-white mb-4">
          Cleaning <br /> Melbourne
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white mb-6 w-full sm:w-[600px] md:w-[800px]">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default HeroHeading;
