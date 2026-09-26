import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/effects/Reveal";
import { Badge, Card, Heading, Section, Text, Todo } from "@/components/ui";
import { showTodos } from "@/components/ui/Todo";
import { ArrowRight, Flask, Graduation, Sparkle } from "@/components/ui/Icons";
import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { scaleIn } from "@/lib/variants";
import { cn } from "@/lib/utils";

function CardLabel({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-2">
      {icon && <span className="text-accent">{icon}</span>}
      {children}
    </p>
  );
}

export function About() {
  const hasLanguages = profile.languages.length > 0;
  const halfSpan = hasLanguages ? "md:col-span-2" : "md:col-span-3";

  return (
    <Section id="about" index="01" eyebrow="About" title="Student, researcher, builder." description="Who I am in one screen. Every fact here is also in the printable CV.">
      <RevealGroup className="grid gap-4 md:grid-cols-6">
        <RevealItem variants={scaleIn} className="md:col-span-4">
          <Card className="h-full">
            <CardLabel icon={<Sparkle size={14} />}>Bio</CardLabel>
            <div className="space-y-4">
              {profile.bio.map((paragraph) => (
                <Text key={paragraph} className="text-[1.02rem]">
                  {paragraph}
                </Text>
              ))}
            </div>
            <Link href="/cv" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
              Read the academic CV <ArrowRight size={15} />
            </Link>
          </Card>
        </RevealItem>

        <RevealItem variants={scaleIn} className="md:col-span-2">
          <Card className="h-full">
            <CardLabel icon={<Graduation size={14} />}>Education</CardLabel>
            {education.map((edu) => (
              <div key={edu.degree} className="space-y-1.5">
                <Heading level={3} className="text-lg sm:text-xl">
                  {edu.degree}
                </Heading>
                <p className="text-sm text-fg">
                  {edu.institution}, {edu.location}
                </p>
                <p className="font-mono text-xs text-accent">{edu.period}</p>
                {edu.summary && <p className="pt-2 text-sm text-muted">{edu.summary}</p>}
                {edu.gpa ? <p className="text-sm text-fg">{edu.gpa}</p> : <Todo compact className="mt-3">GPA or class rank.</Todo>}
                {edu.coursework.length > 0 && (
                  <div className="pt-3">
                    <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-2">Relevant coursework</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <li key={course} className="rounded-md bg-surface-strong px-2 py-0.5 text-[0.72rem] text-muted">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </Card>
        </RevealItem>

        <RevealItem variants={scaleIn} className={halfSpan}>
          <Card className="h-full">
            <CardLabel icon={<Flask size={14} />}>Research interests</CardLabel>
            {profile.researchInterests.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {profile.researchInterests.map((interest) => (
                  <li key={interest}>
                    <Badge variant="accent">{interest}</Badge>
                  </li>
                ))}
              </ul>
            ) : (
              <Todo>Three to five research interests.</Todo>
            )}
          </Card>
        </RevealItem>

        {hasLanguages && (
          <RevealItem variants={scaleIn} className="md:col-span-2">
            <Card className="h-full">
              <CardLabel>Languages &amp; tests</CardLabel>
              <ul className="space-y-2">
                {profile.languages.map((lang) => (
                  <li key={lang.label} className="flex items-baseline justify-between gap-3 border-b border-border pb-2 last:border-0">
                    <span className="text-sm text-fg">{lang.label}</span>
                    <span className="font-mono text-xs text-muted">{lang.detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </RevealItem>
        )}

        <RevealItem variants={scaleIn} className={cn(halfSpan)}>
          <Card className="h-full bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10">
            <CardLabel>Now</CardLabel>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="pulse-dot mt-1.5 shrink-0 text-success" aria-hidden />
                <span className="text-fg">{profile.currently}</span>
              </li>
              {profile.mastersPlan && (
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-2" aria-hidden />
                  <span className="text-fg">{profile.mastersPlan}</span>
                </li>
              )}
              {profile.location ? (
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="text-fg">Based in {profile.location}</span>
                </li>
              ) : (
                showTodos && (
                  <li>
                    <Todo compact>City, country and timezone.</Todo>
                  </li>
                )
              )}
            </ul>
          </Card>
        </RevealItem>
      </RevealGroup>
    </Section>
  );
}
