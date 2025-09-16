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
import ResponsiveSchoolUI from "@/components/mandatory-public-disclosure/SurpriseTalkNuclearEnergy";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="Mandatory Public Disclosure"
  subtitle="Forms to foster their imagination, creative passion and confidence"
/>
<ResponsiveSchoolUI/>
    
      <Footer/>
    </div>
  );
}