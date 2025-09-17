import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { ScienceLaboratories } from "@/components/laboratories/ScienceLaboratories";
import { ComputerLabs } from "@/components/laboratories/Computerlabs";
import { LanguageLab } from "@/components/laboratories/LanguageLab";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Laboratories" subtitle=" An interactive platform to the students "
      imageUrl="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/robot_ai-removebg-preview.webp"/>
        <ScienceLaboratories/>
        <ComputerLabs/>
        <LanguageLab/>
      
      <Footer />
    </div>
  );
}