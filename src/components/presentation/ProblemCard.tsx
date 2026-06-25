import { ArrowUpRight } from "lucide-react";

export default function ProblemCard({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <article className="group rounded-[28px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm transition duration-500 hover:border-cyan-300/30 hover:bg-white/[0.075]">
      <div className="mb-10 flex items-center justify-between">
        <span className="text-xs tracking-[0.3em] text-zinc-500">{index}</span>
        <ArrowUpRight className="h-4 w-4 text-zinc-500 transition duration-500 group-hover:text-cyan-300" />
      </div>
      <h3 className="text-lg font-semibold leading-7 text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-zinc-300">{description}</p>
    </article>
  );
}
