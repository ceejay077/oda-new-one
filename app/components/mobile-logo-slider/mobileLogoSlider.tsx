import React from "react";

export default function LogosMobile() {
  const logos = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div>
      <div>
        <div className="min-h-[220px] w-full flex justify-center items-center">
          <div className="flex max-w-xl items-center justify-center gap-4 md:gap-24 dark:text-black">
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
