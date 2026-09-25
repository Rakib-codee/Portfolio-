/**
 * Skills, grouped and honest.
 *
 * "proficient" = used in at least one shipped project listed on this site.
 * "familiar"   = studied or used in coursework / small experiments, but no
 *                linked project demonstrates it yet.
 *
 * The split below is inferred from the tags of the projects in projects.ts.
 * TODO(PROFILE.md): confirm or adjust each level.
 */

export type SkillLevel = "proficient" | "familiar";

export type Skill = { name: string; level: SkillLevel };

export type SkillGroup = { title: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: "proficient" },
      { name: "TypeScript", level: "proficient" },
      { name: "Python", level: "proficient" },
      { name: "Java", level: "proficient" },
      { name: "SQL", level: "proficient" },
      { name: "HTML & CSS", level: "proficient" },
    ],
  },
  {
    title: "Web & Frontend",
    skills: [
      { name: "React", level: "proficient" },
      { name: "Next.js", level: "proficient" },
      { name: "Tailwind CSS", level: "proficient" },
      { name: "Framer Motion", level: "proficient" },
      { name: "TanStack Query", level: "proficient" },
      { name: "Progressive Web Apps", level: "proficient" },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js", level: "proficient" },
      { name: "Express.js", level: "proficient" },
      { name: "Firebase", level: "proficient" },
      { name: "MySQL / JDBC", level: "proficient" },
      { name: "SQLite", level: "proficient" },
      { name: "Stripe", level: "proficient" },
      { name: "PostgreSQL", level: "familiar" },
      { name: "MongoDB", level: "familiar" },
      { name: "Prisma", level: "familiar" },
      { name: "Supabase", level: "familiar" },
      { name: "Spring Boot", level: "familiar" },
      { name: "Django", level: "familiar" },
      { name: "Flask", level: "familiar" },
      { name: "FastAPI", level: "familiar" },
    ],
  },
  {
    title: "AI, Vision & Tooling",
    skills: [
      { name: "OpenCV", level: "proficient" },
      { name: "face_recognition (dlib)", level: "proficient" },
      { name: "Streamlit", level: "proficient" },
      { name: "Git & GitHub", level: "proficient" },
      { name: "Vercel", level: "proficient" },
      { name: "Docker", level: "familiar" },
      { name: "Figma", level: "familiar" },
    ],
  },
];

/** Flat list used by the marquee and command palette. */
export const allSkills: string[] = skillGroups.flatMap((g) => g.skills.map((s) => s.name));
