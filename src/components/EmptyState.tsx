import { SearchX } from "lucide-react";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center shadow-card">
      <SearchX className="mx-auto h-10 w-10 text-brand-blue" aria-hidden="true" />
      <h2 className="mt-3 text-xl font-extrabold text-brand-ink">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
