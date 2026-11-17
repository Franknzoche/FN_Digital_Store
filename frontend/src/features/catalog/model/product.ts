export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  oldPrice?: number;
  stock: number;
};