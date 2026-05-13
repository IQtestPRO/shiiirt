"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { categories, megaMenu } from "@/lib/catalog";
import { SearchBar } from "./SearchBar";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] lg:hidden">
      <button className="absolute inset-0 bg-slate-950/55" aria-label="Fechar menu" onClick={onClose} />
      <aside className="absolute left-0 top-0 h-full w-[min(88vw,390px)] overflow-y-auto bg-brand-paper shadow-soft">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-brand-blue px-4 py-4 text-white">
          <span className="text-lg font-extrabold">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="grid h-11 w-11 place-items-center rounded-md bg-white/10"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="space-y-5 p-4">
          <SearchBar id="drawer-search" onNavigate={onClose} />
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categoria/${category.slug}`}
                onClick={onClose}
                className="min-h-12 rounded-md bg-white px-3 py-3 text-sm font-extrabold text-brand-ink shadow-card"
              >
                {category.label}
              </Link>
            ))}
          </div>
          <div className="space-y-4">
            {megaMenu.map((item) => (
              <details key={item.slug} className="rounded-md bg-white p-3 shadow-card">
                <summary className="cursor-pointer text-base font-extrabold text-brand-blue">{item.label}</summary>
                <div className="mt-3 grid gap-3">
                  {item.groups.map((group) => (
                    <div key={group.title}>
                      <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">{group.title}</p>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {group.links.map((link) => (
                          <Link
                            key={link}
                            href={`/busca?q=${encodeURIComponent(link)}`}
                            onClick={onClose}
                            className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700"
                          >
                            {link}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
