import React from "react";

export default function Logos() {
  const logos = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="hidden md:block w-full max-w-full sm:px-[200px] px-10">
      <div className="mt-5">
        <div className="min-h-[220px] w-full flex justify-center items-center">
          <div className="flex items-center justify-center gap-1 lg:gap-10 dark:text-black">
            {logos.map((index) => (
              <div key={index}>
                <img
                  src={`/images/logos/${index}.png`}
                  alt={`Logo ${index}`}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
