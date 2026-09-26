/**
 * Leadership, activities and competitions.
 *
 * Only entries supplied by the owner are listed. TODO(PROFILE.md): other
 * roles (Nexgendev, content work, further competitions) were not provided.
 */

export type Activity = {
  title: string;
  organisation: string;
  period: string;
  description: string;
  kind: "leadership" | "competition" | "community" | "content";
  url?: string;
};

export const activities: Activity[] = [
  {
    title: "Certificate of Honor · Project Leader, UrbanAI",
    organisation: "China International College Students' Innovation Competition",
    period: "2025",
    description:
      "Led the UrbanAI team (AI-Driven Urban Planning Platform for Smart Cities) as Project Leader. The project was officially recognised with a Certificate of Honor.",
    kind: "competition",
    url: "https://github.com/Rakib-codee/UrbanAI",
  },
];
