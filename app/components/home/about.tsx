import React from "react";
import Figures from "./sub-components/aboutFigurs";
import { Montserrat, Inter } from "next/font/google";

const montserratfont = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const montserratfont600 = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const interfont = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function about() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-full  px-[200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="order-2 lg:order-1">
            <div className="mx-auto lg:mx-0">
              <h2
                className={`text-[56px] text-left ${montserratfont.className} black-blue`}
              >
                About ODA
              </h2>

              <p
                className={`text-titleDescription mb-8 text-[18px] ${interfont.className} `}
              >
                One Direction Australia (ODA) is a leading commercial cleaning
                company established in 2007, dedicated to addressing industry
                challenges with professionalism and integrity.
              </p>

              {/* Features List */}
              <ul
                className={`space-y-4 mb-12 text-titleDescription text-[18px] ${interfont.className}`}
              >
                {[
                  "Over 15 years of industry experience.",
                  "A well-recognized name in commercial cleaning.",
                  "Honesty, passion, talent, and growth mindset.",
                  "Handpicked professionals for exceptional cleaning ability.",
                  "Logs for your API calls.",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M17.1663 5.21053C16.8442 5.57053 16.5411 5.93053 16.2568 6.29053C16.1242 6.44211 16.0105 6.59368 15.8779 6.76421C16.1053 7.46526 16.2379 8.22316 16.2379 9C16.2189 12.9789 12.9789 16.2189 9 16.2189C5.02105 16.2189 1.78105 12.9789 1.78105 9C1.78105 5.02105 5.02105 1.78105 9 1.78105C10.2695 1.78105 11.4821 2.12211 12.5242 2.69053C12.8842 2.33053 13.2442 1.98947 13.6232 1.64842L13.8695 1.44C12.4674 0.530526 10.8 0 9 0C4.03579 0 0 4.03579 0 9C0 13.9642 4.03579 18 9 18C13.9642 18 18 13.9642 18 9C18 7.65474 17.6968 6.36632 17.1663 5.21053Z"
                          fill="#5A5A5B"
                        />
                        <path
                          d="M11.539 6.32847C10.8569 7.16216 10.2126 8.01479 9.60633 8.88637C9.30317 9.32216 9.00001 9.7769 8.7158 10.2316L6.29054 7.23795C6.00633 6.8969 5.5137 6.82111 5.13475 7.06742C4.73685 7.33268 4.64212 7.86321 4.90738 8.26111L7.95791 12.7895C8.0337 12.9032 8.14738 13.0169 8.28001 13.0927C8.45054 13.2064 8.64001 13.2632 8.82948 13.2632C9.18948 13.2632 9.58738 13.0737 9.75791 12.7516C9.92843 12.4485 10.7811 10.8758 11.3495 10.0232C11.899 9.17058 12.4674 8.3369 13.0926 7.52216C13.699 6.70742 14.3432 5.91163 15.0253 5.15374C15.6884 4.39584 16.4084 3.619 17.1284 2.95584L17.1474 2.9369C17.4884 2.61479 17.5074 2.08426 17.2042 1.74321C16.8821 1.38321 16.3516 1.34532 15.9916 1.66742C15.1579 2.40637 14.419 3.14532 13.68 3.92216C12.9221 4.699 12.2021 5.49479 11.539 6.32847Z"
                          fill="#5A5A5B"
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
                <div className="flex flex-col items-center lg:items-start ml-[200px]">
                  <div
                    className={`font-semibold text-[56px] text-indigo-800 dark:text-blue-400 mb-1  secondary-blue  ${montserratfont.className}`}
                  >
                    500+
                  </div>
                  <span
                    className={`text-titleDescription  ${montserratfont} font-medium text-lg`}
                  >
                    projects
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="ml-4 md:ml-0">
                <a
                  className=" sm:pr-6 h-[60px] w-[200px] text-center text-white bg-[#27479B]  rounded hover:bg-blue-500 hover:text-violet-600 transition-colors duration-200 flex flex-col justify-center items-center"
                  href="/download"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <h2 className="block sm:hidden text-3xl font-normal text-gray-900 mb-6">
              About ODA
            </h2>

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
