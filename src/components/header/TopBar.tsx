import { Instagram, Mail, MessageCircle, Truck } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-brand-ink text-brand-paper">
      <div className="container-page flex min-h-9 flex-wrap items-center justify-between gap-3 py-2 text-[11px] font-medium tracking-wide">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:rounded-full focus:bg-brand-yellow focus:px-3 focus:py-2 focus:text-brand-ink"
        >
          Pular para conteúdo
        </a>
        <div className="flex flex-wrap items-center gap-5 text-brand-paper/80">
          <span className="inline-flex items-center gap-2">
            <Truck className="h-3.5 w-3.5 text-brand-yellow" aria-hidden="true" />
            Frete grátis em destaques
          </span>
          <span className="hidden items-center gap-2 sm:inline-flex">
            <MessageCircle className="h-3.5 w-3.5 text-brand-yellow" aria-hidden="true" />
            Compra guiada pelo WhatsApp
          </span>
        </div>
        <div className="flex items-center gap-4 text-brand-paper/75">
          <span className="hidden items-center gap-2 md:inline-flex">
            <Mail className="h-3.5 w-3.5 text-brand-yellow" aria-hidden="true" />
            contato@mundodasimportadas.com.br
          </span>
          <a
            href="#"
            aria-label="Instagram do Mundo das Importadas"
            className="grid h-7 w-7 place-items-center rounded-full bg-white/[0.06] transition-colors duration-200 ease-out hover:bg-white/15"
          >
            <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
