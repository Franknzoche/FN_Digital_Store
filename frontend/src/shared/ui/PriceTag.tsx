import { formatPrice } from "../lib/formatPrice";

type Props = {
  price: number;
  oldPrice?: number;
};

export function PriceTag({ price, oldPrice }: Props) {
  const ancienPrix =
    oldPrice !== undefined && oldPrice > price ? oldPrice : null;

  return (
    <p className="flex items-baseline gap-2 whitespace-nowrap">
      <span className={`font-extrabold ${ancienPrix ? "text-promo" : "text-encre"}`}>
        {formatPrice(price)}
      </span>
      {ancienPrix !== null && (
        <del className="text-sm text-gris-texte">{formatPrice(ancienPrix)}</del>
      )}
    </p>
  );
}