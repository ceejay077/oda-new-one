import Banner from "../components/home/banner";
import NavBar from "./header/navBar";
import HeroAbout from "./header/hero";
import AboutPageAboutSection from "./about-about-page";
import Legacy from "./legacySlider";
import Team from "./team";
import AdditionalServices from "../about/additionalInformation";
import CallToAction from "../components/home/book-your-appoinment";
import FAQSection from "../about/faq";
import Footer from "../components/home/footer";
import FloatingButton from "../components/home/sub-components/floatingButton";
import BackToTop from "../components/backToTop";

export default function AboutPage() {
  return (
    <div>
      <Banner />
      <FloatingButton />
      <BackToTop />
      <NavBar />
      <HeroAbout />
      <AboutPageAboutSection />
      <Legacy />
      <Team />
      <AdditionalServices />
      <CallToAction />
      <FAQSection />
      <Footer />
    </div>
  );
}
