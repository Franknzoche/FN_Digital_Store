import type { Product } from "../../features/catalog/model/product";

export const products: Product[] = [
  { id: 1, name: "Casque Bluetooth RGB PM860 Disco Pulse", slug: "casque-bluetooth-rgb-pm860", category: "casques", price: 8000, oldPrice: 12500, stock: 5 },
  { id: 2, name: "Écouteurs sans fil Air Pro", slug: "ecouteurs-sans-fil-air-pro", category: "ecouteurs", price: 6500, oldPrice: 9000, stock: 20 },
  { id: 3, name: "Chargeur rapide 20W USB-C", slug: "chargeur-rapide-20w-usb-c", category: "chargeurs", price: 4000, oldPrice: 5500, stock: 2 },
  { id: 4, name: "Power bank 20 000 mAh", slug: "power-bank-20000-mah", category: "power-banks", price: 9500, oldPrice: 14000, stock: 8 },
  { id: 5, name: "Montre connectée Sport T800", slug: "montre-connectee-sport-t800", category: "montres", price: 12000, oldPrice: 18000, stock: 6 },
  { id: 6, name: "Manette de jeu sans fil", slug: "manette-de-jeu-sans-fil", category: "manettes", price: 7500, stock: 10 },
  { id: 7, name: "Câble USB-C renforcé 1 m", slug: "cable-usb-c-renforce-1m", category: "cables", price: 1500, stock: 0 },
  { id: 8, name: "Enceinte Bluetooth portable", slug: "enceinte-bluetooth-portable", category: "enceintes", price: 9000, oldPrice: 12000, stock: 9 },
];