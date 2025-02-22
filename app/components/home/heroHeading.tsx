import React from "react";
import { Montserrat, Inter } from "next/font/google";

const montserratfont = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const interfont = Inter({
  subsets: ["latin"],
  weight: "200",
});

const interfont600 = Inter({
  subsets: ["latin"],
  weight: "600",
});

function HeroHeading() {
  return (
    <div>
      <div className="w-full mb-8 md:mb-0">
        <h1
          className={`xxl:text-[120px] text-[60px] md:text-[80px] lg:text-[120px] leading-[1.2] text-white mb-4 ${montserratfont.className}`}
        >
          Cleaning <br /> Melbourne
        </h1>

        <p
          className={` sm:text-lg md:text-xl text-white mb-6 w-full ${interfont.className}`}
        >
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per.
        </p>
        <a
          href="#"
          className={` bg-[#EACB32] text-black-500 font-semibold h-[60px] w-[200px] rounded-lg hover:bg-blue-700 mt-[48px] transition duration-300 flex flex-col justify-center items-center ${interfont600.className}`}
        >
          Request a Quote
        </a>
      </div>
    </div>
  );
}

export default HeroHeading;
