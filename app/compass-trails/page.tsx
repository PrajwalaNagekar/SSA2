import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { Retro } from "@/components/retro-streets/retro";
import ToughSkill from "@/components/tough-kids/toughkids";
import { Restoractive } from "@/components/restorative-justice/restorativejustice";
import Discovery from "@/components/discovery-trails/Discovery";
import CompassGaralley from "@/components/compass-trails/compass";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="Compass Trails"
  subtitle=""
  imageUrl="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Freepik___Find_the_right_plan_for_you-removebg-preview.webp"
/>
<CompassGaralley/>

      <Footer />
    </div>
  );
}