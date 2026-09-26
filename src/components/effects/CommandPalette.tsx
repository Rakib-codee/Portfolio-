"use client";

import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { navItems } from "@/lib/site";

type PaletteContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
  /** Element that had focus when the palette opened; focus returns here on close. */
  openerRef: React.RefObject<HTMLElement | null>;
};

const PaletteContext = createContext<PaletteContextValue>({ open: false, setOpen: () => {}, toggle: () => {}, openerRef: { current: null } });

export function useCommandPalette() {
  return useContext(PaletteContext);
}

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const [open, setOpenState] = useState(false);
  const openerRef = useRef<HTMLElement | null>(null);

  // Record the opener before React re-renders, so autoFocus inside the
  // dialog cannot overwrite it.
  const setOpen = useCallback((next: boolean) => {
    if (next) openerRef.current = document.activeElement as HTMLElement | null;
    setOpenState(next);
  }, []);

  const toggle = useCallback(() => setOpen(!open), [open, setOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  const value = useMemo(() => ({ open, setOpen, toggle, openerRef }), [open, setOpen, toggle]);

  return (
    <PaletteContext.Provider value={value}>
      {children}
      <CommandPalette />
    </PaletteContext.Provider>
  );
}

function Icon({ path }: { path: string }) {
  return (
    <svg className="h-4 w-4 shrink-0 text-muted-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={path} />
    </svg>
  );
}

const icons = {
  section: "M4 6h16M4 12h16M4 18h10",
  project: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  page: "M6 3h9l5 5v13H6zM14 3v6h6",
  theme: "M12 3a9 9 0 1 0 9 9c0-.5 0-1-.1-1.4A5.5 5.5 0 0 1 12.4 3z",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
};

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

function CommandPalette() {
  const { open, setOpen, openerRef } = useCommandPalette();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const dialogRef = useRef<HTMLDivElement>(null);

  // Focus management: move focus into the dialog on open, restore it to the
  // opener (recorded by the provider) on close.
  useEffect(() => {
    if (!open) return;
    const opener = openerRef.current;
    dialogRef.current?.querySelector<HTMLElement>("[cmdk-input]")?.focus();
    return () => {
      opener?.focus?.();
    };
  }, [open, openerRef]);

  // Focus trap: keep Tab / Shift+Tab cycling inside the dialog.
  const trapTab = useCallback((event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !dialogRef.current) return;
    const nodes = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null);
    if (nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && (active === first || !dialogRef.current.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }, []);

  const run = useCallback(
    (action: () => void) => {
      setOpen(false);
      // Let the dialog close before navigating so the scroll target is measured correctly.
      window.setTimeout(action, 10);
    },
    [setOpen],
  );

  const goToSection = useCallback(
    (id: string) => {
      if (window.location.pathname !== "/") {
        router.push(`/#${id}`);
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${id}`);
      }
    },
    [router],
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <button type="button" aria-label="Close command palette" className="absolute inset-0 bg-bg/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            onKeyDown={trapTab}
            className="glass relative w-full max-w-xl overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <Command label="Site navigation" loop onKeyDown={(e) => e.key === "Escape" && setOpen(false)}>
              <div className="flex items-center gap-2 border-b border-border px-2">
                <Icon path="M21 21l-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
                <Command.Input autoFocus placeholder="Jump to a section, project or page…" />
                <kbd className="hidden rounded-md border border-border px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-2 sm:inline">ESC</kbd>
              </div>
              <Command.List>
                <Command.Empty>No results.</Command.Empty>

                <Command.Group heading="Sections">
                  <Command.Item value="home top hero" onSelect={() => run(() => goToSection("top"))}>
                    <Icon path={icons.section} /> Home
                  </Command.Item>
                  {navItems.map((item) => (
                    <Command.Item key={item.id} value={item.label} onSelect={() => run(() => goToSection(item.id))}>
                      <Icon path={icons.section} /> {item.label}
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Projects">
                  {projects.map((p) => (
                    <Command.Item key={p.slug} value={`${p.title} ${p.tags.join(" ")}`} onSelect={() => run(() => router.push(`/projects/${p.slug}`))}>
                      <Icon path={icons.project} /> {p.title}
                      <span className="ml-auto truncate font-mono text-[0.65rem] uppercase tracking-wider text-muted-2">{p.tags[0]}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Pages & actions">
                  <Command.Item value="academic cv resume print" onSelect={() => run(() => router.push("/cv"))}>
                    <Icon path={icons.page} /> Academic CV
                  </Command.Item>
                  <Command.Item value={`toggle theme ${theme === "dark" ? "light" : "dark"} mode`} onSelect={() => run(toggleTheme)}>
                    <Icon path={icons.theme} /> Switch to {theme === "dark" ? "light" : "dark"} mode
                  </Command.Item>
                  <Command.Item value="download cv pdf" onSelect={() => run(() => window.open(profile.cvUrl, "_blank", "noopener"))}>
                    <Icon path={icons.link} /> Download CV (PDF)
                  </Command.Item>
                  <Command.Item value="github" onSelect={() => run(() => window.open(profile.github, "_blank", "noopener"))}>
                    <Icon path={icons.link} /> GitHub
                  </Command.Item>
                  <Command.Item value="linkedin" onSelect={() => run(() => window.open(profile.linkedin, "_blank", "noopener"))}>
                    <Icon path={icons.link} /> LinkedIn
                  </Command.Item>
                  <Command.Item value="email contact" onSelect={() => run(() => (window.location.href = `mailto:${profile.email}`))}>
                    <Icon path={icons.mail} /> Email {profile.shortName}
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
