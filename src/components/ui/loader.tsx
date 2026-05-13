type LoaderThreeProps = {
  size?: number;
  className?: string;
};

/**
 * LoaderThree — inspired by Aceternity's three-arc orbit loader.
 * Two counter-rotating arcs + a soft pulsing core glow.
 */
export function LoaderThree({ size = 56, className = "" }: LoaderThreeProps) {
  const stroke = Math.max(2, Math.round(size * 0.06));
  const halo = size + Math.max(12, Math.round(size * 0.28));

  return (
    <span
      className={`relative inline-grid place-items-center ${className}`}
      style={{ width: halo, height: halo }}
      aria-hidden="true"
    >
      <span
        className="loader-three-pulse pointer-events-none absolute inset-0 rounded-full"
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 64 64"
        className="loader-three-spin absolute inset-2 text-brand-yellow"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeOpacity="0.12" strokeWidth={stroke} />
        <path
          d="M32 4 a28 28 0 0 1 24.25 14"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
      </svg>
      <svg
        viewBox="0 0 64 64"
        className="loader-three-spin-reverse absolute inset-3 text-brand-paper/45"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M32 4 a28 28 0 0 1 0 56"
          stroke="currentColor"
          strokeWidth={Math.max(1.5, stroke - 0.5)}
          strokeLinecap="round"
          strokeDasharray="3 8"
        />
      </svg>
      <span className="relative grid place-items-center" style={{ width: size, height: size }}>
        {/* slot — recipient renders the logo here */}
      </span>
    </span>
  );
}

/**
 * LoaderThreeRing — wraps an arbitrary child (the logo) with the orbiting arcs.
 * Use this for "loader around the logo" presentations.
 */
export function LoaderThreeRing({
  children,
  size = 48,
  className = ""
}: {
  children: React.ReactNode;
  size?: number;
  className?: string;
}) {
  const stroke = Math.max(1.8, Math.round(size * 0.05));
  const halo = size + Math.max(8, Math.round(size * 0.22));

  return (
    <span
      className={`relative inline-grid shrink-0 place-items-center ${className}`}
      style={{ width: halo, height: halo }}
    >
      <span
        className="loader-three-pulse pointer-events-none absolute inset-0 rounded-full"
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 64 64"
        className="loader-three-spin pointer-events-none absolute inset-0 text-brand-yellow"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeOpacity="0.12" strokeWidth={stroke} />
        <path
          d="M32 4 a28 28 0 0 1 24.5 14.2"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
      </svg>
      <svg
        viewBox="0 0 64 64"
        className="loader-three-spin-reverse pointer-events-none absolute inset-1.5 text-brand-paper/50"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M32 6 a26 26 0 0 1 0 52"
          stroke="currentColor"
          strokeWidth={Math.max(1.4, stroke - 0.4)}
          strokeLinecap="round"
          strokeDasharray="2 7"
        />
      </svg>
      <span className="relative grid place-items-center" style={{ width: size, height: size }}>
        {children}
      </span>
    </span>
  );
}
