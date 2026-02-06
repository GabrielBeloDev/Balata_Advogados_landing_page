import { AlertTriangle, Phone } from "lucide-react";
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/config/site";

const UrgentBanner = () => {
  return (
    <a
      href={getWhatsAppUrl(WHATSAPP_MESSAGES.urgent)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-700 hover:via-red-600 hover:to-orange-600 text-white py-2 sm:py-3 text-center font-bold transition-all shadow-lg"
      aria-label="Contato urgente pelo WhatsApp"
    >
      <span className="container mx-auto px-2 sm:px-4 flex items-center justify-center gap-1 sm:gap-2">
        <AlertTriangle size={16} className="shrink-0 sm:w-5 sm:h-5 animate-pulse" />
        <span className="text-xs sm:hidden font-bold">
          URGENTE? Clique aqui!
        </span>
        <span className="hidden sm:inline text-sm md:text-base">
          Caso urgente? Clique aqui e fale comigo agora
        </span>
        <Phone size={16} className="shrink-0 sm:w-5 sm:h-5 animate-bounce" />
      </span>
    </a>
  );
};

export default UrgentBanner;
