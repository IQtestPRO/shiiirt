import { NextResponse } from "next/server";
import { getProductArt } from "@/lib/products";

export const dynamic = "force-static";

export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;
  const product = getProductArt(slug);
  const [primary, secondary, accent] = product.colors;
  const isKit = product.gender === "infantil" || product.name.toLowerCase().includes("kit");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1100" role="img" aria-labelledby="title desc">
    <title>${escapeXml(product.name)}</title>
    <desc>Arte original de camisa esportiva sem marcas protegidas.</desc>
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#e9eef6"/>
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="32" stdDeviation="30" flood-color="#10223F" flood-opacity="0.20"/>
      </filter>
      <clipPath id="bodyClip">
        <path d="M307 210 C345 185 383 172 450 172 C517 172 555 185 593 210 L707 284 C722 294 728 314 721 331 L672 455 C665 472 647 480 631 471 L595 451 L595 850 C595 878 572 901 544 901 L356 901 C328 901 305 878 305 850 L305 451 L269 471 C253 480 235 472 228 455 L179 331 C172 314 178 294 193 284 Z"/>
      </clipPath>
    </defs>
    <rect width="900" height="1100" fill="url(#bg)"/>
    <rect x="70" y="70" width="760" height="920" rx="18" fill="#f7f7f3"/>
    <path d="M90 915 C260 960 640 960 810 915 L810 990 L90 990 Z" fill="#eceff4"/>
    <g filter="url(#shadow)">
      <path d="M307 210 C345 185 383 172 450 172 C517 172 555 185 593 210 L707 284 C722 294 728 314 721 331 L672 455 C665 472 647 480 631 471 L595 451 L595 850 C595 878 572 901 544 901 L356 901 C328 901 305 878 305 850 L305 451 L269 471 C253 480 235 472 228 455 L179 331 C172 314 178 294 193 284 Z" fill="${primary}"/>
      <g clip-path="url(#bodyClip)">
        <rect x="303" y="170" width="90" height="735" fill="${secondary}" opacity=".92"/>
        <rect x="507" y="170" width="90" height="735" fill="${secondary}" opacity=".92"/>
        <path d="M190 305 C300 370 598 370 710 305 L710 372 C573 425 327 425 190 372 Z" fill="${accent}" opacity=".72"/>
        <path d="M228 806 C335 838 566 838 672 806 L672 900 L228 900 Z" fill="#ffffff" opacity=".13"/>
        <path d="M450 188 L508 230 C489 260 466 273 450 273 C434 273 411 260 392 230 Z" fill="#ffffff" opacity=".88"/>
        <path d="M390 232 C426 255 474 255 510 232" fill="none" stroke="${accent}" stroke-width="13" stroke-linecap="round"/>
        <g opacity=".12">
          <path d="M330 250 L620 760" stroke="#fff" stroke-width="18"/>
          <path d="M265 280 L555 790" stroke="#fff" stroke-width="9"/>
          <path d="M430 210 L720 720" stroke="#fff" stroke-width="9"/>
          <path d="M250 600 C360 640 540 640 650 600" stroke="#fff" stroke-width="8" fill="none"/>
        </g>
      </g>
      <path d="M309 451 L269 471 C253 480 235 472 228 455 L179 331 C172 314 178 294 193 284 L307 210" fill="none" stroke="rgba(255,255,255,.42)" stroke-width="18"/>
      <path d="M591 451 L631 471 C647 480 665 472 672 455 L721 331 C728 314 722 294 707 284 L593 210" fill="none" stroke="rgba(255,255,255,.42)" stroke-width="18"/>
      <path d="M496 402 L550 416 L540 496 C526 506 511 511 496 514 C481 511 466 506 452 496 L442 416 Z" fill="#ffffff" opacity=".28"/>
      <path d="M496 421 L528 430 L522 480 C514 486 505 489 496 491 C487 489 478 486 470 480 L464 430 Z" fill="${accent}" opacity=".50"/>
      ${isKit ? `<rect x="340" y="928" width="220" height="92" rx="34" fill="${primary}" filter="url(#shadow)"/><rect x="392" y="928" width="116" height="92" fill="${secondary}" opacity=".86"/><path d="M340 952 C405 981 495 981 560 952" stroke="${accent}" stroke-width="12" fill="none"/>` : ""}
    </g>
  </svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });
}

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
