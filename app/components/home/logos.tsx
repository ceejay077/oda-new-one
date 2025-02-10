import React from "react";

export default function Logos() {
  const logos = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="hidden md:block px-[200px]">
      <div className="mt-5">
        <div className="min-h-[220px] w-full flex justify-center items-center">
          <div className="flex max-w-2xl items-center justify-center gap-16  dark:text-black">
            {logos.map((index) => (
              <div key={index}>
                <img
                  src={`/images/logos/${index}.png`}
                  alt={`Logo ${index}`}
                  className="max-w-96 max-h-96"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
