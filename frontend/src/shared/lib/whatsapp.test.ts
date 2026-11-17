import { describe, it, expect } from "vitest";
import { buildWhatsAppLink } from "./whatsapp";

describe("buildWhatsAppLink", () => {
  it("garde seulement les chiffres du numéro", () => {
    expect(buildWhatsAppLink("+237 6 78 06  18 29   ")).toBe(
      "https://wa.me/237678061829", 
    );
  });

  it("ajoute le message dans l'adresse", () => {
    expect(buildWhatsAppLink("237678061829", "Bonjour FN")).toBe(
      "https://wa.me/237678061829?text=Bonjour%20FN",
    );
  });

  it("encode les accents et les retours à la ligne", () => {
    expect(buildWhatsAppLink("237678061829", "Salut\nÇa va")).toBe(
      "https://wa.me/237678061829?text=Salut%0A%C3%87a%20va",
    );
  });
});