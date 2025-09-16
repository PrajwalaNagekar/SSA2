import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { SriSriAcademySection } from "@/components/the-sri-sri-edge/SriSriAcademySection";
import { MissionVisionSection } from "@/components/the-sri-sri-edge/MissionVisionSection";
import { MottoSection } from "@/components/the-sri-sri-edge/MottoSection";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="The Sri Sri Edge" subtitle=" Sri Sri Academy, Siliguri "/>
      <SriSriAcademySection/>
      <MissionVisionSection/>
      <MottoSection/>
      <Footer />
    </div>
  );
}