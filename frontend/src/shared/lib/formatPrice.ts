export function formatPrice(amount: number): string {
  const entier = Math.round(amount);
  const avecEspaces = String(entier).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${avecEspaces} F`;
}