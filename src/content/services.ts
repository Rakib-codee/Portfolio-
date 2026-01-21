export const services = [
  {
    id: 1,
    title: "Frontend Engineering",
    description: "Building fast, accessible, and responsive interfaces with React and Next.js.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Designing intuitive experiences with a focus on clarity, typography, and motion.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "End-to-end product delivery with modern APIs, authentication, and databases.",
    tags: ["Node.js", "REST", "Supabase", "Prisma"],
  },
  {
    id: 4,
    title: "Performance Optimization",
    description: "Improving Core Web Vitals, bundle size, and rendering performance.",
    tags: ["Lighthouse", "Profiling", "Caching"],
  },
];

export type Service = (typeof services)[0];
