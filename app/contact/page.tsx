import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ContactMapSection from "@/components/contact/ContactMapSection";
import LogoMarquee from "@/components/logomarquee";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <ContactMapSection/>
      <LogoMarquee/>
    
      <Footer/>
    </div>
  );
}