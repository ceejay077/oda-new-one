import Banner from "../components/home/banner";
import NavBar from "./header/navBar";
import HeroAbout from "./header/hero";
import AboutPageAboutSection from "./about-about-page";
import Legacy from "./legacySlider";
import Team from "./team";
import AdditionalServices from "../about/additionalInformation";
import CallToAction from "../components/home/book-your-appoinment";

export default function Hello() {
  return (
    <div>
      <Banner />
      <NavBar />
      <HeroAbout />
      <AboutPageAboutSection />
      <Legacy />
      <Team />
      <AdditionalServices />
      <CallToAction />
    </div>
  );
}
