import React from "react";

function VeiwServices() {
  return (
    <div>
      <div className=" items-center  py-2 gap-2 rounded inline-flex text-CTAButtons font-bold ">
        <span>View More</span>
        <svg
          className="w-4 h-4 ml-1 rotate-[315deg]"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </div>
    </div>
  );
}

export default VeiwServices;
