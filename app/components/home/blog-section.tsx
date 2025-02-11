"use client";
import React, { useState, useEffect } from "react";
// import SuccessReadMore from "./sub-components/readMoreSuccessSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
];

export default function BlogSection() {
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
    <div className="w-full max-w-full px-[200px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-normal text-gray-900 dark:text-sectionTitle">
          Latest News from ODA
        </h2>
        <div className="text-blue-600 underline font-semibold cursor-pointer">
          See all insights
        </div>
      </div>

      <div className="relative w-full flex justify-center">
        <div className="w-full max-w-full lg:pt-10 sm:p-1 md:px-0 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  className="w-[464px] h-[400px] object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="pt-4 px-6 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.description}
                  </p>
                  <div className="mt-4">
                    <a href="#" className="text-blue-600 font-medium">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex justify-between items-center mt-6 px-4">
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
