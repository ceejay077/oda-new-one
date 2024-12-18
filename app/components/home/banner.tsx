// components/Banner.tsx
import React from "react";

const Banner = () => {
  return (
    <div className="bg-bannerBlue py-1 px-1 flex  text-white  justify-between">
      <div className="flex justify-between">
        <div className="text-sm flex flex-dirction:row;">
          <div className="pl-6">info@oda.com</div>
          <div className="pl-6">+94 454546 66464</div>
        </div>
      </div>
      <div className="px-9">En</div>
    </div>
  );
};

export default Banner;
