import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { Retro } from "@/components/retro-streets/retro";
import ToughSkill from "@/components/tough-kids/toughkids";
import { Restoractive } from "@/components/restorative-justice/restorativejustice";
import Discovery from "@/components/discovery-trails/Discovery";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="Discovery Trails"
  subtitle=""
  imageUrl="/Connecting_with_Experts_Quick_Reference-removebg-preview.webp"
/>
<Discovery/>
      <Footer />
    </div>
  );
}