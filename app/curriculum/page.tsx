import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import CurriculumSection from "@/components/curriculum/CurriculumSection";
import MethodologySection from "@/components/curriculum/MethodologySection";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      {/* <SriSriEdgeHero title="Our Curriculum" subtitle=" Rooted in the balance of academic growth and holistic education "/> */}
  <SriSriEdgeHero 
  title="Our Curriculum"
  subtitle="Posted in the balance of academic growth and holistic education"
  imageUrl="/Colorfull_team___Premium_Vector-removebg-preview.webp"
  imageAlt="Curriculum overview"
/>

   
    <CurriculumSection/>
    <MethodologySection/>
  
      <Footer />
    </div>
  );
}