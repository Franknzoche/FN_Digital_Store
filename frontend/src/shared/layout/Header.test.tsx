import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { Header } from "./Hearder";

describe("Header", () => {
  it("ouvre et ferme le menu mobile", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(
      screen.queryByRole("navigation", { name: "Menu mobile" }),
    ).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Ouvrir le menu" }));
    expect(
      screen.getByRole("navigation", { name: "Menu mobile" }),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Fermer le menu" }));
    expect(
      screen.queryByRole("navigation", { name: "Menu mobile" }),
    ).not.toBeInTheDocument();
  });
});