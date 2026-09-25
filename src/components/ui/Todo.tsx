import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Visible, unmistakable placeholder for content that must come from PROFILE.md.
 * Rendered wherever a fact is missing so nothing is silently invented.
 */
export function Todo({ children, className, compact = false }: { children: ReactNode; className?: string; compact?: boolean }) {
  return (
    <div
      role="note"
      className={cn(
        "rounded-2xl border border-dashed border-accent-3/50 bg-accent-3/5 text-sm text-muted",
        compact ? "px-3 py-2" : "p-4 sm:p-5",
        className,
      )}
    >
      <span className="mr-2 inline-block rounded-md bg-accent-3/15 px-1.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent-3">
        TODO · PROFILE.md
      </span>
      <span>{children}</span>
    </div>
  );
}
