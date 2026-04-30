import { useState } from "react";

const PROJECTS = [
  {
    id: "01", title: "The Address, Lekki",
    sub: "Luxury 5-Bed Detached PLAY Box",
    type: "Design & Build", location: "Lekki, Lagos", year: "2023",
    span: "large",
    palette: { base: "#120005", accent: "#E8002D" },
    desc: "A bespoke 5-bedroom PLAY Box at The Address Estate — one of Lagos's most prestigious addresses. Bold massing, dramatic fenestration, and PLAY's signature interior craftsmanship throughout.",
  },
  {
    id: "02", title: "Iconic Towers",
    sub: "7-Tower Mixed-Use Development",
    type: "Design & Build", location: "Victoria Island, Lagos", year: "2024",
    span: "medium",
    palette: { base: "#05050f", accent: "#E8002D" },
    desc: "Seven landmark towers rising on Sinari Daranijo Road, VI. Luxury 1-bed apartments from ₦45M. Architectural drama at every level.",
  },
  {
    id: "03", title: "PLAY B3",
    sub: "Signature Residential PLAY Box",
    type: "Design & Build", location: "Lagos", year: "2022",
    span: "medium",
    palette: { base: "#050f05", accent: "#E8002D" },
    desc: "The third in PLAY's own signature 'B-series' of spec homes. Celebrated on completion — a showcase of everything PLAY stands for.",
  },
  {
    id: "04", title: "Maryland Residence",
    sub: "Modern Sensational Design",
    type: "Design Only", location: "Maryland, Lagos", year: "2023",
    span: "small",
    palette: { base: "#0a0800", accent: "#E8002D" },
    desc: "A daring new collection design for Maryland. Striking geometric facade with PLAY's unmistakable drama.",
  },
  {
    id: "05", title: "Abuja Vision",
    sub: "Contemporary Residential",
    type: "Design & Supervision", location: "Abuja, FCT", year: "2024",
    span: "small",
    palette: { base: "#08000a", accent: "#E8002D" },
    desc: "PLAY ventures north — bringing their Lagos energy to the nation's capital. A fascinating new design redefining Abuja residential luxury.",
  },
  {
    id: "06", title: "Lekki Ajah Estate",
    sub: "9-Unit Residential Development",
    type: "Design & Build", location: "Lekki Ajah, Lagos", year: "2023",
    span: "medium",
    palette: { base: "#00080a", accent: "#E8002D" },
    desc: "Nine beautifully designed 5-bedroom detached houses behind the Mercedes-Benz main dealership. Now sold.",
  },
];

const FILTERS = ["All", "Design & Build", "Design & Supervision", "Design Only"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState(null);

  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-28 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-white/[0.02] leading-none pointer-events-none select-none" style={{ fontSize: "clamp(8rem,22vw,20rem)" }}>
        BOXES
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="reveal text-play-red font-condensed font-semibold text-xs tracking-[0.5em] uppercase mb-4">
              Our Work
            </p>
            <h2
              className="reveal font-display text-white leading-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              PLAY BOXES
              <br />& PROJECTS
            </h2>
          </div>

          {/* Filter pills */}
          <div className="reveal flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 font-condensed text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 ${
                  filter === f
                    ? "bg-play-red text-white"
                    : "border border-white/15 text-white/45 hover:border-white/40 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {visible.map((p) => {
            const isLarge = p.span === "large";
            const isMed   = p.span === "medium";
            return (
              <div
                key={p.id}
                className={`relative overflow-hidden group cursor-pointer ${
                  isLarge ? "md:col-span-2 md:row-span-2" : ""
                }`}
                style={{ minHeight: isLarge ? "520px" : isMed ? "300px" : "240px" }}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* BG */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: `linear-gradient(145deg, ${p.palette.base} 0%, #0a0a0a 100%)` }}
                />

                {/* Grid lines */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(232,0,45,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,0,45,0.5) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Corner triangle */}
                <div
                  className="absolute top-0 right-0 opacity-60"
                  style={{
                    width: 0, height: 0,
                    borderStyle: "solid",
                    borderWidth: "0 70px 70px 0",
                    borderColor: `transparent ${p.palette.accent} transparent transparent`,
                    transition: "border-width 0.3s",
                  }}
                />

                {/* Number watermark */}
                <div
                  className="absolute bottom-0 right-0 font-display text-white/[0.04] leading-none select-none"
                  style={{ fontSize: isLarge ? "14rem" : "8rem" }}
                >
                  {p.id}
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                  <div className="mb-1.5">
                    <span className="font-condensed text-play-red text-xs tracking-[0.25em] uppercase font-semibold">
                      {p.type}
                    </span>
                  </div>
                  <h3
                    className="font-display text-white leading-tight mb-0.5"
                    style={{ fontSize: isLarge ? "2.5rem" : "1.5rem" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-white/45 text-sm mb-3">{p.sub}</p>

                  {/* Description on hover */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: hovered === p.id ? "120px" : "0px", opacity: hovered === p.id ? 1 : 0 }}
                  >
                    <p className="text-white/55 text-xs leading-relaxed mb-4">{p.desc}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
                    <span className="text-white/30 text-xs tracking-wider">{p.location}</span>
                    <span className="text-white/30 text-xs">{p.year}</span>
                  </div>
                </div>

                {/* Hover overlay line */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-play-red transition-all duration-500 ${hovered === p.id ? "w-full" : "w-0"}`}
                />
              </div>
            );
          })}
        </div>

        <div className="reveal text-center mt-12">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-white/20 text-white/60 px-10 py-4 font-condensed text-sm tracking-[0.25em] uppercase hover:border-play-red hover:text-play-red transition-all duration-300"
          >
            Commission a PLAY Box →
          </button>
        </div>
      </div>
    </section>
  );
}
