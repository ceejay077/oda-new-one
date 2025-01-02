"use client";

import { cn } from "@/lib/utils";

const Team = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Web Developer",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Jane Doe",
      role: "Web Developer",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Jane Doe",
      role: "Web Developer",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Jane Doe",
      role: "Web Developer",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Jane Doe",
      role: "Web Developer",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Jane Doe",
      role: "Web Developer",
      image: "https://i.pravatar.cc/150?img=32",
    },
  ];

  return (
    <div className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
        {/* Text Content - Now on the left */}
        <div className="text-left mb-10 sm:mr-10 md:mr-24 sm:w-6/12">
          <h3 className="text-3xl sm:text-5xl leading-normal font-normal tracking-tight text-gray-900">
            Meet Our Team
          </h3>
          <p className="mt-4 text-md leading-7 text-gray-500 font-light w-9/12">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>
          <div className="relative mt-10">
            <a
              className="px-6 py-2 min-w-[120px] text-center text-white bg-CTAButtons border border-CTAButtons rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
              href="/download"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Team Grid - Now on the right */}
        <div className="w-8/12">
          <ul className="grid grid-cols-3 gap-5 ">
            {teamMembers.map((member, index) => (
              <li key={index} className="bg-gray-100  text-center">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <img
                        className="mb-3 rounded-sm mx-auto h-48 w-auto"
                        src={member.image}
                        alt={member.name}
                      />
                    </a>
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="text-lg leading-3 font-semibold text-gray-900 transition duration-500 ease-in-out">
                    <a
                      href="#"
                      className="hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                      {member.name}
                    </a>
                  </h4>
                  <p className="text-sm leading-6 text-gray-500 uppercase">
                    {member.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-10">
        <div>
          <button className="bg-yellow-500 text-white px-2 py-2 rounded-sm mx-2 hover:bg-yellow-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.57007 5.92993L3.50007 11.9999L9.57007 18.0699"
                stroke="#313132"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.5 12H3.67"
                stroke="#313132"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>
          <button className="bg-yellow-500 text-white px-2 py-2 rounded-sm mx-2 hover:bg-yellow-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.4299 5.92993L20.4999 11.9999L14.4299 18.0699"
                stroke="#313132"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                stroke="#313132"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
