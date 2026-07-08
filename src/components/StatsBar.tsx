const STATS = [
  ["120+", "brands launched"],
  ["4.2x", "avg. ROAS"],
  ["96%", "client retention"],
] as const;

export default function StatsBar() {
  return (
    <section className="border-y border-line/60 bg-panel/50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-16 gap-y-3 px-6 py-6">
        {STATS.map(([value, label]) => (
          <p
            key={label}
            className="font-mono text-[13px] tracking-[0.15em] text-fog"
          >
            <span className="font-medium text-white">{value}</span> {label}
          </p>
        ))}
      </div>
    </section>
  );
}