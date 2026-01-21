"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function Badge({ children, variant = "outline", className = "" }: BadgeProps) {
  const variants = {
    primary: "bg-cyan-500/20 text-cyan-600 border border-cyan-500/30",
    secondary: "bg-[var(--card)] text-[var(--muted)] border border-[var(--card-border)]",
    outline: "bg-transparent border border-cyan-500/50 text-cyan-500",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
