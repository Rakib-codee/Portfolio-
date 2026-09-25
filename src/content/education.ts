export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  summary?: string;
  /** TODO(PROFILE.md): GPA or class rank, e.g. "GPA 3.8 / 4.0". Null hides the row. */
  gpa: string | null;
  /** TODO(PROFILE.md): relevant coursework, thesis title, honours. */
  highlights: string[];
};

export const education: Education[] = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Zhengzhou University",
    location: "China",
    period: "2023 – 2027",
    summary: "Focused on software engineering, algorithms, and human-computer interaction.",
    gpa: null,
    highlights: [],
  },
];
