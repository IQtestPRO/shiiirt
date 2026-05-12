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
    <div className="container-page py-8">
      <Breadcrumbs items={[{ label: category.label }]} />
      <section className="mb-6 rounded-lg bg-white p-5 shadow-card ring-1 ring-slate-200/75">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">Categoria</p>
        <h1 className="mt-1 text-3xl font-extrabold text-brand-ink sm:text-4xl">{category.label}</h1>
        <p className="mt-2 max-w-2xl text-base leading-7 text-slate-600">{category.description}</p>
      </section>
      <CategoryPageContent products={categoryProducts} />
    </div>
  );
}
