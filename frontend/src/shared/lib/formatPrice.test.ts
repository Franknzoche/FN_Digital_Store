import { describe, it, expect } from "vitest";
import { formatPrice } from "./formatPrice";
describe("formatPrice", () => {
  it("sépare les milliers par un espace et ajoute F", () => {
    expect(formatPrice(8000)).toBe("8 000 F");
  });

  it("n'ajoute pas d'espace sous 1000", () => {
    expect(formatPrice(500)).toBe("500 F");
  });

  it("gère les millions", () => {
    expect(formatPrice(1250000)).toBe("1 250 000 F");
  });

  it("affiche zéro", () => {
    expect(formatPrice(0)).toBe("0 F");
  });
});