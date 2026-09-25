"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Magnetic } from "@/components/effects/Magnetic";
import { HeroBackdrop } from "@/components/three/HeroBackdrop";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Download, GitHub, Graduation, LinkedIn, Mail } from "@/components/ui/Icons";
import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { staggerContainer, wordReveal } from "@/lib/variants";

function KineticLine({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      transition={{ delayChildren: delay }}
      style={{ perspective: 800 }}
      aria-hidden
    >
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-top">
          <motion.span className="inline-block origin-bottom" variants={wordReveal}>
            {word}
          </motion.span>
          {i < text.split(" ").length - 1 ? " " : ""}
        </span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  const line1 = `${first} ${rest.slice(0, 2).join(" ")}`.trim();
  const line2 = rest.slice(2).join(" ");
  const edu = education[0];

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32">
      <HeroBackdrop />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="min-w-0">
          <motion.p
            className="mb-6 flex max-w-full items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted backdrop-blur sm:inline-flex"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="pulse-dot shrink-0 text-success" aria-hidden />
            <span className="min-w-0 truncate">
              <span className="font-mono uppercase tracking-[0.18em] text-accent">Currently</span>
              <span className="mx-2 text-muted-2">·</span>
              {profile.currently}
            </span>
          </motion.p>

          <h1 className="font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="sr-only">{profile.name}</span>
            <KineticLine text={line1} className="block" />
            {line2 && <KineticLine text={line2} className="text-gradient block" delay={0.18} />}
          </h1>

          <motion.p
            className="mt-5 font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {profile.role}
          </motion.p>

          <motion.p
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            {profile.positioning}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.4 }}
          >
            <Magnetic>
              <Button href={profile.cvUrl} size="lg" className="neon-border">
                <Download size={18} /> Download CV
              </Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button href="#research" variant="secondary" size="lg">
                Research
              </Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button href="#contact" variant="ghost" size="lg">
                Contact →
              </Button>
            </Magnetic>
          </motion.div>

          <motion.ul
            className="mt-10 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            aria-label="Profiles"
          >
            {[
              { href: profile.github, label: "GitHub", Icon: GitHub },
              { href: profile.linkedin, label: "LinkedIn", Icon: LinkedIn },
              { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="glass grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <Icon size={17} />
                </a>
              </li>
            ))}
            <li className="ml-2 hidden font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-2 sm:block">
              Press <kbd className="rounded border border-border px-1 py-0.5 text-muted">⌘K</kbd> to navigate
            </li>
          </motion.ul>
        </div>

        <motion.div
          className="relative mx-auto w-full min-w-0 max-w-sm lg:max-w-none"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="animate-float relative">
            <div className="glass neon-border relative aspect-[4/5] overflow-hidden rounded-[2rem] p-2">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <Image src="/hero.webp" alt={`Portrait of ${profile.name}`} fill priority sizes="(max-width: 1024px) 24rem, 32rem" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-semibold text-fg">{profile.shortName}</p>
                  <p className="text-xs text-muted">{edu.degree}</p>
                </div>
                <span className="glass grid h-10 w-10 place-items-center rounded-full text-accent">
                  <Graduation size={18} />
                </span>
              </div>
            </div>

            <motion.div
              className="glass absolute -left-4 top-8 z-10 hidden rounded-2xl px-3.5 py-2.5 text-xs sm:block lg:-left-10"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <p className="font-mono uppercase tracking-[0.16em] text-muted-2">Institution</p>
              <p className="mt-0.5 font-medium text-fg">{edu.institution}</p>
            </motion.div>

            <motion.div
              className="glass absolute -right-3 bottom-24 z-10 hidden rounded-2xl px-3.5 py-2.5 text-xs sm:block lg:-right-8"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.05 }}
            >
              <p className="font-mono uppercase tracking-[0.16em] text-muted-2">Class of</p>
              <p className="mt-0.5 font-medium text-fg">{edu.period.split("–").pop()?.trim()}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted-2 transition-colors hover:text-accent sm:flex"
      >
        Scroll <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
