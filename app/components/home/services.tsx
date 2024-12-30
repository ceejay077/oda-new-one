import React from "react";
import ServiceGrid from "./sub-components/servicesSupport";

export default function Services() {
  return (
    <div className="flex flex-row bg-white text-black">
      <div className="bg-white text-black flex justify-center max-h-screen">
        <div className="max-w-screen mx-auto py-8 lg:py-16  bg-white">
          <div className="flex flex-col md:flex-row w-full">
            {/* can help image */}
            <div className=" md:mr-8 mb-6 md:mb-0">
              <img
                className="max-w-[800] max-h-[960] md:w-full "
                src="/images/homePage/girl.png"
                alt="can_help_banner"
              />
            </div>
            {/* end can help image */}
          </div>
        </div>
      </div>
      <div className="max-w-screen-md mr-10" style={{ marginTop: "100px" }}>
        <ServiceGrid />
      </div>
    </div>
  );
}
