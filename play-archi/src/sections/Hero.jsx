import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef(null);

  // Parallax on scroll
  useEffect(() => {
    const fn = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden noise">
      {/* ── BG layers ── */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#18000a] to-[#0a0a0a]" />

        {/* Right red wash */}
        <div className="absolute inset-y-0 right-0 w-3/5 bg-gradient-to-l from-play-red/15 via-play-red/5 to-transparent" />

        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* SVG architectural geometry */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <line x1="0" y1="450" x2="1440" y2="450" stroke="white" strokeWidth="0.6" />
          <line x1="720" y1="0" x2="720" y2="900" stroke="white" strokeWidth="0.6" />
          <circle cx="720" cy="450" r="220" stroke="#E8002D" strokeWidth="0.8" fill="none" />
          <circle cx="720" cy="450" r="380" stroke="white" strokeWidth="0.4" fill="none" />
          <circle cx="720" cy="450" r="540" stroke="white" strokeWidth="0.2" fill="none" />
          <line x1="0" y1="0" x2="720" y2="450" stroke="white" strokeWidth="0.3" />
          <line x1="1440" y1="0" x2="720" y2="450" stroke="white" strokeWidth="0.3" />
          <line x1="0" y1="900" x2="720" y2="450" stroke="white" strokeWidth="0.3" />
          <line x1="1440" y1="900" x2="720" y2="450" stroke="white" strokeWidth="0.3" />
        </svg>

        {/* Large PLAY watermark */}
        <div
          className="absolute bottom-0 right-0 text-white/[0.03] font-display leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(8rem,25vw,22rem)" }}
        >
          PLAY
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        {/* Eyebrow */}
        <p
          className="hero-anim text-play-red font-condensed font-semibold text-xs tracking-[0.55em] uppercase mb-6"
          style={{ animationDelay: "0.15s" }}
        >
          Lagos · Nigeria · 20+ Years of Design Excellence
        </p>

        {/* Headline */}
        <h1
          className="hero-anim font-display leading-[0.88] text-white mb-8"
          style={{
            fontSize: "clamp(4.5rem, 13vw, 12rem)",
            letterSpacing: "-0.01em",
            animationDelay: "0.35s",
          }}
        >
          WHERE
          <br />
          <span className="text-play-red">FUN</span>
          <br />
          MEETS
          <br />
          DESIGN
        </h1>

        {/* Sub */}
        <p
          className="hero-anim text-white/55 text-lg max-w-md leading-relaxed mb-10 font-light"
          style={{ animationDelay: "0.55s" }}
        >
          Nigeria's boldest Design-Build firm. We craft breathtaking
          PLAY Boxes — sensational homes full of drama, innovation, and character.
        </p>

        {/* CTAs */}
        <div
          className="hero-anim flex flex-wrap gap-4"
          style={{ animationDelay: "0.75s" }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-3 bg-play-red text-white px-8 py-4 font-condensed font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-play-red transition-all duration-300"
          >
            View Our Work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-white/25 text-white px-8 py-4 font-condensed font-bold text-sm tracking-[0.2em] uppercase hover:border-white hover:bg-white/5 transition-all duration-300"
          >
            Let's PLAY
          </button>
        </div>

        {/* Stat row */}
        <div
          className="hero-anim hidden md:flex gap-12 mt-16 pt-8 border-t border-white/10"
          style={{ animationDelay: "0.95s" }}
        >
          {[
            { n: "20+", l: "Years in Business" },
            { n: "3",   l: "Industry Awards" },
            { n: "8+",  l: "Completed Projects" },
            { n: "∞",   l: "Innovations Introduced" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-white text-4xl leading-none">{s.n}</div>
              <div className="text-white/35 text-[11px] tracking-widest uppercase mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-14 bg-white/10 overflow-hidden relative">
          <div className="absolute w-full bg-play-red" style={{ height: "40%", animation: "scrollLine 1.8s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
