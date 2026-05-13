import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";

export function ProductRail({
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
    <section className="py-12 sm:py-16">
      <div className="container-page mb-7 flex flex-col items-center gap-4 text-center">
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

      <div className="scroll-rail no-scrollbar flex gap-4 overflow-x-auto pb-2 pl-[max(16px,calc((100vw-1360px)/2))] pr-[max(16px,calc((100vw-1360px)/2))] sm:gap-5">
        {products.map((product) => (
          <div key={product.id} className="w-[78vw] shrink-0 sm:w-[300px] lg:w-[320px]">
            <ProductCard product={product} />
          </div>
        ))}
        <div className="w-px shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
