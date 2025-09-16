import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import SkillGallerySection from "@/components/skills-safari/skillgaralley";




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
  <SriSriEdgeHero 
  title="Skills Safari"
  subtitle=""
  imageUrl="/Collection_colored_thin_icon_of_learning_subject_book_graduated_hat_learning_and_education_concept_vector_illustration___Premium_Vector-removebg-preview (1).webp"
/>
<SkillGallerySection/>

      <Footer />
    </div>
  );
}