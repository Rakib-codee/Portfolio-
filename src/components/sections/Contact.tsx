import { Reveal } from "@/components/effects/Reveal";
import { Card, Section, Todo } from "@/components/ui";
import { ArrowUpRight, Download, GitHub, LinkedIn, Mail } from "@/components/ui/Icons";
import { profile } from "@/content/profile";
import { ContactForm } from "./ContactForm";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin, Icon: LinkedIn },
  { label: "GitHub", value: `@${profile.githubUser}`, href: profile.github, Icon: GitHub },
  { label: "CV", value: "Download PDF", href: profile.cvUrl, Icon: Download },
];

export function Contact() {
  return (
    <Section id="contact" index="06" eyebrow="Contact" title="Let’s talk research, internships or ideas." description="Admission committees, supervisors and recruiters: the form goes straight to my inbox.">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <Card className="relative" spotlight={false}>
            <ContactForm />
          </Card>
        </Reveal>

        <Reveal delay={0.08} className="space-y-3">
          {channels.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass spotlight group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-accent/50"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
                <Icon size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-2">{label}</span>
                <span className="block truncate text-sm text-fg">{value}</span>
              </span>
              <ArrowUpRight size={16} className="text-muted-2 transition-colors group-hover:text-accent" />
            </a>
          ))}
          {profile.location && profile.timezone ? (
            <p className="px-1 text-xs text-muted">
              Based in {profile.location} · {profile.timezone}
            </p>
          ) : (
            <Todo compact>Location and timezone line.</Todo>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
