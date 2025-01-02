import React from "react";

function AboutSectionGrid() {
  return (
    <div>
      <div className="grid   gap-4 h-full">
        <div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg  "
            >
              <img
                src="/images/about/about-page-grid-1.png"
                alt=""
                className=" inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Vodka
              </h3>
            </a>
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg  "
            >
              <img
                src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className=" inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Vodka
              </h3>
            </a>
          </div>
          <a
            href=""
            className="group relative flex flex-col overflow-hidden rounded-lg  mt-4"
          >
            <img
              src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className=" inset-0 h-full w-full object-cover  transition-transform duration-500 ease-in-out"
            />
            <div className=" inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionGrid;
