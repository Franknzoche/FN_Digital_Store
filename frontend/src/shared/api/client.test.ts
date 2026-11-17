import { describe, it, expect } from "vitest";
import { http, HttpResponse } from "msw";
import { server } from "../../test/mocks/server";
import type { Product } from "../../features/catalog/model/product";
import { getJson } from "./client";

describe("getJson", () => {
  it("renvoie les données JSON quand la réponse est correcte", async () => {
    server.use(
      http.get("*/api/test", () => HttpResponse.json({ message: "ok" })),
    );

    const data = await getJson<{ message: string }>("/api/test");

    expect(data).toEqual({ message: "ok" });
  });

  it("lance une erreur avec le code HTTP quand le serveur répond une erreur", async () => {
    server.use(
      http.get("*/api/test", () => new HttpResponse(null, { status: 404 })),
    );

    await expect(getJson("/api/test")).rejects.toMatchObject({ status: 404 });
  });

  it("récupère la liste des produits de démonstration", async () => {
    const produits = await getJson<Product[]>("/api/products");

    expect(produits.length).toBeGreaterThan(0);
    expect(produits[0]).toHaveProperty("slug");
  });
});