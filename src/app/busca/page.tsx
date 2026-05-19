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
      <section className="mb-8 border-b border-black/[0.08] pb-7 sm:mb-10 sm:pb-9">
        <div className="font-lato flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-brand-ink/55">
          <span className="h-px w-7 bg-brand-ink/25" aria-hidden="true" />
          Resultado de busca
        </div>
        <div className="mt-3 flex flex-col gap-4 sm:mt-4">
          <h1 className="font-bebas text-brand-ink text-[clamp(2.4rem,5vw,3.6rem)] uppercase leading-[0.95] tracking-[0.005em]">
            {query ? `Busca por "${query}"` : "Busque sua próxima camisa"}
          </h1>
          <p className="font-lato max-w-2xl text-[14px] leading-[1.6] text-brand-ink/60">
            Pesquise por nome, clube, seleção, liga, categoria ou tags do catálogo.
          </p>
        </div>
      </section>
      {query ? (
        <CategoryPageContent products={results} />
      ) : (
        <EmptyState title="Digite algo na busca" description="Use a barra de busca no topo para encontrar clubes, seleções e categorias." />
      )}
    </div>
  );
}
