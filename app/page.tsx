import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AdmissionsOpen } from "@/components/AdmissionsOpen";
import { FeaturesSection } from "@/components/FeaturesSection";
import { VisionSection } from "@/components/VisionSection";
import { LifeAtSI } from "@/components/LifeAtSI";
import { LatestNews } from "@/components/LatestNews";
import { Footer } from "@/components/Footer";
import AdmissionsHero from "@/components/AdmissionsHero";
import { PrincipalMessage } from "@/components/PrincipalMessage";
import { TestimonialSection } from "@/components/Testimonial";
import { ToppersSection } from "@/components/Toppersection";
import GallerySection from "@/components/GallerySection";
import LogoMarquee from "@/components/logomarquee";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <HeroSection />
      <AdmissionsOpen />
      <FeaturesSection />
      <VisionSection />
      <LifeAtSI />
      <LatestNews />
      <AdmissionsHero/>
      <PrincipalMessage/>
      <TestimonialSection/>
      <LogoMarquee/>
      <ToppersSection/>
      <GallerySection/>
      <Footer />
    </div>
  );
}