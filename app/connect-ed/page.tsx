import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { Retro } from "@/components/retro-streets/retro";
import ToughSkill from "@/components/tough-kids/toughkids";
import { Restoractive } from "@/components/restorative-justice/restorativejustice";
import Discovery from "@/components/discovery-trails/Discovery";
import CompassGaralley from "@/components/compass-trails/compass";
import ConnectedGaralley from "@/components/connect-ed/ConnectedGaralley";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="Connect-ed"
  subtitle=""
  imageUrl="/ce1882a8d7fad636d0dafbc422cab751-removebg-preview (1).webp"
/>
<ConnectedGaralley />

      <Footer />
    </div>
  );
}