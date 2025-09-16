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
  title="House System"
  subtitle="Rooted in the balance of academic growth and holistic education"
  imageUrl="/ce1882a8d7fad636d0dafbc422cab751-removebg-preview.webp"
  imageAlt="Curriculum overview"
/>
  <ArtOfLivingSection/>
    <AcademyBadgeUI/>
<StudentCouncil
  imageUrl="house-system-01-1026x1536.webp"
  imageAlt="SHISTL RORDEWY Student Council 2024-2025"
/>
      <Footer />
    </div>
  );
}