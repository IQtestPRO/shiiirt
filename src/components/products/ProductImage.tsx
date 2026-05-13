import type { Product } from "@/types/product";

export function ProductImage({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-neutral-100">
      <img
        src={`${product.images[0]}?v=3`}
        alt={product.name}
        loading={priority ? "eager" : "lazy"}
        className="relative aspect-[4/5] w-full object-contain p-5 transition-transform duration-[480ms] ease-out group-hover:scale-[1.04]"
      />
    </div>
  );
}
