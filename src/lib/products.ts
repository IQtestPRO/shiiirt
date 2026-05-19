import productsData from "../../data/products.json";
import type { Product } from "@/types/product";
import { normalizeText } from "./format";

export const products = productsData as Product[];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string) {
  if (category === "pronta-entrega") {
    return products.filter((product) => product.readyToShip);
  }

  if (category === "promocoes") {
    return products.filter((product) => product.discount > 0);
  }

  if (category === "personalizaveis") {
    return products.filter((product) => product.customizable);
  }

  if (category === "femininas") {
    return products.filter((product) => product.gender === "feminino");
  }

  if (category === "infantil") {
    return products.filter((product) => product.gender === "infantil");
  }

  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(product: Product) {
  const related = product.related
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean) as Product[];

  if (related.length >= 4) {
    return related.slice(0, 4);
  }

  const fallback = products.filter(
    (item) => item.slug !== product.slug && (item.category === product.category || item.club === product.club)
  );

  return [...related, ...fallback].slice(0, 4);
}

export function searchProducts(query: string) {
  const normalized = normalizeText(query.trim());

  if (!normalized) {
    return [];
  }

  return products.filter((product) => {
    const haystack = [
      product.name,
      product.category,
      product.subcategory,
      product.club,
      product.league,
      product.gender,
      ...product.tags
    ]
      .map(normalizeText)
      .join(" ");

    return haystack.includes(normalized);
  });
}

export function getProductArt(slug: string) {
  const product = getProductBySlug(slug);
  return product || products[0];
}
