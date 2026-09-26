import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,box-shadow,filter] duration-200 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg shadow-[0_0_0_1px_var(--accent),0_10px_40px_-10px_var(--glow)] hover:shadow-[0_0_0_1px_var(--accent),0_16px_50px_-8px_var(--glow)] hover:brightness-110",
  secondary: "glass text-fg hover:border-border-strong hover:bg-surface-strong",
  ghost: "text-muted hover:text-fg hover:bg-surface-strong",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & { href: string };
type NativeButtonProps = CommonProps & Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & { href?: undefined };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function classes(variant: Variant, size: Size, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

function LinkButton({ href, variant = "primary", size = "md", className, children, ...rest }: LinkButtonProps) {
  const external = isExternal(href);
  if (external || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a href={href} className={classes(variant, size, className)} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

function NativeButton({ variant = "primary", size = "md", className, children, type = "button", ...rest }: NativeButtonProps) {
  return (
    <button type={type} className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function Button(props: ButtonProps) {
  // tsconfig has strict:false, so undefined-based narrowing does not discriminate the union.
  if (typeof props.href === "string") return <LinkButton {...(props as LinkButtonProps)} />;
  return <NativeButton {...(props as NativeButtonProps)} />;
}
