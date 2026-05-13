"use client";

import { X } from "lucide-react";

export function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[95] grid place-items-center bg-slate-950/55 px-4">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        className="w-full max-w-md rounded-lg bg-white p-5 shadow-soft"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">Minha conta</p>
            <h2 id="login-title" className="text-2xl font-extrabold text-brand-ink">
              Que bom ver você de volta
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar login"
            className="grid h-11 w-11 place-items-center rounded-md bg-slate-100 text-slate-700"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <form className="mt-5 space-y-3">
          <label className="block text-sm font-bold text-slate-700">
            E-mail
            <input
              type="email"
              className="mt-1 h-12 w-full rounded-md border border-slate-200 px-3 outline-none transition focus:border-brand-blue"
              placeholder="voce@email.com"
            />
          </label>
          <label className="block text-sm font-bold text-slate-700">
            Senha
            <input
              type="password"
              className="mt-1 h-12 w-full rounded-md border border-slate-200 px-3 outline-none transition focus:border-brand-blue"
              placeholder="••••••••"
            />
          </label>
          <button
            type="button"
            className="h-12 w-full rounded-md bg-brand-ink px-4 font-extrabold text-brand-paper transition hover:bg-brand-blue"
          >
            Iniciar sessão
          </button>
          <div className="grid grid-cols-2 gap-2 text-center text-sm font-bold">
            <button type="button" className="rounded-md border border-slate-200 px-3 py-3 text-brand-blue">
              Criar conta
            </button>
            <button type="button" className="rounded-md border border-slate-200 px-3 py-3 text-brand-blue">
              Recuperar senha
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
