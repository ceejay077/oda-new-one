import Banner from "../components/home/banner";
import NavBar from "./header/navBar";
import HeroAbout from "./header/hero";
import AboutPageAboutSection from "./about-about-page";
import AboutSectionGrid from "./about-sub-component/aboutSectionGrid";

export default function Hello() {
  return (
    <div>
      <Banner />
      <NavBar />
      <HeroAbout />
      <AboutPageAboutSection />
    </div>
  );
}
