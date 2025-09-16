import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import ManagementBody from "@/components/management-body/ManagementBody ";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Management Body" subtitle=" Sri Sri Academy, Siliguri "/>
      <ManagementBody/>
      <Footer />
    </div>
  );
}