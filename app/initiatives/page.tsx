import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import SchoolActivityPage from "@/components/initiatives/SchoolActivityPage";





export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="Initiatives"
  subtitle="Initiatives that go beyond academic goals."
  imageUrl="/download-removebg-preview-1.webp"
  imageAlt="Curriculum overview"
/>
<SchoolActivityPage/>
      <Footer />
    </div>
  );
}