import { Instagram } from "lucide-react";
import logoWatermark from "@/assets/logo-watermark.png";
import { INSTAGRAM_URL, OAB } from "@/config/site";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: INSTAGRAM_URL,
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Áreas de Atuação", href: "#areas" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10 md:items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src={logoWatermark}
              alt="Balata Advogados"
              className="h-20 sm:h-24 md:h-28 opacity-80"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed text-center md:text-left max-w-xs">
              Advocacia especializada com compromisso, ética e excelência no
              atendimento aos nossos clientes.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h4 className="font-semibold text-lg">Links Rápidos</h4>
            <nav className="flex flex-col items-center gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="font-semibold text-lg">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-primary-foreground/60 text-center">
            <p>
              © {currentYear} Balata Advogados. Todos os direitos reservados.
            </p>
            <p>{OAB}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
