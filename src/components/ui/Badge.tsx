import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  variant?: "accent" | "neutral" | "outline" | "success" | "warning";
  className?: string;
};

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  accent: "bg-accent/12 text-accent border-accent/30",
  neutral: "bg-surface-strong text-muted border-border",
  outline: "bg-transparent text-fg border-border-strong",
  success: "bg-success/12 text-success border-success/30",
  warning: "bg-accent-3/12 text-accent-3 border-accent-3/30",
};

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-[0.12em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
