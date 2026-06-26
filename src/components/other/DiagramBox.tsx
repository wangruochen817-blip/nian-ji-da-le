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
        "rounded-[24px] border border-white/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.068),rgba(255,255,255,0.026))] shadow-[0_28px_72px_rgba(0,0,0,0.26)] backdrop-blur-[3px]",
        className,
      )}
    >
      {title ? (
        <div
          className={cn(
            "flex min-h-14 items-center justify-center rounded-t-[24px] border-b border-white/20 px-5 text-[15px] font-semibold text-zinc-100",
            titleClassName,
          )}
        >
          {title}
        </div>
      ) : null}
      <div className={cn("p-5", bodyClassName)}>{children}</div>
    </div>
  );
}
