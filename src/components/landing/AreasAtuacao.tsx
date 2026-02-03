import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Pill, Package, Landmark, Monitor, Vote } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ContactModal from "./ContactModal";

const areas = [
  {
    icon: ShieldAlert,
    title: "Violência Doméstica",
    description:
      "Defesa em casos da Lei Maria da Penha e medidas protetivas.",
  },
  {
    icon: Pill,
    title: "Tráfico de Drogas",
    description:
      "Atuação em processos de tráfico e crimes da Lei de Drogas.",
  },
  {
    icon: Package,
    title: "Roubo e Furto",
    description:
      "Defesa em crimes contra o patrimônio e receptação.",
  },
  {
    icon: Landmark,
    title: "Crimes contra Adm. Pública",
    description:
      "Defesa em peculato, corrupção e crimes funcionais.",
  },
  {
    icon: Monitor,
    title: "Crimes Cibernéticos",
    description:
      "Atuação em crimes digitais e fraudes eletrônicas.",
  },
  {
    icon: Vote,
    title: "Crimes Eleitorais",
    description:
      "Defesa em processos da Justiça Eleitoral.",
  },
];

const AreasAtuacao = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState("");

  const handleCardClick = (areaTitle: string) => {
    const caseTypeMap: Record<string, string> = {
      "Violência Doméstica": "Crimes de Violência Doméstica",
      "Tráfico de Drogas": "Tráfico de Drogas",
      "Roubo e Furto": "Roubo/Furto",
      "Crimes contra Adm. Pública": "Crimes contra Administração Pública",
      "Crimes Cibernéticos": "Crimes Cibernéticos",
      "Crimes Eleitorais": "Crimes Eleitorais",
    };
    setSelectedCase(caseTypeMap[areaTitle] || "");
    setModalOpen(true);
  };

  return (
    <section id="areas" className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Especialista em Direito Criminal
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Defesa técnica e estratégica em todas as fases do processo criminal.
            Clique em uma área para falar sobre seu caso.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {areas.map((area, index) => (
            <Card
              key={area.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 bg-card border-none cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onClick={() => handleCardClick(area.title)}
            >
              <CardHeader className="text-center pb-1 sm:pb-2 p-3 sm:p-4 md:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-sm sm:text-base md:text-xl font-serif text-foreground leading-tight">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                <CardDescription className="text-center text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center px-2">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 via-red-500 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-red-700 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-lg hover:shadow-xl transition-all rounded-xl"
            onClick={() => {
              setSelectedCase("");
              setModalOpen(true);
            }}
          >
            <WhatsAppIcon className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sm:hidden">Fale conosco agora</span>
            <span className="hidden sm:inline">Conte seu caso - Fale conosco agora</span>
          </Button>
        </div>
      </div>

      <ContactModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        preSelectedCase={selectedCase}
      />
    </section>
  );
};

export default AreasAtuacao;
