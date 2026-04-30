const AWARDS = [
  {
    title: "Most Beautiful House in Lagos",
    org: "Pilot Magazine",
    year: "2019",
    icon: "🏆",
  },
  {
    title: "Most Romantic House in Lagos",
    org: "Castles Magazine",
    year: "2020",
    icon: "🥇",
  },
  {
    title: "Best Designed House in Nigeria",
    org: "Castles Magazine",
    year: "2021",
    icon: "⭐",
  },
];

const PRESS = [
  { name: "Pilot Magazine", type: "Feature" },
  { name: "Castles Magazine", type: "Cover Feature" },
  { name: "Estate Intel", type: "Profile" },
  { name: "RTF — Re-Thinking the Future", type: "Top 40 Firms" },
  { name: "Houzz Nigeria", type: "Featured Professional" },
];

export default function Awards() {
  return (
    <section id="awards" className="py-28 md:py-40 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-play-red/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="reveal text-play-red font-condensed font-semibold text-xs tracking-[0.5em] uppercase mb-4">
            Recognition
          </p>
          <h2
            className="reveal font-display text-white"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            AWARDS &<br />PRESS
          </h2>
        </div>

        {/* Award cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {AWARDS.map((a, i) => (
            <div
              key={i}
              className="reveal group relative border border-white/[0.06] bg-[#0a0a0a] p-8 overflow-hidden hover:border-play-red/50 transition-all duration-500"
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-play-red/0 group-hover:bg-play-red/[0.05] transition-colors duration-500 pointer-events-none" />

              <div className="text-5xl mb-6">{a.icon}</div>
              <p className="font-condensed text-play-red text-xs tracking-widest uppercase mb-3">{a.year}</p>
              <h3 className="font-display text-white text-2xl md:text-3xl leading-tight mb-3 group-hover:text-play-red transition-colors duration-300">
                {a.title}
              </h3>
              <p className="text-white/30 text-sm">— {a.org}</p>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-play-red group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Press */}
        <div className="reveal border border-white/[0.06] bg-[#0a0a0a] p-8 md:p-10">
          <p className="font-condensed text-white/30 text-xs tracking-[0.4em] uppercase mb-6">As Seen In</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {PRESS.map((p) => (
              <div key={p.name} className="group">
                <div className="font-display text-white/50 text-lg group-hover:text-white transition-colors duration-300 leading-tight">
                  {p.name}
                </div>
                <div className="text-white/20 text-xs mt-1 tracking-wider">{p.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="reveal mt-8 bg-play-red p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-6 font-display text-white/10 leading-none select-none" style={{ fontSize: "12rem" }}>
            "
          </div>
          <p className="relative z-10 font-display text-white text-2xl md:text-4xl leading-tight max-w-3xl">
            PLAY Boxes are houses full of fun and drama — they have won numerous awards across several Real Estate platforms.
          </p>
          <p className="relative z-10 text-white/60 text-sm mt-6">PLAY in Architecture Ltd — Official Statement</p>
        </div>
      </div>
    </section>
  );
}
