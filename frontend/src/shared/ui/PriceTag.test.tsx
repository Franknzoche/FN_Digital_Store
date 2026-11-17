import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PriceTag } from "./PriceTag";

describe("PriceTag", () => {
  it("affiche le prix seul quand il n'y a pas d'ancien prix", () => {
    render(<PriceTag price={8000} />);
    expect(screen.getByText("8 000 F")).toBeInTheDocument();
  });

  it("affiche l'ancien prix barré quand il est plus élevé", () => {
    render(<PriceTag price={8000} oldPrice={12500} />);
    expect(screen.getByText("8 000 F")).toBeInTheDocument();
    expect(screen.getByText("12 500 F").closest("del")).not.toBeNull();
  });

  it("n'affiche pas un ancien prix plus bas que le prix actuel", () => {
    render(<PriceTag price={8000} oldPrice={5000} />);
    expect(screen.queryByText("5 000 F")).not.toBeInTheDocument();
  });
});