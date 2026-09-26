import type { Metadata } from "next";
import Link from "next/link";
import { Button, Todo } from "@/components/ui";
import { Download } from "@/components/ui/Icons";
import { activities } from "@/content/activities";
import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { publications } from "@/content/research";
import { skillGroups } from "@/content/skills";
import { siteUrl } from "@/lib/site";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Academic CV",
  description: `Academic CV of ${profile.name}: education, research, projects, skills and activities.`,
  alternates: { canonical: "/cv" },
};

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-border py-6 sm:grid-cols-[11rem_1fr] sm:gap-8" aria-label={title}>
      <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function Row({ left, right, sub }: { left: string; right?: string; sub?: React.ReactNode }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <p className="font-semibold text-fg">{left}</p>
        {right && <p className="font-mono text-xs text-muted">{right}</p>}
      </div>
      {sub && <div className="mt-0.5 text-muted">{sub}</div>}
    </div>
  );
}

export default function CvPage() {
  const proficient = skillGroups.map((g) => ({ title: g.title, items: g.skills.filter((s) => s.level === "proficient").map((s) => s.name) })).filter((g) => g.items.length > 0);
  const familiar = skillGroups.flatMap((g) => g.skills.filter((s) => s.level === "familiar").map((s) => s.name));

  return (
    <main id="main" className="print-page mx-auto w-full max-w-3xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <div className="no-print mb-8 flex flex-wrap items-center gap-3">
        <PrintButton />
        <Button href={profile.cvUrl} variant="ghost">
          <Download size={16} /> PDF on Google Drive
        </Button>
        <Link href="/" className="ml-auto text-sm text-muted hover:text-fg">
          ← Back to site
        </Link>
      </div>

      <header className="pb-6">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{profile.name}</h1>
        <p className="mt-1 text-muted">{profile.role}</p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          <li>
            <a href={`mailto:${profile.email}`} className="hover:text-fg">
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.github} className="hover:text-fg">
              github.com/{profile.githubUser}
            </a>
          </li>
          <li>
            <a href={profile.linkedin} className="hover:text-fg">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={siteUrl} className="hover:text-fg">
              {siteUrl.replace("https://", "")}
            </a>
          </li>
          {profile.location && <li>{profile.location}</li>}
        </ul>
        {profile.mastersPlan && <p className="mt-3 text-sm text-fg">{profile.mastersPlan}</p>}
        {!profile.location && (
          <div className="no-print mt-3">
            <Todo compact>City and country for the CV header.</Todo>
          </div>
        )}
      </header>

      <CvSection title="Education">
        {education.map((edu) => (
          <Row key={edu.degree} left={edu.degree} right={edu.period} sub={<>
            <p>
              {edu.institution}, {edu.location}
            </p>
            {edu.summary && <p>{edu.summary}</p>}
            {edu.gpa && <p className="text-fg">{edu.gpa}</p>}
            {edu.coursework.length > 0 && (
              <p>
                <span className="font-semibold text-fg">Relevant coursework: </span>
                {edu.coursework.join(", ")}
              </p>
            )}
            {edu.highlights.length > 0 && (
              <ul className="mt-1 list-disc pl-5">
                {edu.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </>} />
        ))}
      </CvSection>

      {profile.researchInterests.length > 0 && (
        <CvSection title="Research interests">
          <p className="text-muted">{profile.researchInterests.join(" · ")}</p>
        </CvSection>
      )}

      <CvSection title="Research & publications">
        {publications.length === 0 ? (
          <div className="no-print">
            <Todo>Publications are missing.</Todo>
          </div>
        ) : (
          publications.map((pub) => (
            <Row key={pub.title} left={pub.title} right={`${pub.year} · ${pub.status}`} sub={<>
              <p>{pub.authors}</p>
              <p>
                {pub.venue}
                {pub.kind ? ` · ${pub.kind}` : ""}
              </p>
              {(pub.url || pub.pdf) && (
                <p>
                  {pub.url && (
                    <a href={pub.url} className="text-accent hover:underline">
                      {pub.url.replace("https://", "")}
                    </a>
                  )}
                  {pub.url && pub.pdf && " · "}
                  {pub.pdf && (
                    <a href={pub.pdf} className="text-accent hover:underline">
                      PDF
                    </a>
                  )}
                </p>
              )}
            </>} />
          ))
        )}
      </CvSection>

      <CvSection title="Selected projects">
        {projects.map((project) => (
          <Row key={project.slug} left={project.title} right={project.period ?? undefined} sub={<>
            <p>{project.tagline}</p>
            {project.caseStudy.role && <p className="text-xs">{project.caseStudy.role}</p>}
            <p className="font-mono text-xs text-muted-2">{project.tags.join(" · ")}</p>
            {(project.links.github || project.links.demo) && (
              <p className="text-xs">
                {project.links.github && (
                  <a href={project.links.github} className="text-accent hover:underline">
                    {project.links.github.replace("https://", "")}
                  </a>
                )}
                {project.links.github && project.links.demo && " · "}
                {project.links.demo && (
                  <a href={project.links.demo} className="text-accent hover:underline">
                    {project.links.demo.replace("https://", "")}
                  </a>
                )}
              </p>
            )}
          </>} />
        ))}
      </CvSection>

      <CvSection title="Technical skills">
        {proficient.map((group) => (
          <p key={group.title}>
            <span className="font-semibold text-fg">{group.title}: </span>
            <span className="text-muted">{group.items.join(", ")}</span>
          </p>
        ))}
        {familiar.length > 0 && (
          <p>
            <span className="font-semibold text-fg">Familiar with: </span>
            <span className="text-muted">{familiar.join(", ")}</span>
          </p>
        )}
      </CvSection>

      <CvSection title="Honours, leadership & activities">
        {activities.length === 0 ? (
          <div className="no-print">
            <Todo>Leadership roles and competitions are missing.</Todo>
          </div>
        ) : (
          activities.map((a) => <Row key={`${a.title}-${a.period}`} left={a.title} right={a.period} sub={<><p>{a.organisation}</p><p>{a.description}</p></>} />)
        )}
      </CvSection>

      {profile.languages.length > 0 && (
        <CvSection title="Languages & tests">
          <ul className="space-y-1">
            {profile.languages.map((l) => (
              <li key={l.label}>
                <span className="font-semibold text-fg">{l.label}</span> <span className="text-muted">— {l.detail}</span>
              </li>
            ))}
          </ul>
        </CvSection>
      )}

      <p className="pt-6 text-xs text-muted-2">
        Generated from the same content as {siteUrl.replace("https://", "")}. Last built {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}.
      </p>
    </main>
  );
}
