import type { Product } from "@/types/product";

export function ProductImage({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-md bg-gradient-to-b from-white to-brand-mist p-3">
      <img
        src={`${product.images[0]}?v=3`}
        alt={product.name}
        loading={priority ? "eager" : "lazy"}
        className="aspect-[4/4.8] w-full object-contain transition duration-300 group-hover:scale-[1.025]"
      />
    </div>
  );
}
