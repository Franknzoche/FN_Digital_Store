import { BOUTIQUE } from "../config/boutique";

export function Footer() {
  return (
    <footer className="bg-encre px-4 py-8 text-sm text-white">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-lg font-extrabold">{BOUTIQUE.nom}</p>
        <p className="text-gris-ligne">{BOUTIQUE.slogan}</p>
        <p className="mt-4 text-gris-ligne">
          Livraison à {BOUTIQUE.ville} · Paiement à la livraison · Retour sous 7 jours
        </p>
        <p className="mt-6 text-xs text-gris-texte">
          © {new Date().getFullYear()} {BOUTIQUE.nom}
        </p>
      </div>
    </footer>
  );
}