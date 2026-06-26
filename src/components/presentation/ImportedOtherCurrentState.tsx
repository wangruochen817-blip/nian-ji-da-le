import DiagramBox from "@/components/other/DiagramBox";
import PainCard from "@/components/other/PainCard";

const batchItems = ["批量编辑", "批量导入/导出", "批量复制"];
const campaignFields = ["Objective", "Budget", "CBO", "..."];
const adGroupFields = ["Bid", "Targeting", "Placement", "..."];
const adFields = ["创意上传/更换", "名字编辑", "URL设置/编辑", "..."];
const attributeFields = ["Objectives", "Signal", "Label", "Placement", "Attribution", "..."];
const metricFields = ["Reach", "Engagement", "Conversion"];

function SideTag({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-[16px] border border-white/30 bg-white/[0.05] px-4 text-[19px] font-semibold tracking-[0.09em] text-zinc-100 shadow-[0_16px_38px_rgba(0,0,0,0.18)] ${className}`}
    >
      {label}
    </div>
  );
}

function SmallPill({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex h-11 items-center justify-center rounded-[14px] border border-white/30 bg-white/[0.045] px-3 text-[12px] font-medium text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] ${className}`}
    >
      {label}
    </div>
  );
}

export default function ImportedOtherCurrentState() {
  return (
    <section className="flex w-full items-stretch gap-7">
      <div className="min-w-0 flex-1 rounded-[36px] border border-white/15 bg-white/[0.035] p-7 shadow-[0_44px_128px_rgba(0,0,0,0.38)] backdrop-blur-xl">
        <div className="grid grid-cols-[84px_minmax(0,1fr)] grid-rows-[120px_280px_336px] gap-x-5 gap-y-5">
          <div className="flex flex-col gap-4">
            <SideTag label="场景" className="h-[56px]" />
            <SideTag label="技能" className="h-[56px]" />
          </div>

          <DiagramBox className="flex items-center justify-center" bodyClassName="flex h-full items-center justify-center p-0">
            <p className="text-[22px] font-semibold tracking-[0.1em] text-zinc-100">操盘手线下沉淀</p>
          </DiagramBox>

          <SideTag label="工具" className="mt-1 h-[calc(100%+10px)]" />

          <div className="relative flex flex-col gap-3">
            <DiagramBox title="自动规则" className="h-[52px]" bodyClassName="hidden" titleClassName="min-h-[52px] rounded-[24px] border-b-0" />

            <div className="grid flex-1 grid-cols-[1.26fr_0.74fr] gap-4">
              <DiagramBox title="批量" className="h-full" bodyClassName="grid gap-2.5 p-3">
                {batchItems.map((item) => (
                  <SmallPill key={item} label={item} />
                ))}
              </DiagramBox>

              <div className="grid h-full grid-rows-[1fr_1fr_0.95fr] gap-3">
                <DiagramBox title="Reporting" className="h-full" bodyClassName="hidden" titleClassName="min-h-full rounded-[24px] border-b-0 px-3 text-[14px]" />
                <DiagramBox title="Status" className="h-full" bodyClassName="hidden" titleClassName="min-h-full rounded-[24px] border-b-0 px-3 text-[14px]" />
                <div className="grid grid-cols-2 gap-3">
                  <DiagramBox title="Filter" className="h-full" bodyClassName="hidden" titleClassName="min-h-full rounded-[24px] border-b-0 px-2 text-[13px]" />
                  <DiagramBox title="Columns" className="h-full" bodyClassName="hidden" titleClassName="min-h-full rounded-[24px] border-b-0 px-2 text-[13px]" />
                </div>
              </div>
            </div>
          </div>

          <SideTag label="原子能力" className="mt-4 h-[372px]" />

          <div className="grid grid-cols-[1.26fr_0.74fr] gap-4 pt-4">
            <DiagramBox title="Campaign 创建" className="h-full" bodyClassName="space-y-2.5 p-4">
              <SmallPill label="Campaign" className="h-10 text-[11px]" />
              <div className="grid grid-cols-[1fr_1fr_1fr_54px] gap-2.5">
                {campaignFields.map((item) => (
                  <SmallPill key={item} label={item} className="h-10 px-2.5 text-[11px]" />
                ))}
              </div>

              <SmallPill label="Ad group" className="h-10 text-[11px]" />
              <div className="grid grid-cols-[0.92fr_1.02fr_0.92fr_40px] gap-2">
                {adGroupFields.map((item) => (
                  <SmallPill key={item} label={item} className="h-10 px-1.5 text-[10px]" />
                ))}
              </div>

              <SmallPill label="Ad" className="h-10 text-[11px]" />
              <div className="grid grid-cols-[1.08fr_0.92fr_1.08fr_46px] gap-2">
                {adFields.map((item) => (
                  <SmallPill key={item} label={item} className="h-10 px-2 text-[10px]" />
                ))}
              </div>
            </DiagramBox>

            <div className="grid gap-4">
              <DiagramBox
                title="Campaign 属性"
                className="h-full"
                titleClassName="px-4 text-[14px] tracking-normal"
                bodyClassName="grid grid-cols-3 gap-1.5 p-2.5"
              >
                {attributeFields.map((item) => (
                  <SmallPill key={item} label={item} className="h-[46px] px-1 text-[10px] leading-tight" />
                ))}
              </DiagramBox>

              <DiagramBox title="Campaign 指标" className="h-full" titleClassName="px-4 text-[14px] tracking-normal" bodyClassName="grid grid-cols-3 gap-2 p-3">
                {metricFields.map((item) => (
                  <SmallPill key={item} label={item} className="h-[70px] px-1 text-[10px]" />
                ))}
              </DiagramBox>
            </div>
          </div>
        </div>
      </div>

      <aside className="w-[344px] rounded-[30px] border border-white/15 bg-[linear-gradient(180deg,rgba(20,22,31,0.965),rgba(30,32,40,0.925))] p-7 shadow-[0_44px_128px_rgba(0,0,0,0.42)]">
        <div className="rounded-[18px] border border-[#ffb7bd]/30 bg-white/[0.045] py-3 text-center text-[22px] font-semibold tracking-[0.12em] text-zinc-50">
          痛点
        </div>

        <div className="mt-6 flex h-[calc(100%-56px-24px)] flex-col gap-7">
          <PainCard
            title="难复用"
            description="操盘手面对复杂场景的技能、工作流，只存在个人的脑子里，下次使用要重新组装"
            className="min-h-[180px]"
          />
          <PainCard
            title="难推广"
            description="平台只提供工具，只有“想学”的人和“被教”的人会用"
            className="min-h-[164px]"
          />
          <PainCard
            title="耗人力"
            description="原子能力的变动，都需要工具开发单独适配，且总有缺漏"
            className="min-h-[276px] flex-1"
          />
        </div>
      </aside>
    </section>
  );
}
