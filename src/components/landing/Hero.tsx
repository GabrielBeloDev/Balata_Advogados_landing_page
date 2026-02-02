import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Defesa Especializada com
            <br />
            <span className="text-brand-gray">Excelência e Compromisso</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto font-light">
            Há mais de 10 anos atuando nas áreas Criminal, Civil, Trabalhista e
            Empresarial. Sua confiança é nossa maior conquista.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-primary-foreground text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle size={24} />
                Fale pelo WhatsApp
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              className="bg-brand-gray text-primary hover:bg-white text-lg px-8 py-6 font-semibold"
            >
              <a href="tel:+5511999999999" className="flex items-center gap-2">
                <Phone size={24} />
                (11) 99999-9999
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
