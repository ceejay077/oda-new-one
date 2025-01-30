import React from "react";
import VeiwServices from "./sub-components/view_services_button";

function OurServices() {
  return (
    <div className="flex flex-col items-center px-4 mt-11 lg:mt-32">
      {/* Title and Description Section */}
      <div className="text-center mb-12 max-w-2xl">
        <h2 className="text-3xl text-gray-900 dark:text-sectionTitle sm:text-4xl xl:text-5xl">
          Our Services
        </h2>
        <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 dark:text-titleDescription">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      {/* Grid Section */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-md overflow-hidden shadow-md"
            >
              <div className="relative">
                <img
                  alt="Service Image"
                  className="w-full h-auto object-cover"
                  src={`/images/homePage/our-services/${index + 1}.png`}
                />
              </div>
              <div className="p-4">
                <div className="text-lg font-medium text-gray-800 mb-2">
                  Service Title {index + 1}
                </div>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  auctor, mi sed egestas tincidunt.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 hover:underline">
                    {/* -------------------------------------------------------------- */}
                    <div></div>
                    {/* -------------------------------------------------------------- */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
