import { RevealGroup, RevealItem } from "@/components/effects/Reveal";
import { Badge, Card, Heading, Section, Todo } from "@/components/ui";
import { External, FileText } from "@/components/ui/Icons";
import { publications, type PublicationStatus } from "@/content/research";

const statusVariant: Record<PublicationStatus, "success" | "accent" | "warning" | "neutral" | "outline"> = {
  Published: "success",
  Accepted: "success",
  "Under review": "warning",
  Preprint: "accent",
  "In preparation": "neutral",
};

export function Research() {
  return (
    <Section id="research" index="02" eyebrow="Research & publications" title="Work under review and in progress." description="Status is shown exactly as it stands. Nothing here is marked published unless it is.">
      {publications.length === 0 ? (
        <Card className="max-w-3xl" spotlight={false}>
          <Todo>
            No publications are recorded yet. Add each paper to <code className="font-mono text-fg">src/content/research.ts</code> with its title, authors, venue, year and exact status (for example &ldquo;Under review&rdquo;). Cards with status badges and PDF / DOI links render automatically.
          </Todo>
        </Card>
      ) : (
        <RevealGroup className="grid gap-4 lg:grid-cols-2">
          {publications.map((pub) => (
            <RevealItem key={pub.title}>
              <Card className="h-full">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge variant={statusVariant[pub.status]}>{pub.status}</Badge>
                  <span className="font-mono text-xs text-muted-2">{pub.year}</span>
                </div>
                <Heading level={3} className="text-lg sm:text-xl">
                  {pub.title}
                </Heading>
                <p className="mt-2 text-sm text-muted">{pub.authors}</p>
                <p className="mt-1 text-sm text-fg">{pub.venue}</p>
                {pub.abstract && <p className="mt-3 text-sm text-muted">{pub.abstract}</p>}
                {(pub.url || pub.pdf) && (
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    {pub.url && (
                      <a href={pub.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:underline">
                        <External size={15} /> DOI / link
                      </a>
                    )}
                    {pub.pdf && (
                      <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:underline">
                        <FileText size={15} /> PDF
                      </a>
                    )}
                  </div>
                )}
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      )}
    </Section>
  );
}
