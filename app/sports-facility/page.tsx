import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { TalentProgram } from "@/components/sports-facility/TalentProgram";
import { Yoga } from "@/components/sports-facility/Yoga";
import { SportBanner } from "@/components/sports-facility/Sportrbanner";





export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Sports Facility" subtitle=" Sports are an integrated part of education. "
      imageUrl="DSC08179-removebg-preview.webp"/>
      <TalentProgram/>
      <SportBanner/>
      <Yoga/>
      
      <Footer />
    </div>
  );
}