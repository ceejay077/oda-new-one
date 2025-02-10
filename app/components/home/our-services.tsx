import React from "react";

const serviceData = [
  {
    title: "Construction Cleaning",
    description:
      "Professional cleaning services for construction sites and post-construction projects.",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Comprehensive cleaning solutions for commercial spaces and offices.",
  },
  {
    title: "Residential Cleaning",
    description:
      "Thorough cleaning services for homes and residential properties.",
  },
  {
    title: "Industrial Cleaning",
    description:
      "Specialized cleaning services for industrial facilities and warehouses.",
  },
  {
    title: "Window Cleaning",
    description:
      "Professional window cleaning services for buildings of all heights.",
  },
  {
    title: "Carpet Cleaning",
    description: "Deep cleaning services for carpets and floor coverings.",
  },
];

function OurServices() {
  return (
    <div className="flex flex-col items-center mt-11 lg:mt-32">
      {/* Title and Description Section */}
      <div className="text-center mb-12 max-w-4xl">
        <h2 className="text-3xl text-gray-900 dark:text-sectionTitle sm:text-4xl xl:text-5xl">
          Our Services
        </h2>
        <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 dark:text-titleDescription">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      {/* Grid Section */}
      <div className="w-full max-w-full  px-[200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[64px]">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-[400px] w-[464px]">
                <img
                  alt={service.title}
                  className="w-full h-full object-cover"
                  src={`/images/homePage/our-services/${index + 1}.png`}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                  <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 text-sm">{service.description}</p>
                <div className="mt-4">
                  <button className="inline-flex items-center px-0 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                    View Service
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
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
