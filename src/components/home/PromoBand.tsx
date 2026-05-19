import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PromoBand() {
  return (
    <section className="container-page py-16 md:py-20">
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <Link
          href="/categoria/promocoes"
          className="hover-lift group relative isolate overflow-hidden rounded-[28px] bg-brand-ink p-10 text-brand-paper sm:p-14"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl" aria-hidden="true" />
          <div className="absolute right-8 top-8 hidden text-right text-[11px] font-bold uppercase tracking-[0.28em] text-brand-yellow/85 sm:block">
            <p className="tabular">04 — 12</p>
            <p className="mt-1">Drops do mês</p>
          </div>
          <div className="relative max-w-md">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.26em] text-brand-yellow">
              Curadoria da semana
            </span>
            <h2 className="font-poppins balance mt-6 text-[clamp(1.7rem,3.6vw,2.8rem)] font-extrabold leading-[1.02] tracking-[-0.025em]">
              Drops semanais com seleção pronta para envio.
            </h2>
            <p className="pretty mt-4 max-w-md text-sm font-medium leading-7 text-brand-paper/70">
              Cada lançamento entra com checagem de modelagem, qualidade e identidade da marca. Sem encheção de catálogo.
            </p>
            <span className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-yellow pl-5 pr-1.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-ink transition-colors duration-200 ease-out group-hover:bg-brand-paper">
              Ver ofertas
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-ink text-brand-yellow transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
              </span>
            </span>
          </div>
        </Link>

        <ol className="relative grid gap-3 rounded-[28px] border border-brand-ink/10 bg-brand-mist p-8 shadow-card sm:p-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-ink/55">Como comprar</p>
          <h2 className="font-poppins balance text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-brand-ink">
            Da seleção ao WhatsApp em três passos.
          </h2>
          {[
            { n: "01", t: "Escolha tamanho e personalização", s: "P ao XG, nome e número opcionais nos modelos selecionados." },
            { n: "02", t: "Adicione e finalize pelo WhatsApp", s: "O carrinho gera a mensagem pronta para o atendente." },
            { n: "03", t: "Combine pagamento e envio", s: "Pix com 5% off ou cartão em 2x. Envio para todo Brasil." }
          ].map((step) => (
            <li key={step.n} className="mt-3 flex items-start gap-4 border-t border-brand-ink/10 pt-5">
              <span className="font-poppins tabular grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-ink text-[13px] font-extrabold text-brand-paper">
                {step.n}
              </span>
              <div>
                <p className="text-[13px] font-extrabold text-brand-ink">{step.t}</p>
                <p className="mt-1 text-[12px] font-medium text-brand-ink/60">{step.s}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
