import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "@/components/landing/Header";

describe("Header", () => {
  it("abre e fecha o menu mobile com atributos de acessibilidade", () => {
    render(<Header />);

    const toggleButton = screen.getByRole("button", {
      name: /Abrir menu principal/i,
    });

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(toggleButton).toHaveAttribute("aria-controls", "mobile-main-menu");

    fireEvent.click(toggleButton);

    const closeButton = screen.getByRole("button", {
      name: /Fechar menu principal/i,
    });
    expect(closeButton).toHaveAttribute("aria-expanded", "true");

    const mobileMenu = document.getElementById("mobile-main-menu");
    expect(mobileMenu).toBeInTheDocument();

    if (!mobileMenu) {
      throw new Error("mobile-main-menu não renderizado");
    }

    fireEvent.click(within(mobileMenu).getByRole("link", { name: "Contato" }));
    expect(document.getElementById("mobile-main-menu")).not.toBeInTheDocument();
  });
});

