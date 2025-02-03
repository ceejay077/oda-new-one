import React from "react";

export default function CallToAction() {
  return (
    <div>
      <section
        className="text-white body-font bg-CTRbg lg:h-screen flex flex-row content-center"
        style={{ marginBottom: "100px" }}
      >
        <div className="container mx-auto flex px-5 py-24 flex-col-reverse md:flex-row items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-CTAHeading">
              Book Your
              <br className="hidden lg:inline-block" />
              Appointment Today{" "}
            </h1>
            <p className="mb-8 leading-relaxed">
              Morbi vel magna at nunc accumsan cursus sit amet in risus. Aliquam
              libero metus, dignissim vel gravida vel, porta quis tellus.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-black bg-CTAButtons border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-4">
                Request a Quote
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded w-full"
              alt="hero"
              src="/images/homePage/mvcom_bottom-cta.jpg.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
