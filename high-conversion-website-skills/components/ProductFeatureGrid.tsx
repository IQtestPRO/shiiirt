export type ProductFeature = { title: string; description: string };

export function ProductFeatureGrid({ features }: { features: ProductFeature[] }) {
  return (
    <section className="px-4 py-14" aria-labelledby="features-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="features-title" className="text-3xl font-bold text-slate-950">Benefícios que removem dúvida</h2>
        {/* Features são escritas como benefícios para ajudar comparação e decisão. */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="mb-4 h-2 w-12 rounded-full bg-emerald-500" aria-hidden="true" />
              <h3 className="text-lg font-bold text-slate-950">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductFeatureGridExample() {
  return <ProductFeatureGrid features={[{ title: "Mais rápido", description: "Componentes prontos reduzem tempo de publicação." }, { title: "Mensurável", description: "Eventos e métricas são definidos antes do lançamento." }, { title: "Acessível", description: "Labels, foco e contraste entram no fluxo padrão." }]} />;
}
