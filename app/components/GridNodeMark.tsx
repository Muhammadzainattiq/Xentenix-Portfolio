interface GridNodeMarkProps {
  size?: number;
  variant?: "dark" | "light";
  className?: string;
}

export function GridNodeMark({ size = 40, variant = "dark", className = "" }: GridNodeMarkProps) {
  const lineColor = variant === "dark" ? "#E6F1FB" : "#042C53";
  const dotColor = variant === "dark" ? "#E6F1FB" : "#042C53";
  const ringColor = "#378ADD";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Xentenix Grid Node mark"
    >
      {/* X segments — four lines that gap at the centre node */}
      <line x1="8" y1="8" x2="20.5" y2="20.5" stroke={lineColor} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="27.5" y1="27.5" x2="40" y2="40" stroke={lineColor} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="8" x2="27.5" y2="20.5" stroke={lineColor} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20.5" y1="27.5" x2="8" y2="40" stroke={lineColor} strokeWidth="2.5" strokeLinecap="round" />

      {/* Corner nodes — rings in sky blue */}
      <circle cx="8" cy="8" r="3" stroke={ringColor} strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="8" r="3" stroke={ringColor} strokeWidth="1.5" fill="none" />
      <circle cx="8" cy="40" r="3" stroke={ringColor} strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="40" r="3" stroke={ringColor} strokeWidth="1.5" fill="none" />

      {/* Edge nodes — filled dots */}
      <circle cx="24" cy="8" r="2.5" fill={dotColor} />
      <circle cx="8" cy="24" r="2.5" fill={dotColor} />
      <circle cx="40" cy="24" r="2.5" fill={dotColor} />
      <circle cx="24" cy="40" r="2.5" fill={dotColor} />
    </svg>
  );
}
