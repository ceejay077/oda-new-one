import React from "react";
import Figures from "./sub-components/aboutFigurs";

export default function about() {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 pt-6 sm:py-12  ">
        <div className="w-full items-center mx-auto max-w-screen-lg ">
          <div className="group grid w-full grid-cols-2">
            <div>
              <div className="pr-12 mt-12">
                <h2 className="text-4xl text-gray-900 mb-9">About ODA</h2>
                <p className="peer mb-6 text-gray-400">
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
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
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
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
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
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
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
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
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
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
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

                <div className="mt-4 text-gray-600">huks</div>
              </div>
            </div>

            {/* <div className="pr-16 relative flex flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:right-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all ">
                <span className="block mb-10 font-bold group-hover:text-orange-300">
                  HERE WE ARE
                </span>
                <h2 className="text-white font-bold text-3xl">
                  What started as a tiny team mostly dedicated to Air Quality
                  has grown.
                </h2>
              </div>
              <a
                className="font-bold text-sm flex mt-2 mb-8 items-center gap-2"
                href=""
              >
                <span>MORE ABOUT US</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <div className="rounded-xl overflow-hidden">
                <img src="https://picsum.photos/800/800" alt="" />
              </div>
            </div> */}

            <div>
              <div className="">
                <img
                  className="max-w-[760] max-h-[960] md:w-full mx-auto"
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
