import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";

import { StudentCouncil } from "@/components/house-system/StudentCouncil";
import { AdmissionsOpen } from "@/components/AdmissionsOpen";
import { GreenCampusStats } from "@/components/admission-procedure/StatCardProps";
import { MissionVisionSection } from "@/components/admission-procedure/MissionVisionSection";
import AdmissionsHero from "@/components/admission-procedure/AdmissionsHero";
import AdmissionInfo from "@/components/admission-procedure/AdmissionInfo";
import { Transport } from "@/components/transport/transport";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="Transport"
  subtitle="A safe and secure environment"
  imageUrl="/DSC07924-removebg-preview.webp"
  imageAlt="Transport overview"
/>
<Transport/>

      <Footer />
    </div>
  );
}