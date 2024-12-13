import React from "react";

export default function Figures() {
  return (
    <div>
      <div className="  flex items-center justify-center p-4">
        <div className=" rounded-xl  transition-all duration-300 hover:shadow-indigo-500/50 dark:hover:shadow-blue-900/50">
          <div className="flex space-x-2 items-center animate-fade-in">
            <div className="w-full">
              <div className="font-semibold text-center md:text-left text-2xl text-indigo-800 dark:text-blue-400 mb-4">
                200+
              </div>
              <div className="flex space-x-4 items-center flex-col md:flex-row">
                <div className="flex -space-x-4 overflow-hidden p-2">
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-indigo-800 dark:ring-blue-900 hover:scale-110 transform duration-300 z-10 hover:z-30"
                    src="https://randomuser.me/api/portraits/men/51.jpg"
                    alt="Trusted user"
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-indigo-800 dark:ring-blue-900 hover:scale-110 transform duration-300 z-20 hover:z-30"
                    src="https://randomuser.me/api/portraits/women/4.jpg"
                    alt="Trusted user"
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-indigo-800 dark:ring-blue-900 hover:scale-110 transform duration-300 z-30 hover:z-30"
                    src="https://randomuser.me/api/portraits/men/34.jpg"
                    alt="Trusted user"
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-indigo-800 dark:ring-blue-900 hover:scale-110 transform duration-300 z-40 hover:z-30"
                    src="https://randomuser.me/api/portraits/women/6.jpg"
                    alt="Trusted user"
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-indigo-800 dark:ring-blue-900 hover:scale-110 transform duration-300 z-50 hover:z-30"
                    src="https://randomuser.me/api/portraits/men/9.jpg"
                    alt="Trusted user"
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-indigo-800 dark:ring-blue-900 hover:scale-110 transform duration-300 z-60 hover:z-30"
                    src="https://randomuser.me/api/portraits/women/9.jpg"
                    alt="Trusted user"
                  />
                </div>
                <div className="text-indigo-900 dark:text-blue-300 font-medium text-lg mt-4 md:mt-0">
                  <p>Satisfied Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
