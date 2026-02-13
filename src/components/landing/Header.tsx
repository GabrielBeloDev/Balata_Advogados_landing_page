import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logo from "@/assets/logo.png";
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/config/site";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Áreas de Atuação", href: "#areas" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img
            src={logo}
            alt="Balata Advogados"
            className={`transition-all duration-300 ${
              isScrolled ? "h-24" : "h-28"
            }`}
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-primary-foreground"
          >
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.consultation)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              aria-label="Falar com Balata Advogados pelo WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Fale Conosco
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={
            isMobileMenuOpen ? "Fechar menu principal" : "Abrir menu principal"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-main-menu"
        >
          {isMobileMenuOpen ? (
            <X
              className={
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }
              size={24}
            />
          ) : (
            <Menu
              className={
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }
              size={24}
            />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-main-menu"
          className="md:hidden bg-background shadow-lg"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground font-medium py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-primary-foreground w-full"
            >
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.consultation)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
                aria-label="Falar com Balata Advogados pelo WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Fale Conosco
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
