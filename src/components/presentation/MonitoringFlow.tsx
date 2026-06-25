import { ArrowRight, Sparkles } from "lucide-react";

type FlowItem = {
  name: string;
  tag: string;
  summary: string;
  bullets: string[];
};

export default function MonitoringFlow({ items }: { items: FlowItem[] }) {
  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-zinc-300">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          第三部分 / 产品结构
        </div>
        <h2 className="max-w-6xl font-serif text-4xl leading-[1.02] text-white md:text-6xl xl:text-[72px]">
          发现、理解、解决，
          <br />
          结果导向的产品结构。
        </h2>
      </div>

      <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.28)] md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 md:text-base">Monitoring Card Product Metrics</p>
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
            盯盘卡 → Insight → Action
          </div>
        </div>

        <div className="mt-8 grid gap-4 xl:grid-cols-[1fr_auto_1fr_auto_1fr] xl:items-stretch">
          {items.map((item, index) => {
            const accent =
              index === 0
                ? "border-cyan-300/15 bg-cyan-300/10 text-cyan-200"
                : index === 1
                  ? "border-violet-300/15 bg-violet-300/10 text-violet-200"
                  : "border-emerald-300/15 bg-emerald-300/10 text-emerald-200";

            return (
              <div key={item.name} className="contents">
                <article className="flex h-full flex-col rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,34,0.96),rgba(8,11,28,0.92))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.04] text-xl text-white">
                      {`0${index + 1}`}
                    </div>
                    <span
                        className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.24em] ${accent} ${
                          index < 2 ? "inline-flex h-14 items-center" : index === 2 ? "inline-flex h-14 items-center" : ""
                        }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-4xl font-serif text-white md:text-5xl">{item.name}</h3>
                    <p className="mt-4 text-lg leading-8 text-zinc-300">{item.summary}</p>
                  </div>

                  <div className="mt-8 grid gap-3">
                    {item.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex min-h-[64px] items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.03] px-4 text-center text-base text-zinc-100"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </article>

                {index !== items.length - 1 && (
                  <div className="hidden items-center justify-center xl:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                      <ArrowRight className="h-5 w-5 text-zinc-200" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-white/10 bg-black/20 p-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">Result-Oriented</p>
            <p className="mt-4 text-2xl leading-10 text-white">从“展示工具目录”升级为“围绕场景交付结果”。</p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {[
              { label: "发现", value: "先筛场景" },
              { label: "理解", value: "洞察分析" },
              { label: "行动", value: "调用 Skill" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex min-h-[112px] flex-col items-center justify-center rounded-[24px] border border-white/10 bg-white/[0.03] p-4 text-center"
              >
                <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">{item.label}</p>
                <p className="mt-3 text-xl text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
