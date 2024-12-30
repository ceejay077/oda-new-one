import React from "react";
import Figures from "./sub-components/aboutFigurs";

export default function about() {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white  sm:py-12  min-w-full">
        <div className="w-full items-center  max-w-screen-lg max-w-screen  min-w-full">
          <div className="group grid  grid-cols-2">
            <div>
              <div style={{ marginTop: "178px", marginLeft: "200px" }}>
                <h2 className="text-4xl text-gray-900 mb-9">About ODA</h2>
                <p className="peer mb-6 text-gray-400 w-3/4">
                  One Direction Australia (ODA) is a leading commercial cleaning
                  company established in 2007, dedicated to addressing industry
                  challenges with professionalism and integrity.
                </p>
                <div>
                  <div>
                    <ul className="mt-8 space-y-3 font-medium">
                      <li className="flex items-start lg:col-span-1">
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
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 leading-5 text-gray-600">
                          Over 15 years of industry experience.
                        </p>
                      </li>
                      <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
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
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 leading-5 text-gray-600">
                          A well-recognized name in commercial cleaning.
                        </p>
                      </li>
                      <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
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
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 leading-5 text-gray-600">
                          Honesty, passion, talent, and growth mindset.
                        </p>
                      </li>
                      <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
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
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 leading-5 text-gray-600">
                          Handpicked professionals for exceptional cleaning
                          ability.
                        </p>
                      </li>
                      <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
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
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 leading-5 text-gray-600">
                          Logs for your API calls.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ------------------------------------------------------------------ */}

                <div className="  flex flex-row justify-between w-3/4">
                  <Figures />
                  <div className="flex flex-col items-center md:items-start">
                    <div className="font-semibold text-center md:text-left text-4xl text-indigo-800 dark:text-blue-400 mb-1 flex items-start justify-start pt-4">
                      500+
                    </div>
                    <span className="text-lg text-gray-900">projects</span>
                  </div>
                </div>
                <div className="mt-12">
                  <a
                    className="px-6 py-2 min-w-[120px] text-center text-white bg-CTAButtons border border-CTAButtons rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                    href="/download"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div style={{ marginRight: "200px" }}>
                <img
                  className="max-w-[760] max-h-[960] md:w-full w-full "
                  src="/images/homePage/about.png"
                  alt="can_help_banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
