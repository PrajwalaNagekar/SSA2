import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { SurpriseTalkGallery } from "@/components/little-officer/SurpriseTalkGallery";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="Little Officer"
  subtitle=""
  imageUrl="/An_Indian_police_cap_featuring_the_Indian_flag_and_Ashoka_Chakra-removebg-preview-1.webp"
/>
<SurpriseTalkGallery/>

      <Footer />
    </div>
  );
}