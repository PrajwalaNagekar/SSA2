import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import BookTour from "@/components/book-a-school-tour/BookTour";
import LogoMarquee from "@/components/logomarquee";
import { Boardingschool } from "@/components/boarding/CBSEBoarding";
import ImpeccableFacilities from "@/components/boarding/ImpeccableFacilities";
import Facilities from "@/components/boarding/Facilitiesbording";
import AdmissionsHero from "@/components/admission-procedure/AdmissionsHero";
import { BoardingFacilities } from "@/components/boarding/Boardingfacilities";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Boarding" subtitle=" Best CBSE Boarding School in West Bengal "
      imageUrl="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Lakeshore_Kids_Colors__Adjustable_Group_Table_-_48__x_72__-_Yellow-removebg-preview.webp"/>
      <Boardingschool/>
      <ImpeccableFacilities/>
      <BoardingFacilities/>
      <Facilities/>
      <AdmissionsHero/>
      <Footer />
    </div>
  );
}