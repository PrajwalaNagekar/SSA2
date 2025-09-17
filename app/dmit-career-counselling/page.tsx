import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { DMIT } from "@/components/dmit-career-counselling/dmit";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="DMIT & Career Counselling"
  subtitle="Guiding and empowering students"
  imageUrl="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/download__1_-removebg-preview.webp"
    imageAlt="DMIT & Career Counselling overview"
/>
<DMIT/>

      <Footer />
    </div>
  );
}