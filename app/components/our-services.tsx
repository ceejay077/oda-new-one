import React from "react";
import Image from "next/image";

function OurServices() {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="text-center ">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-sectionTitle sm:text-4xl xl:text-5xl">
          Our Services
        </h2>
        <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 dark:text-titleDescription">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-8 mx-48">
        <div
          className="p-8 py-12 sm:p-12 rounded-2xl bg-OurServicesBox border border-gray-100  shadow-2xl shadow-gray-600/10"
          //   style={{ width: "464px", height: "358px" }}
        >
          <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full ">
              <span className="font-bold text-xl text-green-600">
                <div>
                  <Image
                    src="/images/homePage/our-services/industrial-cleaning.svg"
                    alt="industrial cleaning"
                    width={500}
                    height={300}
                  />
                </div>
              </span>
            </div>
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-semibold text-sectionTitle transition ">
                Industrial Cleaning
              </h3>
              <p className="text-gray-600 ">
                Upload diverse datasets containing various types of information
                for analysis.
              </p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: "48px" }}>
            View Service
          </div>
        </div>

        <div className="p-8 py-12 sm:p-12 rounded-3xl bg-OurServicesBox border border-gray-100  shadow-2xl shadow-gray-600/10">
          <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full ">
              <span className="font-bold text-xl text-orange-600">
                <div>
                  <Image
                    src="/images/homePage/our-services/2.svg"
                    alt="industrial cleaning"
                    width={500}
                    height={300}
                  />
                </div>
              </span>
            </div>
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-semibold text-sectionTitle transition">
                Office Cleaning Services in Melbourne
              </h3>
              <p className="text-gray-600">
                Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 py-12 sm:p-12 rounded-3xl bg-OurServicesBox border border-gray-100  shadow-2xl shadow-gray-600/10">
          <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full ">
              <span className="font-bold text-xl text-purple-600">
                <div>
                  <Image
                    src="/images/homePage/our-services/3.svg"
                    alt="industrial cleaning"
                    width={500}
                    height={300}
                  />
                </div>
              </span>
            </div>
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 transition">
                Commercial Cleaning Melbourne
              </h3>
              <p className="text-gray-600">
                Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-8 mx-48">
        <div className="p-8 py-12 sm:p-12 rounded-3xl bg-OurServicesBox border border-gray-100  shadow-2xl shadow-gray-600/10">
          <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
              <span className="font-bold text-xl text-green-600">
                <div>hoo</div>
              </span>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 transition">
                Data Collection
              </h3>
              <p className="text-gray-600">
                Upload diverse datasets containing various types of information
                for analysis.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 py-12 sm:p-12 rounded-3xl bg-OurServicesBox border border-gray-100  shadow-2xl shadow-gray-600/10">
          <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
              <span className="font-bold text-xl text-orange-600">2</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 transition">
                Model Training
              </h3>
              <p className="text-gray-600">
                Allow the AI model to learn patterns and insights from the
                provided data. This may take some time.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 py-12 sm:p-12 rounded-3xl bg-OurServicesBox border border-gray-100  shadow-2xl shadow-gray-600/10">
          <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
              <span className="font-bold text-xl text-purple-600">3</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 transition">
                Insights Delivery
              </h3>
              <p className="text-gray-600">
                Receive comprehensive insights and analysis results based on the
                trained AI model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
