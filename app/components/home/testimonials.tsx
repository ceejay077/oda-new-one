"use client";
import React, { useState } from "react";
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

// Testimonials data separated from the component
const testimonialData = [
  {
    title: "Forem ipsum dolor",
    content:
      "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
    author: "Sheryl Berge",
    role: "User",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    title: "Forem ipsum dolor",
    content:
      "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
    author: "Sheryl Berge",
    role: "User",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    title: "Forem ipsum dolor",
    content:
      "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
    author: "Sheryl Berge",
    role: "User",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    title: "Forem ipsum dolor",
    content:
      "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
    author: "Sheryl Berge",
    role: "User",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    title: "Forem ipsum dolor",
    content:
      "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
    author: "Sheryl Berge",
    role: "User",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsPerView = 3;
  const totalSlides = Math.ceil(testimonialData.length / testimonialsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * testimonialsPerView;
    return testimonialData.slice(start, start + testimonialsPerView);
  };

  return (
    <div className="w-full max-w-full px-[200px]">
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className="bg-white"
      >
        <div className="mx-auto max-w-full">
          <div className="mx-auto max-w-screen text-left">
            <h2 className={`text-[56px] ${montserratfont.className} black-blue`}>
              Client Stories of Satisfaction
            </h2>
            <p className={`text-left text-titleDescription ${interfont.className} leading-28`}>
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          <ul
            role="list"
            className="mx-auto mt-12 grid max-w-full grid-cols-1 gap-6 sm:gap-8 lg:mt-12 lg:max-w-full lg:grid-cols-3"
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <li key={index}>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-md bg-TestimonialsBlue p-16 shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width="105"
                        height="78"
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                      </svg>
                      <blockquote className="relative">
                        <h4 className={`font-bold mb-5 black-blue text-xl ${interfontbold.className}`}>{testimonial.title}</h4>
                        <p className={`${interfont.className}  text-titleDescription leading-28`}>
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center border-t border-slate-100 pt-6">
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <img
                            alt=""
                            className="h-14 w-14 object-cover"
                            style={{ color: "transparent" }}
                            src={testimonial.image}
                          />
                        </div>
                        <div>
                          <div className="ml-5">
                              <p className={`${interfontbold.className} black-blue font-bold text-md`}>{testimonial.author}</p>
                              <p className={`${interfont.className} black-blue text-sm`}>{testimonial.role}</p>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
            ))}
          </ul>

          {/* Navigation Section */}
          <div className="flex items-center justify-between px-1 mt-8">
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
      </section>
    </div>
  );
}

export default Testimonials;
