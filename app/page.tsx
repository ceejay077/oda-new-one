import Banner from "./components/home/banner";
import Header from "./components/home/header";
import Hero from "./components/home/hero";
import Logos from "./components/home/logos";
import Services from "./components/home/services";
import About from "./components/home/about";
import OurServices from "./components/home/our-services";
import LearnMore from "./components/home/sub-components/learnMore";
import FloatingButton from "./components/home/sub-components/floatingButton";
import Awards from "./components/home/awards";
import CallToAction from "./components/home/book-your-appoinment";

export default function Home() {
  return (
    <div>
      <FloatingButton />
      <Banner />
      <Header />
      <Hero />
      <Logos />
      <Services />
      <About />
      <OurServices />
      <LearnMore />
      <Awards />
      <CallToAction />
    </div>
  );
}
