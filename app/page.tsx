import Banner from "./components/home/banner";
import Hero from "./components/home/hero";
import Logos_copy from "./components/home/logos_copy";
import About from "./components/home/about";
import OurServices from "./components/home/our-services";
import FloatingButton from "./components/home/sub-components/floatingButton";
import Awards from "./components/home/awards";
import CallToAction from "./components/home/book-your-appoinment";
import BlogSection from "./components/home/blog-section";
import Footer from "./components/home/footer";
import Tesimonials from "./components/home/testimonials";
import TrustedCleaningServices from "./components/home/trusted-cleaning-services-section/trustedCleaningServicesSection";
import Logos from "./components/home/logos";
// import Form from "./components/home/form";
import SuccessWorks from "./components/home/our-success-works";
import BackToTop from "./components/backToTop";

export default function Home() {
  return (
    <>
      <div className="fixed  right-5 z-10">
        <FloatingButton />
      </div>

      <BackToTop />

      <div className="h-screen overflow-y-auto snap-y snap-mandatory">
        <div className="hidden sm:hidden md:block lg:block xl:block 2xl:block snap-start">
          <Banner />
        </div>
        {/* -------------------------------- */}
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start mb-[100px]">
          <Logos />
        </div>
        {/* -------------------------------- */}
        <div className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden snap-start">
          <Logos_copy />
        </div>
        {/* -------------------------------- */}
        <div className="snap-start">
          <TrustedCleaningServices />
        </div>
        <div className="sm:mt-5 lg:mt-40 snap-start">
          <About />
        </div>
        <div className="snap-start">
          <OurServices />
        </div>
        <div className="section-100 flex flex-col justify-center item-center snap-start">
          <Tesimonials />
        </div>
        <div className="section-100 flex flex-col justify-center item-center snap-start">
          <Awards />
          <Logos />
        </div>
        <div className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden snap-start">
          <Logos_copy />
        </div>
        <div className="section-100 flex flex-col justify-center item-center snap-start">
          <SuccessWorks />
        </div>
        <div className="snap-start">
          <CallToAction />
        </div>
        {/* -------------------------------------- */}
        <div className="section-100 flex flex-col justify-center item-center snap-start">
          <BlogSection />
        </div>
        <div className="snap-start">
          <Footer />
        </div>
      </div>
    </>
  );
}
