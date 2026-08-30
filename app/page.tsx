import About from "@/components/About";
import Achievements from "@/components/Achievements";
import ChaptersGrid from "@/components/Chaptersgrid";
import DailyQuote from "@/components/Dailyquote";
import ExecutiveBody from "@/components/Executivebody";
import Gallery from "@/components/Gallery";
import HeroCarousel from "@/components/Herocarousel";
import LatestNews from "@/components/Latestnews";
import MembersCount from "@/components/Memberscount";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <About />
      <Achievements />
      <ChaptersGrid />
      <Gallery />
      <ExecutiveBody />
      <MembersCount />
      <LatestNews />
      <DailyQuote />
    </div>
  );
}
