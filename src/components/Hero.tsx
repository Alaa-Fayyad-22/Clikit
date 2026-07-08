type FlowLinesProps = {
  className?: string;
  /** Number of contour lines in the bundle */
  lines?: number;
  /** When true, lines draw themselves in on load */
  animated?: boolean;
};

/**
 * CLiKiT's signature motif — the bundle of flowing contour lines from the
 * logo. The bundle fans out at the edges and pinches in the middle, like a
 * current. Pure deterministic math (no randomness), so the server and the
 * client always render identical markup.
 */
export default function FlowLines({
  className = "",
  lines = 16,
  animated = true,
}: FlowLinesProps) {
  const paths = Array.from({ length: lines }, (_, i) => {
    const t = lines === 1 ? 0.5 : i / (lines - 1); // 0 → 1 across the bundle
    const spread = t - 0.5; // -0.5 → 0.5

    const yStart = 420 + spread * 480; // fanned open on the left
    const yMid = 400 + spread * 130 + 40 * Math.sin(3 * t); // pinched waist
    const yEnd = 430 + spread * 520 - 50 * Math.cos(2 * t); // fanned on the right
    const amp = 60 + 120 * Math.sin(Math.PI * t); // wave height

    const d = [
      `M -80 ${yStart.toFixed(1)}`,
      `C 250 ${(yStart - amp * 0.7).toFixed(1)},`,
      `470 ${(yMid + amp * 0.8).toFixed(1)},`,
      `730 ${yMid.toFixed(1)}`,
      `S 1150 ${(yEnd - amp).toFixed(1)},`,
      `1540 ${yEnd.toFixed(1)}`,
    ].join(" ");

    return {
      d,
      opacity: 0.05 + 0.11 * Math.sin(Math.PI * t), // brightest mid-bundle
      delay: i * 90,
    };
  });

  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          pathLength={1}
          stroke="white"
          strokeOpacity={p.opacity}
          strokeWidth="1.2"
          className={animated ? "wave-line" : undefined}
          style={animated ? { animationDelay: `${p.delay}ms` } : undefined}
        />
      ))}
    </svg>
  );
}