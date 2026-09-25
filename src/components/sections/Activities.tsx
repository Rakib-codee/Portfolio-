import { RevealGroup, RevealItem } from "@/components/effects/Reveal";
import { Badge, Card, Heading, Section, Todo } from "@/components/ui";
import { External } from "@/components/ui/Icons";
import { activities } from "@/content/activities";

const kindLabel = {
  leadership: "Leadership",
  competition: "Competition",
  community: "Community",
  content: "Content",
} as const;

export function Activities() {
  return (
    <Section id="activities" index="05" eyebrow="Leadership & activities" title="Beyond coursework." description="Team roles, community work, content and competitions.">
      {activities.length === 0 ? (
        <Card className="max-w-3xl" spotlight={false}>
          <Todo>
            No activities are recorded yet. Add team-lead roles, Nexgendev, content work and competitions to <code className="font-mono text-fg">src/content/activities.ts</code> with organisation, dates and one line on what you did.
          </Todo>
        </Card>
      ) : (
        <RevealGroup className="relative grid gap-4 md:grid-cols-2">
          {activities.map((item) => (
            <RevealItem key={`${item.title}-${item.period}`}>
              <Card className="h-full">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <Badge variant="accent">{kindLabel[item.kind]}</Badge>
                  <span className="font-mono text-xs text-muted-2">{item.period}</span>
                </div>
                <Heading level={3} className="text-lg sm:text-xl">
                  {item.title}
                </Heading>
                <p className="mt-1 text-sm text-fg">{item.organisation}</p>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
                    <External size={15} /> Link
                  </a>
                )}
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      )}
    </Section>
  );
}
