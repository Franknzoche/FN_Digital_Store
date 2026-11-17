export function buildWhatsAppLink(phone: string, message?: string): string {
  const chiffres = phone.replace(/\D/g, "");
  const base = `https://wa.me/${chiffres}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}