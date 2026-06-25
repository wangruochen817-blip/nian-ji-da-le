import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const scenarioRows = [
  "大促全流程： 自动化测品/素材 -> 自动化Campaign Setup -> 盯盘预警调控 -> 投后复盘 -> 策略沉淀",
  "TikTok 投放策略沉淀流： A/B 测试Set up -> 素材测试Set up -> 度量 Set up -> 测试复盘 -> Media Plan建议",
  "深度复盘洞察： 月/季/年趋势复盘 -> Media/人群/素材/转化场景复盘 -> 一键汇报产生PPT/HTML",
];

const batchItems = ["批量编辑", "批量导入/导出", "批量复制"];
const campaignFields = ["Objective", "Budget", "CBO", "..."];
const adGroupFields = ["Bid", "Targeting", "Placement", "..."];
const adFields = ["创意上传/更换", "名字编辑", "URL设置/编辑", "..."];
const attributeFields = ["Objectives", "Signal", "Label", "Placement", "Attribution", "..."];
const metricFields = ["Reach", "Engagement", "Conversion"];

const workflowCards = [
  {
    title: "输出平台主张",
    description: "复杂场景调用多 Skill，智能托管HITL",
    className: "min-h-[148px]",
  },
  {
    title: "解决主流问题",
    description: "1P: 盯盘卡顿场景归类，封装技能=工作流+工具",
    className: "min-h-[122px]",
  },
  {
    title: "解决特定问题",
    description: "3P: 客户自定义场景，自定义技能",
    className: "min-h-[102px]",
  },
  {
    title: "释放人力",
    description: "根据原子能力更新点，更新工具",
    className: "min-h-[272px] flex-1",
  },
];

function SideTag({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.05] px-3 text-[16px] font-semibold tracking-[0.08em] text-zinc-100 shadow-[0_12px_30px_rgba(0,0,0,0.16)]",
        className,
      )}
    >
      {label}
    </div>
  );
}

function ScenarioStrip({ text }: { text: string }) {
  return (
    <div className="flex min-h-[38px] items-center rounded-[12px] border border-white/10 bg-white/[0.045] px-5 text-[12px] font-semibold leading-6 text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      {text}
    </div>
  );
}

function Frame({
  title,
  subtitle,
  titleClassName,
  titleTextClassName,
  className,
  bodyClassName,
  children,
}: {
  title: string;
  subtitle?: string;
  titleClassName?: string;
  titleTextClassName?: string;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={cn(
        "rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,20,40,0.92),rgba(8,12,24,0.96))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_28px_60px_rgba(0,0,0,0.24)]",
        className,
      )}
    >
      <div className={cn("px-5 pt-4 text-center", titleClassName)}>
        <div className={cn("text-[15px] font-semibold tracking-[0.02em] text-zinc-100", titleTextClassName)}>{title}</div>
        {subtitle ? <div className="mt-1 text-[12px] font-medium text-zinc-300/85">{subtitle}</div> : null}
      </div>
      <div className={cn("p-4", bodyClassName)}>{children}</div>
    </section>
  );
}

function InnerPanel({
  title,
  className,
  titleClassName,
  children,
}: {
  title: string;
  className?: string;
  titleClassName?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[16px] border border-white/10 bg-white/[0.045] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
        className,
      )}
    >
      <div className={cn("text-center text-[14px] font-semibold text-zinc-100", titleClassName)}>{title}</div>
      {children ? <div className="mt-3">{children}</div> : null}
    </div>
  );
}

function Chip({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex min-h-[36px] items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.045] px-2 text-center text-[12px] font-medium leading-4 text-zinc-200",
        className,
      )}
    >
      {label}
    </div>
  );
}

function AgentCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-[22px] border border-[#ffafa6]/40 bg-[linear-gradient(180deg,rgba(87,35,48,0.62),rgba(46,22,31,0.72))] px-7 py-8 text-center shadow-[inset_0_1px_0_rgba(255,235,231,0.08),inset_0_18px_36px_rgba(255,255,255,0.02),0_30px_60px_rgba(0,0,0,0.28)]",
        className,
      )}
    >
      <h3 className="text-[26px] font-semibold tracking-[0.03em] text-[#fff5f2]">{title}</h3>
      <p className="mt-5 text-[14px] font-medium leading-7 text-[#ffe6df]/92">{description}</p>
    </article>
  );
}

