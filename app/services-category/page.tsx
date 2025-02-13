import HeroServicesCategory from "./services-category-sub-components/hero";
import Banner from "../components/home/banner";
import ResponsiveHeader from "../about/header/navBar";
import OurServices from "../components/home/our-services";
import WhyChooseUs from "./whyChooseUs";
import Awards from "../components/home/awards";
import CallToAction from "../components/home/book-your-appoinment";
import Testimonials from "../components/home/testimonials";
import FAQSection from "../about/faq";
import Footer from "../components/home/footer";
import FloatingButton from "../components/home/sub-components/floatingButton";
import Logos from "../components/home/logos";
import BackToTop from "../components/backToTop";

export default function ServicesCategory() {
  return (
    <div>
      <FloatingButton />
      <Banner />
      <BackToTop />
      <ResponsiveHeader />
      <HeroServicesCategory />
      <OurServices />
      <WhyChooseUs />
      <Awards />
      <Logos />
      <CallToAction />
      <Testimonials />
      <FAQSection />
      <Footer />
    </div>
  );
}
