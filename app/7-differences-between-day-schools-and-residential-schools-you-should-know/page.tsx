import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ContactMapSection from "@/components/contact/ContactMapSection";
import LogoMarquee from "@/components/logomarquee";
import BlogPageClone from "@/components/blog/BlogPageClone";
import AvdnantagegSchoolTips from "@/components/the-advantages-of-boarding-school-for-international-students/advantage";
import Top5School from "@/components/top-5-boarding-school-in-west-bengal/top5";
import Differenceschool from "@/components/7-differences-between-day-schools-and-residential-schools-you-should-know/7dif";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Differenceschool/>
    
      <Footer/>
    </div>
  );
}