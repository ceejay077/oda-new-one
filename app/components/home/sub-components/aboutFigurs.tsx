import React from "react";
import { Montserrat } from "next/font/google";

const montserratfont = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

// const interfont = Inter({
//   subsets: ["latin"],
//   weight: "400",
// });

export default function Figures() {
  const customers = [
    { id: 1, image: "https://randomuser.me/api/portraits/men/51.jpg" },
    { id: 2, image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 3, image: "https://randomuser.me/api/portraits/men/34.jpg" },
    { id: 4, image: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 5, image: "https://randomuser.me/api/portraits/men/9.jpg" },
    { id: 6, image: "https://randomuser.me/api/portraits/women/9.jpg" },
  ];

  return (
    <div>
      <div className=" flex items-center justify-center">
        <div className=" rounded-xl  transition-all duration-300 hover:shadow-indigo-500/50 dark:hover:shadow-blue-900/50">
          <div className="flex space-x-2 items-center animate-fade-in">
            <div className="w-full">
              <div
                className={`font-semibold text-center md:text-left sm:text-[56px] text-3xl text-indigo-800 dark:text-blue-400 secondary-blue mb-4 ${montserratfont.className}`}
              >
                200+
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex -space-x-4 overflow-hidden sm:p-2">
                  {customers.map((customer) => (
                    <img
                      key={customer.id}
                      className="inline-block h-8 w-8 sm:h-6 sm:w-6 rounded-full ring-2 ring-indigo-800 dark:ring-blue-900 hover:scale-110 transform duration-300 hover:z-30"
                      style={{ zIndex: customer.id * 10 }}
                      src={customer.image}
                      alt="Trusted user"
                    />
                  ))}
                </div>
                <div className="text-black font-medium text-lg text-center sm:text-left">
                  <p
                    className={`text-titleDescription ${montserratfont} text-lg`}
                  >
                    Satisfied Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
