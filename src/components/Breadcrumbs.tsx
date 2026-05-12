import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1 text-sm text-slate-600">
      <Link className="font-semibold text-brand-blue hover:underline" href="/">
        Inicio
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1">
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          {item.href ? (
            <Link className="font-semibold text-brand-blue hover:underline" href={item.href}>
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-slate-700">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
