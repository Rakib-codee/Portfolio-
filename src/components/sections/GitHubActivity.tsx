import { Reveal, RevealGroup, RevealItem } from "@/components/effects/Reveal";
import { Card } from "@/components/ui";
import { ArrowUpRight, GitBranch, GitHub, Star } from "@/components/ui/Icons";
import { profile } from "@/content/profile";
import { describeEvent, getRecentActivity, getRecentRepos } from "@/lib/github";

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} mo ago`;
  return `${Math.floor(months / 12)} yr ago`;
}

/** Server component: data is fetched at build time and revalidated daily. */
export async function GitHubActivity() {
  const [repos, events] = await Promise.all([getRecentRepos(6), getRecentActivity(5)]);
  const empty = repos.length === 0 && events.length === 0;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-2">
            <GitHub size={14} /> On GitHub
          </p>
          <p className="text-sm text-muted">Public repositories, refreshed daily.</p>
        </div>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
          @{profile.githubUser} <ArrowUpRight size={14} />
        </a>
      </Reveal>

      {empty ? (
        <Card spotlight={false} className="text-sm text-muted">
          GitHub data could not be loaded when this page was built. It will appear after the next deployment, or you can browse the profile directly at{" "}
          <a href={profile.github} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            github.com/{profile.githubUser}
          </a>
          .
        </Card>
      ) : (
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <RevealGroup className="grid gap-3 sm:grid-cols-2">
            {repos.map((repo) => (
              <RevealItem key={repo.name} className="min-w-0">
                <Card className="group relative h-full min-w-0 !p-4">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="font-display text-base font-semibold text-fg after:absolute after:inset-0 after:content-['']">
                    {repo.name}
                  </a>
                  <p className="mt-1 line-clamp-2 text-xs text-muted">{repo.description ?? "No description."}</p>
                  <div className="mt-3 flex items-center gap-3 font-mono text-[0.68rem] text-muted-2">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="inline-flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitBranch size={12} /> {repo.forks_count}
                    </span>
                    <span className="ml-auto">{timeAgo(repo.pushed_at)}</span>
                  </div>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>

          {events.length > 0 && (
            <Reveal>
              <Card className="h-full !p-4" spotlight={false}>
                <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-2">Recent activity</p>
                <ol className="space-y-3">
                  {events.map((event) => (
                    <li key={event.id} className="flex gap-3 text-xs">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span className="text-muted">
                        {describeEvent(event)}{" "}
                        <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noopener noreferrer" className="text-fg hover:text-accent">
                          {event.repo.name.split("/")[1]}
                        </a>
                        <span className="ml-1 text-muted-2">· {timeAgo(event.created_at)}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </Card>
            </Reveal>
          )}
        </div>
      )}
    </div>
  );
}
