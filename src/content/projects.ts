export const projects = [
  {
    id: 1,
    title: "UrbanAI-",
    description:
      "Full-stack e-commerce platform with Next.js, Stripe integration, and real-time inventory management.",
    image: "",
    tags: ["Next.js", "React", "Tailwind", "Stripe", "PostgreSQL"],
    category: "fullstack",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    caseStudy: {
      problem: "A local retailer was losing 40% of potential sales due to their outdated website with poor mobile experience and no payment integration.",
      solution: "Built a modern e-commerce platform with responsive design, Stripe payments, real-time inventory sync, and optimized checkout flow.",
      result: "Increased online sales by 150% in 3 months, reduced cart abandonment by 35%, and achieved 99.9% uptime.",
    },
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts, user authentication, and data visualization.",
    image: "",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind", "Firebase"],
    category: "frontend",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    caseStudy: {
      problem: "Marketing team spent 5+ hours weekly manually compiling data from multiple sources into spreadsheets.",
      solution: "Created a unified dashboard with automated data pipelines, real-time charts, and exportable reports.",
      result: "Reduced reporting time by 90%, enabled data-driven decisions with live metrics, and saved $2K/month in tools.",
    },
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop UI, and team features.",
    image: "",
    tags: ["Next.js", "Framer Motion", "Supabase", "Tailwind"],
    category: "fullstack",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    caseStudy: {
      problem: "Remote team of 20+ struggled with task visibility and missed deadlines using email and basic tools.",
      solution: "Developed real-time Kanban board with assignments, due dates, notifications, and progress tracking.",
      result: "Improved on-time delivery by 60%, reduced meeting time by 40%, and team reported higher satisfaction.",
    },
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Modern, animated portfolio website showcasing projects and skills with smooth transitions.",
    image: "",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    category: "frontend",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    caseStudy: {
      problem: "Needed a personal brand presence that stands out in a crowded market and showcases technical skills.",
      solution: "Designed and built a performance-focused portfolio with animations, dark/light mode, and case studies.",
      result: "Increased profile visits by 200%, received 5+ client inquiries within first month of launch.",
    },
  },
  {
    id: 5,
    title: "Inventory Management System",
    description:
      "Enterprise Java application for warehouse management with barcode scanning and real-time tracking.",
    image: "",
    tags: ["Java", "Spring Boot", "MySQL", "REST API", "JWT"],
    category: "java",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    caseStudy: {
      problem: "Warehouse managing 10K+ products struggled with manual tracking, causing frequent stock discrepancies.",
      solution: "Built a Spring Boot application with barcode integration, real-time inventory updates, and automated alerts.",
      result: "Reduced stock errors by 95%, improved order fulfillment speed by 40%, and saved 20 hours/week in manual work.",
    },
  },
  {
    id: 6,
    title: "Banking API Microservices",
    description:
      "Secure microservices architecture for banking operations with transaction processing and fraud detection.",
    image: "",
    tags: ["Java", "Spring Boot", "Kafka", "Docker", "PostgreSQL"],
    category: "java",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    caseStudy: {
      problem: "Legacy monolithic banking system couldn't scale and had 99.5% uptime with frequent downtimes.",
      solution: "Redesigned as microservices with Spring Boot, Kafka for messaging, and containerized deployment.",
      result: "Achieved 99.99% uptime, reduced transaction processing time by 60%, and enabled horizontal scaling.",
    },
  },
  {
    id: 7,
    title: "ML Data Pipeline",
    description:
      "Automated data pipeline for machine learning with data cleaning, feature engineering, and model training.",
    image: "",
    tags: ["Python", "Pandas", "Scikit-learn", "FastAPI", "Docker"],
    category: "python",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    caseStudy: {
      problem: "Data science team spent 70% of time on data preparation instead of model development.",
      solution: "Created automated pipeline with data validation, cleaning, feature extraction, and model versioning.",
      result: "Reduced data prep time by 80%, increased model iteration speed 3x, and improved prediction accuracy by 15%.",
    },
  },
  {
    id: 8,
    title: "E-Learning Platform API",
    description:
      "Django REST API for online learning platform with course management, payments, and progress tracking.",
    image: "",
    tags: ["Python", "Django", "PostgreSQL", "Redis", "Celery"],
    category: "python",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    caseStudy: {
      problem: "Educational startup needed a scalable backend for their platform supporting 50K+ concurrent users.",
      solution: "Built Django REST API with Redis caching, Celery for async tasks, and optimized database queries.",
      result: "Handles 100K+ users with <100ms response time, processes 5K+ daily enrollments, 99.9% API uptime.",
    },
  },
  {
    id: 9,
    title: "Web Scraping Automation",
    description:
      "Automated data extraction system for competitive analysis with scheduled scraping and reporting.",
    image: "",
    tags: ["Python", "Scrapy", "Selenium", "MongoDB", "FastAPI"],
    category: "python",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    caseStudy: {
      problem: "Marketing team manually collected competitor pricing data weekly, taking 15+ hours.",
      solution: "Developed automated scraping system with anti-detection, data normalization, and dashboard integration.",
      result: "Reduced data collection to minutes, enabled daily monitoring, and identified pricing opportunities worth $50K.",
    },
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "java", label: "Java" },
  { id: "python", label: "Python" },
];

export type Project = (typeof projects)[0];
