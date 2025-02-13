import Banner from "../components/home/banner";
import ResponsiveHeader from "../about/header/navBar";
import NewsHero from "./newsHero";
import LatestNewsGrid from "./latestNewsFromODA";
import NewsGrid from "./newsGrid";
import CallToAction from "../components/home/book-your-appoinment";
import Testimonials from "../components/home/testimonials";
import Footer from "../components/home/footer";
import FloatingButton from "../components/home/sub-components/floatingButton";
import BackToTop from "../components/backToTop";

export default function News() {
  return (
    <div>
      <Banner />
      <FloatingButton />
      <BackToTop />
      <ResponsiveHeader />
      <NewsHero />
      <LatestNewsGrid />
      <NewsGrid />
      <div className="mt-[100px]">
        <CallToAction />
      </div>
      <Testimonials />
      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
}
