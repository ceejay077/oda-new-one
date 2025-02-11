import Banner from "../components/home/banner";
import ResponsiveHeader from "../about/header/navBar";
import HeroCareers from "./careers-sub-components/hero";
import WhyChooseUsCareers from "./whyChooseUsCareers";
import JobOpeningsGrid from "./job-openings-grid";
import OurCoreValues from "./our-core-values";
import CallToAction from "../components/home/book-your-appoinment";
import Testimonials from "../components/home/testimonials";
import FAQSection from "../about/faq";
import Footer from "../components/home/footer";

export default function Careers() {
  return (
    <div>
      <Banner />
      <ResponsiveHeader />
      <HeroCareers />
      <WhyChooseUsCareers />
      <JobOpeningsGrid />
      <OurCoreValues />
      <CallToAction />
      <Testimonials />
      <div className="mt-[100px]">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
