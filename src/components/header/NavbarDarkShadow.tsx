"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  Flag,
  Globe2,
  Headset,
  Menu,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Trophy,
  UserRound,
  X
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { storeName } from "@/lib/catalog";
import { useCartStore } from "@/store/cart-store";
import { LoginModal } from "./LoginModal";

type LinkItem = {
  label: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type FeatureCard = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

type DropdownConfig = {
  label: string;
  href: string;
  columns: [LinkItem[], LinkItem[]];
  columnHeadings: [string, string];
  feature?: FeatureCard;
};

type PlainLink = { label: string; href: string };

const dropdowns: DropdownConfig[] = [
  {
    label: "Brasileirão",
    href: "/categoria/brasileirao",
    columnHeadings: ["Sudeste", "Brasil"],
    columns: [
      [
        { label: "Flamengo", description: "Camisas I, II e III 2026", href: "/busca?q=Flamengo", icon: Trophy },
        { label: "Palmeiras", description: "Linha torcedor 2026", href: "/busca?q=Palmeiras", icon: Trophy },
        { label: "Corinthians", description: "Modelos do ano em estoque", href: "/busca?q=Corinthians", icon: Trophy },
        { label: "São Paulo", description: "Branca, listrada e alternativa", href: "/busca?q=S%C3%A3o%20Paulo", icon: Trophy },
        { label: "Santos", description: "Linha torcedor importada", href: "/busca?q=Santos", icon: Trophy }
      ],
      [
        { label: "Atlético Mineiro", description: "Galo, listrado e amarela 2026", href: "/busca?q=Atl%C3%A9tico%20Mineiro", icon: Trophy },
        { label: "Grêmio", description: "Tricolor 2026 em pronta entrega", href: "/busca?q=Gr%C3%AAmio", icon: Trophy },
        { label: "Internacional", description: "Vermelha, branca e edição", href: "/busca?q=Internacional", icon: Trophy },
        { label: "Cruzeiro", description: "Estrela, II e III 2026", href: "/busca?q=Cruzeiro", icon: Trophy },
        { label: "Vasco da Gama", description: "Cruz de malta importada", href: "/busca?q=Vasco", icon: Trophy }
      ]
    ],
    feature: {
      title: "Brasileirão 2026",
      description: "Catálogo dos clubes brasileiros, com pronta entrega.",
      href: "/categoria/brasileirao",
      badge: "Ver tudo"
    }
  },
  {
    label: "Europa",
    href: "/categoria/europa",
    columnHeadings: ["Inglaterra · Espanha", "Itália · Outras ligas"],
    columns: [
      [
        { label: "Arsenal", description: "Vermelha e alternativa 2026", href: "/busca?q=Arsenal", icon: Globe2 },
        { label: "Manchester City", description: "Azul celeste 2026", href: "/busca?q=Manchester%20City", icon: Globe2 },
        { label: "Liverpool", description: "Vermelha clássica 2026", href: "/busca?q=Liverpool", icon: Globe2 },
        { label: "Real Madrid", description: "Branca e edição limitada", href: "/busca?q=Real%20Madrid", icon: Globe2 },
        { label: "Barcelona", description: "Blaugrana 2026 em estoque", href: "/busca?q=Barcelona", icon: Globe2 }
      ],
      [
        { label: "Inter de Milão", description: "Nerazzurra e branca 2026", href: "/busca?q=Inter%20de%20Mil%C3%A3o", icon: Globe2 },
        { label: "Milan", description: "Rossonera 2026 importada", href: "/busca?q=Milan", icon: Globe2 },
        { label: "Juventus", description: "Bianconera, II e III", href: "/busca?q=Juventus", icon: Globe2 },
        { label: "PSG", description: "Principal e alternativa 2026", href: "/busca?q=Paris", icon: Globe2 },
        { label: "Bayern", description: "Bávara 2026 em estoque", href: "/busca?q=Bayern", icon: Globe2 }
      ]
    ],
    feature: {
      title: "Premier · La Liga · Serie A",
      description: "Camisas de clubes europeus importadas com modelagem fiel.",
      href: "/categoria/europa",
      badge: "Ver tudo"
    }
  },
  {
    label: "Seleções",
    href: "/categoria/selecoes",
    columnHeadings: ["Américas · Europa", "Ásia · África"],
    columns: [
      [
        { label: "Brasil", description: "Amarela e azul 2026", href: "/busca?q=Brasil", icon: Flag },
        { label: "Argentina", description: "Albiceleste 2026", href: "/busca?q=Argentina", icon: Flag },
        { label: "Portugal", description: "Vermelha e branca 2026", href: "/busca?q=Portugal", icon: Flag },
        { label: "França", description: "Bleus 2026", href: "/busca?q=Fran%C3%A7a", icon: Flag },
        { label: "Espanha", description: "La Roja 2026", href: "/busca?q=Espanha", icon: Flag }
      ],
      [
        { label: "Japão", description: "Samurai 2026 em estoque", href: "/busca?q=Jap%C3%A3o", icon: Flag },
        { label: "Coreia do Sul", description: "Vermelha 2026", href: "/busca?q=Coreia", icon: Flag },
        { label: "Marrocos", description: "Atlas 2026", href: "/busca?q=Marrocos", icon: Flag },
        { label: "Nigéria", description: "Super Eagles 2026", href: "/busca?q=Nig%C3%A9ria", icon: Flag },
        { label: "Senegal", description: "Leões 2026", href: "/busca?q=Senegal", icon: Flag }
      ]
    ],
    feature: {
      title: "Edição Copa 2026",
      description: "Linhas oficiais de seleções, com pronta entrega para o Mundial.",
      href: "/categoria/selecoes",
      badge: "Edição limitada"
    }
  },
  {
    label: "Resto do Mundo",
    href: "/categoria/resto-do-mundo",
    columnHeadings: ["MLS · Libertadores", "Arábias · Ásia"],
    columns: [
      [
        { label: "Inter Miami", description: "Rosa 2026 em estoque", href: "/busca?q=Inter%20Miami", icon: Globe2 },
        { label: "LA Galaxy", description: "Branca e azul 2026", href: "/busca?q=LA%20Galaxy", icon: Globe2 },
        { label: "Boca Juniors", description: "Azul e amarela 2026", href: "/busca?q=Boca", icon: Globe2 },
        { label: "River Plate", description: "Branca com vermelho 2026", href: "/busca?q=River%20Plate", icon: Globe2 }
      ],
      [
        { label: "Al-Hilal", description: "Azul 2026 importada", href: "/busca?q=Al-Hilal", icon: Globe2 },
        { label: "Al-Nassr", description: "Amarela 2026", href: "/busca?q=Al-Nassr", icon: Globe2 },
        { label: "Al-Ittihad", description: "Amarela e preta 2026", href: "/busca?q=Al-Ittihad", icon: Globe2 }
      ]
    ],
    feature: {
      title: "MLS · Saudi League",
      description: "Camisas das ligas em alta no mundo todo.",
      href: "/categoria/resto-do-mundo",
      badge: "Importadas"
    }
  },
  {
    label: "Femininas",
    href: "/categoria/femininas",
    columnHeadings: ["Brasileirão · Seleções", "Europa · Outras"],
    columns: [
      [
        { label: "Brasil — feminina", description: "Amarela e azul modelagem feminina", href: "/busca?q=Brasil%20feminina", icon: Flag },
        { label: "Flamengo — feminina", description: "Rubro-negra cropped feminina", href: "/busca?q=Flamengo%20feminina", icon: Trophy },
        { label: "Palmeiras — feminina", description: "Verde feminina 2026", href: "/busca?q=Palmeiras%20feminina", icon: Trophy },
        { label: "Corinthians — feminina", description: "Branca e listrada feminina", href: "/busca?q=Corinthians%20feminina", icon: Trophy }
      ],
      [
        { label: "Real Madrid — feminina", description: "Branca feminina importada", href: "/busca?q=Real%20Madrid%20feminina", icon: Globe2 },
        { label: "Barcelona — feminina", description: "Blaugrana feminina 2026", href: "/busca?q=Barcelona%20feminina", icon: Globe2 },
        { label: "Argentina — feminina", description: "Albiceleste feminina 2026", href: "/busca?q=Argentina%20feminina", icon: Flag }
      ]
    ],
    feature: {
      title: "Modelagem feminina",
      description: "Recortes femininos de clubes e seleções, com caimento certo.",
      href: "/categoria/femininas",
      badge: "Ver tudo"
    }
  }
];

const leftLink: PlainLink = { label: "Pronta Entrega", href: "/categoria/pronta-entrega" };
const rightLink: PlainLink = { label: "Kit Infantil", href: "/categoria/infantil" };

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
  mass: 0.8
};

