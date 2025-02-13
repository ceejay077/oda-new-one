import Banner from "../components/home/banner";
import HeroCertificate from "./certificate-sub-components/hero";
import ResponsiveHeader from "../about/header/navBar";
import OurCredentials from "./certificate-sub-components/our-credentials";
import Awards_credentials from "./awards_credentials";
import Awards_credentials_Second_Part from "./awards_credentials_second-part";
import CallToAction from "../components/home/book-your-appoinment";
import FAQSection from "../about/faq";
import Footer from "../components/home/footer";
import FloatingButton from "../components/home/sub-components/floatingButton";
import BackToTop from "../components/backToTop";

export default function Certificates() {
  return (
    <div>
      <Banner />
      <FloatingButton />
      <BackToTop />
      <ResponsiveHeader />
      <HeroCertificate />
      <OurCredentials />
      <Awards_credentials />
      <Awards_credentials_Second_Part />
      <CallToAction />
      <FAQSection />
      <Footer />
    </div>
  );
}
