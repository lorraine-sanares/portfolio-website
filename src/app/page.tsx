
import Hero from "@/components/HeroAbout";
import Navbar from "@/components/Navbar";
import Doing from "@/components/Doing";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";



export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Doing />
      <Experience />
      <TechStack />
      <Projects />
    </main>
  );
}
