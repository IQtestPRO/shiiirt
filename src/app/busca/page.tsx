import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryPageContent } from "@/components/category/CategoryPageContent";
import { EmptyState } from "@/components/EmptyState";
import { searchProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Busca",
  description: "Busque camisas por nome, clube, categoria, seleção, liga e tags."
};

export default async function SearchPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q?.trim() || "";
  const results = query ? searchProducts(query) : [];

  return (
    <div className="container-page py-8">
      <Breadcrumbs items={[{ label: "Busca" }]} />
      <section className="mb-6 rounded-lg bg-white p-5 shadow-card ring-1 ring-slate-200/75">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">Resultado de busca</p>
        <h1 className="mt-1 text-3xl font-extrabold text-brand-ink sm:text-4xl">
          {query ? `Busca por "${query}"` : "Busque sua próxima camisa"}
        </h1>
        <p className="mt-2 max-w-2xl text-base leading-7 text-slate-600">
          Pesquise por nome, clube, seleção, liga, categoria ou tags do catálogo.
        </p>
      </section>
      {query ? (
        <CategoryPageContent products={results} />
      ) : (
        <EmptyState title="Digite algo na busca" description="Use a barra de busca no topo para encontrar clubes, seleções e categorias." />
      )}
    </div>
  );
}
