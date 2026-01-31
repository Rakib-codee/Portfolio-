"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui";
import { fadeUp, staggerContainer } from "@/lib/variants";
import { FadeScaleTransition } from "@/components/PageTransition";
import { SoundToggle } from "@/components/SoundProvider";

// Dynamic import for Three.js (prevents SSR issues)
const HeroBackground3D = dynamic(
  () => import("@/components/ThreeBackground").then((mod) => mod.HeroBackground3D),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      {/* Sound Toggle Button */}
      <SoundToggle />

      <Navbar />
      
      <FadeScaleTransition>
        <main className="bg-(--background) text-(--foreground) transition-colors duration-300">
          {/* Hero Section - Extra large spacing */}
          <Section id="hero" className="pt-32 pb-24 relative overflow-hidden" spacing="none">
            {/* 3D Background */}
            <HeroBackground3D />
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="space-y-12 relative z-10"
            >
              <motion.div variants={fadeUp}>
                <Hero />
              </motion.div>
            </motion.div>
          </Section>

          {/* About Section */}
          <Section id="about" divider>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <About />
            </motion.div>
          </Section>

          {/* Projects Section */}
          <Section id="projects" spacing="lg" divider>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Projects />
            </motion.div>
          </Section>

          {/* Services Section */}
          <Section id="services" spacing="lg" divider>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Services />
            </motion.div>
          </Section>

          {/* Testimonials Section */}
          <Section id="testimonials" spacing="lg" divider>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Testimonials />
            </motion.div>
          </Section>

          {/* Contact Section */}
          <Section id="contact" spacing="lg" divider className="pb-28">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Contact />
            </motion.div>
          </Section>
        </main>
      </FadeScaleTransition>
      
      <Footer />

      {/* Sticky CTA Button - Mobile */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 md:hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <motion.a
          href="#contact"
          className="flex items-center gap-2 px-5 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-full shadow-lg shadow-cyan-500/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Hire Me
        </motion.a>
      </motion.div>
    </>
  );
}
