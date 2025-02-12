import React from "react";
import Banner from "../components/home/banner";
import ResponsiveHeader from "../about/header/navBar";
import ServiceInnerHero from "./serviceInnerHero";

export default function ServiceInner() {
  return (
    <div>
      <Banner />
      <ResponsiveHeader />
      <ServiceInnerHero />
    </div>
  );
}
