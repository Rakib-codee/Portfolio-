/**
 * Projects and case studies.
 *
 * Rules applied while migrating from the previous data:
 *  - Only projects with a verifiable link (GitHub repo or live demo) were kept
 *    as featured. "Office Supply Management System" has no public link but was
 *    kept as non-featured because it existed in the previous data with a
 *    screenshot.
 *  - Three previous entries (ML Data Pipeline, E-Learning Platform API,
 *    Web Scraping Automation) were removed: no links, one shared AI-generated
 *    placeholder image, and "results" with unverifiable figures.
 *  - Every quantitative claim that could not be verified was dropped.
 *  - Fields marked TODO(PROFILE.md) are shown as clearly labelled placeholders.
 */

export type ProjectCategory = "ai" | "vision" | "fullstack" | "java" | "frontend";

export type CaseStudy = {
  problem: string;
  /** TODO(PROFILE.md): "Solo project" or "Team of N; I owned X". */
  role: string | null;
  approach: string;
  architecture: {
    stack: string[];
    /** Optional path under /public or an external image. */
    diagram: string | null;
    /** Optional Mermaid source; rendered as a code block on the case-study page. */
    mermaid: string | null;
  };
  /** TODO(PROFILE.md): 2 to 4 concrete design decisions and their trade-offs. */
  decisions: string[];
  /** Qualitative only unless a number is verifiable. */
  results: string[];
  /** TODO(PROFILE.md): one honest paragraph. */
  learned: string | null;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  /** TODO(PROFILE.md): year or period, e.g. "2025". */
  period: string | null;
  image: string;
  imageAlt: string;
  tags: string[];
  category: ProjectCategory;
  featured: boolean;
  links: {
    demo?: string;
    github?: string;
  };
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "urbanai",
    title: "UrbanAI",
    tagline: "AI-assisted urban planning platform with real-time data, predictive analytics and simulation tools.",
    period: null,
    image: "https://i.ibb.co/5hrWGtHg/Screenshot-2026-01-25-at-5-34-36-AM.png",
    imageAlt: "UrbanAI dashboard showing a city map with planning analytics panels",
    tags: ["Next.js", "Node.js", "Express.js", "JavaScript", "AI"],
    category: "ai",
    featured: true,
    links: {
      github: "https://github.com/Rakib-codee/UrbanAI",
    },
    caseStudy: {
      problem:
        "Cities struggle with traffic congestion, resource mismanagement, and shrinking green spaces, making urban planning inefficient and unsustainable.",
      role: null,
      approach:
        "Built UrbanAI with AI-powered traffic optimisation, smart resource allocation for water and energy, data-driven green-space planning, and interactive simulation tools.",
      architecture: {
        stack: ["Next.js frontend", "Node.js + Express.js API", "AI models for prediction and optimisation"],
        diagram: null,
        mermaid: null,
      },
      decisions: [],
      results: [
        "Gives planners an interactive, AI-assisted view for faster decision-making.",
        "Provides a reusable blueprint for data-driven, sustainable urban growth.",
      ],
      learned: null,
    },
  },
  {
    slug: "facenetgrid",
    title: "FaceNetGrid",
    tagline: "Distributed, real-time face recognition over LAN with a Streamlit UI, multi-device capture and admin controls.",
    period: null,
    image: "https://i.ibb.co/Q7MSp8VG/Picture1.jpg",
    imageAlt: "FaceNetGrid interface showing live webcam face matching",
    tags: ["Python", "Streamlit", "OpenCV", "face_recognition", "SQLite"],
    category: "vision",
    featured: true,
    links: {
      github: "https://github.com/Rakib-codee/Facenetgrid",
    },
    caseStudy: {
      problem:
        "Organisations needed a cost-effective, cloud-free face recognition solution that works across multiple devices with real-time matching.",
      role: null,
      approach:
        "Designed an object-oriented Python system with webcam face capture, multi-face real-time matching, admin controls for managing enrolled faces, and role-based access.",
      architecture: {
        stack: ["Python", "OpenCV capture pipeline", "face_recognition (dlib) embeddings", "SQLite store", "Streamlit web UI"],
        diagram: null,
        mermaid: null,
      },
      decisions: [],
      results: [
        "Runs real-time recognition on any device over LAN or a public tunnel.",
        "Separate admin and user roles, with export of recognition records.",
        "No cloud dependency and no recurring cost.",
      ],
      learned: null,
    },
  },
  {
    slug: "reflecthub",
    title: "ReflectHub",
    tagline: "Community platform for sharing life lessons, with Firebase auth and Stripe-powered premium membership.",
    period: null,
    image: "https://i.ibb.co/BHvZXptJ/Screenshot-2026-01-25-at-6-12-50-AM.png",
    imageAlt: "ReflectHub home page listing shared life lessons",
    tags: ["React", "React Router", "Tailwind CSS", "DaisyUI", "Firebase", "Stripe", "TanStack Query"],
    category: "fullstack",
    featured: true,
    links: {
      demo: "https://reflecthub-client.vercel.app/",
      github: "https://github.com/Rakib-codee/Reflecthub-client",
    },
    caseStudy: {
      problem:
        "People lacked a dedicated platform to share real-life lessons and access meaningful premium content in a structured way.",
      role: null,
      approach:
        "Built a React single-page app with lesson exploration, premium access control, Firebase authentication, and a Stripe-based membership flow.",
      architecture: {
        stack: ["React + React Router", "TanStack Query for server state", "Firebase Authentication", "Stripe Checkout", "Tailwind CSS + DaisyUI"],
        diagram: null,
        mermaid: null,
      },
      decisions: [],
      results: [
        "Live, publicly accessible deployment on Vercel.",
        "Gated premium content behind an authenticated membership flow.",
      ],
      learned: null,
    },
  },
  {
    slug: "meghbarta",
    title: "MeghBarta",
    tagline: "Installable weather Progressive Web App with a responsive interface and offline support.",
    period: null,
    image: "https://i.ibb.co/gFmX5xfQ/Screenshot-2026-02-04-at-9-07-46-PM.png",
    imageAlt: "MeghBarta weather app showing the current forecast",
    tags: ["React", "JavaScript", "CSS", "OpenWeather API", "PWA"],
    category: "frontend",
    featured: true,
    links: {
      demo: "https://megh-barta.vercel.app/",
      github: "https://github.com/Rakib-codee/MeghBarta",
    },
    caseStudy: {
      problem: "Users needed accurate and timely weather forecasts to plan their activities effectively.",
      role: null,
      approach:
        "Developed a Progressive Web App in React on top of the OpenWeather API, focusing on responsive design and offline capability.",
      architecture: {
        stack: ["React", "OpenWeather REST API", "Service worker for offline caching", "Web app manifest"],
        diagram: null,
        mermaid: null,
      },
      decisions: [],
      results: ["Live deployment with real-time updates and offline access."],
      learned: null,
    },
  },
  {
    slug: "office-supply-management",
    title: "Office Supply Management System",
    tagline: "Java desktop application to manage inventory, suppliers, item requests and usage reports.",
    period: null,
    image: "https://i.ibb.co/whZGrkSM/Screenshot-2026-01-25-at-6-06-14-AM.png",
    imageAlt: "Office Supply Management System inventory screen",
    tags: ["Java", "OOP", "JDBC", "MySQL"],
    category: "java",
    featured: false,
    // TODO(PROFILE.md): public repository URL, if one exists.
    links: {},
    caseStudy: {
      problem: "Manual tracking of office supplies caused stock shortages, over-ordering, and lack of transparency.",
      role: null,
      approach:
        "Built a Java application to manage inventory, supplier details, item requests, and usage records with database support.",
      architecture: {
        stack: ["Java (OOP)", "JDBC", "MySQL"],
        diagram: null,
        mermaid: null,
      },
      decisions: [],
      results: ["Centralised inventory, supplier and request records in one database-backed application."],
      learned: null,
    },
  },
  {
    slug: "portfolio",
    title: "This Portfolio",
    tagline: "Academic-first portfolio with a 3D hero, command palette, printable CV and typed content model.",
    period: "2026",
    image: "https://i.ibb.co/bRsNdfCg/Screenshot-2026-01-25-at-6-08-10-AM.png",
    imageAlt: "Screenshot of the previous version of this portfolio",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Three.js"],
    category: "frontend",
    featured: false,
    links: {
      github: "https://github.com/Rakib-codee/portfolio-",
    },
    caseStudy: {
      problem:
        "The previous site was written for freelance clients. It needed to speak to admission committees and recruiters instead, without inventing metrics.",
      role: "Solo project.",
      approach:
        "Rebuilt the site around a typed content model, one-page information architecture with per-project case studies, an accessible dark/light theme, and a printable academic CV generated from the same data.",
      architecture: {
        stack: ["Next.js App Router with Server Actions", "React Three Fiber hero (hero-only, off-screen paused)", "Framer Motion with reduced-motion support", "Resend for the contact form"],
        diagram: null,
        mermaid: null,
      },
      decisions: [
        "Content lives in typed TypeScript modules so the CV page, command palette and sitemap stay in sync.",
        "3D is limited to the hero, capped at 1.5x device pixel ratio, and replaced by a static gradient on touch devices or when reduced motion is requested.",
      ],
      results: ["Lint and production build pass with zero errors."],
      learned: null,
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
export const otherProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const categoryLabels: Record<ProjectCategory, string> = {
  ai: "AI / Data",
  vision: "Computer Vision",
  fullstack: "Full Stack",
  java: "Java",
  frontend: "Frontend",
};
