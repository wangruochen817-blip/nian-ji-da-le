import type { ReactNode } from "react";

type ToolGroup = {
  title: string;
  items: string[];
};

type AtomicGroup = {
  title: string;
  items: string[];
};

function Pill({
  children,
  tone,
  className = "",
}: {
  children: ReactNode;
  tone: "tool" | "atomic";
  className?: string;
}) {
  const toneClass =
    tone === "tool"
      ? "border-amber-200/20 bg-amber-200/10 text-amber-50"
      : "border-lime-200/20 bg-lime-200/10 text-lime-50";

  return (
    <div
      className={`flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-[12px] border px-3 py-2 text-center text-[10px] leading-snug break-words ${toneClass} md:text-[11px] ${className}`}
    >
      {children}
    </div>
  );
}

function RowLabel({ text, accent }: { text: string; accent: string }) {
  return (
    <div className={`flex items-center justify-center rounded-[18px] border px-3 py-4 text-xs font-medium tracking-[0.28em] ${accent}`}>
      {text}
    </div>
  );
}

export default function CurrentFlowDiagram({
  toolGroups,
  atomicGroups,
}: {
  toolGroups: ToolGroup[];
  atomicGroups: AtomicGroup[];
}) {
  const batchItems = toolGroups[0]?.items ?? [];
  const helperItems = toolGroups[1]?.items ?? [];
  const creationItems = atomicGroups[0]?.items ?? [];
  const attributeItems = atomicGroups[1]?.items ?? [];
  const metricItems = atomicGroups[2]?.items ?? [];

  const creationColumns = [
    { title: "Campaign", items: creationItems.slice(0, 2) },
    { title: "Ad group", items: creationItems.slice(2, 4) },
    { title: "Ad", items: creationItems.slice(4, 6) },
  ];

  return (
    <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
      <div className="grid gap-4 lg:grid-cols-[56px_1fr]">
        <RowLabel text="场景" accent="border-rose-300/30 bg-rose-300/10 text-rose-100" />
        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] px-6 py-8 lg:row-span-2">
          <div className="flex min-h-[142px] items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.03] text-center">
            <div className="text-2xl font-medium tracking-[0.12em] text-[#c2b3b4]">操盘手线下沉淀</div>
          </div>
        </div>

        <RowLabel text="技能" accent="border-rose-300/20 bg-white/[0.03] text-zinc-500" />

        <RowLabel text="工具" accent="border-amber-200/25 bg-amber-200/10 text-amber-100" />
        <div className="rounded-[20px] border border-amber-200/15 bg-amber-100/[0.03] p-4">
          <div className="space-y-4">
            <div className="rounded-[14px] border border-amber-200/20 bg-amber-200/10 px-4 py-2 text-center text-xs font-medium text-amber-50">
              自动规则
            </div>

            <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
              <div className="rounded-[18px] border border-white/10 bg-black/15 p-4">
                <div className="text-center text-[11px] font-medium tracking-[0.12em] text-zinc-400">批量</div>
                <div className="mt-3 grid gap-2">
                  {batchItems.map((item) => (
                    <Pill key={item} tone="tool">
                      {item}
                    </Pill>
                  ))}
                </div>
              </div>

              <div className="grid gap-2">
                {helperItems.slice(0, 2).map((item) => (
                  <Pill key={item} tone="tool" className="font-medium">
                    {item}
                  </Pill>
                ))}
                <div className="grid grid-cols-2 gap-2">
                  {helperItems.slice(2, 4).map((item) => (
                    <Pill key={item} tone="tool" className="font-medium">
                      {item}
                    </Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <RowLabel text="原子能力" accent="border-lime-200/25 bg-lime-200/10 text-lime-50" />
        <div className="rounded-[20px] border border-lime-200/15 bg-lime-100/[0.03] p-4">
          <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-[1.85fr_1.1fr_1fr]">
            <div className="rounded-[18px] border border-white/10 bg-black/15 p-4 xl:col-span-2 2xl:col-span-1">
              <div className="text-center text-sm font-medium text-zinc-300">{atomicGroups[0]?.title}</div>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {creationColumns.map((column) => (
                  <div key={column.title} className="rounded-[14px] border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-center text-[11px] font-medium text-zinc-500">{column.title}</div>
                    <div className="mt-3 grid gap-2">
                      {column.items.map((item) => (
                        <Pill key={item} tone="atomic">
                          {item}
                        </Pill>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-black/15 p-4">
              <div className="text-center text-sm font-medium text-zinc-300">{atomicGroups[1]?.title}</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {attributeItems.map((item, index) => (
                  <Pill
                    key={item}
                    tone="atomic"
                    className={
                      attributeItems.length % 2 === 1 && index === attributeItems.length - 1
                        ? "col-span-2 mx-auto max-w-[132px]"
                        : ""
                    }
                  >
                    {item}
                  </Pill>
                ))}
              </div>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-black/15 p-4">
              <div className="text-center text-sm font-medium text-zinc-300">{atomicGroups[2]?.title}</div>
              <div className="mt-3 grid grid-cols-3 gap-2 2xl:grid-cols-1">
                {metricItems.map((item) => (
                  <Pill
                    key={item}
                    tone="atomic"
                    className="mx-auto max-w-[156px] 2xl:max-w-none"
                  >
                    {item}
                  </Pill>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
