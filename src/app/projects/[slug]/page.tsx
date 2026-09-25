import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/effects/Reveal";
import { Badge, Button, Card, Heading, Todo } from "@/components/ui";
import { ArrowRight, External, GitHub } from "@/components/ui/Icons";
import { categoryLabels, getProject, projects } from "@/content/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.tagline, images: [project.image] },
    twitter: { card: "summary_large_image", title: project.title, description: project.tagline, images: [project.image] },
  };
}

function Block({ id, step, title, children }: { id: string; step: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-28 border-t border-border py-8 first:border-t-0 first:pt-0">
        <p className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-accent">{step}</p>
        <Heading level={3} id={`${id}-h`} className="mb-4">
          {title}
        </Heading>
        <div className="space-y-3 text-[1.02rem] leading-relaxed text-muted">{children}</div>
      </section>
    </Reveal>
  );
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main id="main" className="pb-24 pt-28 sm:pt-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg">
            ← All projects
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Badge variant="accent">{categoryLabels[project.category]}</Badge>
            {project.period ? <Badge variant="outline">{project.period}</Badge> : <Todo compact>Year or period.</Todo>}
          </div>
          <Heading level={1} className="mt-4 max-w-4xl">
            {project.title}
          </Heading>
          <p className="mt-4 max-w-3xl text-lg text-muted sm:text-xl">{project.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.github && (
              <Button href={project.links.github} variant="secondary">
                <GitHub size={16} /> Source code
              </Button>
            )}
            {project.links.demo && (
              <Button href={project.links.demo}>
                <External size={16} /> Live demo
              </Button>
            )}
            {!project.links.github && !project.links.demo && <Todo compact>Public repository or demo link, if one exists.</Todo>}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="glass neon-border relative aspect-[16/8] overflow-hidden rounded-[2rem] p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
              <Image src={project.image} alt={project.imageAlt} fill priority sizes="(max-width: 1152px) 100vw, 1152px" className="object-cover" />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_18rem]">
          <article className="min-w-0">
            <Block id="problem" step="01" title="Problem">
              <p>{cs.problem}</p>
            </Block>

            <Block id="role" step="02" title="My role">
              {cs.role ? <p>{cs.role}</p> : <Todo>Solo or team? Team size and exactly which parts were yours.</Todo>}
            </Block>

            <Block id="architecture" step="03" title="Architecture">
              <p>{cs.approach}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {cs.architecture.stack.map((item) => (
                  <li key={item} className="flex items-start gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-sm text-fg">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              {cs.architecture.diagram && (
                <div className="relative mt-4 aspect-video overflow-hidden rounded-2xl border border-border">
                  <Image src={cs.architecture.diagram} alt={`${project.title} architecture diagram`} fill sizes="(max-width: 1024px) 100vw, 800px" className="object-contain" />
                </div>
              )}
              {cs.architecture.mermaid && (
                <pre className="mt-4 overflow-x-auto rounded-2xl border border-border bg-bg-elev p-4 font-mono text-xs text-muted" aria-label="Architecture diagram (Mermaid source)">
                  {cs.architecture.mermaid}
                </pre>
              )}
              {!cs.architecture.diagram && !cs.architecture.mermaid && <Todo className="mt-4">Architecture diagram: an image under /public or Mermaid source.</Todo>}
            </Block>

            <Block id="decisions" step="04" title="Key decisions">
              {cs.decisions.length > 0 ? (
                <ol className="list-decimal space-y-2 pl-5">
                  {cs.decisions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ol>
              ) : (
                <Todo>Two to four concrete decisions with the trade-off each one made.</Todo>
              )}
            </Block>

            <Block id="results" step="05" title="Results">
              <ul className="space-y-2">
                {cs.results.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-2">Only qualitative outcomes are listed. Numbers appear when they can be verified.</p>
            </Block>

            <Block id="links" step="06" title="Links">
              {project.links.github || project.links.demo ? (
                <ul className="space-y-2">
                  {project.links.github && (
                    <li>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline">
                        <GitHub size={16} /> {project.links.github.replace("https://", "")}
                      </a>
                    </li>
                  )}
                  {project.links.demo && (
                    <li>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline">
                        <External size={16} /> {project.links.demo.replace("https://", "")}
                      </a>
                    </li>
                  )}
                </ul>
              ) : (
                <Todo>No public link yet.</Todo>
              )}
            </Block>

            <Block id="learned" step="07" title="What I learned">
              {cs.learned ? <p>{cs.learned}</p> : <Todo>One honest paragraph: what you would do differently, what surprised you.</Todo>}
            </Block>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Card spotlight={false} className="space-y-5 text-sm">
              <div>
                <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-2">Stack</p>
                <ul className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <li key={t} className="rounded-md bg-surface-strong px-2 py-0.5 font-mono text-[0.68rem] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-2">Sections</p>
                <ol className="space-y-1.5">
                  {["problem", "role", "architecture", "decisions", "results", "links", "learned"].map((id, i) => (
                    <li key={id}>
                      <a href={`#${id}`} className="flex gap-2 text-muted transition-colors hover:text-fg">
                        <span className="font-mono text-[0.68rem] text-muted-2">0{i + 1}</span>
                        <span className="capitalize">{id === "role" ? "My role" : id === "learned" ? "What I learned" : id === "decisions" ? "Key decisions" : id}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border-t border-border pt-4">
                <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-2">Next project</p>
                <Link href={`/projects/${next.slug}`} className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline">
                  {next.title} <ArrowRight size={14} />
                </Link>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
