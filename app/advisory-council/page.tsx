import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import AdvisoryCouncil from "@/components/advisory-council/AdvisoryCouncil ";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Advisory Council" subtitle=" Sri Sri Academy, Siliguri "/>
      <AdvisoryCouncil/>
      <Footer />
    </div>
  );
}