/**
 * Research and publications.
 *
 * TODO(PROFILE.md): none of this information exists in the repo. Add each
 * paper exactly as it should appear, and copy the status string verbatim
 * (for example "Under review", never "Published" unless it is).
 *
 * The section renders a clearly labelled placeholder while this is empty.
 */

export type PublicationStatus =
  | "Published"
  | "Accepted"
  | "Under review"
  | "In preparation"
  | "Preprint";

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: PublicationStatus;
  /** DOI, arXiv or PDF link. */
  url?: string;
  pdf?: string;
  abstract?: string;
};

export const publications: Publication[] = [];
