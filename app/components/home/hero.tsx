import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-black opacity-60"
        style={{ zIndex: 2 }}
      />

      <div
        className="min-h-[860px] flex items-center bg-cover"
        style={{ backgroundImage: "url('/images/hero-image.png')" }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-60 z-10" /> */}

        <div className="z-20 px-4 mx-auto mt-16 mb-16 max-w-7xl sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl  tracking-tight text-gray-200 sm:text-5xl md:text-6xl ">
              <span className="block">Making Every Space as </span>
              <span className="block pt-2">Beautiful as Nature Itself</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 flex flex-row px-12 space-x-10">
                <div className="flex gap-4">
                  <a
                    className="px-6 py-2 min-w-[120px] text-center text-white bg-CTAButtons border border-CTAButtons rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                    href="/download"
                  >
                    Explore More
                  </a>

                  <a
                    className="px-6 py-2 min-w-[120px] text-center text-white border border-white rounded hover:bg-buttonColor hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                    href="/download"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-row items-center justify-center mt-48">
              <a
                className="px-6 py-2 min-w-[120px] text-center text-white bg-white bg-gradient-to-r from-buttonColor to-white/50 border border-buttonColor rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                href="/download"
              >
                Request Quote | +
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
