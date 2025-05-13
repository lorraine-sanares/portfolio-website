
import Hero from "@/components/HeroAbout";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Doing from "@/components/Doing";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import More from "@/components/More";
import Datasci from "@/components/Datasci";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        < About/>
      </section>

      <section id="doing">
        <Doing />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="techstack">
        <TechStack />
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/* <section id="datasci">
        <Datasci />
      </section> */}

      <section id="more">
        <More />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

