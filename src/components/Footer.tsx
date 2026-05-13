import Link from "next/link";
import { storeName } from "@/lib/catalog";

type FooterLink = { label: string; href: string };
type FooterGroup = { title: string; links: FooterLink[] };

const groups: FooterGroup[] = [
  {
    title: "Páginas",
    links: [
      { label: "Pronta entrega", href: "/categoria/pronta-entrega" },
      { label: "Brasileirão", href: "/categoria/brasileirao" },
      { label: "Europa", href: "/categoria/europa" },
      { label: "Seleções", href: "/categoria/selecoes" },
      { label: "Femininas", href: "/categoria/femininas" },
      { label: "Promoções", href: "/categoria/promocoes" }
    ]
  },
  {
    title: "Redes",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "WhatsApp", href: "#" },
      { label: "TikTok", href: "#" }
    ]
  },
  {
    title: "Termos",
    links: [
      { label: "Política de privacidade", href: "#" },
      { label: "Termos de uso", href: "#" },
      { label: "Política de cookies", href: "#" },
      { label: "Trocas e devoluções", href: "#" }
    ]
  },
  {
    title: "Conta",
    links: [
      { label: "Minha conta", href: "#" },
      { label: "Meus pedidos", href: "#" },
      { label: "Rastrear pedido", href: "#" },
      { label: "Tabela de medidas", href: "/busca?q=tamanho" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-neutral-950 text-brand-paper">
      <div className="container-page relative z-10 grid gap-12 py-20 md:grid-cols-5 md:gap-10">
        {/* Col 1 — brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo-mundo.png"
              alt={storeName}
              className="h-10 w-auto"
              style={{ filter: "invert(1)" }}
              loading="lazy"
            />
            <span className="font-poppins text-[14px] font-semibold text-brand-paper">
              {storeName}
            </span>
          </div>
          <p className="font-poppins mt-6 text-[12px] font-normal leading-6 text-brand-paper/40">
            © 2026 {storeName}. Todos os direitos reservados.
          </p>
        </div>

        {/* Cols 2–5 — link groups */}
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title} className="md:col-span-1">
            <h2 className="font-poppins text-[14px] font-semibold text-brand-paper">{group.title}</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-poppins text-[13px] font-normal text-brand-paper/55 transition-colors duration-150 ease-out hover:text-brand-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Ghost wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative -mt-2 select-none overflow-hidden px-4 text-center font-poppins font-extrabold uppercase leading-[0.82] tracking-[-0.04em] text-white/[0.04]"
      >
        <span className="block whitespace-nowrap text-[clamp(2.8rem,13.5vw,13rem)]">Mundo das</span>
        <span className="block whitespace-nowrap text-[clamp(2.8rem,13.5vw,13rem)]">Importadas</span>
      </div>
    </footer>
  );
}
