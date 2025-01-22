import Banner from "../components/home/banner";
import ResponsiveHeader from "../about/header/navBar";
import HeroCareers from "./careers-sub-components/hero";
import WhyChooseUsCareers from "./whyChooseUsCareers";
import JobOpeningsGrid from "./job-openings-grid";

export default function Careers() {
  return (
    <div>
      <Banner />
      <ResponsiveHeader />
      <HeroCareers />
      <WhyChooseUsCareers />
      <JobOpeningsGrid />
    </div>
  );
}
