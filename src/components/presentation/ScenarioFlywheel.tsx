type ScenarioFlywheelDomain = {
  id: string;
  index: string;
  title: string;
  items: readonly string[];
  accent: string;
};

type ScenarioFlywheelProps = {
  centerStatement: string;
  loopLabels: readonly string[];
  domains: readonly ScenarioFlywheelDomain[];
};

export default function ScenarioFlywheel({
  centerStatement,
  loopLabels,
  domains,
}: ScenarioFlywheelProps) {
  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 shadow-[0_44px_148px_rgba(0,0,0,0.34)] md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.1),transparent_30%)]" />

      <div className="relative grid gap-6 xl:grid-cols-2">
        {domains.map((domain) => (
          <article
            key={domain.id}
            className="relative overflow-hidden rounded-[28px] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7 shadow-[0_28px_72px_rgba(0,0,0,0.2)]"
          >
            <div className={`pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br ${domain.accent} opacity-70`} />
            <div className="relative">
              <div className="inline-flex rounded-full border border-white/12 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-zinc-400">
                {domain.index}
              </div>
              <h3 className="mt-5 font-serif text-3xl text-white">{domain.title}</h3>
              <ul className="mt-5 space-y-3 text-[15px] leading-7 text-zinc-200">
                {domain.items.map((item) => (
                  <li key={item} className="rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="relative mt-8 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-6 py-4 text-center text-sm font-medium tracking-[0.08em] text-cyan-100">
        {centerStatement}
      </div>

      <div className="relative mt-5 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
        {loopLabels.map((label, index) => (
          <span key={`${label}-${index}`} className="inline-flex items-center gap-3">
            <span>{label}</span>
            {index < loopLabels.length - 1 ? <span>→</span> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
