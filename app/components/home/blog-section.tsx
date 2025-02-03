"use client";
import React, { useState } from "react";
import SuccessReadMore from "./sub-components/readMoreSuccessSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

const posts = [
  {
    title: "Construction Cleaning Melbourne",
    image: "/images/homePage/success-works/1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.",
  },
  {
    title: "Restaurant and Pub Cleaning",
    image: "/images/homePage/success-works/2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.",
  },
  {
    title: "Retail and Shopping Centers",
    image: "/images/homePage/success-works/3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.",
  },
];

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + posts.length) % posts.length
    );
  };

  return (
    <div className="mt-24 mx-auto max-w-7xl px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-sectionTitle">
          Latest News from ODA
        </h2>
        <div className="text-CTAButtons underline font-bold cursor-pointer">
          See all news
        </div>
      </div>

      <div className="relative">
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 p-10 md:px-20">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden">
              <img
                className="w-full h-auto object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="pt-4 px-4 pb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm">{post.description}</p>
                <div className="mt-6">
                  <a href="#">
                    <SuccessReadMore />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden flex items-center justify-center relative">
          <button
            className="absolute left-0 z-10 p-2 bg-gray-700 text-white rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <div className="w-full p-5 flex flex-col items-center bg-white rounded-md overflow-hidden">
            <img
              className="w-full h-auto object-cover"
              src={posts[currentIndex].image}
              alt={posts[currentIndex].title}
            />
            <div className="pt-4 px-4 pb-6 text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {posts[currentIndex].title}
              </h3>
              <p className="text-gray-500 text-sm">
                {posts[currentIndex].description}
              </p>
              <div className="mt-6">
                <a href="#">
                  <SuccessReadMore />
                </a>
              </div>
            </div>
          </div>
          <button
            className="absolute right-0 z-10 p-2 bg-gray-700 text-white rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="lg:hidden flex justify-center mt-4">
        {posts.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
