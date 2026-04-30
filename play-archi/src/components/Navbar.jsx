import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

const NAV = [
  { label: "About",       id: "about" },
  { label: "Services",    id: "services" },
  { label: "Projects",    id: "projects" },
  { label: "Innovations", id: "innovations" },
  { label: "Awards",      id: "awards" },
  { label: "Contact",     id: "contact" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/[0.06] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="PLAY in Architecture"
              className="h-9 w-9 object-contain"
            />
            <div className="hidden sm:block">
              <div className="font-display text-white text-xl tracking-wider leading-none group-hover:text-play-red transition-colors duration-300">
                PLAY
              </div>
              <div className="text-white/40 text-[8px] tracking-[0.3em] uppercase leading-none mt-0.5">
                In Architecture Ltd
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="relative text-white/60 hover:text-white text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 group"
              >
                {n.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-play-red group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="ml-2 bg-play-red text-white px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-play-red transition-all duration-300"
            >
              Let's PLAY
            </button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Red accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-play-red/5 pointer-events-none" />
        <nav className="flex flex-col items-center gap-6 relative z-10">
          {NAV.map((n, i) => (
            <button
              key={n.id}
              onClick={() => { scrollTo(n.id); setOpen(false); }}
              className="font-display text-white text-5xl tracking-wider hover:text-play-red transition-colors duration-200"
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              {n.label}
            </button>
          ))}
          <button
            onClick={() => { scrollTo("contact"); setOpen(false); }}
            className="mt-4 border-2 border-play-red text-play-red px-10 py-4 font-condensed font-bold text-sm tracking-[0.3em] uppercase hover:bg-play-red hover:text-white transition-all duration-300"
          >
            Let's PLAY
          </button>
        </nav>
        <div className="absolute bottom-8 text-white/20 text-xs tracking-widest uppercase">
          © PLAY in Architecture Ltd
        </div>
      </div>
    </>
  );
}
