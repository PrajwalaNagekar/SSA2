import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ContactMapSection from "@/components/contact/ContactMapSection";
import LogoMarquee from "@/components/logomarquee";
import BlogPageClone from "@/components/blog/BlogPageClone";
import AvdnantagegSchoolTips from "@/components/the-advantages-of-boarding-school-for-international-students/advantage";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <AvdnantagegSchoolTips/>
    
      <Footer/>
    </div>
  );
}