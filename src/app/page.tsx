import { About } from "@/components/sections/About";
import { Activities } from "@/components/sections/Activities";
import { Contact } from "@/components/sections/Contact";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Research />
      <Projects />
      <Skills />
      <Activities />
      <GitHubActivity />
      <Contact />
    </main>
  );
}
