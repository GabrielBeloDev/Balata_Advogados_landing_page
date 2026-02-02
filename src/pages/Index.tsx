import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import AreasAtuacao from "@/components/landing/AreasAtuacao";
import Contato from "@/components/landing/Contato";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import UrgentBanner from "@/components/landing/UrgentBanner";

const Index = () => {
  return (
    <div className="min-h-screen pt-12">
      <UrgentBanner />
      <Header />
      <Hero />
      <AreasAtuacao />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
