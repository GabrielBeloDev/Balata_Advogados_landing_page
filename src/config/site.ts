export const PHONE_DISPLAY = "(98) 98887-7011";
export const PHONE_E164 = "+5598988877011";
export const WHATSAPP_NUMBER = "5598988877011";
export const EMAIL = "contato@balataadvogados.com.br";
export const INSTAGRAM_URL = "https://instagram.com/balata.advogados";
export const MAPS_URL = "https://maps.app.goo.gl/cDSNhpjZk3ay9kAj6";
export const OAB = "OAB/MA 4.913";

export const WHATSAPP_MESSAGES = {
  consultation: "Olá! Gostaria de agendar uma consulta.",
  info: "Olá! Gostaria de mais informações sobre os serviços jurídicos.",
  urgent: "URGENTE! Preciso de atendimento imediato.",
} as const;

export const getWhatsAppUrl = (message?: string) => {
  if (!message) {
    return `https://wa.me/${WHATSAPP_NUMBER}`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

