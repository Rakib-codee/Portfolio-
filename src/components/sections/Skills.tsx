import { Marquee } from "@/components/effects/Marquee";
import { RevealGroup, RevealItem } from "@/components/effects/Reveal";
import { Card, Heading, Section } from "@/components/ui";
import { allSkills, skillGroups } from "@/content/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="skills" index="04" eyebrow="Skills" title="Grouped and honest." description={<>
      <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" aria-hidden /> Proficient: used in a shipped project on this site.</span>
      <span className="ml-4 inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full border border-border-strong" aria-hidden /> Familiar: coursework or small experiments.</span>
    </>}>
      <RevealGroup className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <RevealItem key={group.title}>
            <Card className="h-full">
              <Heading level={3} className="mb-4 text-base sm:text-lg">
                {group.title}
              </Heading>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={cn(
                      "rounded-full border px-3 py-1 text-sm transition-colors",
                      skill.level === "proficient"
                        ? "border-accent/35 bg-accent/10 text-fg"
                        : "border-border text-muted",
                    )}
                    title={skill.level === "proficient" ? "Proficient" : "Familiar"}
                  >
                    {skill.name}
                    <span className="sr-only">, {skill.level}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
      <Marquee items={allSkills} className="mt-10" />
    </Section>
  );
}
