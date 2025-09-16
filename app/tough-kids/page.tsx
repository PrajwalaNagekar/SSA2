import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { Retro } from "@/components/retro-streets/retro";
import ToughSkill from "@/components/tough-kids/toughkids";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="Tough Kids"
  subtitle=""
  imageUrl="/Running_people_set_of_silhouettes_competition_vector_image_on_VectorStock-removebg-preview.webp"
/>
<ToughSkill/>
      <Footer />
    </div>
  );
}