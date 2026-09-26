"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/variants";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  /** Fraction of the element that must be visible before revealing. */
  amount?: number;
};

/** Scroll-reveal wrapper. Respects reduced motion through MotionConfig in Providers. */
export function Reveal({ children, className, variants = fadeUp, delay = 0, once = true, amount = 0.2 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Staggers direct children that are themselves motion elements with variants. */
export function RevealGroup({ children, className, stagger = 0.06, once = true, amount = 0.15 }: { children: ReactNode; className?: string; stagger?: number; once?: boolean; amount?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className, variants = fadeUp }: { children: ReactNode; className?: string; variants?: Variants }) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
