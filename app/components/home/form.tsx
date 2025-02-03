import React from "react";

export default function Form() {
  return (
    <div className="my-10">
      <h1 className="text-3xl mx-5 py-4">Get in touch with us</h1>
      <img src="images/homePage/world-map.png" />
      <div className="m-4">
        <p className="text-titleDescription">
          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
        </p>
      </div>
      <div className="m-4">
        <p className="text-titleDescription">Address</p>
        <p>1901 Thornridge Cir. Shiloh,Australia 81063</p>
      </div>
      <div className="m-4 flex justify-between mt-5">
        <div className="flex flex-col">
          <p className="text-titleDescription">Email</p>
          <p>support@oda.com</p>
        </div>
        <div className="flex flex-col mr-3">
          <p className="text-titleDescription">Phone</p>
          <p>+6017-4077944</p>
        </div>
      </div>
      <div className="m-6">
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value="Your Name"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                placeholder="Company Email "
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              placeholder="Phone Number"
            />
          </div>
          <div className="md:w-2/3 mt-6">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              placeholder="Service Required"
            />
          </div>
          <div className="md:w-2/3 mt-6">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              placeholder="Frequency"
            />
          </div>
          <div className="md:w-2/3 mt-6">
            <textarea className="bg-gray-200 w-full h-20" />
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
