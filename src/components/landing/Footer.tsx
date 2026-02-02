import { Instagram, Facebook, Linkedin } from "lucide-react";
import logoWatermark from "@/assets/logo-watermark.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Instagram,
    href: "#",
    label: "Instagram"
  }, {
    icon: Facebook,
    href: "#",
    label: "Facebook"
  }, {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }];
  const quickLinks = [{
    label: "Início",
    href: "#inicio"
  }, {
    label: "Áreas de Atuação",
    href: "#areas"
  }, {
    label: "Contato",
    href: "#contato"
  }];
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <img src={logoWatermark} alt="Balata Advogados" className="h-16 mx-auto md:mx-0 mb-4 opacity-80" />
            <p className="text-primary-foreground/70 text-sm">
              Advocacia especializada com compromisso, ética e excelência no
              atendimento aos nossos clientes.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map(link => <a key={link.href} href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {link.label}
                </a>)}
            </nav>
          </div>

          {/* Redes Sociais */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label={social.label}>
                  <social.icon size={20} />
                </a>)}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {currentYear} Balata Advogados. Todos os direitos reservados.
            </p>
            <p>OAB/MA 000.000</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;