export function NavbarDarkShadow() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [query, setQuery] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openCart = useCartStore((state) => state.openCart);
  const cartCount = useCartStore((state) => state.count());

  const openDropdown = useCallback((label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  }, []);

  const closeDropdown = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function onSearch(event: React.FormEvent) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/busca?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <header className="sticky top-0 z-50 bg-brand-ink text-brand-paper shadow-[0_18px_44px_-22px_rgba(0,0,0,0.6)]">
      {/* Row 1: logo · search · quick actions */}
      <div className="container-page flex items-center gap-4 py-4 lg:gap-8 lg:py-5">
        <button
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-paper/80 transition-colors duration-150 ease-out hover:bg-brand-paper/[0.08] hover:text-brand-paper lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link href="/" aria-label={`${storeName} — início`} className="flex shrink-0 items-center">
          <img
            src="/assets/logo-mundo.png"
            alt={storeName}
            className="-my-6 h-28 w-auto lg:-my-8 lg:h-36"
            style={{ filter: "invert(1)" }}
            loading="eager"
          />
        </Link>

        <form
          role="search"
          onSubmit={onSearch}
          className="hidden flex-1 items-center sm:flex"
        >
          <label className="sr-only" htmlFor="primary-search">
            Buscar produtos
          </label>
          <div className="relative w-full">
            <input
              id="primary-search"
              type="search"
              placeholder="O que você está buscando?"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="font-poppins h-12 w-full rounded-full border border-brand-paper/15 bg-brand-paper px-6 pr-14 text-[14px] font-normal text-brand-ink placeholder:text-brand-ink/40 focus:border-brand-ink focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="absolute right-1.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-brand-ink text-brand-paper transition-colors duration-150 ease-out hover:bg-neutral-800"
            >
              <Search className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </form>

        <div className="ml-auto flex items-center gap-2 lg:gap-6">
          <QuickAction
            Icon={Headset}
            label="Atendimento"
            ariaLabel="Falar com o atendimento"
            onClick={() => {
              router.push("/categoria/pronta-entrega");
            }}
          />
          <QuickAction
            Icon={UserRound}
            label="Minha conta"
            ariaLabel="Abrir minha conta"
            onClick={() => setLoginOpen(true)}
          />
          <QuickAction
            Icon={ShoppingBag}
            label="Meu carrinho"
            ariaLabel={`Abrir carrinho com ${cartCount} item(s)`}
            onClick={openCart}
            badge={cartCount}
          />
        </div>
      </div>

      {/* Mobile search row */}
      <div className="container-page pb-4 sm:hidden">
        <form role="search" onSubmit={onSearch}>
          <label className="sr-only" htmlFor="primary-search-mobile">
            Buscar produtos
          </label>
          <div className="relative">
            <input
              id="primary-search-mobile"
              type="search"
              placeholder="O que você está buscando?"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="font-poppins h-12 w-full rounded-full bg-brand-paper px-5 pr-14 text-[14px] text-brand-ink placeholder:text-brand-ink/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="absolute right-1.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-brand-ink text-brand-paper"
            >
              <Search className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </form>
      </div>

      {/* Row 2: nav */}
      <nav
        aria-label="Navegação por categorias"
        className="relative hidden border-t border-brand-paper/10 lg:block"
        onMouseLeave={closeDropdown}
      >
        <div className="container-page flex items-center justify-center gap-1">
          <PlainNavLink href={leftLink.href} label={leftLink.label} onHover={closeDropdown} />

          {dropdowns.map((dd) => (
            <DropdownTrigger
              key={dd.label}
              config={dd}
              isActive={activeDropdown === dd.label}
              onOpen={() => openDropdown(dd.label)}
              onClose={closeDropdown}
            />
          ))}

          <PlainNavLink href={rightLink.href} label={rightLink.label} onHover={closeDropdown} />
        </div>

        <AnimatePresence>
          {activeDropdown ? (
            <motion.div
              key="dropdown-shell"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
              className="absolute left-1/2 top-full z-50 -translate-x-1/2 px-4 pt-3"
              onMouseEnter={() => openDropdown(activeDropdown)}
            >
              <motion.div
                layout
                transition={springTransition}
                className="overflow-hidden rounded-2xl border border-brand-paper/10 bg-brand-inkSoft/95 p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {dropdowns
                    .filter((dd) => dd.label === activeDropdown)
                    .map((dd) => (
                      <motion.div
                        key={dd.label}
                        initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <DropdownContent config={dd} />
                      </motion.div>
                    ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <MobileNav
            onClose={() => setMobileOpen(false)}
            onAccount={() => setLoginOpen(true)}
          />
        ) : null}
      </AnimatePresence>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
}

function QuickAction({
  Icon,
  label,
  ariaLabel,
  onClick,
  badge
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  ariaLabel: string;
  onClick?: () => void;
  badge?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="group/qa relative flex flex-col items-center justify-center gap-1 rounded-md px-2 py-1 text-brand-paper/85 transition-colors duration-150 ease-out hover:text-brand-paper"
    >
      <span className="relative">
        <Icon className="h-6 w-6" strokeWidth={1.6} />
        {typeof badge === "number" ? (
          <span className="tabular absolute -right-1.5 -top-1.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-brand-yellow px-1 text-[10px] font-extrabold text-brand-ink">
            {badge}
          </span>
        ) : null}
      </span>
      <span className="font-poppins hidden text-[11px] font-medium tracking-wide sm:block">{label}</span>
    </button>
  );
}

function PlainNavLink({ href, label, onHover }: { href: string; label: string; onHover: () => void }) {
  return (
    <Link
      href={href}
      onMouseEnter={onHover}
      className="font-poppins rounded-md px-4 py-3.5 text-[14px] font-medium tracking-[0.01em] text-brand-paper/85 transition-colors duration-150 ease-out hover:bg-brand-paper/[0.06] hover:text-brand-paper"
    >
      {label}
    </Link>
  );
}

function DropdownTrigger({
  config,
  isActive,
  onOpen,
  onClose
}: {
  config: DropdownConfig;
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <Link
      href={config.href}
      onMouseEnter={onOpen}
      onClick={() => (isActive ? onClose() : null)}
      className="font-poppins inline-flex items-center gap-1.5 rounded-md px-4 py-3.5 text-[14px] font-medium tracking-[0.01em] text-brand-paper/85 transition-colors duration-150 ease-out hover:bg-brand-paper/[0.06] hover:text-brand-paper"
      aria-expanded={isActive}
    >
      {config.label}
      <ChevronDown
        className={`h-3.5 w-3.5 text-brand-paper/55 transition-transform duration-200 ${
          isActive ? "rotate-180" : ""
        }`}
        strokeWidth={2}
      />
    </Link>
  );
}

function DropdownContent({ config }: { config: DropdownConfig }) {
  const [col1, col2] = config.columns;
  const [heading1, heading2] = config.columnHeadings;
  const hasFeature = !!config.feature;

  return (
    <div
      className={
        hasFeature
          ? "grid w-[52rem] grid-cols-[1fr_1fr_16rem] gap-0"
          : "grid w-[34rem] grid-cols-2 gap-0"
      }
    >
      <div className="p-2">
        <p className="font-poppins px-2 pt-2 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-paper/45">
          {heading1}
        </p>
        <ul role="list" className="grid gap-0.5">
          {col1.map((item) => (
            <li key={item.label}>
              <LinkRow item={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className="border-l border-brand-paper/10 p-2">
        <p className="font-poppins px-2 pt-2 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-paper/45">
          {heading2}
        </p>
        <ul role="list" className="grid gap-0.5">
          {col2.map((item) => (
            <li key={item.label}>
              <LinkRow item={item} />
            </li>
          ))}
        </ul>
      </div>

      {config.feature ? (
        <Link
          href={config.feature.href}
          className="group relative flex flex-col gap-3 overflow-hidden rounded-lg border-l border-brand-paper/10 bg-gradient-to-br from-brand-yellow/[0.08] to-transparent p-5"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-yellow/15 blur-3xl transition-opacity duration-300 group-hover:bg-brand-yellow/25" aria-hidden="true" />
          <span className="font-poppins relative inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-yellow">
            <Sparkles className="h-3 w-3" aria-hidden="true" strokeWidth={1.8} />
            {config.feature.badge}
          </span>
          <p className="font-poppins relative text-[15px] font-extrabold leading-tight tracking-tight text-brand-paper">
            {config.feature.title}
          </p>
          <p className="font-poppins relative text-[12px] font-normal leading-5 text-brand-paper/65">
            {config.feature.description}
          </p>
          <span className="font-poppins relative mt-auto inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-yellow transition-transform duration-200 ease-out group-hover:translate-x-0.5">
            Conferir
            <ChevronRight className="h-3 w-3" aria-hidden="true" strokeWidth={2} />
          </span>
        </Link>
      ) : null}
    </div>
  );
}

function LinkRow({ item }: { item: LinkItem }) {
  return (
    <Link
      href={item.href}
      className="group flex items-start gap-3 rounded-md px-2 py-2 transition-colors duration-150 ease-out hover:bg-brand-paper/[0.06]"
    >
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-brand-paper/10 bg-brand-paper/[0.04] transition-colors duration-150 ease-out group-hover:border-brand-yellow/40 group-hover:bg-brand-yellow/15">
        <item.icon className="h-4 w-4 text-brand-paper/70 transition-colors duration-150 ease-out group-hover:text-brand-yellow" />
      </span>
      <span className="min-w-0">
        <p className="font-poppins text-[13px] font-semibold leading-snug text-brand-paper">{item.label}</p>
        <p className="font-poppins mt-0.5 text-[11px] font-normal text-brand-paper/55">{item.description}</p>
      </span>
    </Link>
  );
}

function MobileNav({ onClose, onAccount }: { onClose: () => void; onAccount: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden border-t border-brand-paper/10 lg:hidden"
    >
      <div className="container-page py-4">
        <PlainMobileLink href={leftLink.href} label={leftLink.label} onClose={onClose} />
        {dropdowns.map((dd) => (
          <MobileDropdown key={dd.label} config={dd} onClose={onClose} />
        ))}
        <PlainMobileLink href={rightLink.href} label={rightLink.label} onClose={onClose} />
        <div className="mt-4 flex items-center justify-between gap-2 border-t border-brand-paper/10 pt-4">
          <button
            type="button"
            onClick={() => {
              onAccount();
              onClose();
            }}
            className="font-poppins rounded-md px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-paper/75 hover:text-brand-paper"
          >
            Minha conta
          </button>
          <Link
            href="/categoria/promocoes"
            onClick={onClose}
            className="font-poppins inline-flex items-center gap-1.5 rounded-md bg-brand-yellow px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-ink"
          >
            Promoções
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function PlainMobileLink({
  href,
  label,
  onClose
}: {
  href: string;
  label: string;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="font-poppins flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-medium text-brand-paper/85 transition-colors duration-150 ease-out hover:bg-brand-paper/[0.06] hover:text-brand-paper"
    >
      <span>{label}</span>
      <ChevronRight className="h-4 w-4 text-brand-paper/45" aria-hidden="true" strokeWidth={1.8} />
    </Link>
  );
}

function MobileDropdown({ config, onClose }: { config: DropdownConfig; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const allItems = [...config.columns[0], ...config.columns[1]];

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="font-poppins flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-medium text-brand-paper/85 transition-colors duration-150 ease-out hover:bg-brand-paper/[0.06] hover:text-brand-paper"
      >
        <span>{config.label}</span>
        <ChevronDown
          className={`h-4 w-4 text-brand-paper/45 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
          strokeWidth={1.8}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="py-1 pl-3">
              {allItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="font-poppins flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-brand-paper/[0.06]"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-brand-paper/50" />
                  <span className="min-w-0">
                    <span className="block text-[13px] font-medium text-brand-paper/90">{item.label}</span>
                    <span className="block text-[11px] text-brand-paper/55">{item.description}</span>
                  </span>
                </Link>
              ))}
              {config.feature ? (
                <Link
                  href={config.feature.href}
                  onClick={onClose}
                  className="mt-1 flex items-start gap-3 rounded-lg border border-brand-yellow/30 bg-brand-yellow/10 px-3 py-2.5"
                >
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" strokeWidth={1.8} />
                  <span className="min-w-0">
                    <span className="font-poppins block text-[13px] font-semibold text-brand-paper">
                      {config.feature.title}
                    </span>
                    <span className="font-poppins block text-[11px] text-brand-paper/65">
                      {config.feature.description}
                    </span>
                  </span>
                </Link>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

NavbarDarkShadow.displayName = "NavbarDarkShadow";
