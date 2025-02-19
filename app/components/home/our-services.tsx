"use client";
import React, { useState } from "react";
import { Montserrat, Inter } from "next/font/google";

const montserratfont600 = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const interfont = Inter({
  subsets: ["latin"],
  weight: "400",
});

const interfont700 = Inter({
  subsets: ["latin"],
  weight: "400",
});
const montserratfont = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const serviceData = [
  {
    title: "Construction Cleaning Melbourne",
    description:
      "Successfully delivered comprehensive industrial cleaning services for a 100,000 sq. ft. facility.",
  },
  {
    title: "Restaurant and Pub Cleaning ",
    description:
      "Provided customized cleaning solutions for a 25-story office building in Melbourne.",
  },
  {
    title: "Retail and Shopping Centers",
    description:
      "Executed daily cleaning operations for a bustling retail mall with over 50,000 visitors per day.",
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
      <div className="text-center mb-12">
        <h2 className= {`text-[56px] text-center ${montserratfont.className} black-blue`}>
          Our Services
        </h2>
        <p
          className={` mt-5 text-[18px]  font-normal text-gray-600 dark:text-titleDescription w-[724px] ${interfont.className}`}
        >
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      {/* Navigation Container */}
      <div className="w-full max-w-full  px-[200px]">
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
                  <h3
                    className={`absolute bottom-6 left-6 text-white text-[28px] font-semibold ${montserratfont600.className}`}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="pt-6">
                <p
                  className={`text-titleDescription text-[16px] ${interfont.className}`}
                >
                  {service.description}
                </p>
                <div className="mt-4 ">
                  <button
                    className={`inline-flex underline
                       items-center px-0 py-2 text-[16px] font-medium text-blue-600 hover:text-blue-800 transition-colors secondary-blue ${interfont700.className}`}
                  >
                    View Service
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                    >
                      <path
                        d="M19.1508 16.287L19.1508 9.13342L11.9973 9.13342"
                        stroke="#79B3E1"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.13349 19.1506L19.0507 9.2334"
                        stroke="#79B3E1"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
