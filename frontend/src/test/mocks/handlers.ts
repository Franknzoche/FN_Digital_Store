import { http, HttpResponse } from "msw";
import { products } from "./products";

export const handlers = [
  http.get("*/api/products", () => HttpResponse.json(products)),

  http.get("*/api/products/:slug", ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    return product
      ? HttpResponse.json(product)
      : new HttpResponse(null, { status: 404 });
  }),
];