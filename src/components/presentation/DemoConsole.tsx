import { ArrowRight, Bot, CheckCircle2, Sparkles } from "lucide-react";

type DemoCampaign = {
  name: string;
  spend: string;
  status: string;
  signal: string;
};

export default function DemoConsole({
  filters,
  campaigns,
}: {
  filters: string[];
  campaigns: DemoCampaign[];
}) {
  return (
    <div className="rounded-[36px] border border-white/10 bg-[#0b1126] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] md:p-6">
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-white/8 bg-black/20 p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">Campaign Workspace</p>
              <h3 className="mt-2 text-xl text-white">Campaign List + Monitoring Cards</h3>
            </div>
            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-cyan-200">
              Demo UI
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {filters.map((filter, index) => (
              <div
                key={filter}
                className={`rounded-full border px-4 py-2 text-xs ${
                  index === 0
                    ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-200"
                    : "border-white/10 bg-white/5 text-zinc-400"
                }`}
              >
                {filter}
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-[24px] border border-white/8 bg-[#080d1d]">
            <div className="grid grid-cols-[2fr_1fr_1.2fr_0.8fr] border-b border-white/8 px-4 py-3 text-[11px] uppercase tracking-[0.26em] text-zinc-500">
              <span>Campaign</span>
              <span>Spend</span>
              <span>Status</span>
              <span>Signal</span>
            </div>
            <div className="divide-y divide-white/6">
              {campaigns.map((campaign, index) => (
                <div
                  key={campaign.name}
                  className={`grid grid-cols-[2fr_1fr_1.2fr_0.8fr] items-center px-4 py-4 text-sm ${
                    index === 0 ? "bg-cyan-300/[0.06]" : ""
                  }`}
                >
                  <span className="text-zinc-100">{campaign.name}</span>
                  <span className="text-zinc-400">{campaign.spend}</span>
                  <span className="text-zinc-300">{campaign.status}</span>
                  <span className={campaign.signal === "High" ? "text-amber-200" : "text-zinc-400"}>
                    {campaign.signal}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(125,211,252,0.12),rgba(255,255,255,0.03))] p-6">
          <div className="flex items-center justify-between">
            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
              <Bot className="h-5 w-5" />
            </div>
            <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-zinc-300">
              Monitoring Card
            </div>
          </div>

          <h4 className="mt-8 text-2xl leading-9 text-white">Rejected Campaigns</h4>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            <span className="text-cyan-200">$48K</span> at risk
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
              <div className="flex items-center gap-3 text-zinc-200">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <span className="text-sm">Insight</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-400">
                <li>Text rejection is the dominant issue.</li>
                <li>High-spend campaigns are concentrated in US / SEA.</li>
              </ul>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
              <div className="flex items-center gap-3 text-zinc-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                <span className="text-sm">Action</span>
              </div>
              <div className="mt-4 space-y-3">
                {["Launch Smart Fix Skill", "Bulk-fix non-compliant assets"].map((item) => (
                  <button
                    key={item}
                    className="flex w-full items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-zinc-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
                  >
                    <span>{item}</span>
                    <ArrowRight className="h-4 w-4 text-cyan-300" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
