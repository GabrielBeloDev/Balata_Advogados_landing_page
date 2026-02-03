import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
            Advogado Criminalista
            <br />
            <span className="text-brand-gray text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Defesa Estratégica e Especializada
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-primary-foreground/90 max-w-2xl mx-auto font-light px-2">
            Atuação em todas as fases do processo criminal. Defesa técnica em crimes de
            violência doméstica, tráfico, roubo, crimes cibernéticos e eleitorais.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              <a
                href="https://wa.me/5598988877011?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                Fale pelo WhatsApp
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-brand-gray text-primary hover:bg-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-semibold"
            >
              <a href="tel:+5598988877011" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                (98) 98887-7011
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-primary-foreground/50 rounded-full mt-1.5 sm:mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
