import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import LogoMarquee from "@/components/logomarquee";
import { ArtOfLivingSection } from "@/components/our-inspiration/art-of-living-section";
import { EducationSection } from "@/components/our-inspiration/education-section";
import { GurudevSection } from "@/components/our-inspiration/gurudev-section";
import { HeroSection } from "@/components/our-inspiration/hero-section";
import { InstitutionsSection } from "@/components/our-inspiration/institutions-section";
import { MilestonesSection } from "@/components/our-inspiration/milestones-section";


export default function OurInspirationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <HeroSection/>
      <ArtOfLivingSection/>
     <GurudevSection/>
      <MilestonesSection/>
        <EducationSection/>
     
      <InstitutionsSection/>
      <LogoMarquee/>
      <Footer/>
   
    </div>
  )
}
