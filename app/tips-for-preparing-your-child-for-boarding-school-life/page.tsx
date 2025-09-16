import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ContactMapSection from "@/components/contact/ContactMapSection";
import LogoMarquee from "@/components/logomarquee";
import BlogPageClone from "@/components/blog/BlogPageClone";
import BoardingSchoolTips from "@/components/tips-for-preparing-your-child-for-boarding-school-life/BoardingSchoolTips ";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
        <BoardingSchoolTips/>    
      <Footer/>
    </div>
  );
}