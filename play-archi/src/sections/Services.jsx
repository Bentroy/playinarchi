import { useState } from "react";

const SERVICES = [
  {
    num: "01",
    title: "Design & Build",
    icon: "🏗",
    desc: "Our flagship offering. We take complete ownership of your project — from initial script, concept sketches, 3D renders, technical drawings, all the way through to handing you the keys. Our team is on-site throughout.",
    tags: ["Architecture", "Structural Engineering", "Interior Fit-Out", "Site Management", "Joinery", "MEP"],
  },
  {
    num: "02",
    title: "Design & Supervision",
    icon: "📐",
    desc: "We provide the full PLAY architectural design package then supervise your build — ensuring every detail matches the vision, even when you bring your own contractor.",
    tags: ["Concept Development", "Technical Drawings", "Quality Control", "On-Site Supervision"],
  },
  {
    num: "03",
    title: "Design Only",
    icon: "✏️",
    desc: "Get the PLAY treatment for your design. We produce stunning, award-worthy concept sketches, 3D visualisations, and technical plans that push every boundary while remaining buildable.",
    tags: ["Concept Sketches", "3D Visualisation", "Planning Drawings", "Technical Specifications"],
  },
  {
    num: "04",
    title: "Bespoke Interiors",
    icon: "🪟",
    desc: "Custom windows, doors, staircases, balustrades, wardrobes, gates — all designed and crafted in-house. Plus innovative lighting systems, kitchen design, bathrooms and bespoke tiling concepts.",
    tags: ["Custom Joinery", "Feature Lighting", "Kitchen & Bathroom", "Tiling", "Gates & Balustrades"],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-28 md:py-40 bg-[#0d0d0d] relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-play-red/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="reveal text-play-red font-condensed font-semibold text-xs tracking-[0.5em] uppercase mb-4">
              What We Do
            </p>
            <h2
              className="reveal font-display text-white leading-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              OUR
              <br />
              SERVICES
            </h2>
          </div>
          <p className="reveal text-white/40 max-w-xs text-sm leading-relaxed">
            From single bungalows to expansive estates — we're equipped to handle projects of any scale.
          </p>
        </div>

        {/* Service tabs (desktop: sidebar + detail) */}
        <div className="hidden md:grid grid-cols-5 gap-px bg-white/[0.04] border border-white/[0.04]">
          {/* Tabs */}
          <div className="col-span-2 flex flex-col">
            {SERVICES.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-5 p-8 text-left border-b border-white/[0.04] last:border-0 transition-all duration-300 group ${
                  active === i ? "bg-play-red" : "bg-[#0d0d0d] hover:bg-[#141414]"
                }`}
              >
                <span className={`font-display text-4xl leading-none transition-colors ${active === i ? "text-white/20" : "text-white/10 group-hover:text-white/20"}`}>
                  {s.num}
                </span>
                <div>
                  <div className={`font-condensed font-bold text-base tracking-wider uppercase transition-colors ${active === i ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                    {s.title}
                  </div>
                </div>
                <svg className={`ml-auto w-4 h-4 transition-all duration-300 ${active === i ? "text-white translate-x-1" : "text-white/20 group-hover:text-white/60"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="col-span-3 bg-[#0d0d0d] p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 font-display text-white/[0.03] leading-none select-none" style={{ fontSize: "12rem" }}>
              {SERVICES[active].num}
            </div>
            <div className="relative z-10">
              <div className="text-5xl mb-6">{SERVICES[active].icon}</div>
              <h3 className="font-display text-white text-4xl mb-6">{SERVICES[active].title}</h3>
              <p className="text-white/55 leading-relaxed text-base max-w-lg">{SERVICES[active].desc}</p>
              <div className="flex flex-wrap gap-2 mt-8">
                {SERVICES[active].tags.map((t) => (
                  <span key={t} className="border border-white/10 text-white/50 text-xs px-3 py-1 tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="relative z-10 mt-12 self-start flex items-center gap-3 text-play-red font-condensed font-semibold text-sm tracking-widest uppercase hover:gap-5 transition-all duration-300 group"
            >
              Start this project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile: accordion cards */}
        <div className="md:hidden space-y-3">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`border transition-all duration-300 ${active === i ? "border-play-red/50 bg-[#111]" : "border-white/[0.06] bg-[#0d0d0d]"}`}
            >
              <button
                onClick={() => setActive(active === i ? -1 : i)}
                className="w-full flex items-center gap-4 p-6 text-left"
              >
                <span className="font-display text-3xl text-play-red/40">{s.num}</span>
                <span className="font-condensed font-bold text-white tracking-wider uppercase flex-1">{s.title}</span>
                <span className={`text-play-red transition-transform duration-300 ${active === i ? "rotate-90" : ""}`}>▶</span>
              </button>
              {active === i && (
                <div className="px-6 pb-6">
                  <p className="text-white/55 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="border border-white/10 text-white/40 text-xs px-2 py-1">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="reveal mt-14 bg-play-red flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10">
          <div>
            <h3 className="font-display text-white text-3xl">Ready to Build Something Sensational?</h3>
            <p className="text-white/70 mt-1 text-sm">From bungalows to expansive estates — we handle it all.</p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 bg-white text-play-red px-8 py-4 font-condensed font-bold text-sm tracking-[0.25em] uppercase hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
          >
            Start a Project →
          </button>
        </div>
      </div>
    </section>
  );
}
