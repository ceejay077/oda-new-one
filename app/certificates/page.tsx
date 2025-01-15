import Banner from "../components/home/banner";
import HeroCertificate from "./certificate-sub-components/hero";
import ResponsiveHeader from "../about/header/navBar";

export default function Certificates() {
  return (
    <div>
      <Banner />
      <ResponsiveHeader />
      <HeroCertificate />
    </div>
  );
}
