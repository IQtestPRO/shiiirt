export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
};

export function PricingTable({ plans }: { plans: PricingPlan[] }) {
  return (
    <section className="px-4 py-14" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="pricing-title" className="text-3xl font-bold text-slate-950">Planos claros para decisões rápidas</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`rounded-lg border p-6 ${plan.highlighted ? "border-emerald-500 bg-emerald-50 shadow-lg" : "border-slate-200 bg-white"}`}>
              {plan.highlighted ? <p className="mb-3 text-sm font-bold text-emerald-700">Mais escolhido</p> : null}
              <h3 className="text-xl font-bold text-slate-950">{plan.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{plan.description}</p>
              <p className="mt-5 text-4xl font-bold text-slate-950">{plan.price}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
              </ul>
              {/* CTA por plano permite medir intenção e mix de planos. */}
              <a className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-slate-950 px-4 font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300" href={plan.cta.href}>
                {plan.cta.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingTableExample() {
  return <PricingTable plans={[{ name: "Start", price: "R$ 990", description: "Para validar uma landing.", features: ["1 página", "Eventos básicos", "Checklist CRO"], cta: { label: "Começar", href: "#lead" } }, { name: "Growth", price: "R$ 2.900", description: "Para otimizar funil completo.", features: ["3 páginas", "GA4", "Teste A/B"], cta: { label: "Escolher Growth", href: "#lead" }, highlighted: true }, { name: "Scale", price: "Sob consulta", description: "Para times com múltiplas páginas.", features: ["Design system", "Roadmap", "QA contínuo"], cta: { label: "Falar com especialista", href: "#lead" } }]} />;
}
