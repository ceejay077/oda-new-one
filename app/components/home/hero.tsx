import React from "react";
import Header from "./header";
import Logos from "./logos";

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-screen flex flex-col justify-between items-end">
        <div className="w-full h-full bg-[url('/images/hero-image.png')] bg-center bg-cover bg-no-repeat relative">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

          {/* Header Section */}
          <header className="w-screen items-center z-20 relative">
            <Header />
          </header>

          {/* Logos Section */}
          <div className="relative z-30">
            <Logos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
