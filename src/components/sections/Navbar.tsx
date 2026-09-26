"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { useCommandPalette } from "@/components/effects/CommandPalette";
import { Close, CommandKey, FileText, Menu, Moon, Sun } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { profile } from "@/content/profile";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { theme, toggleTheme } = useTheme();
  const palette = useCommandPalette();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = navItems.map((n) => document.getElementById(n.id)).filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>

      <motion.header
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "flex w-full max-w-6xl items-center gap-2 rounded-full border px-2 py-2 transition-all duration-300",
            scrolled || open ? "glass border-border shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : "border-transparent bg-transparent",
          )}
        >
          <Link href="/" className="group flex items-center gap-2.5 rounded-full px-2.5 py-1.5" aria-label={`${profile.name}, home`}>
            <Logo size={36} priority className="transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">{profile.shortName}</span>
          </Link>

          <ul className="mx-auto hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = isHome && active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                      isActive ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {isActive && (
                      <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-surface-strong" transition={{ type: "spring", stiffness: 400, damping: 32 }} aria-hidden />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="ml-auto flex items-center gap-1 lg:ml-0">
            <Link href="/cv" className="hidden h-9 items-center gap-1.5 rounded-full px-3 text-sm text-muted transition-colors hover:bg-surface-strong hover:text-fg md:inline-flex">
              <FileText size={16} /> CV
            </Link>
            <button
              type="button"
              onClick={palette.toggle}
              className="hidden h-9 items-center gap-2 rounded-full border border-border px-3 text-xs text-muted transition-colors hover:border-border-strong hover:text-fg md:inline-flex"
              aria-label="Open command palette"
            >
              <CommandKey size={14} />
              <span className="font-mono">K</span>
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-strong hover:text-fg"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={theme} initial={{ rotate: -60, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 60, opacity: 0 }} transition={{ duration: 0.18 }} className="grid place-items-center">
                  {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-strong hover:text-fg lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <Close size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button type="button" aria-label="Close menu" className="absolute inset-0 bg-bg/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              className="glass absolute inset-x-3 top-[4.5rem] rounded-3xl p-3"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-2xl px-4 py-3 text-base text-fg transition-colors hover:bg-surface-strong">
                      {item.label}
                      <span className="font-mono text-xs text-muted-2">→</span>
                    </a>
                  </li>
                ))}
                <li>
                  <Link href="/cv" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-2xl px-4 py-3 text-base text-fg transition-colors hover:bg-surface-strong">
                    <FileText size={16} /> Academic CV
                  </Link>
                </li>
              </ul>
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border pt-3">
                <button type="button" onClick={() => { setOpen(false); palette.setOpen(true); }} className="flex items-center justify-center gap-2 rounded-2xl bg-surface-strong px-4 py-3 text-sm text-fg">
                  <CommandKey size={14} /> Search
                </button>
                <button type="button" onClick={toggleTheme} className="flex items-center justify-center gap-2 rounded-2xl bg-surface-strong px-4 py-3 text-sm text-fg">
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />} {theme === "dark" ? "Light" : "Dark"} mode
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
