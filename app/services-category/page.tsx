import HeroServicesCategory from "./services-category-sub-components/hero";
import Banner from "../components/home/banner";
import ResponsiveHeader from "../about/header/navBar";
import OurServices from "../components/home/our-services";
import WhyChooseUs from "./whyChooseUs";

export default function ServicesCategory() {
  return (
    <div>
      <Banner />
      <ResponsiveHeader />
      <HeroServicesCategory />
      <OurServices />
      <WhyChooseUs />
    </div>
  );
}
