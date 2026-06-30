import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const scenarioRows = [
  "Tentpole: Product and creative testing-> smart setup-> Monitoring alert -> Review",
  "Media plan: A/B test setup->creative test -> Measurement setup-> Scale",
  "Deep review: MoM/YoY review -> Media/Audience/Conversion review -> Presentation",
];

const workflowCards = [
  {
    title: "Educate methodologies",
    description: "Multi-skill workflows with HITL.",
    className: "min-h-0 flex-1",
  },
  {
    title: "Achieve goal with workflow",
    description: "Start with senario, achieve with agentic worklow powered by tools",
    className: "min-h-0 flex-1",
  },
  {
    title: "Robust Infra",
    description: "Tools update with atomic changes.",
    className: "min-h-0 flex-1",
  },
];

function SideTag({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[16px] border border-white/30 bg-white/[0.05] px-4 text-[16px] font-semibold tracking-[0.06em] text-zinc-100 shadow-[0_16px_38px_rgba(0,0,0,0.18)]",
        className,
      )}
    >
      {label}
    </div>
  );
}

function ScenarioStrip({ text }: { text: string }) {
  return (
    <div className="flex min-h-[42px] items-center rounded-[14px] border border-white/30 bg-white/[0.045] px-5 text-[13px] font-semibold leading-6 text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
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
        "rounded-[24px] border border-white/30 bg-[linear-gradient(180deg,rgba(16,22,44,0.92),rgba(8,12,24,0.972))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_30px_68px_rgba(0,0,0,0.24)]",
        className,
      )}
    >
      <div className={cn("px-5 pt-5 text-center", titleClassName)}>
        <div className={cn("text-[16px] font-semibold tracking-[0.02em] text-zinc-100", titleTextClassName)}>{title}</div>
        {subtitle ? <div className="mt-1 text-[12px] font-medium text-zinc-300/85">{subtitle}</div> : null}
      </div>
      <div className={cn("p-5", bodyClassName)}>{children}</div>
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
        "rounded-[18px] border border-white/30 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
        className,
      )}
    >
      <div className={cn("text-center text-[15px] font-semibold text-zinc-100", titleClassName)}>{title}</div>
      {children ? <div className="mt-3">{children}</div> : null}
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
        "rounded-[22px] border border-[#ffafa6]/40 bg-[linear-gradient(180deg,rgba(87,35,48,0.62),rgba(46,22,31,0.72))] px-6 py-6 text-center shadow-[inset_0_1px_0_rgba(255,235,231,0.08),inset_0_18px_36px_rgba(255,255,255,0.02),0_30px_60px_rgba(0,0,0,0.28)]",
        className,
      )}
    >
      <h3 className="text-[26px] font-semibold tracking-[0.03em] text-[#fff5f2]">{title}</h3>
      <p className="mt-3 text-[13px] font-medium leading-6 text-[#ffe6df]/92">{description}</p>
    </article>
  );
}

export default function ImportedOtherFutureState() {
  return (
    <section className="flex w-full items-stretch gap-6">
      <div className="min-w-0 flex-1 rounded-[36px] border border-white/15 bg-white/[0.035] p-7 shadow-[0_44px_128px_rgba(0,0,0,0.38)] backdrop-blur-xl">
        <div className="grid h-full grid-cols-[84px_minmax(0,1fr)] grid-rows-[140px_300px_minmax(0,1fr)] gap-x-5 gap-y-5">
          <SideTag label="Scenario" className="h-full" />

          <div className="grid gap-3">
            {scenarioRows.map((item) => (
              <ScenarioStrip key={item} text={item} />
            ))}
          </div>

          <SideTag label="workflow" className="h-full" />

          <div className="grid grid-cols-[1.04fr_0.92fr_1.08fr] gap-4">
            <Frame title="Pre-Launch" subtitle="One-click migration and launch" className="border-amber-300/30">
              <div className="grid gap-4">
                <InnerPanel title="Meta Import" className="flex items-center justify-center py-6" titleClassName="text-[18px]" />
                <InnerPanel title="Bulk Edit" className="flex items-center justify-center py-6" titleClassName="text-[18px]" />
              </div>
            </Frame>

            <Frame title="Monitoring" subtitle="Managed intelligent control" className="border-cyan-300/30">
              <div className="grid h-full grid-rows-2 gap-4">
                <InnerPanel title="Diagnosis" className="flex items-center justify-center" titleClassName="text-[18px]" />
                <InnerPanel title="Automation Rule" className="flex items-center justify-center" titleClassName="text-[18px]" />
              </div>
            </Frame>

            <Frame title="Review" subtitle="Report anywhere, anytime" className="border-violet-300/30">
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

          <SideTag label="Atom" className="mt-4 h-[180px]" />

          <div className="grid grid-cols-[1.26fr_0.74fr] gap-4 pt-4">
            <SideTag label="Campaign Creation" className="h-[180px]" />

            <div className="grid h-[180px] grid-rows-2 gap-4">
              <SideTag label="Campaign Attributes" className="h-[82px] text-[15px] tracking-[0.04em]" />

              <SideTag label="Campaign Metrics" className="h-[82px] text-[15px] tracking-[0.04em]" />
            </div>
          </div>
        </div>
      </div>

      <aside className="w-[340px] rounded-[30px] border border-white/15 bg-[linear-gradient(180deg,rgba(20,22,31,0.965),rgba(30,32,40,0.925))] p-7 shadow-[0_44px_128px_rgba(0,0,0,0.42)]">
        <div className="rounded-[16px] border border-[#ffafa6]/38 bg-[linear-gradient(180deg,rgba(87,35,48,0.52),rgba(46,22,31,0.56))] py-3 text-center text-[21px] font-semibold tracking-[0.03em] text-[#fff5f1]">
          Workflow Agent
        </div>

        <div className="mt-6 flex h-[calc(100%-52px-24px)] flex-col gap-4">
          {workflowCards.map((card) => (
            <AgentCard key={card.title} title={card.title} description={card.description} className={card.className} />
          ))}
        </div>
      </aside>
    </section>
  );
}
