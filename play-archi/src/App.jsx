import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Innovations from "./sections/Innovations";
import Partners from "./sections/Partners";
import Awards from "./sections/Awards";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden font-body">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Innovations />
      <Partners />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}
