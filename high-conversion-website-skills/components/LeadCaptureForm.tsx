"use client";

export type LeadCaptureFormProps = {
  title?: string;
  description?: string;
  onSubmit?: (data: { name: string; email: string; company: string }) => void;
};

export function LeadCaptureForm({ title = "Receba a auditoria de conversão", description = "Informe seus dados e enviaremos prioridades acionáveis para o seu site.", onSubmit }: LeadCaptureFormProps) {
  return (
    <form
      id="lead"
      className="mx-auto max-w-xl rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        onSubmit?.({ name: String(form.get("name") || ""), email: String(form.get("email") || ""), company: String(form.get("company") || "") });
      }}
    >
      <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-5 grid gap-3">
        <label className="text-sm font-semibold text-slate-700">Nome<input name="name" required autoComplete="name" className="mt-1 h-12 w-full rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-4 focus:ring-emerald-100" /></label>
        <label className="text-sm font-semibold text-slate-700">E-mail profissional<input name="email" required type="email" autoComplete="email" className="mt-1 h-12 w-full rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-4 focus:ring-emerald-100" /></label>
        <label className="text-sm font-semibold text-slate-700">Empresa<input name="company" autoComplete="organization" className="mt-1 h-12 w-full rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-4 focus:ring-emerald-100" /></label>
      </div>
      {/* Campos mínimos melhoram envio; qualificação pode continuar após o lead. */}
      <button className="mt-5 min-h-12 w-full rounded-md bg-emerald-600 px-4 font-bold text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200" type="submit">
        Quero receber a auditoria
      </button>
      <p className="mt-3 text-xs leading-5 text-slate-500">Sem spam. Usaremos seus dados apenas para responder esta solicitação.</p>
    </form>
  );
}

export function LeadCaptureFormExample() {
  return <LeadCaptureForm onSubmit={(data) => console.log("generate_lead", data)} />;
}
