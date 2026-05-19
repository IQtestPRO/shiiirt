"use client";

import { ArrowUpRight, MailCheck } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  }

  return (
    <section className="bg-brand-ink text-brand-paper">
      <div className="container-page py-16 md:py-20">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-lato text-[10px] font-bold uppercase tracking-[0.36em] text-brand-yellow">Newsletter</p>
          <h2 className="font-bebas mt-3 text-[clamp(2.8rem,6.5vw,5rem)] uppercase leading-[0.92] tracking-[0.005em]">
            Ganhe 10% off
          </h2>
          <p className="font-lato pretty mt-4 text-[14px] font-medium leading-7 text-brand-paper/65 sm:text-[15px]">
            Cadastre-se e te avisamos quando o drop da semana chega — junto com o cupom{" "}
            <span className="tabular ml-1 inline-flex items-center rounded-full bg-brand-yellow px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-ink">
              PRIMEIRACAMISA
            </span>{" "}
            liberado.
          </p>

          {submitted ? (
            <div className="mt-8 flex items-start justify-center gap-3 rounded-2xl border border-brand-yellow/30 bg-brand-yellow/5 p-5 text-left">
              <MailCheck className="h-6 w-6 shrink-0 text-brand-yellow" aria-hidden="true" strokeWidth={1.6} />
              <div>
                <h3 className="font-poppins text-lg font-extrabold tracking-tight">Cupom liberado.</h3>
                <p className="mt-1 text-sm font-medium text-brand-paper/75">
                  Use <span className="font-extrabold text-brand-yellow">PRIMEIRACAMISA</span> no WhatsApp.
                  Te avisamos no próximo drop.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">Seu e-mail</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="seu@email.com"
                className="min-h-12 flex-1 rounded-full border border-brand-paper/15 bg-brand-paper/[0.06] px-5 text-sm font-medium text-brand-paper placeholder:text-brand-paper/40 focus:border-brand-yellow/60 focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="group/btn inline-flex min-h-12 items-center justify-between gap-2 rounded-full bg-brand-yellow pl-5 pr-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand-ink transition-colors duration-200 ease-out hover:bg-white"
              >
                <span>Quero 10% off</span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-ink text-brand-yellow transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
                </span>
              </button>
            </form>
          )}
          <p className="mt-3 text-[11px] font-medium text-brand-paper/40">
            Sem spam, cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
}
