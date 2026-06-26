import { ArrowRight } from "lucide-react";

type Scenario = {
  name: string;
  insight: string[];
  action: string[];
  accent: string;
};

export default function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <article className="relative overflow-hidden rounded-[30px] border border-white/30 bg-white/[0.045] p-7 shadow-[0_28px_72px_rgba(0,0,0,0.18)]">
      <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${scenario.accent}`} />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">Scenario</p>
            <h3 className="mt-4 text-2xl text-white">{scenario.name}</h3>
          </div>
          <ArrowRight className="mt-1 h-4 w-4 text-zinc-500" />
        </div>

        <div className="mt-8 grid gap-4">
          <div className="rounded-[22px] border border-cyan-300/30 bg-black/20 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.14)]">
            <p className="text-[11px] uppercase tracking-[0.26em] text-cyan-200">Insight</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
              {scenario.insight.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[22px] border border-emerald-300/30 bg-black/20 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.14)]">
            <p className="text-[11px] uppercase tracking-[0.26em] text-emerald-200">Action</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
              {scenario.action.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
