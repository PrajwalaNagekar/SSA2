import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { ScienceLaboratories } from "@/components/laboratories/ScienceLaboratories";
import { ComputerLabs } from "@/components/laboratories/Computerlabs";
import { LanguageLab } from "@/components/laboratories/LanguageLab";
import { Music } from "@/components/music-and-dance-art-craft/music";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Music and Dance / Art & Craft" subtitle=" Forms to foster their imagination, creative passion and confidence "
      imageUrl="Classical_Acoustic_Guitar_Clipart_Vector__Guitar__Guitar_3d__Guitar_Boy_PNG_Transparent_Image_and_Clipart_for_Free_Download-removebg-preview.webp"/>
       <Music/>
      
      <Footer />
    </div>
  );
}