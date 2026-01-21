"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      className={`bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-6 transition-all duration-300 shadow-[var(--shadow)] ${
        hover ? "hover:border-[var(--accent)]/50 hover:shadow-lg hover:shadow-[var(--accent)]/10" : ""
      } ${className}`}
      whileHover={
        hover ? { y: -4, boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.1)" } : {}
      }
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
