import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  gradient?: boolean;
  id?: string;
};

const sizes: Record<NonNullable<HeadingProps["level"]>, string> = {
  1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  2: "text-3xl sm:text-4xl md:text-5xl",
  3: "text-xl sm:text-2xl",
  4: "text-base sm:text-lg",
};

export function Heading({ children, level = 2, className, gradient = false, id }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag
      id={id}
      className={cn(
        "font-display font-bold leading-[1.05] tracking-tight text-balance",
        sizes[level],
        gradient ? "text-gradient" : "text-fg",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
