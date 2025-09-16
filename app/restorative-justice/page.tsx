import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { Retro } from "@/components/retro-streets/retro";
import ToughSkill from "@/components/tough-kids/toughkids";
import { Restoractive } from "@/components/restorative-justice/restorativejustice";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="Restorative justice"
  subtitle=""
  imageUrl="/Mental_health_problem_Illustration-removebg-preview.webp"
/>
<Restoractive/>
      <Footer />
    </div>
  );
}