import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { HostelFacility } from "@/components/hostel/HostelFacility";
import { HostelFeatures } from "@/components/hostel/HostelFeatures";
import AutoScroller from "@/components/hostel/Hosteldetails";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Hostel" subtitle=" A place where students create memories and make lifelong friends. "
      imageUrl="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/hostel_bg-removebg-preview.webp"/>
    <HostelFacility/>
    <AutoScroller/>
    <HostelFeatures/>
      
      <Footer />
    </div>
  );
}