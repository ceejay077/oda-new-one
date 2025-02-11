export default function NewsHero() {
  return (
    <div>
      <section className="w-full">
        <div
          className="w-full h-[520px]  bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center relative"
          style={{ backgroundImage: "url('/images/careers/careersHero.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="text-white">
            <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold  p-2 bg-opacity-40 rounded-sm relative">
              Stay Informed with the Latest <br /> News from ODA
            </h1>
          </div>
          <div className="text-white relative max-w-lg text-center">
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </div>
        </div>
      </section>
    </div>
  );
}
