import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/config/site";

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppUrl(WHATSAPP_MESSAGES.info)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contato pelo WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />

      <span className="absolute right-full mr-3 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco!
      </span>

      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </a>
  );
};

export default WhatsAppButton;
