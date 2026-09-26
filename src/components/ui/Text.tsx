import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextProps = {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  size?: "sm" | "base" | "lg";
  as?: "p" | "span" | "div";
};

const sizes = { sm: "text-sm", base: "text-base", lg: "text-lg" };

export function Text({ children, className, muted = true, size = "base", as: Tag = "p" }: TextProps) {
  return <Tag className={cn(sizes[size], "leading-relaxed", muted ? "text-muted" : "text-fg", className)}>{children}</Tag>;
}
