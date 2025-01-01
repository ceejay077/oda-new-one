import React from "react";

function HeroAbout() {
  return (
    <div>
      <section className="w-full">
        <div
          className="w-full h-[520px]  bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center relative"
          style={{ backgroundImage: "url('/images/about/about-hero.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div>
            <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold  p-2 bg-opacity-40 rounded-sm relative">
              Discover Your New Home
            </h1>
          </div>
          <div className="w-full mx-auto"></div>
        </div>
      </section>
    </div>
  );
}

export default HeroAbout;
