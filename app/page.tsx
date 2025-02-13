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
    <div>
      <div>
        <FloatingButton />
      </div>
      <div className="hidden sm:hidden md:block lg:block xl:block 2xl:block">
        <Banner />
      </div>
      {/* -------------------------------- */}
      <div>
        <Hero />
      </div>
      <div>
        <Logos />
      </div>
      {/* -------------------------------- */}
      <div className=" sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        <Logos_copy />
      </div>
      {/* -------------------------------- */}
      <div>
        <TrustedCleaningServices />
      </div>
      <div className="sm:mt-5 lg:mt-40">
        <About />
      </div>

      <div>
        <OurServices />
      </div>

      <div className="section-100 flex flex-col justify-center item-center">
        <Tesimonials />
      </div>

      <div className="section-100 flex flex-col justify-center item-center">
        <Awards />
        <Logos />
      </div>

      {/* <div className="px-[200px]">
        <Logos />
      </div> */}

      <div className=" sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        <Logos_copy />
      </div>

      <div className="section-100 flex flex-col justify-center item-center">
        <SuccessWorks />
      </div>

      <div>
        <CallToAction />
      </div>
      {/* -------------------------------------- */}

      <div className="section-100 flex flex-col justify-center item-center">
        <BlogSection />
      </div>

      {/* <div className=" sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        <Form />
      </div> */}
      <div>
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}
