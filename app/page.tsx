import AdvancedNavbar from "@/components/AdvancedNavbar";
import AdvancedHero from "@/components/AdvancedHero";
import About from "@/components/About";
import AdvancedSkills from "@/components/AdvancedSkills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import AdvancedProjects from "@/components/AdvancedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <AdvancedNavbar />
      <AdvancedHero />
      <About />
      <AdvancedSkills />
      <Education />
      <Experience />
      <AdvancedProjects />
      <Contact />
      <Footer />
    </main>
  );
}
