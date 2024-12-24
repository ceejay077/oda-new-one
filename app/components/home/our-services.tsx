import React from "react";
import VeiwServices from "./sub-components/view_services_button";

function OurServices() {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="text-center ">
        <h2 className="text-3xl  text-gray-900 dark:text-sectionTitle sm:text-4xl xl:text-5xl">
          Our Services
        </h2>
        <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 dark:text-titleDescription">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <div className="mx-[150px]">
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
                  <VeiwServices />
                </a>
              </div>
            </div>
          </div>

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
                    <VeiwServices />
                  </a>
                </div>
              </div>
            </div>
          </div>

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
                    <VeiwServices />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md  overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-auto object-cover"
                src="/images/homePage/our-services/4.png"
              />
            </div>
            <div className="pt-4">
              <div className="text-lg font-medium text-gray-800 mb-2">
                Industrial Cleaning
              </div>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, mi sed egestas tincidunt, libero dolor bibendum nisl,
                non aliquam quam massa id lacus.
              </p>
              <div className="mt-6">
                <div>
                  <a href="#">
                    <VeiwServices />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md  overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-auto object-cover"
                src="/images/homePage/our-services/5.png"
              />
            </div>
            <div className="pt-4">
              <div className="text-lg font-medium text-gray-800 mb-2">
                Office Cleaning Services in Melbourne
              </div>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, mi sed egestas tincidunt, libero dolor bibendum nisl,
                non aliquam quam massa id lacus.
              </p>
              <div className="mt-6">
                <div>
                  <a href="#">
                    <VeiwServices />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md  overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-auto object-cover"
                src="/images/homePage/our-services/6.png"
              />
            </div>
            <div className="pt-4">
              <div className="text-lg font-medium text-gray-800 mb-2">
                Commercial Cleaning Melbourne
              </div>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, mi sed egestas tincidunt, libero dolor bibendum nisl,
                non aliquam quam massa id lacus.
              </p>
              <div className="mt-6">
                <div>
                  <a href="#">
                    <VeiwServices />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
