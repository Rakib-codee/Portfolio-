export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  summary?: string;
  /** Shown as given by the owner. Null hides the row. */
  gpa: string | null;
  /** Completed courses relevant to the Master's application. */
  coursework: string[];
  /** Thesis title, honours, other highlights. */
  highlights: string[];
};

export const education: Education[] = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Zhengzhou University",
    location: "China",
    period: "2023 – 2027",
    summary: "Focused on software engineering, algorithms, and human-computer interaction. Currently in the 7th semester.",
    // The owner shares the most recent semester GPA only, not the cumulative CGPA.
    gpa: "Most recent semester GPA: 3.46",
    coursework: [
      "C Programming",
      "Data Structures",
      "Discrete Mathematics",
      "Computer Organization and Architecture",
      "Principles of Database Systems",
      "Object-Oriented Principles and Language (Java)",
      "Operating Systems",
      "Computer Networks",
      "Mobile Programming",
      "Introduction to Artificial Intelligence",
    ],
    // TODO(PROFILE.md): thesis title once the final-year thesis starts.
    highlights: [],
  },
];
