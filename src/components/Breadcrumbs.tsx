import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-poppins mb-6 flex flex-wrap items-center gap-1.5 text-[12px] tracking-[0.02em] text-brand-ink/55"
    >
      <Link
        href="/"
        className="font-medium text-brand-ink/60 underline decoration-brand-ink/20 decoration-1 underline-offset-[5px] transition-colors duration-150 ease-out hover:text-brand-ink hover:decoration-brand-ink/60"
      >
        Início
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-brand-ink/30" aria-hidden="true" strokeWidth={1.5} />
          {item.href ? (
            <Link
              href={item.href}
              className="font-medium text-brand-ink/60 transition-colors duration-150 ease-out hover:text-brand-ink"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-brand-ink">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
