"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CommandPaletteProvider } from "@/components/effects/CommandPalette";
import { SmoothScroll } from "@/components/effects/SmoothScroll";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <CommandPaletteProvider>
          <SmoothScroll />
          {children}
        </CommandPaletteProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}
