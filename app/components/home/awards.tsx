import React from "react";
import { Montserrat, Inter } from "next/font/google";

const montserratfont = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const interfont = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function Awards() {
  return (
    <div className="flex flex-col items-center md:mt-0 mt-14 sm:py-10 ">
      
      <div className="text-center md:mb-12 sm:px-10 ">
        <h2 className= {`xxl:text-[56px] text-[26px] text-center ${montserratfont.className} black-blue`}>
        Awards & Certifications
        </h2>
        <p
          className={` mt-5 sm:text-[18px] text-sm  font-normal text-gray-600 dark:text-titleDescription md:w-[724px] ${interfont.className}`}
        >
           Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. 
        </p>
      </div>

      {/* First section - Grid on mobile, inline on larger screens */}
      <div className="w-full max-w-full  xxl:px-[200px] px-10">
        <div className="grid grid-rows-2 grid-cols-3 md:grid-rows-none md:flex md:justify-between md:items-center gap-4 sm:gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="">
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
