type ToolkitColumn = {
  title: string;
  items: string[];
};

export default function ToolkitMap({ columns }: { columns: ToolkitColumn[] }) {
  return (
    <div className="grid gap-5 xl:grid-cols-3">
      {columns.map((column) => (
        <article key={column.title} className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">Toolkit Domain</p>
          <h3 className="mt-4 text-2xl text-white">{column.title}</h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {column.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
