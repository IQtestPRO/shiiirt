import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";
import { ProductGrid } from "@/components/products/ProductGrid";

export function ProductSection({
  title,
  products,
  href
}: {
  title: string;
  eyebrow?: string;
  products: Product[];
  href: string;
}) {
  return (
    <section className="container-page py-12 sm:py-16">
      <div className="mb-8 flex flex-col items-center gap-4 text-center sm:mb-10">
        <h2 className="font-poppins balance text-[clamp(1.7rem,3.6vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.025em] text-brand-ink">
          {title}
        </h2>
        <Link
          href={href}
          className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-brand-ink underline decoration-brand-ink/30 decoration-2 underline-offset-[6px] transition-colors duration-200 ease-out hover:decoration-brand-ink"
        >
          Ver tudo
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" strokeWidth={1.8} />
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
