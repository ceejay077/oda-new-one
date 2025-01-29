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
            <div className="text-left my-12">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 not-prose">
                {/* ----------------------------------------------------------------------------------------------------------------------- */}
                <a
                  href="#"
                  className="relative block p-4 sm:p-6 rounded-xl border border-gray-200 bg-white text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-center justify-center w-full mb-4 space-y-2">
                    {/* Using a placeholder image since external images aren't supported */}
                    <img
                      src="/images/logos/1.png"
                      alt="Eco Friendly Logo"
                      className="w-16 h-16 object-contain"
                    />
                    <h1 className="text-black font-bold">Eco Friendly</h1>
                  </div>

                  <p className="text-xs md:text-sm text-gray-600">
                    DigitalOcean offers a simple and reliable cloud hosting
                    solution that enables developers to get their website or
                    application up and running quickly.
                  </p>
                </a>
                {/* ---------------------------------------------------------------------------------------- */}

                <a
                  href="#"
                  target="_blank"
                  className="relative flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200 bg-white text-center w-full"
                >
                  <span className="absolute w-full h-full bg-white"></span>

                  <div className="flex flex-col items-center justify-center w-full mb-4 space-y-2">
                    <h1 className="text-black font-bold z-0">Eco Friendly</h1>
                  </div>

                  <span className="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    DigitalOcean offers a simple and reliable cloud hosting
                    solution that enables developers to get their website or
                    application up and running quickly.
                  </span>
                </a>
                {/* ------------------------------------------------------------------- */}
                <a
                  href="#"
                  className="relative block p-4 sm:p-6 rounded-xl border border-gray-200 bg-white text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-center justify-center w-full mb-4 space-y-2">
                    {/* Using a placeholder image since external images aren't supported */}
                    <img
                      src="/images/logos/1.png"
                      alt="Eco Friendly Logo"
                      className="w-16 h-16 object-contain"
                    />
                    <h1 className="text-black font-bold">Eco Friendly</h1>
                  </div>

                  <p className="text-xs md:text-sm text-gray-600">
                    DigitalOcean offers a simple and reliable cloud hosting
                    solution that enables developers to get their website or
                    application up and running quickly.
                  </p>
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
