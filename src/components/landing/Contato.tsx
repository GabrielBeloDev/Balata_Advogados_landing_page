import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "(98) 98887-7011",
    link: "tel:+5598988877011",
    color: "blue",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    content: "(98) 98887-7011",
    link: "https://wa.me/5598988877011",
    color: "green",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@balataadvogados.com.br",
    link: "mailto:contato@balataadvogados.com.br",
    color: "orange",
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "Ed. São Luís Offices, Sala 209 - Areinha, São Luís/MA",
    link: "https://maps.app.goo.gl/cDSNhpjZk3ay9kAj6",
    color: "purple",
  },
];

const Contato = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Estamos prontos para atender você. Agende uma consulta ou tire suas
            dúvidas pelos nossos canais de atendimento.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {contactInfo.map((info) => {
            const colorClasses = {
              blue: {
                border: "hover:border-blue-400/80",
                bg: "bg-blue-500/10",
                text: "text-blue-600",
              },
              green: {
                border: "hover:border-green-400/80",
                bg: "bg-green-500/10",
                text: "text-green-600",
              },
              orange: {
                border: "hover:border-orange-400/80",
                bg: "bg-orange-500/10",
                text: "text-orange-600",
              },
              purple: {
                border: "hover:border-purple-400/80",
                bg: "bg-purple-500/10",
                text: "text-purple-600",
              },
            };
            const colors = colorClasses[info.color as keyof typeof colorClasses];

            return (
              <a
                key={info.title}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className={`h-full hover:shadow-lg transition-shadow duration-300 bg-card border ${colors.border}`}>
                  <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 rounded-full flex items-center justify-center ${colors.bg}`}>
                      <info.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm break-words">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto px-2">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-4 sm:p-6 md:p-8 text-center">
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary-foreground/80" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                Disponível 24 horas
              </h3>
              <p className="text-primary-foreground/90 mb-1 text-sm sm:text-base">
                Estamos prontos para te atender a qualquer momento,
              </p>
              <p className="text-primary-foreground/90 mb-4 text-sm sm:text-base font-semibold">
                em todo o Brasil — online ou presencial.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-primary-foreground text-sm sm:text-base"
              >
                <a
                  href="https://wa.me/5598988877011?text=Olá! Gostaria de agendar uma consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  Fale Agora
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contato;
