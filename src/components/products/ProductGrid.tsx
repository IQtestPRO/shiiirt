import type { Product } from "@/types/product";
import { EmptyState } from "@/components/EmptyState";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <EmptyState
        title="Nenhuma camisa encontrada"
        description="Tente remover filtros ou buscar por clube, seleção, liga ou categoria."
      />
    );
  }

  return (
    <div className="stagger-in grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-4 sm:gap-y-6 lg:grid-cols-4 lg:gap-x-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
