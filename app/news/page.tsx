import Banner from "../components/home/banner";
import NewsHero from "./newsHero";
import LatestNewsGrid from "./latestNewsFromODA";
import NewsGrid from "./newsGrid";

export default function News() {
  return (
    <div>
      <Banner />
      <NewsHero />
      <LatestNewsGrid />
      <NewsGrid />
    </div>
  );
}
