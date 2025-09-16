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




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="Admission Procedure"
  subtitle="Best CBSE Boarding School in West Bengal"
  imageUrl="/Lakeshore_Kids_Colors__Adjustable_Group_Table_-_48__x_72__-_Yellow-removebg-preview.webp"
  imageAlt="Admission overview"
/>
<AdmissionsOpen/>
<GreenCampusStats />
    <MissionVisionSection/>
    <AdmissionInfo/>
    <AdmissionsHero/>
      <Footer />
    </div>
  );
}