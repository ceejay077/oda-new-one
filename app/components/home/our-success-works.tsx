"use client";
import React, { useState, useEffect } from "react";
// import SuccessReadMore from "./sub-components/readMoreSuccessSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Montserrat, Inter } from "next/font/google";

const montserratfont = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const interfont = Inter({
  subsets: ["latin"],
  weight: "400",
});

const interfontbold = Inter({
  subsets: ["latin"],
  weight: "700",
});

const posts = [
  {
    title: "ODA Achieves 200+ Happy Clients Milestone!",
    image: "/images/homePage/success-works/1.png",
    description:
      "One Direction Australia proudly announces reaching over 200 satisfied clients, a testament to their exceptional commercial cleaning services.",
  },
  {
    title: "Restaurant and Pub Cleaning Success",
    image: "/images/homePage/success-works/2.png",
    description:
      "Our team has transformed restaurants and pubs with top-tier cleaning services, ensuring compliance and customer satisfaction.",
  },
  {
    title: "Retail and Shopping Centers Cleaning Excellence",
    image: "/images/homePage/success-works/3.png",
    description:
      "Keeping retail and shopping centers spotless to enhance customer experience and maintain high standards.",
  },
  {
    title: "Retail and Shopping Centers Cleaning Excellence",
    image: "/images/homePage/success-works/3.png",
    description:
      "Keeping retail and shopping centers spotless to enhance customer experience and maintain high standards.",
  },
  {
    title: "Restaurant and Pub Cleaning Success",
    image: "/images/homePage/success-works/2.png",
    description:
      "Our team has transformed restaurants and pubs with top-tier cleaning services, ensuring compliance and customer satisfaction.",
  },
  {
    title: "ODA Achieves 200+ Happy Clients Milestone!",
    image: "/images/homePage/success-works/1.png",
    description:
      "One Direction Australia proudly announces reaching over 200 satisfied clients, a testament to their exceptional commercial cleaning services.",
  },
];

export default function SuccessWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setItemsPerPage(window.innerWidth >= 1024 ? 3 : 1);
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - itemsPerPage + posts.length) % posts.length
    );
  };

  return (
    <div className="w-full max-w-full md:px-[200px] px-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className={`xxl:text-[56px] text-[26px] ${montserratfont.className} black-blue`}>
          Our Success Works
        </h2>
        <a href="#" className={`text-blue-700 ${interfontbold.className} font-bold underline cursor-pointer dark-blue `}>
        See all insights
        </a>
      </div>

      <div className="relative w-full flex justify-center">
        <div className="w-full max-w-full lg:pt-10 sm:p-1  grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <img
                  className="object-cover w-full"
                  src={post.image}
                  alt={post.title}
                />
                <div className="pt-4 pb-6">
                  <h3 className={` text-xl ${montserratfont.className}`}>
                    {post.title}
                  </h3>
                  <p className={`${interfont.className}  text-titleDescription leading-28 sm:text-[18px]  sm:font-normal text-sm`}>
                    {post.description}
                  </p>
                  <div className="mt-4">
                    <a href="#" className={`text-blue-600 font-medium secondary-blue  ${interfont.className}`}>
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex justify-between items-center mt-6 mb-11">
        <div className="flex space-x-2">
          {posts.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-yellow-500" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
        <div className="flex space-x-2">
          <button
            className="p-3 bg-yellow-500 rounded-md disabled:opacity-50"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            className="p-3 bg-yellow-500 rounded-md disabled:opacity-50"
            onClick={nextSlide}
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
