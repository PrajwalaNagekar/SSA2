import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";

import { Nutrious } from "@/components/food-menu/Nutritious";
import { FoodMenuList } from "@/components/food-menu/foodmenuList";
import AdmissionsHero from "@/components/admission-procedure/AdmissionsHero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Food Menu" subtitle=" We do not permit junk food and aerated soft drinks on the campus. "
      imageUrl="download-removebg-preview.webp"/>
    <Nutrious/>
    <FoodMenuList/>
    <AdmissionsHero/>

      <Footer />
    </div>
  );
}