import Banner from "../components/home/banner";
import HeroCertificate from "./certificate-sub-components/hero";
import ResponsiveHeader from "../about/header/navBar";
import OurCredentials from "./certificate-sub-components/our-credentials";

export default function Certificates() {
  return (
    <div>
      <Banner />
      <ResponsiveHeader />
      <HeroCertificate />
      <OurCredentials />
    </div>
  );
}
