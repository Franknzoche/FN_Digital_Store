import { MessageCircle } from "lucide-react";
import { BOUTIQUE } from "../config/boutique";
import { buildWhatsAppLink } from "../lib/whatsapp";

export function WhatsAppButton() {
  const lien = buildWhatsAppLink(
    BOUTIQUE.whatsapp,
    `Bonjour ${BOUTIQUE.nom}, j'ai une question.`,
  );

  return (
    <a
      href={lien}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed right-4 bottom-4 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg"
    >
      <MessageCircle />
    </a>
  );
}