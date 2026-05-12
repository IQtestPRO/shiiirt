import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { categories, megaMenu } from "@/lib/catalog";

export function MegaMenu() {
  return (
    <nav aria-label="Menu principal" className="hidden border-t border-white/10 bg-[#05224A] text-white lg:block">
      <div className="container-page flex items-center justify-center gap-1.5">
        {categories.slice(0, 1).map((category) => (
          <Link
            key={category.slug}
            href={`/categoria/${category.slug}`}
            className="rounded-md px-3 py-4 text-sm font-bold transition hover:bg-white/10"
          >
            {category.label}
          </Link>
        ))}

        {megaMenu.map((item) => (
          <div key={item.slug} className="group relative">
            <Link
              href={`/categoria/${item.slug}`}
            className="inline-flex items-center gap-1 rounded-md px-3 py-4 text-sm font-bold transition hover:bg-white/10"
            >
              {item.label}
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </Link>
            <div className="invisible absolute left-0 top-full z-40 w-[760px] translate-y-2 rounded-b-lg bg-white p-5 text-brand-ink opacity-0 shadow-soft ring-1 ring-slate-200 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="grid grid-cols-4 gap-5">
                {item.groups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-2 text-sm font-extrabold text-brand-blue">{group.title}</h3>
                    <div className="space-y-1">
                      <Link href={`/categoria/${item.slug}`} className="block text-xs font-bold text-brand-green hover:underline">
                        Ver tudo
                      </Link>
                      {group.links.map((link) => (
                        <Link
                          key={link}
                          href={`/busca?q=${encodeURIComponent(link)}`}
                          className="block rounded-md px-2 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-brand-blue"
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
            className="rounded-md px-3 py-4 text-sm font-bold transition hover:bg-white/10"
          >
            {category.label}
          </Link>
        ))}
        <Link
          href="/categoria/promocoes"
          className="ml-2 rounded-md bg-brand-yellow px-3 py-2 text-sm font-extrabold text-brand-ink transition hover:bg-white"
        >
          Mais vendidos
        </Link>
      </div>
    </nav>
  );
}
