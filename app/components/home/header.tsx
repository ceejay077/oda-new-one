import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-full">
        <div className="bg-white backdrop-blur-sm bg-opacity-5 flex text-black justify-between z-100 ">
          <div className="flex justify-between">
            <div className="text-sm flex flex-row">
              <div className="pl-6 flex">
                <img
                  src="/images/oda_logo.png"
                  alt="Description"
                  className="max-w-52 max-h-28"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-32">
            <nav>
              <ul className="flex flex-row list-none gap-9">
                <li className="mx-2">
                  <a href="/" className="text-white hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li className="mx-2">
                  <a href="/about" className="text-white hover:text-blue-500">
                    About Us
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="text-white hover:text-blue-500">
                    Services
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="text-white hover:text-blue-500">
                    Our Works
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="text-white hover:text-blue-500">
                    Certificates
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="text-white hover:text-blue-500">
                    News
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="text-white hover:text-blue-500">
                    Careers
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="px-9">
            <div className="flex items-center justify-center h-32">
              <a
                className="px-12 py-2 min-w-[120px] text-center text-white border border-white rounded hover:bg-gray-600 hover:text-white active:bg-buttonColor focus:outline-none focus:ring"
                href="/download"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
