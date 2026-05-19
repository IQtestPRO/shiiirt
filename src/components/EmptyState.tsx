import { SearchX } from "lucide-react";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-brand-ink/15 bg-brand-paper/60 p-6 text-center sm:p-8">
      <SearchX className="mx-auto h-9 w-9 text-brand-ink/55 sm:h-10 sm:w-10" strokeWidth={1.6} aria-hidden="true" />
      <h2 className="font-poppins mt-3 text-[17px] font-extrabold text-brand-ink sm:text-xl">{title}</h2>
      <p className="font-poppins mx-auto mt-2 max-w-md text-[13.5px] leading-6 text-brand-ink/60 sm:text-sm">{description}</p>
    </div>
  );
}
