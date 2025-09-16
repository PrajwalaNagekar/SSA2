import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import BookTour from "@/components/book-a-school-tour/BookTour";
import LogoMarquee from "@/components/logomarquee";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Book a School Tour" subtitle=" Schedule a tour of our school by filling the form "
      imageUrl="Collection_colored_thin_icon_of_learning_subject_book_graduated_hat_learning_and_education_concept_vector_illustration___Premium_Vector-removebg-preview.webp"/>
      <BookTour/>
      <LogoMarquee/>
      <Footer />
    </div>
  );
}