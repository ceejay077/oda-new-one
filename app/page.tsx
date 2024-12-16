import Banner from "./components/banner";
import Header from "./components/header";
import Hero from "./components/hero";
import Logos from "./components/logos";
import Services from "./components/services";
import About from "./components/about";
import OurServices from "./components/our-services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Header />
      <Hero />
      <Logos />
      <Services />
      <About />
      <OurServices />
    </div>
  );
}
