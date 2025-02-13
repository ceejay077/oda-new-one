"use client";
import React, { useState } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 3;
  const totalSlides = Math.ceil(serviceData.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleServices = () => {
    const start = currentSlide * slidesPerView;
    return serviceData.slice(start, start + slidesPerView);
  };

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

      {/* Navigation Container */}
      <div className="w-full max-w-[1400px] px-4">
        {/* Slider Section */}
        <div className="flex justify-between gap-8 mb-8">
          {getVisibleServices().map((service, index) => (
            <div
              key={index + currentSlide * slidesPerView}
              className="group bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] flex-1"
            >
              <div className="relative h-[400px]">
                <img
                  alt={service.title}
                  className="w-full h-full object-cover"
                  src={`/images/homePage/our-services/${index +
                    1 +
                    currentSlide * slidesPerView}.png`}
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

        <div className="flex flex-row justify-center">
          <button className="bg-[#27479B] w-[200px] h-[60px] rounded-[8px] text-white">
            Learn More
          </button>
        </div>

        {/* Navigation Section - Positioned below grid */}
        <div className="flex items-center justify-between px-1">
          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-yellow-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="bg-yellow-500 text-white p-4 rounded hover:bg-yellow-600 transition-colors"
              aria-label="Previous slide"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-yellow-500 text-white p-4 rounded hover:bg-yellow-600 transition-colors"
              aria-label="Next slide"
            >
              <svg
                className="w-4 h-4"
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
    </div>
  );
}

export default OurServices;
