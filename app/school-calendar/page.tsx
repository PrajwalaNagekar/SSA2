import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import ArtOfLivingSection from "@/components/house-system/ArtOfLivingSection";
import { AcademyBadgeUI } from "@/components/house-system/AcademyBadgeUI";
import { StudentCouncil } from "@/components/house-system/StudentCouncil";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="School Calendar"
  subtitle="Annual Calendar"
  imageUrl="/Kalender_op_witte_achtergrond_3D-rendering___Premium_Foto-removebg-preview.webp"
  imageAlt="Curriculum overview"
/>
  
<StudentCouncil
  imageUrl="Calendar_page-srisri-min-1085x1536.webp"
  imageAlt="Annaul Calendar 2025-2026"
  // title="School Calendar 2025-2026"
/>
      <Footer />
    </div>
  );
}