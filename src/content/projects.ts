/**
 * Projects and case studies.
 *
 * Facts (role, links, year, award) come from the owner. Architecture and
 * stack details were read from each public repository. "Key decisions" and
 * "What I learned" were drafted at the owner's request from what the
 * repositories show; the owner should personalise the wording.
 *
 * Three earlier entries (ML Data Pipeline, E-Learning Platform API, Web
 * Scraping Automation) were removed: no links and unverifiable figures.
 */

export type ProjectCategory = "ai" | "vision" | "mobile" | "fullstack" | "java" | "frontend";

export type CaseStudy = {
  problem: string;
  role: string | null;
  approach: string;
  architecture: {
    stack: string[];
    /** Optional path under /public or an external image. */
    diagram: string | null;
    /** Optional Mermaid source; rendered as a code block on the case-study page. */
    mermaid: string | null;
  };
  decisions: string[];
  /** Qualitative only unless a number is verifiable. */
  results: string[];
  learned: string | null;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  period: string | null;
  /** Null renders a generated placeholder instead of a screenshot. */
  image: string | null;
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
    tagline: "AI-assisted urban planning platform with real-time analytics, traffic and resource simulation, and 3D visualisation.",
    period: "2025 – 2026",
    image: "https://i.ibb.co/5hrWGtHg/Screenshot-2026-01-25-at-5-34-36-AM.png",
    imageAlt: "UrbanAI dashboard showing a city map with planning analytics panels",
    tags: ["Next.js", "React", "Prisma", "OpenAI API", "Leaflet", "React Three Fiber", "Docker"],
    category: "ai",
    featured: true,
    links: {
      github: "https://github.com/Rakib-codee/UrbanAI",
    },
    caseStudy: {
      problem:
        "Cities struggle with traffic congestion, resource mismanagement, and shrinking green spaces, making urban planning inefficient and unsustainable.",
      role: "Team project. I was the Project Leader and coordinated the team's work. The platform was recognised with a Certificate of Honor at the China International College Students' Innovation Competition (2025).",
      approach:
        "Built UrbanAI as a Next.js platform with an interactive dashboard, AI-powered traffic optimisation and simulation, resource allocation for water and energy, green-space tracking, weather insights, 3D scenario visualisation, role-based authentication and multi-language support.",
      architecture: {
        stack: [
          "Next.js App Router with route groups for auth and dashboard",
          "Prisma ORM: User, Project, TrafficData, ResourceData and GreenSpaceData models on SQLite, configurable for MySQL",
          "Server-side AI routes (/api/ai/chat, /api/ai/simulation) calling the OpenAI API",
          "Leaflet maps, React Three Fiber 3D scenes, Recharts and Chart.js dashboards",
          "JWT + bcrypt authentication, i18next localisation",
          "Docker + Nginx deployment scripts alongside a Vercel configuration",
        ],
        diagram: null,
        mermaid: null,
      },
      decisions: [
        "One Next.js codebase for UI, API routes and server rendering, so the team shipped a single deployable unit instead of coordinating separate frontend and backend services.",
        "Prisma over SQLite for development with MySQL as the configurable production target, keeping the data model portable while the schema was still changing.",
        "All model calls go through dedicated server routes with validated inputs; API keys and prompts never reach the browser.",
        "Docker and Nginx configuration shipped next to the Vercel config, so the platform can run self-hosted or on the edge without code changes.",
      ],
      results: [
        "Certificate of Honor at the China International College Students' Innovation Competition (2025).",
        "Gives planners an interactive, AI-assisted view for faster decision-making across traffic, resources and green space.",
        "Reproducible setup: seed scripts, environment templates and Docker Compose for a one-command local run.",
      ],
      learned:
        "Leading a team taught me that an architecture is only useful once everyone can run the project locally: seed scripts, environment templates and Docker unblocked more work than any feature did. I also learned to keep AI calls behind server routes with validated inputs rather than calling models from the client.",
    },
  },
  {
    slug: "harmonycare",
    title: "HarmonyCare",
    tagline: "Offline-first Android safety network that connects elderly users with nearby volunteers through one-touch SOS, live location and in-app chat.",
    period: "2026",
    image: null,
    imageAlt: "HarmonyCare Android app",
    tags: ["Android", "Java", "MVVM", "Room", "AMap SDK", "Material Design"],
    category: "mobile",
    featured: true,
    links: {
      github: "https://github.com/Rakib-codee/HarmonyCare",
    },
    caseStudy: {
      problem:
        "Elderly people living alone need a way to call for help that works even without internet, and volunteers need to see nearby emergencies and reach them quickly.",
      role: "Team project. I was the Team Leader, responsible for coordinating the team and the overall delivery of the app.",
      approach:
        "Built a native Android app in Java with an MVVM + Repository architecture over a Room database. Elderly users get a large SOS button with a 3-second countdown, automatic GPS capture, text-to-speech confirmation and a large-text mode. Volunteers get a live map of emergencies with distance, ETA and turn-by-turn navigation, in-app chat and a statistics dashboard. The UI is available in English and Bengali.",
      architecture: {
        stack: [
          "Java, Android SDK 34, Material Design components",
          "MVVM: Activities/Fragments observe ViewModels exposing LiveData",
          "Repository layer over Room (SQLite) DAOs and entities",
          "AMap 3D, Navigation and Location SDKs, with OSMDroid as an OpenStreetMap fallback",
          "Text-to-Speech, local notifications, FileProvider-based backup and restore",
        ],
        diagram: null,
        mermaid: null,
      },
      decisions: [
        "Offline-first with all data in a local Room database: an emergency request never depends on connectivity, at the cost of no cross-device sync until a backend is added.",
        "MVVM with a Repository layer so UI, business logic and persistence could be built and changed independently by different team members.",
        "AMap SDKs for maps and navigation because the app targets users in China, with OSMDroid kept as a fallback.",
        "A 3-second SOS countdown with spoken feedback: a deliberate trade-off between preventing accidental alerts and keeping help one tap away.",
      ],
      results: [
        "Working Android app covering elderly, volunteer and family flows: SOS, live map with navigation, chat, reminders and statistics.",
        "Bilingual interface (English and Bengali) with large-text and voice-feedback accessibility options.",
        "Local backup and restore so users never lose emergency history or contacts.",
      ],
      learned:
        "Designing for elderly users made every screen justify itself: large touch targets, spoken confirmations and a countdown mattered more than any clever feature. As team leader I learned to split work along the MVVM layers so people could build in parallel without blocking each other.",
    },
  },
  {
    slug: "facenetgrid",
    title: "FaceNetGrid",
    tagline: "Distributed, real-time face recognition over LAN with a Streamlit UI, multi-device capture and admin controls.",
    period: "2026",
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
      role: "Solo project.",
      approach:
        "Designed an object-oriented Python system with a client–server split: clients capture webcam frames, the server matches faces against one shared database, and a Streamlit web UI exposes matching, enrolment, history and exports with password-protected admin features.",
      architecture: {
        stack: [
          "Python 3 with type hints, docstrings and unit tests",
          "client/: camera capture, GUI and network utilities",
          "server/: face matcher, database manager and server GUI",
          "face_recognition (dlib) embeddings, OpenCV and Pillow for image processing",
          "SQLite match history plus JSON/CSV export",
          "Streamlit UI reachable over LAN or through an ngrok / Cloudflare tunnel",
        ],
        diagram: null,
        mermaid: null,
      },
      decisions: [
        "Client–server split over the LAN: cameras capture on the client and matching runs on the server against one shared database, so any device can join without its own model.",
        "Local dlib embeddings with SQLite and JSON storage instead of a cloud API: zero recurring cost and no biometric data leaves the network.",
        "Streamlit for the interface to ship a usable admin panel quickly, accepting less layout control than a custom frontend.",
        "Password-protected admin role for enrolment, deletion and export, while ordinary users can only run matches.",
      ],
      results: [
        "Runs real-time recognition on any device over LAN or a public tunnel.",
        "Separate admin and user roles, with export of faces and recognition logs.",
        "No cloud dependency and no recurring cost.",
      ],
      learned:
        "Biometric data is sensitive, so keeping everything on-premises shaped every other choice. I also learned how much of a recognition system is not the model: enrolment, history, exports and access control took more care than the matching itself.",
    },
  },
  {
    slug: "reflecthub",
    title: "ReflectHub",
    tagline: "Community platform for sharing life lessons, with Firebase auth and Stripe-powered premium membership.",
    period: "2026",
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
      role: "Solo project.",
      approach:
        "Built a React single-page app with lesson browsing by category and search, premium access control, a user dashboard (add lesson, my lessons, favourites, profile), an admin area for featured lessons, Firebase authentication and a Stripe-based membership checkout.",
      architecture: {
        stack: [
          "React 19 + React Router 7, built with Vite",
          "TanStack Query for server state over an Axios API client",
          "Firebase Authentication (email/password and Google)",
          "Stripe checkout via React Stripe JS for membership",
          "Tailwind CSS v4 + DaisyUI",
        ],
        diagram: null,
        mermaid: null,
      },
      decisions: [
        "Firebase Authentication instead of a hand-rolled auth system, trading vendor coupling for security I did not have to build myself.",
        "TanStack Query as the server-state layer so lesson lists and details cache, refetch and stay consistent across routes.",
        "Stripe Checkout for membership so card details never touch the app.",
        "Likes and saves kept client-side in localStorage for the first release, with shared counts deferred to a future backend endpoint.",
      ],
      results: [
        "Live, publicly accessible deployment on Vercel.",
        "Gated premium content behind an authenticated membership flow, with admin override.",
      ],
      learned:
        "Gating premium content correctly (premium users and admins in, everyone else locked) was harder than the payment itself. I learned to encode access rules in one place and reuse them across routes and the dashboard.",
    },
  },
  {
    slug: "meghbarta",
    title: "MeghBarta",
    tagline: "Installable weather Progressive Web App with computed feels-like temperature, charts and offline support.",
    period: "2026",
    image: "https://i.ibb.co/gFmX5xfQ/Screenshot-2026-02-04-at-9-07-46-PM.png",
    imageAlt: "MeghBarta weather app showing the current forecast",
    tags: ["React", "Vite", "TanStack Query", "Recharts", "OpenWeather API", "PWA"],
    category: "frontend",
    featured: false,
    links: {
      demo: "https://megh-barta.vercel.app/",
      github: "https://github.com/Rakib-codee/MeghBarta",
    },
    caseStudy: {
      problem: "Users needed accurate and timely weather forecasts to plan their activities effectively.",
      role: "Solo project.",
      approach:
        "Developed a Progressive Web App in React on top of the OpenWeather API with global city search, geolocation, a 7-day forecast, temperature and humidity charts, a feels-like temperature computed from Heat Index, Wind Chill and Humidex, and offline caching.",
      architecture: {
        stack: ["React 18 with Vite", "TanStack Query with 10-minute background refresh", "Recharts and circular gauges", "Framer Motion", "Service worker and web app manifest"],
        diagram: null,
        mermaid: null,
      },
      decisions: [
        "Progressive Web App with a service worker so the last forecast stays available offline and the app is installable.",
        "Feels-like temperature computed from Heat Index, Wind Chill and Humidex rather than trusting a single API field.",
        "TanStack Query with a 10-minute background refresh to balance freshness against API quota.",
        "Vite + React with Recharts for lightweight charts instead of a heavier dashboard library.",
      ],
      results: ["Live deployment with real-time updates and offline access."],
      learned:
        "Offline support is a product decision, not a checkbox: deciding what to cache and what to show when data is stale taught me more than the weather API did.",
    },
  },
  {
    slug: "office-supply-management",
    title: "Office Supply Management System",
    tagline: "Java desktop application to manage inventory, suppliers, item requests and usage reports.",
    period: "2026",
    image: "https://i.ibb.co/whZGrkSM/Screenshot-2026-01-25-at-6-06-14-AM.png",
    imageAlt: "Office Supply Management System inventory screen",
    tags: ["Java", "OOP", "JDBC", "MySQL"],
    category: "java",
    featured: false,
    // No public repository was provided for this project.
    links: {},
    caseStudy: {
      problem: "Manual tracking of office supplies caused stock shortages, over-ordering, and lack of transparency.",
      role: "Solo project.",
      approach:
        "Built a Java application to manage inventory, supplier details, item requests, and usage records with database support.",
      architecture: {
        stack: ["Java (OOP)", "JDBC data-access layer", "MySQL schema for items, suppliers, requests and usage records"],
        diagram: null,
        mermaid: null,
      },
      decisions: [
        "Plain Java with JDBC rather than an ORM, to understand SQL and connection handling directly.",
        "A MySQL schema for items, suppliers, requests and usage records, with reporting built on the same tables.",
      ],
      results: ["Centralised inventory, supplier and request records in one database-backed application."],
      learned: "I learned to design the schema before the screens and to keep all data access in one layer so the UI never touches SQL directly.",
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
      learned: "Writing honest content was harder than the animation: every number I could not verify had to go, and the site is better for it.",
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
  mobile: "Mobile",
  fullstack: "Full Stack",
  java: "Java",
  frontend: "Frontend",
};
