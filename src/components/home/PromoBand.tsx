import Link from "next/link";
import { ArrowRight, MessageCircle, Palette, ShieldCheck } from "lucide-react";

export function PromoBand() {
  return (
    <section className="container-page grid gap-4 py-8 lg:grid-cols-[1.15fr_0.85fr]">
      <Link href="/categoria/promocoes" className="group relative overflow-hidden rounded-lg bg-brand-ink p-6 text-white shadow-premium ring-1 ring-brand-gold/20 transition hover:-translate-y-0.5">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-green via-brand-yellow to-brand-blue" aria-hidden="true" />
        <div className="relative max-w-lg">
          <ShieldCheck className="h-8 w-8 text-brand-gold" aria-hidden="true" />
          <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-gold">Curadoria da semana</p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight sm:text-4xl">Mais vendidos com seleção pronta para envio</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-slate-200">
            Vitrine enxuta, fotos consistentes e compra assistida para fechar o pedido sem ruído.
          </p>
          <span className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-white px-4 text-sm font-extrabold text-brand-blue">
            Ver ofertas
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
      <div className="grid gap-4">
        <Link href="/categoria/pronta-entrega" className="rounded-lg bg-white p-5 text-brand-ink shadow-card ring-1 ring-slate-200/80 transition hover:-translate-y-0.5 hover:shadow-premium">
          <MessageCircle className="h-7 w-7 text-brand-green" aria-hidden="true" />
          <h2 className="mt-3 text-xl font-extrabold">Pronta entrega no Brasil</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Itens separados para quem quer comprar com menos espera.</p>
        </Link>
        <Link href="/categoria/personalizaveis" className="rounded-lg bg-brand-yellow p-5 text-brand-ink shadow-card transition hover:-translate-y-0.5 hover:shadow-premium">
          <Palette className="h-7 w-7 text-brand-blue" aria-hidden="true" />
          <h2 className="mt-3 text-xl font-extrabold">Nome e número</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">Escolha a personalização antes de enviar o carrinho para o WhatsApp.</p>
        </Link>
      </div>
    </section>
  );
}
