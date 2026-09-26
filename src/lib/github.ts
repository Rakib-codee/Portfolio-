import { profile } from "@/content/profile";

export type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
};

export type GitHubEvent = {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  public: boolean;
};

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  "User-Agent": "portfolio-site",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

/**
 * Public GitHub REST API. Pinned repositories need the GraphQL API and a
 * token, so this returns the most recently pushed public, non-fork repos.
 *
 * `/users/{user}/repos` only lists public repositories by design, and the
 * `private` flag is filtered as well so a token with wider scope can never
 * leak a private repository onto the public site. Cached with ISR for 24h;
 * any failure degrades to an empty list.
 */
export async function getRecentRepos(limit = 6): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=pushed&per_page=30&type=owner`, {
      headers,
      next: { revalidate: 86400 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as GitHubRepo[];
    return data.filter((r) => !r.private && !r.fork && !r.archived).slice(0, limit);
  } catch {
    return [];
  }
}

export async function getRecentActivity(limit = 6): Promise<GitHubEvent[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${profile.githubUser}/events/public?per_page=30`, {
      headers,
      next: { revalidate: 86400 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as GitHubEvent[];
    return data
      .filter((e) => e.public !== false && ["PushEvent", "CreateEvent", "PullRequestEvent", "ReleaseEvent"].includes(e.type))
      .slice(0, limit);
  } catch {
    return [];
  }
}

export function describeEvent(event: GitHubEvent): string {
  switch (event.type) {
    case "PushEvent":
      return "Pushed commits to";
    case "CreateEvent":
      return "Created";
    case "PullRequestEvent":
      return "Opened a pull request in";
    case "ReleaseEvent":
      return "Published a release in";
    default:
      return "Activity in";
  }
}
