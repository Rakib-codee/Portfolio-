import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string | null;
  alt: string;
  title: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Project screenshot, or a generated placeholder when no image exists.
 * The placeholder uses the project's initials so cards stay distinguishable.
 */
export function ProjectImage({ src, alt, title, sizes, priority = false, className }: Props) {
  if (src) {
    return <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={cn("object-cover", className)} />;
  }
  const initials = title
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("bg-grid absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 via-bg-elev to-accent-2/20", className)}
    >
      <span className="font-display text-5xl font-bold tracking-tight text-fg/70 sm:text-7xl">{initials}</span>
    </div>
  );
}
