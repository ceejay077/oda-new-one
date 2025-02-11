import React from "react";
import WhyChosseUsGrid from "../services-category/services-category-sub-components/whyChooseUsGrid";

export default function WhyChooseUsCareers() {
  return (
    <div className="flex flex-col justify-center lg:flex-row bg-white mb-[200px] min-h-screen max-h-screen text-black max-w-full px-[160px]">
      {/* Left Section */}
      <div className="max-w-screen-md w-full px-4 sm:px-8 lg:mr-10 mt-8 md:mt-12 lg:mt-16">
        <WhyChosseUsGrid title="Why Work With Us" />
      </div>

      {/* Right Section */}
      <div className="bg-white text-black flex justify-center max-h-screen w-full lg:w-1/2">
        <div className="max-w-screen mx-auto py-8 lg:py-16 bg-white px-4 sm:px-8">
          <div className="flex flex-col w-full">
            {/* Can Help Image */}
            <div className="mb-6 lg:mb-0">
              <img
                className="max-w-full max-h-[960px] w-full"
                src="/images/careers/careersWhyWork.png"
                alt="can_help_banner"
              />
            </div>
            {/* End Can Help Image */}
          </div>
        </div>
      </div>
    </div>
  );
}
