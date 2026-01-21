"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
  gradient?: boolean;
}

export function Heading({ children, level = 1, className = "", gradient = false }: HeadingProps) {
  const sizes = {
    1: "text-5xl sm:text-6xl md:text-7xl",
    2: "text-4xl sm:text-5xl md:text-6xl",
    3: "text-2xl sm:text-3xl md:text-4xl",
  };

  const Tag = `h${level}` as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Tag
        className={`font-bold leading-tight tracking-tight ${sizes[level]} ${
          gradient
            ? "bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            : "text-[var(--foreground)]"
        } ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
