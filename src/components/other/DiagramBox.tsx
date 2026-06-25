import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DiagramBoxProps {
  title?: string;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
}

export default function DiagramBox({
  title,
  children,
  className,
  titleClassName,
  bodyClassName,
}: DiagramBoxProps) {
  return (
    <div
      className={cn(
        "rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] shadow-[0_24px_60px_rgba(0,0,0,0.24)]",
        className,
      )}
    >
      {title ? (
        <div
          className={cn(
            "flex min-h-12 items-center justify-center rounded-t-[20px] border-b border-white/10 px-4 text-[14px] font-semibold text-zinc-100",
            titleClassName,
          )}
        >
          {title}
        </div>
      ) : null}
      <div className={cn("p-4", bodyClassName)}>{children}</div>
    </div>
  );
}
