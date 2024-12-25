import Banner from "./components/home/banner";
import Header from "./components/home/header";
import Hero from "./components/home/hero";
import Logos_copy from "./components/home/logos_copy";
import Services from "./components/home/services";
import About from "./components/home/about";
import OurServices from "./components/home/our-services";
import LearnMore from "./components/home/sub-components/learnMore";
import FloatingButton from "./components/home/sub-components/floatingButton";
import Awards from "./components/home/awards";
import CallToAction from "./components/home/book-your-appoinment";
import BlogSection from "./components/home/blog-section";
import Footer from "./components/home/footer";
import Tesimonials from "./components/home/testimonials";
import Success from "./components/home/our_success_works";

export default function Home() {
  return (
    <div>
      <Banner />
      <FloatingButton />

      {/* <Header /> */}
      <Hero />

      <Services />
      <About />
      <Tesimonials />
      <Logos_copy />
      <OurServices />
      <LearnMore />
      <Awards />
      <Success />
      <CallToAction />
      <BlogSection />
      <Footer />
    </div>
  );
}
