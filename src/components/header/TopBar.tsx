import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-[#030B1C] text-white">
      <div className="container-page flex min-h-8 flex-wrap items-center justify-between gap-3 py-1.5 text-xs font-semibold">
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-brand-blue">
          Pular para conteúdo
        </a>
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="h-4 w-4 text-brand-gold" aria-hidden="true" />
            Compra finalizada pelo WhatsApp
          </span>
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            <Phone className="h-4 w-4 text-brand-gold" aria-hidden="true" />
            Atendimento rápido
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 md:inline-flex">
            <Mail className="h-4 w-4 text-brand-gold" aria-hidden="true" />
            contato@centraldatailandia.com.br
          </span>
          <a href="#" aria-label="Instagram da Central da Tailândia" className="rounded p-1 transition hover:bg-white/10">
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
