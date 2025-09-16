import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { Retro } from "@/components/retro-streets/retro";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="Retro Streets"
  subtitle=""
  imageUrl="/Sri-Sri-Academy-Students-Roll-into-Fun-with-an-Exciting-Tyre-Race7-removebg-preview.webp"
/>
<Retro/>

      <Footer />
    </div>
  );
}