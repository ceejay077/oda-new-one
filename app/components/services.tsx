import React from "react";

export default function Services() {
  return (
    <div className="bg-white text-black flex justify-center max-h-screen">
      <div className="max-w-screen mx-auto py-8 lg:py-16  bg-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight  text-black">
            Trusted Cleaning Experts
          </h2>
        </div>

        <div className="flex flex-col md:flex-row w-full">
          {/* can help image */}
          <div className=" md:mr-8 mb-6 md:mb-0">
            <img
              className="max-w-[800] max-h-[960] md:w-full "
              src="/images/homePage/girl.png"
              alt="can_help_banner"
            />
          </div>
          {/* end can help image */}

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-4/5 sm:w-1/2 mb-4 px-2">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-6">
                  Dynamic Personalization
                </h3>
                <p className="text-sm">
                  Our platform leverages user data and behavior to provide a
                  highly personalized experience, with dynamic content and
                  product recommendations that change in real-time.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-6">
                  Mobile-Optimized Interface
                </h3>
                <p className="text-sm">
                  Our website is designed with a mobile-first approach, offering
                  a seamless browsing experience across all devices, including
                  smartphones and tablets.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-6">
                  24/7 Customer Support
                </h3>
                <p className="text-sm">
                  Our U.S.-based customer support team is available around the
                  clock to answer any questions, resolve any issues, and provide
                  helpful solutions. Whether it's through email, phone, or live
                  chat, we're always here to support you.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2">
              <div className="h-full py-4 px-6 border border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-6">
                  Borem ipsum dolor sit amet, consectetur?
                </h3>
                <p className="text-sm">
                  We use cutting-edge security measures to protect our
                  customers' sensitive information and ensure the safety of all
                  transactions made on our site.
                </p>
                <div className="mt-12">
                  <a
                    className="px-6 py-2 min-w-[120px] text-center text-white bg-buttonColor border border-buttonColor rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                    href="/download"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
