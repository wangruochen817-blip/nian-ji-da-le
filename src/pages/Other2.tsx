import DiagramBox from "@/components/other/DiagramBox";
import PainCard from "@/components/other/PainCard";
import { cn } from "@/lib/utils";

const scenarioRows = [
  "大促全流程：自动化测品/素材 -> 自动化Campaign Setup -> 盯盘预算调控 -> 投后复盘 -> 策略沉淀",
  "TikTok 投放策略沉淀：A/B 测试Set up -> 素材测试Set up -> 度量 Set up -> 测试复盘 -> Media Plan建议",
  "深度复盘洞察：月/季/年趋势复盘 -> Media/人群/素材/转化场景复盘 -> 一键汇报产生PPT/HTML",
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
    description: "复杂场景调用多 Skill，智能托管 HITL",
    className: "min-h-[132px]",
  },
  {
    title: "解决主流问题",
    description: "1P: 盯盘卡顿场景归类，封装技能=工作流+工具",
    className: "min-h-[108px]",
  },
  {
    title: "解决特定问题",
    description: "3P: 客户自定义场景，自定义技能",
    className: "min-h-[108px]",
  },
  {
    title: "释放人力",
    description: "根据原子能力更新点，更新工具",
    className: "min-h-[270px] flex-1",
  },
];

function SideLabel({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[16px] border border-white/14 bg-white/[0.075] px-4 text-[20px] font-semibold tracking-[0.1em] text-zinc-100 shadow-[0_16px_36px_rgba(0,0,0,0.22)]",
        className,
      )}
    >
      {label}
    </div>
  );
}

function StageStrip({ text }: { text: string }) {
  return (
    <div className="flex min-h-[48px] items-center rounded-[20px] border border-[#f1d84f]/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-6 text-[15px] font-semibold leading-6 text-zinc-100 shadow-[0_22px_44px_rgba(0,0,0,0.22)]">
      {text}
    </div>
  );
}

function GlassPanel({
  title,
  subtitle,
  className,
  bodyClassName,
  titleClassName,
  children,
}: {
  title?: string;
  subtitle?: string;
  className?: string;
  bodyClassName?: string;
  titleClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.038))] p-5 shadow-[0_28px_68px_rgba(0,0,0,0.28)] backdrop-blur-xl",
        className,
      )}
    >
      {title ? (
        <div className={cn("text-center text-[16px] font-semibold leading-5 text-zinc-100", titleClassName)}>
          <div>{title}</div>
          {subtitle ? <div className="mt-1.5 text-[13px] font-medium text-zinc-300">{subtitle}</div> : null}
        </div>
      ) : null}
      <div className={cn(title ? "mt-4" : "", bodyClassName)}>{children}</div>
    </div>
  );
}

function InnerCard({
  title,
  className,
  titleClassName,
  children,
}: {
  title: string;
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[18px] border border-[#f0b24f]/65 bg-[linear-gradient(180deg,rgba(255,213,129,0.14),rgba(255,213,129,0.07))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
        className,
      )}
    >
      <div className={cn("text-center text-[15px] font-semibold text-zinc-100", titleClassName)}>{title}</div>
      {children ? <div className="mt-3">{children}</div> : null}
    </div>
  );
}

function Chip({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-h-[40px] items-center justify-center rounded-[14px] border border-white/12 bg-white/[0.06] px-3 text-center text-[13px] font-medium leading-5 text-zinc-200",
        className,
      )}
    >
      {label}
    </div>
  );
}

function WorkflowCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <PainCard
      title={title}
      description={description}
      className={cn(
        "border-[#ffb1b6]/35 bg-[linear-gradient(180deg,rgba(116,44,59,0.80),rgba(64,25,36,0.94))] shadow-[inset_0_1px_0_rgba(255,207,214,0.12),inset_0_24px_48px_rgba(255,123,146,0.04),0_34px_72px_rgba(0,0,0,0.34)]",
        className,
      )}
    />
  );
}

