import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import AboutTeams from "@/components/our-team/ourteam";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Our Team" subtitle=" Sri Sri Academy, Siliguri "/>
      <AboutTeams />
      <Footer />
    </div>
  );
}