"use client";

import { useEffect, useState } from "react";

const key = "mundo-das-importadas-cookie-ok";

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
    <div className="fixed bottom-3 right-3 z-[80] w-[min(460px,calc(100%-24px))] rounded-xl bg-brand-ink p-4 text-brand-paper shadow-[0_18px_44px_-12px_rgba(0,0,0,0.6)] ring-1 ring-brand-paper/10 sm:bottom-4 sm:right-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-poppins text-[13px] font-medium leading-[1.45] text-brand-paper/80 sm:text-[13.5px]">
          Usamos cookies para lembrar preferências e agilizar sua experiência de compra.
        </p>
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem(key, "1");
            setVisible(false);
          }}
          className="font-poppins min-h-11 shrink-0 rounded-full bg-brand-yellow px-5 text-[12px] font-extrabold uppercase tracking-[0.14em] text-brand-ink transition-colors duration-150 ease-out hover:bg-brand-paper"
        >
          Entendi
        </button>
      </div>
    </div>
  );
}
