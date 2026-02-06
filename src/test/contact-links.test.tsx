import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contato from "@/components/landing/Contato";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import UrgentBanner from "@/components/landing/UrgentBanner";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import {
  EMAIL,
  INSTAGRAM_URL,
  MAPS_URL,
  OAB,
  PHONE_E164,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from "@/config/site";

describe("Landing links", () => {
  it("usa links centralizados no Hero", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: /Falar pelo WhatsApp/i }),
    ).toHaveAttribute("href", getWhatsAppUrl(WHATSAPP_MESSAGES.consultation));

    expect(
      screen.getByRole("link", { name: /Ligar para Balata Advogados/i }),
    ).toHaveAttribute("href", `tel:${PHONE_E164}`);
  });

  it("usa links centralizados no Header", () => {
    render(<Header />);

    expect(
      screen.getByRole("link", {
        name: /Falar com Balata Advogados pelo WhatsApp/i,
      }),
    ).toHaveAttribute("href", getWhatsAppUrl(WHATSAPP_MESSAGES.consultation));
  });

  it("usa links centralizados na seção de contato", () => {
    render(<Contato />);

    expect(screen.getByRole("link", { name: "Abrir Telefone" })).toHaveAttribute(
      "href",
      `tel:${PHONE_E164}`,
    );
    expect(screen.getByRole("link", { name: "Abrir WhatsApp" })).toHaveAttribute(
      "href",
      getWhatsAppUrl(),
    );
    expect(screen.getByRole("link", { name: "Abrir E-mail" })).toHaveAttribute(
      "href",
      `mailto:${EMAIL}`,
    );
    expect(screen.getByRole("link", { name: "Abrir Endereço" })).toHaveAttribute(
      "href",
      MAPS_URL,
    );
  });

  it("usa links centralizados no rodapé", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "Instagram" })).toHaveAttribute(
      "href",
      INSTAGRAM_URL,
    );
    expect(screen.getByText(OAB)).toBeInTheDocument();
  });

  it("usa links centralizados nos CTAs flutuantes", () => {
    render(
      <>
        <UrgentBanner />
        <WhatsAppButton />
      </>,
    );

    expect(
      screen.getByRole("link", { name: /Contato urgente pelo WhatsApp/i }),
    ).toHaveAttribute("href", getWhatsAppUrl(WHATSAPP_MESSAGES.urgent));

    expect(
      screen.getByRole("link", { name: /Contato pelo WhatsApp/i }),
    ).toHaveAttribute("href", getWhatsAppUrl(WHATSAPP_MESSAGES.info));
  });
});
