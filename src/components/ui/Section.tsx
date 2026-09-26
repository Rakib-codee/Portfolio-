import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "./Heading";
import { Reveal } from "@/components/effects/Reveal";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: ReactNode;
  /** Numbering shown next to the eyebrow, e.g. "01". */
  index?: string;
};

export function Section({ id, children, className, eyebrow, title, description, index }: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-20 sm:py-28", className)} aria-labelledby={title ? `${id}-title` : undefined}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {(eyebrow || title) && (
          <Reveal className="mb-10 max-w-3xl sm:mb-14">
            {eyebrow && (
              <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {index && <span className="text-muted-2">{index}</span>}
                <span className="h-px w-8 bg-accent/60" aria-hidden />
                {eyebrow}
              </p>
            )}
            {title && (
              <Heading level={2} id={`${id}-title`}>
                {title}
              </Heading>
            )}
            {description && <div className="mt-4 text-base text-muted sm:text-lg">{description}</div>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
