"use client";

import { motion } from "framer-motion";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui";
import { fadeUp, staggerContainer } from "@/lib/variants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground transition-colors duration-300">
        <Section id="hero" className="pt-50 pb-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            <motion.div variants={fadeUp}>
              <Hero />
            </motion.div>
          </motion.div>
        </Section>

        <Section id="about">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <About />
          </motion.div>
        </Section>

        <Section id="projects">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Projects />
          </motion.div>
        </Section>

        <Section id="services">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Services />
          </motion.div>
        </Section>

        <Section id="contact" className="pb-28">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Contact />
          </motion.div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
