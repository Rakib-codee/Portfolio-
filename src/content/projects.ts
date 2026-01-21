export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with Next.js, Stripe integration, and real-time inventory management.",
    image: "",
    tags: ["Next.js", "React", "Tailwind", "Stripe", "PostgreSQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts, user authentication, and data visualization.",
    image: "",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind", "Firebase"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop UI, and team features.",
    image: "",
    tags: ["Next.js", "Framer Motion", "Supabase", "Tailwind"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Modern, animated portfolio website showcasing projects and skills with smooth transitions.",
    image: "",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export type Project = (typeof projects)[0];
