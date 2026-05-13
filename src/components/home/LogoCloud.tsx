import {
  siAdidas,
  siNewbalance,
  siNike,
  siPuma,
  siReebok,
  siUnderarmour
} from "simple-icons";

type Brand = {
  name: string;
  path?: string;
  viewBox?: string;
  Custom?: React.FC;
};

const UmbroMark: React.FC = () => (
  <svg viewBox="0 0 72 28" className="h-7 w-auto" fill="currentColor" aria-hidden="true">
    <path d="M6 14 L14 4 L22 14 L14 24 Z" />
    <path d="M14 14 L22 4 L30 14 L22 24 Z" fillOpacity="0.55" />
    <text x="36" y="18" fontFamily="Bricolage Grotesque, system-ui" fontSize="12" fontWeight="700" letterSpacing="-0.3">
      umbro
    </text>
  </svg>
);

const brands: Brand[] = [
  { name: "Nike", path: siNike.path },
  { name: "Adidas", path: siAdidas.path },
  { name: "Puma", path: siPuma.path },
  { name: "New Balance", path: siNewbalance.path },
  { name: "Under Armour", path: siUnderarmour.path },
  { name: "Reebok", path: siReebok.path },
  { name: "Umbro", Custom: UmbroMark }
];

function BrandBadge({ brand }: { brand: Brand }) {
  if (brand.Custom) {
    const Cmp = brand.Custom;
    return (
      <span
        title={brand.name}
        className="inline-flex shrink-0 items-center text-brand-ink/45 transition-colors duration-200 ease-out hover:text-brand-ink"
      >
        <Cmp />
      </span>
    );
  }
  return (
    <span
      title={brand.name}
      className="inline-flex shrink-0 items-center text-brand-ink/45 transition-colors duration-200 ease-out hover:text-brand-ink"
    >
      <svg viewBox={brand.viewBox ?? "0 0 24 24"} className="h-8 w-auto" fill="currentColor" aria-label={brand.name}>
        <path d={brand.path} />
      </svg>
    </span>
  );
}

function BrandRow({ direction }: { direction: "forward" | "reverse" }) {
  const list = direction === "forward" ? brands : brands.slice().reverse();
  const doubled = [...list, ...list];
  return (
    <div
      className={`${direction === "forward" ? "logo-row" : "logo-row-reverse"} flex w-max items-center gap-16 py-4`}
    >
      {doubled.map((brand, index) => (
        <BrandBadge key={`${direction}-${brand.name}-${index}`} brand={brand} />
      ))}
    </div>
  );
}

export function LogoCloud() {
  return (
    <section className="bg-white">
      <div className="container-wide py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.65fr_1.35fr] md:items-center md:gap-14">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-brand-ink/55">Marcas que importamos</p>
            <h2 className="font-poppins balance mt-3 text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] text-brand-ink">
              Trabalhamos com quem joga no campo.
            </h2>
            <p className="pretty mt-4 max-w-[42ch] text-[14px] font-medium leading-7 text-brand-ink/60">
              Cada lote chega com etiqueta verificada e modelagem real, das principais fabricantes esportivas do mundo.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
            <BrandRow direction="forward" />
            <BrandRow direction="reverse" />
          </div>
        </div>
      </div>
    </section>
  );
}
