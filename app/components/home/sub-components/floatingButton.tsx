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
    <div className="fixed bottom-4 right-16 z-50 mr-11">
      <div className="flex flex-col items-center justify-center space-y-4">
        <a
          href="https://www.buymeacoffee.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#9B2727] to-[#D14848] text-white font-medium rounded-md h-[64px] w-[265px] flex items-center justify-center hover:bg-[#B30000] transition duration-300 ease-in-out shadow-lg"
        >
          Request a Quote <span className="text-lg mr-2 ml-2"> | +</span>
        </a>
      </div>
    </div>
  );
}
