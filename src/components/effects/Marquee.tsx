import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
};

/** Infinite horizontal ticker. Pure CSS, pauses on hover, disabled under reduced motion. */
export function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn("relative overflow-hidden py-3", className)}
      style={{ maskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)" }}
      aria-hidden
    >
      <div className="marquee-track gap-8">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.22em] text-muted-2">
            {item}
            <span className="h-1 w-1 rounded-full bg-accent/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
