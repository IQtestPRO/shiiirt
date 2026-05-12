import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types/product";
import { ProductGrid } from "@/components/products/ProductGrid";

export function ProductSection({
  title,
  eyebrow,
  products,
  href
}: {
  title: string;
  eyebrow: string;
  products: Product[];
  href: string;
}) {
  return (
    <section className="container-page py-9">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">{eyebrow}</p>
          <h2 className="mt-1 text-2xl font-extrabold leading-tight text-brand-ink sm:text-4xl">{title}</h2>
        </div>
        <Link href={href} className="inline-flex min-h-11 items-center gap-2 rounded-md border border-brand-blue/20 bg-white px-4 text-sm font-extrabold text-brand-blue shadow-sm transition hover:border-brand-blue/40 hover:bg-blue-50">
          Ver tudo
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
