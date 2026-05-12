import type { MetadataRoute } from "next";
import { categories } from "@/lib/catalog";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://central-da-tailandia.local";
  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    ...categories.map((category) => ({
      url: `${baseUrl}/categoria/${category.slug}`,
      lastModified: new Date()
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/produtos/${product.slug}`,
      lastModified: new Date()
    }))
  ];
}
