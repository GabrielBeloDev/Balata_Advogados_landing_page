import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Briefcase, Users, Building2 } from "lucide-react";

const areas = [
  {
    icon: Scale,
    title: "Direito Criminal",
    description:
      "Defesa criminal especializada em inquéritos policiais, prisões em flagrante, processos criminais, recursos e habeas corpus. Atuação ágil e estratégica.",
  },
  {
    icon: Users,
    title: "Direito Civil",
    description:
      "Consultoria e representação em contratos, responsabilidade civil, direito de família, sucessões, cobranças e execuções judiciais.",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description:
      "Assessoria completa em reclamações trabalhistas, rescisões contratuais, acordos extrajudiciais e defesa de direitos do trabalhador.",
  },
  {
    icon: Building2,
    title: "Direito Empresarial",
    description:
      "Contratos empresariais, recuperação judicial, consultoria societária, compliance e prevenção de litígios para sua empresa.",
  },
];

const AreasAtuacao = () => {
  return (
    <section id="areas" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos assessoria jurídica especializada e personalizada para
            atender às suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <Card
              key={area.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-none"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-serif text-foreground">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasAtuacao;
