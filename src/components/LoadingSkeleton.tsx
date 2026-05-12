export function LoadingSkeleton() {
  return (
    <div className="animate-pulse rounded-md bg-white p-3 shadow-card">
      <div className="aspect-[4/5] rounded-md bg-slate-200" />
      <div className="mt-4 h-4 w-4/5 rounded bg-slate-200" />
      <div className="mt-2 h-4 w-1/2 rounded bg-slate-200" />
      <div className="mt-4 h-10 rounded bg-slate-200" />
    </div>
  );
}
