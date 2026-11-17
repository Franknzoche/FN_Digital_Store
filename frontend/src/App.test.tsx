import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("affiche l'en-tête de la boutique", () => {
    render(<App />);
    expect(
      screen.getByRole("link", { name: /FN Digital Store/i }),
    ).toBeInTheDocument();
  });
});