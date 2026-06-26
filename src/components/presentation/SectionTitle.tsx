import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl space-y-4 ${alignClass}`}>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
        <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
        {eyebrow}
      </div>
      <h2 className="font-serif text-4xl leading-tight text-white md:text-6xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">{description}</p> : null}
    </div>
  );
}
