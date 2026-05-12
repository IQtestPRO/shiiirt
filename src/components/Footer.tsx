import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { categories, storeName } from "@/lib/catalog";

export function Footer() {
  return (
    <footer className="mt-12 bg-brand-ink text-white">
      <div className="container-page grid gap-8 py-11 md:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-sm text-sm font-medium leading-6 text-slate-300">
            Camisas importadas, personalizadas e prontas para jogo, com atendimento direto e catálogo organizado para compra rápida.
          </p>
          <div className="mt-5 flex gap-2">
            <a className="grid h-11 w-11 place-items-center rounded-md bg-white/10 transition hover:bg-white/15" href="#" aria-label="Instagram da Central da Tailândia">
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a className="grid h-11 w-11 place-items-center rounded-md bg-white/10 transition hover:bg-white/15" href="#" aria-label="Facebook da Central da Tailândia">
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a className="grid h-11 w-11 place-items-center rounded-md bg-white/10 transition hover:bg-white/15" href="#" aria-label="WhatsApp da Central da Tailândia">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-gold">Categorias</h2>
          <div className="mt-3 space-y-2">
            {categories.slice(0, 6).map((category) => (
              <Link key={category.slug} className="block text-sm font-semibold text-slate-300 hover:text-white" href={`/categoria/${category.slug}`}>
                {category.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-gold">Atendimento</h2>
          <div className="mt-3 space-y-2 text-sm font-semibold text-slate-300">
            <p>Segunda a sexta, 9h às 18h</p>
            <p>Finalização e dúvidas pelo WhatsApp da loja.</p>
            <p>Envio para todo Brasil.</p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-gold">Ajuda</h2>
          <div className="mt-3 space-y-2 text-sm font-semibold text-slate-300">
            <Link className="block hover:text-white" href="/categoria/personalizaveis">
              Personalização
            </Link>
            <Link className="block hover:text-white" href="/categoria/pronta-entrega">
              Pronta entrega
            </Link>
            <Link className="block hover:text-white" href="/busca?q=tamanho">
              Tabela de medidas
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="container-page flex flex-col gap-2 text-xs font-semibold text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {storeName}. Identidade própria.</span>
          <span>Compra finalizada pelo WhatsApp configurado no ambiente.</span>
        </div>
      </div>
    </footer>
  );
}
