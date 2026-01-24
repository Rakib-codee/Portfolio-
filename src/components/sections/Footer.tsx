"use client";

import { motion } from "framer-motion";
import { links } from "@/content/links";

const currentYear = 2026;

const footerLinks = {
  navigation: [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ],
  social: [
    { href: links.github, label: "GitHub" },
    { href: links.linkedin, label: "LinkedIn" },
    { href: links.email, label: "Email" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--card-border)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <motion.a
              href="#hero"
              className="inline-block"
              whileHover={{ scale: 1.02 }}
            >
              <p className="font-[family-name:var(--font-space-grotesk)] text-xl tracking-wide font-extrabold">Mahfujur <span className="text-orange-500">Rahman</span></p>
            </motion.a>
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xs">
              Full Stack Developer & Designer crafting beautiful, performant web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-4">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center items-center mx-auto text-[var(--muted)]">
            © {currentYear} Md Mahfujur Rahman Rakib. All rights reserved.
          </p>
    
        </div>
      </div>
    </footer>
  );
}
