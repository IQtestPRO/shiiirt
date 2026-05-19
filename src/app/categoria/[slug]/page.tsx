import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryPageContent } from "@/components/category/CategoryPageContent";
import { categories } from "@/lib/catalog";
import { getProductsByCategory } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) return {};

  return {
    title: category.label,
    description: category.description
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.slug);

  return (
    <div className="container-page py-8 sm:py-10">
      <Breadcrumbs items={[{ label: category.label }]} />

      <header className="mb-8 border-b border-black/[0.08] pb-7 sm:mb-10 sm:pb-9">
        <div className="font-lato flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-brand-ink/55">
          <span className="h-px w-7 bg-brand-ink/25" aria-hidden="true" />
          Categoria
        </div>
        <div className="mt-3 flex flex-col gap-4 sm:mt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <h1 className="font-bebas text-brand-ink text-[clamp(2.4rem,5vw,3.6rem)] uppercase leading-[0.95] tracking-[0.005em]">
            {category.label}
          </h1>
          <p className="font-lato max-w-md text-[14px] leading-[1.6] text-brand-ink/60 sm:text-[15px]">
            {category.description}
          </p>
        </div>
      </header>

      <CategoryPageContent products={categoryProducts} />
    </div>
  );
}
