import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import { Classrooms } from "@/components/classrooms/classroom";
import { ClassroomsLibray } from "@/components/classrooms/Library";
import { ClassroomCount } from "@/components/classrooms/counts";
import LatestNews from "@/components/classrooms/LatestNews";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Classrooms" subtitle=" A welcoming and comfortable classroom at our best "
      imageUrl="Lakeshore_Kids_Colors__Adjustable_Group_Table_-_48__x_72__-_Yellow-removebg-preview.webp"/>

      <Classrooms/>
<ClassroomCount/>
      <ClassroomsLibray/>
      <LatestNews/>

      
      <Footer />
    </div>
  );
}