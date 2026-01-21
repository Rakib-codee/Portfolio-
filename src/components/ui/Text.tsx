"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TextProps {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  size?: "sm" | "base" | "lg" | "xl";
}

export function Text({ children, className = "", muted = false, size = "base" }: TextProps) {
  const sizes = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <motion.p
      className={`${sizes[size]} ${muted ? "text-[var(--muted)]" : "text-[var(--foreground)]"} leading-relaxed ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
}
