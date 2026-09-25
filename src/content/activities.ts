/**
 * Leadership, activities and competitions.
 *
 * TODO(PROFILE.md): the master prompt mentions a team-lead role, "Nexgendev",
 * content work and competitions, but none of the details (organisation,
 * dates, what was done) exist in the repo. Nothing is rendered as fact
 * until it is filled in here.
 */

export type Activity = {
  title: string;
  organisation: string;
  period: string;
  description: string;
  kind: "leadership" | "competition" | "community" | "content";
  url?: string;
};

export const activities: Activity[] = [];
