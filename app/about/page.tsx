import Banner from "../components/home/banner";
import NavBar from "./header/navBar";
import HeroAbout from "./header/hero";

export default function Hello() {
  return (
    <div>
      <Banner />
      <NavBar />
      <HeroAbout />
    </div>
  );
}
