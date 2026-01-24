export const services = [
  {
    id: 1,
    title: "Frontend Engineering",
    description: "Building fast, accessible, and responsive interfaces with React and Next.js.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Java Development",
    description: "Enterprise-grade applications, REST APIs, and microservices with Spring Boot.",
    tags: ["Java", "Spring Boot", "Hibernate", "Maven"],
  },
  {
    id: 3,
    title: "Python Development",
    description: "Backend systems, automation scripts, data processing, and API development.",
    tags: ["Python", "Django", "FastAPI", "Flask"],
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "End-to-end product delivery with modern APIs, authentication, and databases.",
    tags: ["Node.js", "REST", "Supabase", "PostgreSQL"],
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Designing intuitive experiences with a focus on clarity, typography, and motion.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    id: 6,
    title: "Database & DevOps",
    description: "Database design, optimization, and deployment with Docker and cloud services.",
    tags: ["PostgreSQL", "MySQL", "Docker", "AWS"],
  },
];

export type Service = (typeof services)[0];
