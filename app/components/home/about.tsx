import React from "react";
import Figures from "./sub-components/aboutFigurs";

export default function about() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About ODA
              </h2>
              <p className="text-gray-400 mb-8">
                One Direction Australia (ODA) is a leading commercial cleaning
                company established in 2007, dedicated to addressing industry
                challenges with professionalism and integrity.
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-12">
                {[
                  "Over 15 years of industry experience.",
                  "A well-recognized name in commercial cleaning.",
                  "Honesty, passion, talent, and growth mindset.",
                  "Handpicked professionals for exceptional cleaning ability.",
                  "Logs for your API calls."
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <Figures />
                <div className="flex flex-col items-center lg:items-start">
                  <div className="font-semibold text-4xl text-indigo-800 dark:text-blue-400 mb-1">
                    500+
                  </div>
                  <span className="text-lg text-gray-900">projects</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="ml-4 md:ml-0">
                <a
                  className="inline-block sm:pr-6 px-6 py-2 text-center text-white bg-CTAButtons border border-CTAButtons rounded hover:bg-transparent hover:text-violet-600 transition-colors duration-200"
                  href="/download"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-full">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src="/images/homePage/about.png"
                alt="ODA Cleaning Services"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
