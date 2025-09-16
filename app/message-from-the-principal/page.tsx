import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SriSriEdgeHero } from "@/components/the-sri-sri-edge/SriSriEdgeHero";
import PrincipalProfile from "@/components/message-from-the-principal/PrincipalProfile";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <SriSriEdgeHero title="Message from the Principal" subtitle=" Sri Sri Academy, Siliguri "/>
     <PrincipalProfile/>
      <Footer />
    </div>
  );
}