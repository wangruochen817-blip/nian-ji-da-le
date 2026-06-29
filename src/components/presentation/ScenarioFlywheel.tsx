import { useMemo, useState } from "react";

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
  const [activeDomainId, setActiveDomainId] = useState(domains[0]?.id ?? "");

  const activeDomain = useMemo(
    () => domains.find((domain) => domain.id === activeDomainId) ?? domains[0],
    [activeDomainId, domains],
  );

  const orbitalPositions: Record<string, string> = {
    planning: "left-1/2 top-4 -translate-x-1/2 md:top-6",
    creation: "right-0 top-1/2 -translate-y-1/2 md:right-2",
    monitoring: "bottom-4 left-1/2 -translate-x-1/2 md:bottom-6",
    review: "left-0 top-1/2 -translate-y-1/2 md:left-2",
  };

  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 shadow-[0_44px_148px_rgba(0,0,0,0.34)] md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.1),transparent_30%)]" />

      <div className="relative grid gap-8 xl:grid-cols-[1.04fr_0.96fr] xl:items-center">
        <div className="relative mx-auto flex aspect-square w-full max-w-[560px] items-center justify-center overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045),rgba(255,255,255,0.012)_60%,transparent_80%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="pointer-events-none absolute inset-8 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute inset-[18%] rounded-full border border-white/10 border-dashed" />
          <div className="pointer-events-none absolute inset-[28%] rounded-full border border-white/15" />
          <div className="pointer-events-none absolute inset-[35%] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),rgba(15,23,42,0.88)_72%)] shadow-[0_0_80px_rgba(34,211,238,0.12)]" />

          <div className="relative z-10 flex max-w-[240px] flex-col items-center gap-4 text-center">
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-cyan-100">
              Scenario Flywheel
            </div>
            <div className="font-serif text-3xl leading-tight text-white md:text-4xl">
              {centerStatement}
            </div>
            <p className="text-sm leading-7 text-zinc-300">
              Hover or click a domain to inspect how each loop expands future scenario coverage.
            </p>
          </div>

          {domains.map((domain) => {
            const isActive = domain.id === activeDomain?.id;
            const domainLabel = domain.id.charAt(0).toUpperCase() + domain.id.slice(1);

            return (
              <button
                key={domain.id}
                type="button"
                aria-pressed={isActive}
                className={`absolute z-20 w-[150px] rounded-[24px] border px-4 py-4 text-left transition duration-300 md:w-[172px] ${orbitalPositions[domain.id] ?? ""} ${
                  isActive
                    ? "border-white/40 bg-white/[0.14] shadow-[0_24px_64px_rgba(0,0,0,0.24)] scale-[1.04]"
                    : "border-white/15 bg-white/[0.055] shadow-[0_18px_44px_rgba(0,0,0,0.18)] hover:border-white/30 hover:bg-white/[0.09]"
                }`}
                onMouseEnter={() => setActiveDomainId(domain.id)}
                onFocus={() => setActiveDomainId(domain.id)}
                onClick={() => setActiveDomainId(domain.id)}
              >
                <div className={`absolute inset-0 rounded-[24px] bg-gradient-to-br ${domain.accent} ${isActive ? "opacity-95" : "opacity-55"}`} />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-200/80">{domain.index}</div>
                  <div className="mt-2 font-serif text-xl text-white">{domainLabel}</div>
                  <div className="mt-2 text-xs leading-5 text-zinc-200/75">{domain.title}</div>
                </div>
              </button>
            );
          })}
        </div>

        <article className="relative overflow-hidden rounded-[32px] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7 shadow-[0_28px_72px_rgba(0,0,0,0.2)]">
          <div className={`pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br ${activeDomain?.accent ?? "from-cyan-300/18 to-sky-300/8"} opacity-80`} />
          <div className="relative">
            <div className="inline-flex rounded-full border border-white/12 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-zinc-300">
              {activeDomain?.index}
            </div>
            <div className="mt-5 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">Active Scenario Domain</p>
              <h3 className="font-serif text-4xl text-white md:text-5xl">{activeDomain?.title}</h3>
              <p className="max-w-xl text-base leading-8 text-zinc-100/80">
                Representative scenarios we plan to cover in this loop first.
              </p>
            </div>

            <ul className="mt-8 grid gap-4">
              {activeDomain?.items.map((item, index) => (
                <li
                  key={item}
                  className="rounded-[18px] border border-white/12 bg-black/20 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/10 text-[11px] font-medium text-white/80">
                      {index + 1}
                    </span>
                    <span className="text-[15px] leading-7 text-zinc-100">{item}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[22px] border border-white/12 bg-black/20 px-5 py-4 text-sm leading-7 text-zinc-200/85">
              Each domain feeds the next one: planning shapes creation, creation enables monitoring, monitoring powers review, and review sharpens the next plan.
            </div>
          </div>
        </article>
      </div>

      <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
        {loopLabels.map((label, index) => (
          <span key={`${label}-${index}`} className="inline-flex items-center gap-3">
            <span>{label}</span>
            {index < loopLabels.length - 1 ? <span>→</span> : null}
          </span>
        ))}
      </div>

      <div className="relative mt-5 grid gap-3 md:grid-cols-4">
        {domains.map((domain) => {
          const isActive = domain.id === activeDomain?.id;
          const domainLabel = domain.id.charAt(0).toUpperCase() + domain.id.slice(1);

          return (
            <div
              key={`${domain.id}-summary`}
              className={`rounded-[18px] border px-4 py-3 text-center transition ${
                isActive
                  ? "border-white/30 bg-white/[0.08] text-white"
                  : "border-white/10 bg-white/[0.03] text-zinc-400"
              }`}
            >
              <div className="text-[10px] uppercase tracking-[0.24em]">{domainLabel}</div>
              <div className="mt-2 text-sm">{domain.items[0]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
