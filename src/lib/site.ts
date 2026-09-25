import { profile } from "@/content/profile";

/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL in production if you move to
 * a custom domain. The default is the current Vercel deployment.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-alpha-orpin-15.vercel.app").replace(/\/$/, "");

export const siteName = `${profile.name} · Portfolio`;

export const siteDescription = `${profile.role}. ${profile.positioning}`;

export const navItems = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#research", label: "Research", id: "research" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/#activities", label: "Activities", id: "activities" },
  { href: "/#contact", label: "Contact", id: "contact" },
] as const;
