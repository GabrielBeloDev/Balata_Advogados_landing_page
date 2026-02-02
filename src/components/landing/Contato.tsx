import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const contactInfo = [{
  icon: Phone,
  title: "Telefone",
  content: "(11) 99999-9999",
  link: "tel:+5511999999999"
}, {
  icon: MessageCircle,
  title: "WhatsApp",
  content: "(11) 99999-9999",
  link: "https://wa.me/5511999999999"
}, {
  icon: Mail,
  title: "E-mail",
  content: "contato@balataadvogados.com.br",
  link: "mailto:contato@balataadvogados.com.br"
}, {
  icon: MapPin,
  title: "Endereço",
  content: "Av. Paulista, 1000 - São Paulo/SP",
  link: "https://maps.google.com"
}];
const Contato = () => {
  return <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Agende uma consulta ou tire suas
            dúvidas pelos nossos canais de atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map(info => <a key={info.title} href={info.link} target={info.link.startsWith("http") ? "_blank" : undefined} rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined} className="block">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-card border hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                </CardContent>
              </Card>
            </a>)}
        </div>

        {/* Horário de Atendimento */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary-foreground/80" />
              <h3 className="font-serif text-2xl font-bold mb-4">
                Horário de Atendimento
              </h3>
              <p className="text-primary-foreground/90 mb-2">
                Segunda a Sexta: 9h às 18h
              </p>
              <p className="text-primary-foreground/90 mb-6">
                Sábado: 9h às 13h (com agendamento)
              </p>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-primary-foreground">
                <a href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle size={20} />
                  Agendar Conversa
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contato;