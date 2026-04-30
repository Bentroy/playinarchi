const INNOVATIONS = [
  {
    name: "The Lipstick",
    tag: "PLAY Original",
    desc: "PLAY's signature architectural feature — a bold, tubular vertical element that commands the facade. Slender, striking, impossibly elegant. As iconic as the cosmetic it's named for.",
    icon: "💄",
    year: "Introduced 2018",
  },
  {
    name: "Artistecture",
    tag: "PLAY Original",
    desc: "Where architecture meets art. Artistecture is PLAY's philosophy of treating every building as a canvas — sculptural massing, hand-crafted details, and installations woven directly into the structure itself.",
    icon: "🎨",
    year: "Introduced 2016",
  },
  {
    name: "The Garri Store",
    tag: "PLAY Original",
    desc: "PLAY's most celebrated concept — a kitchen feature inspired by Nigeria's most beloved staple. A bespoke, architecturally designed pantry-meets-statement-piece that's become the most copied feature in Nigerian residential design.",
    icon: "🏺",
    year: "Introduced 2015",
  },
  {
    name: "Eyeshadows",
    tag: "PLAY Original",
    desc: "Dramatic, layered window and facade shading elements that cast theatrical shadows across the building's skin — creating ever-changing light patterns throughout the day.",
    icon: "👁",
    year: "Introduced 2020",
  },
];

export default function Innovations() {
  return (
    <section id="innovations" className="py-28 md:py-40 bg-[#0d0d0d] relative overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-play-red/40 to-transparent" />

      {/* Big bg text */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display text-white/[0.025] leading-none pointer-events-none select-none"
        style={{ fontSize: "clamp(6rem,20vw,18rem)" }}
      >
        INNOVATE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="reveal text-play-red font-condensed font-semibold text-xs tracking-[0.5em] uppercase mb-4">
            Groundbreaking Concepts
          </p>
          <h2
            className="reveal font-display text-white leading-tight mx-auto"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", maxWidth: "700px" }}
          >
            PLAY'S SIGNATURE
            <br />
            <span className="text-play-red">INNOVATIONS</span>
          </h2>
          <p className="reveal text-white/40 max-w-lg mx-auto mt-6 leading-relaxed text-sm">
            Over two decades, PLAY has introduced architectural concepts that have
            redefined Nigerian residential design — and been copied industry-wide ever since.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {INNOVATIONS.map((inn, i) => (
            <div
              key={inn.name}
              className="reveal group relative border border-white/[0.06] bg-[#0a0a0a] p-8 md:p-10 overflow-hidden hover:border-play-red/40 transition-colors duration-500"
            >
              {/* Hover red wash */}
              <div className="absolute inset-0 bg-play-red/0 group-hover:bg-play-red/[0.04] transition-colors duration-500" />

              {/* Corner number */}
              <span className="absolute top-4 right-6 font-display text-6xl text-white/[0.04] leading-none select-none">
                0{i + 1}
              </span>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="text-4xl">{inn.icon}</div>
                  <div className="text-right">
                    <span className="font-condensed text-play-red text-xs tracking-[0.3em] uppercase font-semibold">
                      {inn.tag}
                    </span>
                    <p className="text-white/25 text-xs mt-0.5">{inn.year}</p>
                  </div>
                </div>

                <h3 className="font-display text-white text-3xl md:text-4xl mb-4 group-hover:text-play-red transition-colors duration-300">
                  {inn.name}
                </h3>

                <p className="text-white/50 leading-relaxed text-sm">{inn.desc}</p>

                {/* Bottom line reveal */}
                <div className="mt-8 h-px bg-white/[0.06] relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-0 bg-play-red group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-16 overflow-hidden border-y border-white/[0.06] py-5">
          <div className="marquee-track whitespace-nowrap font-display text-white/10 text-2xl tracking-widest select-none">
            {Array(6).fill("THE LIPSTICK · ARTISTECTURE · THE GARRI STORE · EYESHADOWS · PLAY BOXES · ").join("")}
          </div>
        </div>
      </div>
    </section>
  );
}
