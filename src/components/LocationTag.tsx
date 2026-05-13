"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

type Geo = { city: string; region_code: string };

const CACHE_KEY = "mi:geo:v1";
const CACHE_MAX_AGE_MS = 24 * 60 * 60 * 1000;

function readCache(): Geo | null {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { geo: Geo; cachedAt: number };
    if (!parsed?.geo?.city || !parsed?.geo?.region_code) return null;
    if (Date.now() - parsed.cachedAt > CACHE_MAX_AGE_MS) return null;
    return parsed.geo;
  } catch {
    return null;
  }
}

function writeCache(geo: Geo) {
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify({ geo, cachedAt: Date.now() }));
  } catch {
    // ignore quota / private mode failures
  }
}

export function LocationTag({ className = "" }: { className?: string }) {
  const [geo, setGeo] = useState<Geo | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const cached = readCache();
      if (cached) {
        if (!cancelled) setGeo(cached);
        return;
      }
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) return;
        const data = (await res.json()) as { city?: string; region_code?: string };
        if (!data?.city || !data?.region_code) return;
        const next: Geo = { city: data.city, region_code: data.region_code };
        if (!cancelled) {
          setGeo(next);
          writeCache(next);
        }
      } catch {
        // silent fallback — render the generic label
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const label = geo
    ? `Ofertas para ${geo.city}, ${geo.region_code} e Região.`
    : "Ofertas para todo o Brasil.";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`} suppressHydrationWarning>
      <MapPin className="h-3.5 w-3.5 text-brand-yellow" strokeWidth={1.8} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
