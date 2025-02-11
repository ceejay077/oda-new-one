export default function JobOpeningsGrid() {
  return (
    <div>
      <div className="px-[200px]">
        <h2 className="mb-[48px] text-[46px]">Current Job Openings</h2>
      </div>
      <div className="max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 px-[200px]">
          <div className=" lg:border-t lg:border-gray-400 bg-TestimonialsBlue rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
              className="w-full mb-3"
            />
            <div className="p-[24px] pt-2">
              <div className="mb-4">
                <div className="font-bold text-sectionTitle">
                  Industrial Cleaner
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>Melbourne, VIC</div>
                  <div>Full time</div>
                </div>

                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                >
                  Can coffee make you a better developer?
                </a>
                <p className="text-gray-700 text-sm max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <button
                    type="button"
                    className="block w-full h-[60px] rounded-[8px] bg-blue-800 text-white text-[18px] text-center flex-grow "
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:border-t lg:border-gray-400 bg-TestimonialsBlue rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              className="w-full mb-3"
            />
            <div className="p-4 pt-2">
              <div className="mb-4">
                <div className="font-bold text-sectionTitle">
                  Industrial Cleaner
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>Melbourne, VIC</div>
                  <div>Full time</div>
                </div>

                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                >
                  Can coffee make you a better developer?
                </a>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <button
                    type="button"
                    className="w-[392px] h-[60px] rounded-[8px] bg-blue-800 text-white text-[18px]"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:border-t lg:border-gray-400 bg-TestimonialsBlue rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              className="w-full mb-3"
            />
            <div className="p-4 pt-2">
              <div className="mb-4">
                <div className="font-bold text-sectionTitle">
                  Industrial Cleaner
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>Melbourne, VIC</div>
                  <div>Full time</div>
                </div>

                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                >
                  Can coffee make you a better developer?
                </a>
                <p className="text-gray-700 text-sm">
                  Responsible for maintaining the cleanliness and hygiene of
                  industrial facilities. This role requires attention to detail
                  and knowledge of cleaning techniques.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <button
                    type="button"
                    className="w-[392px] h-[60px] rounded-[8px] bg-blue-800 text-white text-[18px]"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
