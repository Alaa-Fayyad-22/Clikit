type FlowLinesProps = {
  className?: string;
  /** Number of contour lines in the bundle */
  lines?: number;
  /** When true, lines draw themselves in on load */
  animated?: boolean;
};

/**
 * CLiKiT's signature motif — flowing contour lines.
 * The lines draw themselves in once, then drift slowly via CSS.
 */
export default function FlowLines({
  className = "",
  lines = 16,
  animated = true,
}: FlowLinesProps) {
  // Rest geometry. The motif's motion comes entirely from CSS (the one-time
  // `.wave-line` draw-in and the ambient `.waves-drift`); it deliberately does
  // not react to scroll, so this stays a static server-rendered SVG.
  const scroll = 0;

  const paths = Array.from({ length: lines }, (_, i) => {
    const t = lines === 1 ? 0.5 : i / (lines - 1);
    const spread = t - 0.5;

    // Scroll-driven organic movement
    const scrollWave = Math.sin(scroll * 0.008 + t * 8) * 12;
    const scrollCurl = Math.cos(scroll * 0.006 + t * 5) * 10;

    const yStart = 420 + spread * 480;

    const yMid =
      400 +
      spread * 130 +
      40 * Math.sin(3 * t) +
      scrollWave;

    const yEnd =
      430 +
      spread * 520 -
      50 * Math.cos(2 * t) +
      scrollCurl;

    const amp =
      60 +
      120 * Math.sin(Math.PI * t) +
      scrollWave;

    const d = [
      `M -80 ${yStart.toFixed(1)}`,
      `C 250 ${(yStart - amp * 0.7 + scrollCurl).toFixed(1)},`,
      `470 ${(yMid + amp * 0.8).toFixed(1)},`,
      `730 ${yMid.toFixed(1)}`,
      `S 1150 ${(yEnd - amp + scrollWave).toFixed(1)},`,
      `1540 ${yEnd.toFixed(1)}`,
    ].join(" ");

    return {
      d,
      // Softened ~30% to give text-heavy pages (About, articles) more breathing room.
      opacity: (0.05 + 0.11 * Math.sin(Math.PI * t)) * 0.7,
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
          style={
            animated
              ? { animationDelay: `${p.delay}ms` }
              : undefined
          }
        />
      ))}
    </svg>
  );
}