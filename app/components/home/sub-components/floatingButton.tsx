"use client";
import React, { useState, useEffect } from "react";

export default function FloatingButton() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isAtTop) {
    return null;
  }

  return (
    <div>
      <div className="fixed flex flex-col items-center justify-center bottom-4 left-1/2 transform -translate-x-1/2 z-50 space-y-4">
        <a
          href="https://www.buymeacoffee.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-CTAButtons  text-white font-medium rounded-md px-4 py-2 flex items-center justify-center hover:bg-yellow-600 transition duration-300 ease-in-out shadow-lg"
        >
          Request a Quote <span className="text-lg mr-2 ml-2"> | +</span>
        </a>
      </div>
    </div>
  );
}
