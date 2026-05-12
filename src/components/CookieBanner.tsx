"use client";

import { useEffect, useState } from "react";

const key = "central-da-tailandia-cookie-ok";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setVisible(window.localStorage.getItem(key) !== "1");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[80] w-[min(460px,calc(100%-32px))] rounded-lg bg-brand-ink p-4 text-white shadow-soft ring-1 ring-white/10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold leading-5">
          Usamos cookies para lembrar preferências e agilizar sua experiência de compra.
        </p>
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem(key, "1");
            setVisible(false);
          }}
          className="min-h-11 rounded-md bg-brand-yellow px-5 text-sm font-extrabold text-brand-ink transition hover:bg-white"
        >
          Entendi
        </button>
      </div>
    </div>
  );
}
