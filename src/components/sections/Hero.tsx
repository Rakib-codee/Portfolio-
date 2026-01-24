"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Button, Heading, Text } from "../ui";
import { links } from "@/content/links";

const floatingAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export function Hero() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] items-center min-h-[85vh]">
      {/* Text Content */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Status Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card)] border border-[var(--card-border)] shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-[var(--foreground)]">Available for new projects</span>
        </motion.div>

        {/* Main Headline - Bold & Memorable */}
        <div className="space-y-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-[var(--foreground)]">I build </span>
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">digital experiences</span>
            <br />
            <span className="text-[var(--foreground)]">that users </span>
            <span className="relative">
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">love</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-3 text-cyan-400"
                viewBox="0 0 100 12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.path
                  d="M2 8 Q50 2 98 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg text-[var(--muted)] font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Md Mahfujur Rahman Rakib · Full Stack Developer & Designer
          </motion.p>
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Text size="lg" muted className="max-w-xl leading-relaxed">
            I transform ideas into <span className="text-[var(--foreground)] font-medium">fast, beautiful, and accessible</span> web applications. 
            Specializing in React, Next.js, and modern design systems that drive real business results.
          </Text>
        </motion.div>

        {/* Mobile Profile Image - Shows only on mobile */}
        <motion.div
          className="lg:hidden relative w-full max-w-72 mx-auto aspect-square"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative h-full rounded-3xl bg-[var(--card)] border border-[var(--card-border)] overflow-hidden flex items-center justify-center shadow-lg">
            <div className="relative h-52 w-52 sm:h-60 sm:w-60 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/30">
              <Image
                src="/hero.webp"
                alt="Md Mahfujur Rahman Rakib"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Single Primary CTA + Secondary */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-xl overflow-hidden shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              See My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <a
            href="#contact"
            className="px-8 py-4 text-[var(--foreground)] font-medium rounded-xl border-2 border-[var(--card-border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="flex flex-wrap items-center gap-8 pt-6 border-t border-[var(--card-border)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div>
            <p className="text-2xl font-bold text-[var(--foreground)]">3+</p>
            <p className="text-sm text-[var(--muted)]">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--foreground)]">25+</p>
            <p className="text-sm text-[var(--muted)]">Projects Delivered</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--foreground)]">15+</p>
            <p className="text-sm text-[var(--muted)]">Happy Clients</p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href={links.github}
            className="p-3 rounded-xl bg-[var(--card)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href={links.linkedin}
            className="p-3 rounded-xl bg-[var(--card)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href={links.email}
            className="p-3 rounded-xl bg-[var(--card)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Avatar / Illustration - Desktop Only */}
      <motion.div
        className="relative w-full max-w-xl h-96 justify-self-center hidden lg:flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Animated glow background */}
        <motion.div
          className="absolute inset-0  rounded-full bg-linear-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main avatar container */}
        <motion.div
          className="relative h-full rounded-3xl bg-[var(--card)] border border-[var(--card-border)] backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-lg"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          {/* Geometric avatar */}
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              className="absolute -inset-8 rounded-full border-2 border-cyan-500/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Middle ring */}
            <motion.div
              className="absolute -inset-4 rounded-full border border-blue-500/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Real Profile Image */}
            <div className="relative h-80 w-80 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/30">
              <Image
                src="/hero.webp"
                alt="Md Mahfujur Rahman Rakib"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating dots */}
            <motion.div
              className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-cyan-400"
              animate={{ y: [-5, 5, -5], opacity: [1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 h-3 w-3 rounded-full bg-purple-400"
              animate={{ y: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
