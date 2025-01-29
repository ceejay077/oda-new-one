"use client";

import React from "react";

const Logo_copy = () => {
  // Double the logos array to create the infinite effect
  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative min-h-[220px] w-full flex items-center">
        <div
          className="flex items-center gap-4 md:gap-24 absolute"
          style={{
            animation: "scroll 30s linear infinite",
            willChange: "transform"
          }}
        >
          {duplicatedLogos.map((num, index) => (
            <div key={`${num}-${index}`} className="flex-shrink-0">
              <img
                src={`images/logos/${num}.png`}
                alt={`Logo ${num}`}
                className="max-w-96 max-h-96 select-none"
                draggable="false"
              />
            </div>
          ))}
        </div>
        <div
          className="flex items-center gap-4 md:gap-24 absolute"
          style={{
            animation: "scroll2 30s linear infinite",
            willChange: "transform"
          }}
        >
          {duplicatedLogos.map((num, index) => (
            <div key={`${num}-${index}-2`} className="flex-shrink-0">
              <img
                src={`/images/logos/${num}.png`}
                alt={`Logo ${num}`}
                className="max-w-96 max-h-96 select-none"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Logo_copy;
