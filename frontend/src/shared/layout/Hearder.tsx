import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { BOUTIQUE } from "../config/boutique";
import { CATEGORIES } from "../config/categories";

export function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <header className="border-b border-gris-ligne bg-white">
      <div className="bg-encre px-4 py-1.5 text-xs text-white">
        <div className="mx-auto flex max-w-[1200px] justify-between">
          <span>Livraison à {BOUTIQUE.ville} · Paiement à la livraison</span>
          <span className="hidden sm:inline">Lundi – samedi, 8h30 – 18h</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-4 py-3">
        <button
          type="button"
          aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOuvert(!menuOuvert)}
          className="flex size-11 items-center justify-center lg:hidden"
        >
          {menuOuvert ? <X /> : <Menu />}
        </button>

        <Link to="/" aria-label={`${BOUTIQUE.nom}, accueil`} className="leading-none">
          <span className="block text-lg font-extrabold">
            FN <span className="text-marque">DIGITAL</span> STORE
          </span>
          <span className="block text-[9px] tracking-[0.25em] text-gris-texte">
            LA MAISON DU BONHEUR
          </span>
        </Link>

        <form
          role="search"
          className="hidden flex-1 items-center rounded-champ border border-gris-ligne px-3 md:flex"
        >
          <Search className="size-4 text-gris-texte" aria-hidden="true" />
          <input
            type="search"
            aria-label="Rechercher un produit"
            placeholder="Rechercher un casque, un chargeur..."
            className="h-10 flex-1 bg-transparent px-2 text-base outline-none"
          />
        </form>

        <div className="ml-auto flex items-center md:ml-0">
          <Link to="/connexion" aria-label="Mon compte" className="flex size-11 items-center justify-center">
            <User />
          </Link>
          <Link to="/panier" aria-label="Panier, 0 article" className="flex size-11 items-center justify-center">
            <ShoppingCart />
          </Link>
        </div>
      </div>

      <nav aria-label="Catégories" className="hidden border-t border-gris-ligne lg:block">
        <ul className="mx-auto flex max-w-[1200px] gap-6 px-4 py-2 text-sm font-semibold">
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Link to={`/categorie/${c.slug}`}>{c.nom}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {menuOuvert && (
        <nav aria-label="Menu mobile" className="border-t border-gris-ligne lg:hidden">
          <ul>
            {CATEGORIES.map((c) => (
              <li key={c.slug} className="border-b border-gris-ligne">
                <Link
                  to={`/categorie/${c.slug}`}
                  onClick={() => setMenuOuvert(false)}
                  className="block px-4 py-3"
                >
                  {c.nom}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}