export default function Other2Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060816] text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-8%] h-[540px] w-[540px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-14%] left-[20%] h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-12%] top-[18%] h-[620px] w-[620px] rounded-full bg-violet-500/12 blur-3xl" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-[1560px] items-center px-10 py-12">
        <section className="flex w-full items-stretch gap-8">
          <div className="min-w-0 flex-1 rounded-[36px] border border-white/12 bg-white/[0.045] p-7 shadow-[0_44px_128px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <div className="grid grid-cols-[88px_minmax(0,1fr)] grid-rows-[148px_236px_334px] gap-x-5 gap-y-5">
              <SideLabel label="场景" className="h-full" />

              <div className="grid gap-3">
                {scenarioRows.map((item) => (
                  <StageStrip key={item} text={item} />
                ))}
              </div>

              <div className="grid grid-rows-[56px_minmax(0,1fr)] gap-4">
                <SideLabel label="技能" className="h-[56px]" />
                <SideLabel label="工具" className="h-full" />
              </div>

              <div className="grid grid-cols-[1.02fr_0.96fr_1.1fr] gap-4">
                <GlassPanel title="投前" subtitle="一键迁移开投" className="h-full">
                  <InnerCard title="批量" className="h-full">
                    <div className="grid gap-3">
                      {batchItems.map((item) => (
                        <Chip key={item} label={item} className="min-h-[34px] border-[#f0b24f]/55 bg-[rgba(255,194,92,0.16)] text-[13px] text-[#ffe3b3]" />
                      ))}
                    </div>
                  </InnerCard>
                </GlassPanel>

                <GlassPanel title="诊断" subtitle="智能托管调控" className="h-full">
                  <div className="grid h-full grid-rows-2 gap-4">
                    <InnerCard title="AOS" className="flex items-center justify-center" titleClassName="text-[18px]" />
                    <InnerCard title="自动规则" className="flex items-center justify-center" titleClassName="text-[18px]" />
                  </div>
                </GlassPanel>

                <GlassPanel title="盯盘复盘" subtitle="随时随地汇报" className="h-full">
                  <div className="grid h-full grid-rows-[1fr_1fr_auto] gap-3">
                    <InnerCard title="Reporting" className="flex items-center justify-center" titleClassName="text-[16px]" />
                    <InnerCard title="Status" className="flex items-center justify-center" titleClassName="text-[16px]" />
                    <div className="grid grid-cols-2 gap-3">
                      <InnerCard title="Filter" className="flex items-center justify-center py-5" titleClassName="text-[16px]" />
                      <InnerCard title="Columns" className="flex items-center justify-center py-5" titleClassName="text-[16px]" />
                    </div>
                  </div>
                </GlassPanel>
              </div>

              <SideLabel label="原子能力" className="mt-2 h-[calc(100%-8px)]" />

              <div className="grid grid-cols-[1.36fr_0.88fr] gap-4 pt-2">
                <GlassPanel title="Campaign 创建" className="h-full">
                  <div className="space-y-4">
                    <Chip label="Campaign" className="min-h-[34px] border-[#f1d84f]/55 bg-[rgba(255,213,79,0.16)] text-[#f8e8a7]" />
                    <div className="grid grid-cols-[1fr_1fr_0.8fr_44px] gap-3">
                      {campaignFields.map((item) => (
                        <Chip key={item} label={item} className="min-h-[34px] border-[#f1d84f]/60 bg-[rgba(255,213,79,0.18)] text-[12px] text-[#f8e8a7]" />
                      ))}
                    </div>

                    <Chip label="Ad group" className="min-h-[34px] border-[#f1d84f]/55 bg-[rgba(255,213,79,0.16)] text-[#f8e8a7]" />
                    <div className="grid grid-cols-[0.84fr_1.12fr_1fr_44px] gap-3">
                      {adGroupFields.map((item) => (
                        <Chip key={item} label={item} className="min-h-[34px] border-[#f1d84f]/60 bg-[rgba(255,213,79,0.18)] text-[12px] text-[#f8e8a7]" />
                      ))}
                    </div>

                    <Chip label="Ad" className="min-h-[34px] border-[#f1d84f]/55 bg-[rgba(255,213,79,0.16)] text-[#f8e8a7]" />
                    <div className="grid grid-cols-[1.12fr_0.92fr_1.06fr_44px] gap-3">
                      {adFields.map((item) => (
                        <Chip key={item} label={item} className="min-h-[34px] border-[#f1d84f]/60 bg-[rgba(255,213,79,0.18)] px-2 text-[11px] text-[#f8e8a7]" />
                      ))}
                    </div>
                  </div>
                </GlassPanel>

                <div className="grid grid-rows-[1fr_0.96fr] gap-4">
                  <GlassPanel title="Campaign 属性" bodyClassName="mt-4 grid grid-cols-3 gap-3">
                    {attributeFields.map((item) => (
                      <Chip key={item} label={item} className="min-h-[48px] border-[#f1d84f]/60 bg-[rgba(255,213,79,0.18)] text-[11px] text-[#f8e8a7]" />
                    ))}
                  </GlassPanel>

                  <GlassPanel title="Campaign 指标" bodyClassName="mt-4 grid grid-cols-3 gap-3">
                    {metricFields.map((item) => (
                      <Chip key={item} label={item} className="min-h-[96px] border-[#f1d84f]/60 bg-[rgba(255,213,79,0.18)] text-[13px] text-[#f8e8a7]" />
                    ))}
                  </GlassPanel>
                </div>
              </div>
            </div>
          </div>

          <aside className="w-[376px] rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(20,22,31,0.97),rgba(30,32,40,0.93))] p-7 shadow-[0_44px_128px_rgba(0,0,0,0.44)]">
            <div className="rounded-[18px] border border-[#ffb1b6]/40 bg-[linear-gradient(180deg,rgba(133,57,72,0.42),rgba(72,31,41,0.3))] py-3 text-center text-[24px] font-semibold tracking-[0.06em] text-zinc-50">
              Workflow Agent
            </div>

            <div className="mt-6 flex h-[calc(100%-56px-24px)] flex-col gap-5">
              {workflowCards.map((card) => (
                <WorkflowCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  className={card.className}
                />
              ))}
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
