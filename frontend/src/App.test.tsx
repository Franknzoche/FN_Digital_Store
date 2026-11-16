import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("affiche le nom de la boutique", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /FN Digital Store/i }),
    ).toBeInTheDocument();
  });
});