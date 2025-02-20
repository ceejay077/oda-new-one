import React from "react";
import SuccessReadMore from "./sub-components/readMoreSuccessSection";

import { Inter } from "next/font/google";

// const montserratfont = Montserrat({
//   subsets: ["latin"],
//   weight: "500",
// });

// const interfont = Inter({
//   subsets: ["latin"],
//   weight: "400",
// });

function Success() {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="mx-[150px]">
        <div className="flex flex-row items-center  justify-between">
          <h2 className="text-3xl mx-[75px]  text-gray-900 dark:text-sectionTitle sm:text-4xl xl:text-5xl">
            Our Success Works
          </h2>
          <div className="mr-[80px] flex flex-row items-center font-bold text-CTAButtons underline">
            <div>See all works</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 p-10 md:px-20">
          <div className="bg-white rounded-md  overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-auto object-cover"
                src="/images/homePage/our-services/1.png"
              />
            </div>
            <div className="pt-4">
              <div className="text-lg font-medium text-gray-800 mb-2">
                Construction Cleaning Melbourne
              </div>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, mi sed egestas tincidunt, libero dolor bibendum nisl,
                non aliquam quam massa id lacus.
              </p>
            </div>
            <div className="mt-6">
              <div>
                <a href="#">
                  <SuccessReadMore />
                </a>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------------------------- */}
          <div className="bg-white rounded-md  overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-auto object-cover"
                src="/images/homePage/our-services/2.png"
              />
            </div>
            <div className="pt-4">
              <div className="text-lg font-medium text-gray-800 mb-2">
                Restaurant and Pub Cleaning
              </div>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, mi sed egestas tincidunt, libero dolor bibendum nisl,
                non aliquam quam massa id lacus.
              </p>
              <div className="mt-6">
                <div>
                  <a href="#">
                    <SuccessReadMore />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------------------------- */}

          <div className="bg-white rounded-md  overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-auto object-cover"
                src="/images/homePage/our-services/3.png"
              />
            </div>
            <div className="pt-4">
              <div className="text-lg font-medium text-gray-800 mb-2">
                Retail and Shopping Centers
              </div>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, mi sed egestas tincidunt, libero dolor bibendum nisl,
                non aliquam quam massa id lacus.
              </p>
              <div className="mt-6">
                <div>
                  <a href="#">
                    <SuccessReadMore />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------------------------- */}

          {/* ----------------------------------------------------------------------------------------------------- */}

          {/* -------------------------------------------s--------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
}

export default Success;
