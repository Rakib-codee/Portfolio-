"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/content/projects";
import { Badge, Button, Heading, Text } from "../ui";

const PROJECTS_PER_PAGE = 4;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Reset to page 1 when category changes
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setExpandedProject(null);
  };

  return (
    <div className="space-y-12 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center space-y-4 w-full flex flex-col items-center">
        <motion.span
          className="inline-block text-cyan-400 font-mono text-sm tracking-wider uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          My Recent Work
        </motion.span>
        <Heading level={2}>Featured Projects</Heading>
        <Text muted className="max-w-2xl text-center">
          Real projects with real impact. Click any project to see the full story — 
          the problem, my solution, and the measurable results.
        </Text>
      </div>

      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat.id
                ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/25"
                : "bg-[var(--card)] text-[var(--muted)] border border-[var(--card-border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {paginatedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <motion.div
                className={`group relative bg-[var(--card)] border border-[var(--card-border)] rounded-2xl overflow-hidden h-full cursor-pointer ${
                  expandedProject === project.id ? "ring-2 ring-cyan-500" : ""
                }`}
                style={{ boxShadow: "var(--shadow)" }}
                whileHover={{ y: -8, borderColor: "rgba(6, 182, 212, 0.4)" }}
                transition={{ duration: 0.3 }}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-[var(--card)] to-[var(--background)] flex items-center justify-center">
                      <svg className="w-16 h-16 text-cyan-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </motion.div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Quick action buttons - visible on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.a
                    href={project.demoUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black font-medium rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-[var(--card)]/80 backdrop-blur-sm text-[var(--foreground)] font-medium rounded-lg border border-[var(--card-border)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <Heading level={3} className="text-xl group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </Heading>
                    <motion.span
                      animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                      className="text-[var(--muted)]"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </div>
                  <Text muted size="sm" className="mt-2 line-clamp-2">
                    {project.description}
                  </Text>
                </div>

                {/* Case Study - Expandable */}
                <AnimatePresence>
                  {expandedProject === project.id && project.caseStudy && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-[var(--card-border)] space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center text-sm font-bold">!</span>
                          <div>
                            <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Problem</p>
                            <p className="text-sm text-[var(--muted)]">{project.caseStudy.problem}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-sm font-bold">→</span>
                          <div>
                            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">Solution</p>
                            <p className="text-sm text-[var(--muted)]">{project.caseStudy.solution}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center text-sm font-bold">✓</span>
                          <div>
                            <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">Result</p>
                            <p className="text-sm text-[var(--muted)]">{project.caseStudy.result}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium text-[var(--muted)] bg-[var(--card-border)]/50 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 text-xs font-medium text-cyan-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          className="flex items-center justify-center gap-2 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Previous Button */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg border transition-all ${
              currentPage === 1
                ? "border-[var(--card-border)] text-[var(--muted)] cursor-not-allowed opacity-50"
                : "border-[var(--card-border)] text-[var(--foreground)] hover:border-cyan-500 hover:text-cyan-500"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-10 h-10 rounded-lg font-medium transition-all ${
                currentPage === page
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/25"
                  : "bg-[var(--card)] text-[var(--muted)] border border-[var(--card-border)] hover:border-cyan-500 hover:text-cyan-500"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg border transition-all ${
              currentPage === totalPages
                ? "border-[var(--card-border)] text-[var(--muted)] cursor-not-allowed opacity-50"
                : "border-[var(--card-border)] text-[var(--foreground)] hover:border-cyan-500 hover:text-cyan-500"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      )}

      {/* Page Info */}
      {totalPages > 1 && (
        <p className="text-center text-sm text-[var(--muted)]">
          Showing {startIndex + 1}-{Math.min(startIndex + PROJECTS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} projects
        </p>
      )}
    </div>
  );
}
