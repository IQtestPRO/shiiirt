import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { categories, megaMenu } from "@/lib/catalog";

export function MegaMenu() {
  return (
    <nav
      aria-label="Menu principal"
      className="hidden border-t border-brand-ink/10 bg-brand-paper text-brand-ink lg:block"
    >
      <div className="container-page flex items-center justify-center gap-0.5">
        {categories.slice(0, 1).map((category) => (
          <Link
            key={category.slug}
            href={`/categoria/${category.slug}`}
            className="rounded-full px-4 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-ink/80 transition-colors duration-200 ease-out hover:bg-brand-cream hover:text-brand-ink"
          >
            {category.label}
          </Link>
        ))}

        {megaMenu.map((item) => (
          <div key={item.slug} className="group relative">
            <Link
              href={`/categoria/${item.slug}`}
              className="inline-flex items-center gap-1 rounded-full px-4 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-ink/80 transition-colors duration-200 ease-out hover:bg-brand-cream hover:text-brand-ink"
            >
              {item.label}
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            <div className="invisible absolute left-0 top-full z-40 w-[820px] origin-top translate-y-2 scale-[0.98] rounded-2xl border border-brand-ink/10 bg-brand-mist p-7 text-brand-ink opacity-0 shadow-soft transition duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
              <div className="grid grid-cols-4 gap-6">
                {item.groups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-ink/50">{group.title}</h3>
                    <div className="mt-3 space-y-1">
                      <Link
                        href={`/categoria/${item.slug}`}
                        className="block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue hover:underline"
                      >
                        Ver tudo
                      </Link>
                      {group.links.map((link) => (
                        <Link
                          key={link}
                          href={`/busca?q=${encodeURIComponent(link)}`}
                          className="block rounded-md px-2 py-1.5 text-[13px] font-medium text-brand-ink/80 transition-colors duration-150 ease-out hover:bg-brand-cream hover:text-brand-ink"
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {categories.slice(5).map((category) => (
          <Link
            key={category.slug}
            href={`/categoria/${category.slug}`}
            className="rounded-full px-4 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-ink/80 transition-colors duration-200 ease-out hover:bg-brand-cream hover:text-brand-ink"
          >
            {category.label}
          </Link>
        ))}
        <Link
          href="/categoria/promocoes"
          className="ml-2 rounded-full bg-brand-ink px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-paper transition-colors duration-200 ease-out hover:bg-brand-blue"
        >
          Mais vendidos
        </Link>
      </div>
    </nav>
  );
}
