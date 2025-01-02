"use client";

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
        <div className="sm:w-6/12">
          <ul className="grid grid-cols-2 gap-5 md:gap-10">
            {teamMembers.map((member, index) => (
              <li key={index} className="bg-gray-100 p-5 py-10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <img
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src={member.image}
                        alt={member.name}
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
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
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
