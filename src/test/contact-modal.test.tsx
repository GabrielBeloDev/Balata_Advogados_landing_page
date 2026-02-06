import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ContactModal from "@/components/landing/ContactModal";
import { getWhatsAppUrl } from "@/config/site";

const { toastMock } = vi.hoisted(() => ({
  toastMock: vi.fn(),
}));

vi.mock("@/components/ui/use-toast", () => ({
  toast: toastMock,
  useToast: vi.fn(),
}));

describe("ContactModal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("envia para o WhatsApp com dados válidos e caso pré-selecionado", () => {
    const onOpenChange = vi.fn();
    const openSpy = vi.spyOn(window, "open").mockReturnValue({} as Window);

    render(
      <ContactModal
        open
        onOpenChange={onOpenChange}
        preSelectedCase="Crimes Eleitorais"
      />,
    );

    fireEvent.change(screen.getByLabelText(/Nome/i), {
      target: { value: "  João da Silva  " },
    });
    fireEvent.change(screen.getByLabelText(/Telefone/i), {
      target: { value: "  (98) 98887-7011  " },
    });
    fireEvent.click(screen.getByRole("button", { name: /Enviar pelo WhatsApp/i }));

    const expectedMessage = `*Novo contato via site*

*Nome:* João da Silva
*Telefone:* (98) 98887-7011
*Tipo de caso:* Crimes Eleitorais
*Descrição:* Não informada`;
    const expectedUrl = getWhatsAppUrl(expectedMessage);

    expect(openSpy).toHaveBeenCalledWith(expectedUrl, "_blank", "noopener,noreferrer");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("bloqueia envio com nome/telefone inválidos e dispara toast", () => {
    const openSpy = vi.spyOn(window, "open").mockReturnValue({} as Window);
    render(<ContactModal open onOpenChange={vi.fn()} />);

    fireEvent.change(screen.getByLabelText(/Nome/i), {
      target: { value: "   " },
    });
    fireEvent.change(screen.getByLabelText(/Telefone/i), {
      target: { value: "123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Enviar pelo WhatsApp/i }));

    expect(openSpy).not.toHaveBeenCalled();
    expect(toastMock).toHaveBeenCalledTimes(1);
    expect(toastMock).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Dados incompletos",
      }),
    );
  });

  it("faz fallback para redirecionamento quando popup é bloqueado", () => {
    const openSpy = vi.spyOn(window, "open").mockReturnValue(null);

    render(<ContactModal open onOpenChange={vi.fn()} />);

    fireEvent.change(screen.getByLabelText(/Nome/i), {
      target: { value: "Maria Souza" },
    });
    fireEvent.change(screen.getByLabelText(/Telefone/i), {
      target: { value: "(98) 98887-7011" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Enviar pelo WhatsApp/i }));

    const expectedMessage = `*Novo contato via site*

*Nome:* Maria Souza
*Telefone:* (98) 98887-7011
*Tipo de caso:* Não informado
*Descrição:* Não informada`;
    const expectedUrl = getWhatsAppUrl(expectedMessage);

    expect(openSpy).toHaveBeenNthCalledWith(
      1,
      expectedUrl,
      "_blank",
      "noopener,noreferrer",
    );
    expect(openSpy).toHaveBeenNthCalledWith(2, expectedUrl, "_self");
  });
});
