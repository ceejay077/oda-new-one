import React from "react";

function TrustedCleaningServices() {
  return (
    <div className="max-w-screen mx-auto mt-16">
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Left Column - Image Section */}
        <div className="w-full sm:w-1/2 pl-0">
          <div className="rounded-lg">
            <img
              className="w-full h-auto md:h-screen rounded-2xl object-contain object-left"
              src="https://i.ibb.co/pQmmVNV/girl-home.png"
              alt="Cleaning service professional"
            />
          </div>
        </div>

        {/* Right Column - Sponsors Section */}
        <div className="w-full sm:w-1/2  sm:mr-16">
          <div className="p-3 sm:p-5 pt-8    relative  ">
            {/* <div className="absolute w-auto rounded-b-lg border-b uppercase -translate-y-px tracking-wide leading-none border-l border-r border-gray-200 dark:border-gray-800 shadow-sm top-0 left-1/2 -translate-x-1/2 px-3 pt-1 pb-2 bg-white dark:bg-black text-gray-400 text-[0.65rem]">
              🤩 Our Amazing Sponsors 👇
            </div> */}
            <div className="text-center my-8">
              <h1 className="text-4xl">Trusted Cleaning Experts</h1>
            </div>
            <div className="text-center my-12">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 not-prose">
                <a
                  href="#"
                  target="_blank"
                  className="relative flex flex-col items-start justify-between p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200   bg-white "
                >
                  <span className="absolute w-full h-full bg-white"></span>
                  <div className="flex items-center justify-between w-full mb-4">
                    <h1 className="text-white font-bold">Eco Friendly</h1>
                    <img
                      src="https://cdn.devdojo.com/sponsors/digital-ocean.svg"
                      alt="DigitalOcean"
                      className="relative h-4 sm:h-5 md:h-6"
                    />
                    <span className="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50 dark:bg-blue-500 dark:text-white text-blue-500 flex items-center justify-center">
                      <span>View Website</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 translate-x-0.5 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>

                  <span className="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    <div className="text-black">Eco Friendly</div>
                    DigitalOcean offers a simple and reliable cloud hosting
                    solution that enables developers to get their website or
                    application up and running quickly.
                  </span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="relative flex flex-col items-start justify-between p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group"
                >
                  <span className="absolute w-full h-full bg-white dark:bg-black inset-0 dark:group-hover:bg-gray-900 group-hover:bg-gray-50 group-hover:bg-opacity-30"></span>
                  <div className="flex items-center justify-between w-full mb-4">
                    <img
                      src="https://cdn.devdojo.com/sponsors/larajobs.svg"
                      alt="Larajobs"
                      className="relative h-4 sm:h-5 md:h-6"
                    />
                    <span className="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50 dark:bg-blue-500 dark:text-white text-blue-500 flex items-center justify-center">
                      <span>View Website</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 translate-x-0.5 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <span className="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    The official Laravel job board. Find the best and most
                    talented Laravel developers by posting your job on the
                    official Laravel job board.
                  </span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="relative flex flex-col items-start justify-between p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group"
                >
                  <span className="absolute w-full h-full bg-white dark:bg-black inset-0 dark:group-hover:bg-gray-900 group-hover:bg-gray-50 group-hover:bg-opacity-30"></span>
                  <div className="flex items-center justify-between w-full mb-4">
                    <img
                      src="https://cdn.devdojo.com/sponsors/coin-camp.svg"
                      alt="CoinCamp"
                      className="relative h-4 sm:h-5 md:h-6"
                    />
                    <span className="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50 dark:bg-blue-500 dark:text-white text-blue-500 flex items-center justify-center">
                      <span>View Website</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 translate-x-0.5 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <span className="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Learn how to code your own blockchain and create your own
                    crypto-currency with the CoinCamp interactive and fun online
                    training platform.
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedCleaningServices;
