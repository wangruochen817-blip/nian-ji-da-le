import { Sparkles } from "lucide-react";
import ImportedOtherCurrentState from "@/components/presentation/ImportedOtherCurrentState";
import ImportedOtherFutureState from "@/components/presentation/ImportedOtherFutureState";
import MonitoringFlow from "@/components/presentation/MonitoringFlow";
import ScenarioCard from "@/components/presentation/ScenarioCard";
import SectionTitle from "@/components/presentation/SectionTitle";
import ToolkitMap from "@/components/presentation/ToolkitMap";
import {
  monitoringFlow,
  scenarioCards,
  toolkitColumns,
} from "@/data/presentation";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060816] text-zinc-100 selection:bg-cyan-300/30">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[-8%] top-[-6%] h-[520px] w-[520px] rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="absolute right-[-12%] top-[18%] h-[560px] w-[560px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-14%] left-[18%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <main className="relative">
        <section id="hero" className="mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-20 pt-24 lg:px-10">
          <div className="grid gap-16 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-zinc-300">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                Workflow 系列产品规划
              </div>
              <div className="space-y-6">
                <p className="max-w-3xl text-sm uppercase tracking-[0.34em] text-zinc-500">
                  From Workflow Tools To Agentic Skills
                </p>
                <h1 className="max-w-5xl font-serif text-[48px] leading-[1.02] text-white md:text-[84px] xl:text-[108px]">
                  从效率工具，到场景解决方案
                </h1>
              </div>
            </div>

            <div className="flex items-end">
              <div className="w-full rounded-[36px] border border-white/15 bg-white/[0.045] p-9 shadow-[0_54px_128px_rgba(0,0,0,0.42)] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">价值升级</p>
                <div className="mt-8 space-y-6">
                  <div className="border-l border-cyan-300/50 pl-5">
                    <p className="text-2xl font-medium leading-10 text-white">用户想要的是结果，而不是工具本身。</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-cyan-300/30 bg-black/20 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.14)]">
                      <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">Today</p>
                      <p className="mt-3 text-lg text-zinc-100">原子能力-&gt;工具</p>
                    </div>
                    <div className="rounded-[24px] border border-violet-300/30 bg-black/20 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.14)]">
                      <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">Tomorrow</p>
                      <p className="mt-3 text-lg text-zinc-100">原子能力-&gt; Agent-&gt;完成任务</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section id="current-state" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="space-y-10">
            <SectionTitle
              eyebrow="第一部分 / 现状与痛点"
              title="现状：工具很多，场景缺席"
              description=""
            />
            <ImportedOtherCurrentState />
          </div>
        </section>

        <section id="future" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="space-y-10">
            <SectionTitle
              eyebrow="第二部分 / Agentic 升级"
              title="未来：让Agent站在能力层上创造工具，服务场景"
              description=""
            />
            <ImportedOtherFutureState />
          </div>
        </section>

        <section id="product-structure" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <MonitoringFlow items={monitoringFlow} />
        </section>

        <section id="demo" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            第四部分 / Demo
          </div>
          <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.042),rgba(255,255,255,0.014))] p-5 shadow-[0_44px_148px_rgba(0,0,0,0.34)] md:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.1),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_30%)]" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/30 bg-white shadow-[0_36px_88px_rgba(0,0,0,0.26)]">
              <img
                src="/20260625-210857.jpeg"
                alt="Campaign List UI demo"
                className="block w-full"
              />
            </div>
          </div>
        </section>

        <section id="scenarios" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionTitle
            eyebrow="第五部分 / 四类场景"
            title="落地：一期4类热门场景"
            description=""
          />
          <div className="mt-14 grid gap-6 xl:grid-cols-2">
            {scenarioCards.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>

        <section id="toolkits" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionTitle
            eyebrow="第六部分 / Toolkit"
            title={
              <>
                Toolkit × Agentic Hub
                <br />
                技能的集合地，但不再是叙事的重点
              </>
            }
            description=""
          />
          <div className="mt-14">
            <ToolkitMap columns={toolkitColumns} />
          </div>
        </section>
      </main>
    </div>
  );
}
