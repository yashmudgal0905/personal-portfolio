import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />

      <section id="about" className="py-32 bg-white">
        <About />
      </section>

      <section id="education" className="py-32 bg-[#4F73C6]">
        <Education />
      </section>

      <section id="skills" className="py-32 bg-white">
        <Skills />
      </section>

      <section id="projects" className="py-32 bg-gray-50">
        <Projects />
      </section>

      <section id="contact" className="py-32 bg-white">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
