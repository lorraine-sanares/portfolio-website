
import Hero from "@/components/HeroAbout";
import Navbar from "@/components/Navbar";
import Doing from "@/components/Doing";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import More from "@/components/More";
import Datasci from "@/components/Datasci";
import Contact from "@/components/Contact";

export default function page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Doing />
      <Experience />
      <TechStack />
      <Projects />
      <Datasci />
      <More />
      <Contact />

    </main>
  );
}
