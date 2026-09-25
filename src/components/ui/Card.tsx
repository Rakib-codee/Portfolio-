"use client";

import { useCallback, type ComponentPropsWithoutRef, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  /** Cursor-follow spotlight highlight. */
  spotlight?: boolean;
  /** Rotating neon border. Use sparingly. */
  neon?: boolean;
  padded?: boolean;
};

export function Card({ className, spotlight = true, neon = false, padded = true, children, ...rest }: CardProps) {
  const onPointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    target.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <div
      onPointerMove={spotlight ? onPointerMove : undefined}
      className={cn(
        "glass rounded-3xl transition-[border-color,transform,box-shadow] duration-300 hover:border-border-strong",
        spotlight && "spotlight",
        neon && "neon-border",
        padded && "p-6 sm:p-7",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
