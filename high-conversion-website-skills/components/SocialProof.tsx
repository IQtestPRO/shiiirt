export type SocialProofProps = {
  logos?: string[];
  stats?: Array<{ value: string; label: string }>;
};

export function SocialProof({ logos = ["Acme", "Northstar", "Orbit"], stats = [] }: SocialProofProps) {
  return (
    <section id="proof" className="px-4 py-10" aria-labelledby="social-proof-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="social-proof-title" className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500">Usado por equipes que medem conversão</h2>
        {/* Logos e números reduzem risco percebido antes do usuário chegar ao CTA principal. */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {logos.map((logo) => <div key={logo} className="rounded-md border border-slate-200 bg-white px-4 py-4 text-center font-bold text-slate-700">{logo}</div>)}
        </div>
        {stats.length ? (
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-slate-50 p-5 text-center">
                <dt className="text-sm text-slate-600">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-bold text-slate-950">{stat.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}

export function SocialProofExample() {
  return <SocialProof stats={[{ value: "+18%", label: "lift em leads" }, { value: "2.1s", label: "LCP mobile" }, { value: "7 dias", label: "primeiro sprint" }]} />;
}
