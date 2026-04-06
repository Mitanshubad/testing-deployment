export default function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const h = size === "large" ? 40 : 32;
  const textClass = size === "large" ? "text-2xl" : "text-xl";

  return (
    <div className="flex items-center gap-2.5">
      {/* Icon mark — abstract "O" with three vertical bars representing the double-L */}
      <svg
        width={h}
        height={h}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Outer rounded square */}
        <rect x="1" y="1" width="38" height="38" rx="10" stroke="#00FF88" strokeWidth="2" fill="#060810" />

        {/* Abstract "O" ring — offset for dynamism */}
        <circle cx="16" cy="20" r="8" stroke="#00FF88" strokeWidth="2.5" fill="none" />

        {/* Three vertical bars — the "lll" motif, staggered heights */}
        <rect x="27" y="10" width="3" height="20" rx="1.5" fill="#00CFFF" />
        <rect x="32" y="14" width="3" height="16" rx="1.5" fill="#00FF88" />
        <rect x="22" y="12" width="3" height="18" rx="1.5" fill="#00FF88" opacity="0.5" />
      </svg>

      {/* Wordmark */}
      <span className={`font-body ${textClass} font-bold tracking-wide text-foreground`}>
        Odd<span className="text-green">ll</span>y
      </span>
    </div>
  );
}
