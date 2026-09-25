import Image from "next/image";
import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/effects/Reveal";
import { Badge, Card, Heading, Section } from "@/components/ui";
import { ArrowUpRight, External, GitHub } from "@/components/ui/Icons";
import { categoryLabels, featuredProjects, otherProjects, type Project } from "@/content/projects";
import { scaleIn } from "@/lib/variants";
import { cn } from "@/lib/utils";

function ProjectLinks({ project, className }: { project: Project; className?: string }) {
  const { demo, github } = project.links;
  if (!demo && !github) return null;
  return (
    <div className={cn("relative z-10 flex items-center gap-2", className)}>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source on GitHub`} className="glass grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:border-accent/60 hover:text-accent">
          <GitHub size={16} />
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="glass grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:border-accent/60 hover:text-accent">
          <External size={16} />
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ project, flagship = false }: { project: Project; flagship?: boolean }) {
  return (
    <Card padded={false} neon={flagship} className={cn("group relative flex h-full flex-col overflow-hidden", flagship && "md:col-span-2")}>
      <div className={cn("relative w-full overflow-hidden", flagship ? "aspect-[16/8]" : "aspect-[16/10]")}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={flagship ? "(max-width: 768px) 100vw, 1152px" : "(max-width: 768px) 100vw, 576px"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-elev via-bg-elev/20 to-transparent" aria-hidden />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {flagship && <Badge variant="accent">Flagship</Badge>}
          <Badge variant="outline" className="backdrop-blur">
            {categoryLabels[project.category]}
          </Badge>
        </div>
        <ProjectLinks project={project} className="absolute right-4 top-4" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <Heading level={3} className="text-xl sm:text-2xl">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {project.title}
          </Link>
        </Heading>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{project.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tags.slice(0, 5).map((tag) => (
            <li key={tag} className="rounded-md bg-surface-strong px-2 py-0.5 font-mono text-[0.68rem] text-muted">
              {tag}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Read case study
          <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Card>
  );
}

export function Projects() {
  return (
    <Section id="projects" index="03" eyebrow="Featured projects" title="Systems I have shipped." description="Four projects with public code or a live deployment, flagship first. Each one has a full case study.">
      <RevealGroup className="grid gap-5 md:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <RevealItem key={project.slug} variants={scaleIn} className={cn(i === 0 && "md:col-span-2")}>
            <FeaturedCard project={project} flagship={i === 0} />
          </RevealItem>
        ))}
      </RevealGroup>

      {otherProjects.length > 0 && (
        <div className="mt-10">
          <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-2">More work</p>
          <RevealGroup className="grid gap-3 sm:grid-cols-2">
            {otherProjects.map((project) => (
              <RevealItem key={project.slug} className="min-w-0">
                <Card className="group relative flex min-w-0 items-center gap-4 !p-4">
                  <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image src={project.image} alt={project.imageAlt} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Link href={`/projects/${project.slug}`} className="font-display text-base font-semibold text-fg after:absolute after:inset-0 after:content-['']">
                      {project.title}
                    </Link>
                    <p className="truncate text-xs text-muted">{project.tags.join(" · ")}</p>
                  </div>
                  <ProjectLinks project={project} />
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      )}
    </Section>
  );
}
