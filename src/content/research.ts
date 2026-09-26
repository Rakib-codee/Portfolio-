/**
 * Research and publications.
 *
 * Status strings are copied verbatim from the owner. Nothing here is marked
 * published unless it is. Badge colours are chosen for the known statuses
 * below; any other status renders with a neutral badge.
 */

export type KnownStatus = "Published" | "Accepted" | "Under review" | "In preparation" | "Preprint" | "Technical check passed";

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  /** Verbatim status. Known values get a coloured badge. */
  status: KnownStatus | (string & {});
  kind?: "Article" | "Review article";
  /** DOI, arXiv or PDF link. */
  url?: string;
  pdf?: string;
  abstract?: string;
};

export const publications: Publication[] = [
  {
    title: "How Your Video Gets to You: A Tour of Internet Streaming, From Pixels to Playback",
    authors: "Md Mahfujur Rahman Rakib",
    // Owner's note: venue as submitted; confirm before citing elsewhere.
    venue: "Archives of Computational Methods in Engineering",
    year: "2027",
    status: "Technical check passed",
    kind: "Article",
  },
  {
    title:
      "Explainable Machine Learning for Compressive Strength Prediction of Geopolymer Concrete: A Systematic Review of Methods, Interpretability, and Research Gaps",
    authors: "Md Mahfujur Rahman Rakib, Ramisa Atiya Rahman",
    venue: "IEEE Potentials",
    year: "2027",
    status: "Under review",
    kind: "Review article",
  },
];
