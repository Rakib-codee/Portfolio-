"use client";

import { motion } from "framer-motion";
import { Badge, Card, Heading, Text } from "../ui";
import { skills } from "@/content/skills";
import { education } from "@/content/education";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & Design",
    skills: ["Git", "Figma", "VS Code", "Vercel", "Docker"],
  },
];

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "25+" },
  { label: "Happy Clients", value: "15+" },
  { label: "Technologies", value: "20+" },
];

export function About() {
  return (
    <div className="space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <motion.span
          className="inline-block text-cyan-400 font-mono text-sm tracking-wider uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get to know me
        </motion.span>
        <Heading level={2}>About Me</Heading>
      </div>

      {/* Stats Row */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-6 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] shadow-[var(--shadow)]"
            whileHover={{ y: -4, borderColor: "rgba(6, 182, 212, 0.3)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">{stat.value}</div>
            <div className="text-sm text-[var(--muted)] mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Bio Card */}
        <Card className="h-full">
          <div className="space-y-6">
            <div>
              <Heading level={3} className="text-2xl mb-4">My Story</Heading>
              <Text muted className="leading-relaxed">
                I'm a passionate developer who bridges the gap between engineering excellence and thoughtful design. 
                With a strong foundation in computer science and a keen eye for aesthetics, I create digital 
                experiences that are both functional and beautiful.
              </Text>
            </div>
            
            <Text muted className="leading-relaxed">
              I thrive in collaborative environments where I can learn from others and contribute my expertise. 
              Whether it's building scalable web applications, crafting intuitive user interfaces, or optimizing 
              performance, I approach every challenge with curiosity and dedication.
            </Text>

            {/* Education */}
            <div className="pt-4 border-t border-[var(--card-border)]">
              <Heading level={3} className="text-xl mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Education
              </Heading>
              {education.map((edu) => (
                <div key={edu.school} className="space-y-1">
                  <Text className="font-semibold text-[var(--foreground)]">{edu.school}</Text>
                  <Text muted size="sm">{edu.institution}</Text>
                  <Text className="text-[var(--accent)]/80" size="sm">{edu.period}</Text>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Skills Card */}
        <Card className="h-full">
          <Heading level={3} className="text-2xl mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Technical Skills
          </Heading>
          
          <div className="space-y-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <Text className="text-[var(--muted)] text-sm font-medium mb-3 uppercase tracking-wider">
                  {category.title}
                </Text>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <Badge variant="primary">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download Resume CTA */}
          <motion.a
            href="#"
            className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium hover:bg-cyan-500/20 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.a>
        </Card>
      </div>
    </div>
  );
}
