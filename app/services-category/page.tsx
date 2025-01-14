import HeroServicesCategory from "./services-category-sub-components/hero";
import Banner from "../components/home/banner";
import ResponsiveHeader from "../about/header/navBar";
import OurServices from "../components/home/our-services";
import WhyChooseUs from "./whyChooseUs";
import Awards from "../components/home/awards";
import CallToAction from "../components/home/book-your-appoinment";
import Testimonials from "../components/home/testimonials";
import FAQSection from "../about/faq";

export default function ServicesCategory() {
  return (
    <div>
      <Banner />
      <ResponsiveHeader />
      <HeroServicesCategory />
      <OurServices />
      <WhyChooseUs />
      <Awards />
      <CallToAction />
      <Testimonials />
      <FAQSection />
    </div>
  );
}
