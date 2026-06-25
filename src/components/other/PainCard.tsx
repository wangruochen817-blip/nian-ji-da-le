import { cn } from "@/lib/utils";

interface PainCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function PainCard({ title, description, className }: PainCardProps) {
  return (
    <article
      className={cn(
        "rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(64,72,92,0.72),rgba(24,29,41,0.94))] px-8 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_24px_48px_rgba(255,255,255,0.03),0_34px_72px_rgba(0,0,0,0.34)] backdrop-blur-[2px]",
        className,
      )}
    >
      <h3 className="text-[26px] font-semibold tracking-[0.06em] text-white">{title}</h3>
      <p className="mt-5 text-[14px] leading-7 text-zinc-200/88">{description}</p>
    </article>
  );
}