export default function Other3Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060816] text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-8%] h-[540px] w-[540px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-14%] left-[20%] h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-12%] top-[18%] h-[620px] w-[620px] rounded-full bg-violet-500/12 blur-3xl" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-[1540px] items-center px-8 py-10">
        <section className="flex w-full items-stretch gap-6">
          <div className="min-w-0 flex-1 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.38)] backdrop-blur-xl">
            <div className="grid h-full grid-cols-[82px_minmax(0,1fr)] grid-rows-[136px_292px_minmax(0,1fr)] gap-x-4 gap-y-4">
              <SideTag label="场景" className="h-full" />

              <div className="grid gap-3">
                {scenarioRows.map((item) => (
                  <ScenarioStrip key={item} text={item} />
                ))}
              </div>

              <div className="grid grid-rows-[56px_minmax(0,1fr)] gap-4">
                <SideTag label="技能" className="h-[56px]" />
                <SideTag label="工具" className="h-full" />
              </div>

              <div className="grid grid-cols-[1.04fr_0.92fr_1.08fr] gap-4">
                <Frame title="投前" subtitle="一键迁移开投">
                  <InnerPanel title="批量" className="h-full">
                    <div className="grid gap-3">
                      {batchItems.map((item) => (
                        <Chip key={item} label={item} className="min-h-[34px] text-[13px]" />
                      ))}
                    </div>
                  </InnerPanel>
                </Frame>

                <Frame title="诊断" subtitle="智能托管调控">
                  <div className="grid h-full grid-rows-2 gap-4">
                    <InnerPanel title="AOS" className="flex items-center justify-center" titleClassName="text-[18px]" />
                    <InnerPanel title="自动规则" className="flex items-center justify-center" titleClassName="text-[18px]" />
                  </div>
                </Frame>

                <Frame title="盯盘复盘" subtitle="随时随地汇报">
                  <div className="grid h-full grid-rows-[1fr_1fr_auto] gap-3">
                    <InnerPanel title="Reporting" className="flex items-center justify-center" titleClassName="text-[16px]" />
                    <InnerPanel title="Status" className="flex items-center justify-center" titleClassName="text-[16px]" />
                    <div className="grid grid-cols-2 gap-3">
                      <InnerPanel title="Filter" className="flex items-center justify-center py-4" titleClassName="text-[16px]" />
                      <InnerPanel title="Columns" className="flex items-center justify-center py-4" titleClassName="text-[16px]" />
                    </div>
                  </div>
                </Frame>
              </div>

              <SideTag label="原子能力" className="h-full" />

              <div className="grid grid-cols-[1.34fr_1fr] gap-4">
                <Frame title="Campaign 创建" className="h-full">
                  <div className="space-y-3.5">
                    <Chip label="Campaign" className="min-h-[40px] text-[13px]" />
                    <div className="grid grid-cols-[1fr_1fr_0.82fr_46px] gap-2.5">
                      {campaignFields.map((item) => (
                        <Chip key={item} label={item} className="min-h-[36px] text-[12px]" />
                      ))}
                    </div>

                    <Chip label="Ad group" className="min-h-[40px] text-[13px]" />
                    <div className="grid grid-cols-[0.86fr_1.08fr_1fr_46px] gap-2.5">
                      {adGroupFields.map((item) => (
                        <Chip key={item} label={item} className="min-h-[36px] text-[12px]" />
                      ))}
                    </div>

                    <Chip label="Ad" className="min-h-[40px] text-[13px]" />
                    <div className="grid grid-cols-[1.08fr_0.92fr_1.08fr_46px] gap-2.5">
                      {adFields.map((item) => (
                        <Chip key={item} label={item} className="min-h-[36px] px-1.5 text-[11px] leading-tight" />
                      ))}
                    </div>
                  </div>
                </Frame>

                <div className="grid grid-rows-[1fr_0.94fr] gap-4">
                  <Frame
                    title="Campaign 属性"
                    className="h-full"
                    titleTextClassName="whitespace-nowrap text-[13px]"
                    bodyClassName="grid grid-cols-3 gap-3 p-4"
                  >
                    {attributeFields.map((item) => (
                      <Chip key={item} label={item} className="min-h-[50px] px-1.5 text-[11px] leading-tight" />
                    ))}
                  </Frame>

                  <Frame
                    title="Campaign 指标"
                    className="h-full"
                    titleTextClassName="whitespace-nowrap text-[13px]"
                    bodyClassName="grid grid-cols-3 gap-3 p-4"
                  >
                    {metricFields.map((item) => (
                      <Chip key={item} label={item} className="min-h-[108px] break-words px-1 text-[11px] leading-tight" />
                    ))}
                  </Frame>
                </div>
              </div>
            </div>
          </div>

          <aside className="w-[336px] rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,22,31,0.96),rgba(30,32,40,0.92))] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.42)]">
            <div className="rounded-[16px] border border-[#ffafa6]/40 bg-[linear-gradient(180deg,rgba(87,35,48,0.54),rgba(46,22,31,0.58))] py-2 text-center text-[19px] font-semibold tracking-[0.03em] text-[#fff5f1]">
              Workflow Agent
            </div>

            <div className="mt-6 flex h-[calc(100%-52px-24px)] flex-col gap-4">
              {workflowCards.map((card) => (
                <AgentCard key={card.title} title={card.title} description={card.description} className={card.className} />
              ))}
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
