import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { Saftey } from "@/components/safety-and-security/Safety";






export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Safety and Security" subtitle=" A safe and secure environment "
      imageUrl="Discounted_ANNKE_Bullet_Dummy_Fake_Surveillance_Security_CCTV_Bullet_Camera__Indoor_Outdoor_Camera_with_Flashing_Red_LED___ANNKEBulletDummyFakeSurveillanceSecurityCCTVBulletCamera__Camera__Cameras__.webp"/>
    <Saftey/> 
      
      <Footer />
    </div>
  );
}