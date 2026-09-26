import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * The MR monogram. Two variants are shipped: the original for light mode and
 * one with the navy strokes lifted for dark mode. CSS in globals.css shows
 * exactly one of them based on html[data-theme].
 */
export function Logo({ size = 32, className, priority = false }: LogoProps) {
  return (
    <span className={cn("relative inline-block shrink-0", className)} style={{ width: size, height: size }} aria-hidden>
      <Image src="/logo.webp" alt="" width={size} height={size} priority={priority} className="logo-light" />
      <Image src="/logo-dark.webp" alt="" width={size} height={size} priority={priority} className="logo-dark absolute inset-0" />
    </span>
  );
}
