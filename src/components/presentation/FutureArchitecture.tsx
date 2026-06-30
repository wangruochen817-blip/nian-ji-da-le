type ToolGroup = {
  title: string;
  items: string[];
};

type AtomicGroup = {
  title: string;
  items: string[];
};

type Opportunity = {
  index: string;
  title: string;
  description: string;
};

function RowLabel({ text, accent }: { text: string; accent: string }) {
  return (
    <div className={`flex items-center justify-center rounded-[18px] border px-3 py-4 text-xs font-medium tracking-[0.28em] ${accent}`}>
      {text}
    </div>
  );
}

function AgentNode({ label }: { label: string }) {
  return (
    <div className="mx-auto w-full max-w-[320px] rounded-[16px] border border-amber-200/20 bg-amber-300/10 px-4 py-3 text-center text-sm font-medium text-amber-50">
      {label}
    </div>
  );
}

export default function FutureArchitecture({
  managedScenarioBars,
  skillGroups,
  toolGroups,
  atomicGroups,
  opportunities,
}: {
  managedScenarioBars: string[];
  skillGroups: string[];
  toolGroups: ToolGroup[];
  atomicGroups: AtomicGroup[];
  opportunities: Opportunity[];
}) {
  return (
    <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr]">
      <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
        <div className="grid gap-4 lg:grid-cols-[56px_1fr]">
          <RowLabel text="Scenario" accent="border-rose-300/30 bg-rose-300/10 text-rose-100" />
          <div className="grid gap-3 md:grid-cols-3">
            {managedScenarioBars.map((item) => (
              <div
                key={item}
                className="rounded-[16px] border border-rose-300/20 bg-rose-300/10 px-4 py-4 text-center text-sm font-medium text-rose-50"
              >
                {item}
              </div>
            ))}
          </div>

          <div />
          <AgentNode label="Workflow Agent" />

          <RowLabel text="Skill" accent="border-rose-300/20 bg-white/[0.03] text-zinc-300" />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((item) => (
              <div
                key={item}
                className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-5 text-center text-sm text-white"
              >
                {item}
              </div>
            ))}
          </div>

          <div />
          <AgentNode label="Workflow Agent" />

          <RowLabel text="Tools" accent="border-amber-200/25 bg-amber-200/10 text-amber-100" />
          <div className="rounded-[20px] border border-amber-200/15 bg-amber-100/[0.03] p-4">
            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              {toolGroups.map((group) => (
                <div key={group.title} className="rounded-[18px] border border-white/10 bg-black/15 p-4">
                  <div className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">{group.title}</div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-2 text-xs text-amber-50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div />
          <AgentNode label="Workflow Agent" />

          <RowLabel text="Atomic Capabilities" accent="border-lime-200/25 bg-lime-200/10 text-lime-50" />
          <div className="rounded-[20px] border border-lime-200/15 bg-lime-100/[0.03] p-4">
            <div className="grid gap-4 xl:grid-cols-3">
              {atomicGroups.map((group) => (
                <div key={group.title} className="rounded-[18px] border border-white/10 bg-black/15 p-4">
                  <div className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">{group.title}</div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-lime-200/20 bg-lime-200/10 px-3 py-2 text-xs text-lime-50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {opportunities.map((item) => (
          <article key={item.index} className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
            <div className="text-xs tracking-[0.28em] text-zinc-500">{item.index}</div>
            <h4 className="mt-6 text-2xl leading-9 text-white">{item.title}</h4>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
