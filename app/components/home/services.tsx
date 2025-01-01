import React from "react";
import ServiceGrid from "./sub-components/servicesSupport";

export default function Services() {
  return (
    <div className="flex flex-col lg:flex-row bg-white text-black">
      {/* Left Section */}
      <div className="bg-white text-black flex justify-center max-h-screen w-full lg:w-1/2">
        <div className="max-w-screen mx-auto py-8 lg:py-16 bg-white px-4 sm:px-8">
          <div className="flex flex-col w-full">
            {/* Can Help Image */}
            <div className="mb-6 lg:mb-0">
              <img
                className="max-w-full max-h-[960px] w-full"
                src="/images/homePage/girl.png"
                alt="can_help_banner"
              />
            </div>
            {/* End Can Help Image */}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="max-w-screen-md w-full px-4 sm:px-8 lg:mr-10 mt-8 md:mt-12 lg:mt-16">
        <ServiceGrid />
      </div>
    </div>
  );
}
