import Banner from "./components/home/banner";
import Hero from "./components/home/hero";
import Logos_copy from "./components/home/logos_copy";
import About from "./components/home/about";
import OurServices from "./components/home/our-services";
// import LearnMore from "./components/home/sub-components/learnMore";
import FloatingButton from "./components/home/sub-components/floatingButton";
import Awards from "./components/home/awards";
import CallToAction from "./components/home/book-your-appoinment";
import BlogSection from "./components/home/blog-section";
import Footer from "./components/home/footer";
import Tesimonials from "./components/home/testimonials";
// import Success from "./components/home/our_success_works";
// import LogosMobile from "./components/mobile-logo-slider/mobileLogoSlider";
import TrustedCleaningServices from "./components/home/trusted-cleaning-services-section/trustedCleaningServicesSection";
import Logos from "./components/home/logos";
import Form from "./components/home/form";
import SuccessWorks from "./components/home/our-success-works";

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
      <div>
        <Tesimonials />
      </div>
      <div>
        <Awards />
      </div>
      <div>
        <Logos />
      </div>
      <div className=" sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        <Logos_copy />
      </div>
      <div>
        <SuccessWorks />
      </div>
      <div>
        <CallToAction />
      </div>
      {/* -------------------------------------- */}
      <div className="mb-10">
        <BlogSection />
      </div>
      <div className=" sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        <Form />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
