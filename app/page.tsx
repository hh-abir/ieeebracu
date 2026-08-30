import About from "@/components/About";
import ChaptersGrid from "@/components/Chaptersgrid";
import DailyQuote from "@/components/Dailyquote";
import ExecutiveBody from "@/components/Executivebody";
import Gallery from "@/components/Gallery";
import HeroCarousel from "@/components/Herocarousel";
import LatestNews from "@/components/Latestnews";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <About />
      <ChaptersGrid />
      <Gallery />
      <ExecutiveBody />
      <LatestNews />
      <DailyQuote />
    </div>
  );
}
