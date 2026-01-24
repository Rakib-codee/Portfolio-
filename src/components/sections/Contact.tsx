"use client";

import { motion } from "framer-motion";
import { links } from "@/content/links";
import { Heading, Text } from "../ui";

const contactMethods = [
  {
    title: "Email",
    value: "rakib@example.com",
    href: links.email,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    value: "Connect with me",
    href: links.linkedin,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    title: "GitHub",
    value: "View my code",
    href: links.github,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <div className="space-y-12 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center space-y-4 w-full flex flex-col items-center">
        <motion.span
          className="inline-block text-cyan-400 font-mono text-sm tracking-wider uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.span>
        <Heading level={2}>Let&apos;s Work Together</Heading>
        <Text muted className="max-w-2xl text-center">
          I&apos;m currently open for freelance projects, full-time opportunities, and exciting collaborations. 
          Have a project in mind? Let&apos;s make it happen.
        </Text>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] shadow-[var(--shadow)]"
        >
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--foreground)]">Name</label>
                <input
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl bg-[var(--background)] border border-[var(--card-border)] px-4 py-3.5 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--foreground)]">Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl bg-[var(--background)] border border-[var(--card-border)] px-4 py-3.5 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Subject</label>
              <input
                required
                placeholder="Project Inquiry"
                className="w-full rounded-xl bg-[var(--background)] border border-[var(--card-border)] px-4 py-3.5 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project, timeline, and budget..."
                className="w-full rounded-xl bg-[var(--background)] border border-[var(--card-border)] px-4 py-3.5 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 px-6 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Send Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                className="flex items-center gap-4 p-5 rounded-xl bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--accent)]/30 transition-all group shadow-[var(--shadow)]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors">
                  {method.icon}
                </div>
                <div>
                  <p className="text-sm text-[var(--muted)]">{method.title}</p>
                  <p className="text-[var(--foreground)] font-medium group-hover:text-[var(--accent)] transition-colors">{method.value}</p>
                </div>
                <svg className="w-5 h-5 text-[var(--muted)] ml-auto group-hover:text-[var(--accent)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            ))}
          </div>

          {/* Availability Status */}
          <div className="p-6 rounded-xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-500 font-medium">Available for new projects</span>
            </div>
            <Text muted size="sm">
              I typically respond within 24 hours. Currently based in Bangladesh (GMT+6).
            </Text>
          </div>

          {/* Quick Response Promise */}
          <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--card-border)] shadow-[var(--shadow)]">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-[var(--accent)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-medium text-[var(--foreground)] mb-1">Quick Response Time</p>
                <Text muted size="sm">
                  I value clear communication and will respond to your inquiry as soon as possible with a detailed response.
                </Text>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
