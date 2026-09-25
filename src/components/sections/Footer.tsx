import Link from "next/link";
import { GitHub, LinkedIn, Mail } from "@/components/ui/Icons";
import { profile } from "@/content/profile";
import { navItems } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" aria-hidden />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-bold tracking-tight">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">{profile.role}</p>
          <ul className="mt-5 flex gap-2" aria-label="Profiles">
            {[
              { href: profile.github, label: "GitHub", Icon: GitHub },
              { href: profile.linkedin, label: "LinkedIn", Icon: LinkedIn },
              { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} className="glass grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:text-accent">
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-2">Navigate</p>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="text-muted transition-colors hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/cv" className="text-muted transition-colors hover:text-fg">
                Academic CV
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-2">Connect</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="text-muted transition-colors hover:text-fg">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-fg">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-fg">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-fg">
                CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js, React Three Fiber and Framer Motion ·{" "}
            <a href="https://github.com/Rakib-codee/portfolio-" target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              Source
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
