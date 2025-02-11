import Banner from "../components/home/banner";
import NewsHero from "./newsHero";
import LatestNewsGrid from "./latestNewsFromODA";

export default function News() {
  return (
    <div>
      <Banner />
      <NewsHero />
      <LatestNewsGrid />
    </div>
  );
}
