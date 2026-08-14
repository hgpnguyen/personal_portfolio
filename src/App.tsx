import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Testimonials } from "@/sections/Testimonials";
import { Projects } from "@/sections/Projects";
import { About } from "@/sections/About";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App
