import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Section from "@/components/Section";
import Profiles from '@/components/Profiles';
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        
        <Section id="about" className="py-32 bg-white dark:bg-dark">
          <About />
        </Section>
        <Section id="skills" className="py-32 section-adaptive">
          <Skills />
        </Section>
        
        <Section id="projects" className="py-24 bg-white dark:bg-dark">
          <Projects />
        </Section>

        <Section id="profiles" className="py-20 section-adaptive">
          <Profiles />
        </Section>
        
        <Section id="contact" className="py-24 section-adaptive">
          <Contact />
        </Section>
        
      </main>
      <Footer />
    </>
  );
}

