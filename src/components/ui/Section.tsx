"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: "sm" | "md" | "lg" | "none";
  divider?: boolean;
  dividerPosition?: "top" | "bottom" | "both";
}

const spacingClasses = {
  sm: "py-12",
  md: "py-24",
  lg: "py-32",
  none: "py-0",
};

function SectionDivider({ position = "top" }: { position?: "top" | "bottom" }) {
  return (
    <div className={`absolute left-0 right-0 ${position === "top" ? "-top-4" : "-bottom-4"} z-10`}>
      <div className="max-w-4xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className={`flex justify-center ${position === "top" ? "-mt-3" : "-mt-3"}`}>
          <div className="w-6 h-6 rotate-45 border border-cyan-500/30 bg-[var(--background)]" />
        </div>
      </div>
    </div>
  );
}

export function Section({ 
  children, 
  className = "", 
  id,
  spacing = "md",
  divider = false,
  dividerPosition = "top"
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`relative min-h-screen ${spacingClasses[spacing]} px-4 sm:px-8 md:px-16 flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Top Divider */}
      {divider && (dividerPosition === "top" || dividerPosition === "both") && (
        <SectionDivider position="top" />
      )}
      
      <div className="w-full max-w-6xl">{children}</div>
      
      {/* Bottom Divider */}
      {divider && (dividerPosition === "bottom" || dividerPosition === "both") && (
        <SectionDivider position="bottom" />
      )}
    </motion.section>
  );
}
