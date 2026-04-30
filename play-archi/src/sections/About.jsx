export default function About() {
  return (
    <section id="about" className="py-28 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
      {/* left accent line */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-play-red/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="mb-20">
          <p className="reveal text-play-red font-condensed font-semibold text-xs tracking-[0.5em] uppercase mb-4">
            Who We Are
          </p>

          {/* Heading row: big text LEFT, founder photo CENTRE, intro text RIGHT */}
          <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-12">

            {/* Big heading */}
            <h2
              className="reveal font-display text-white leading-tight flex-shrink-0"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              NIGERIA'S
              <br />
              <span className="text-play-red">BOLDEST</span>
              <br />
              DESIGN-BUILD
              <br />
              FIRM
            </h2>

            {/* Founder photo — beside the heading */}
            <div className="reveal flex flex-col items-center md:items-start flex-shrink-0">
              <div className="relative w-48 md:w-56 lg:w-64">
                {/* Red corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-play-red z-10" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-play-red z-10" />

                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                  alt="Tona Ladega — Founder & Principal Architect"
                  className="w-full object-cover object-top grayscale contrast-110"
                  style={{ aspectRatio: "3/4" }}
                />

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 py-4">
                  <p className="font-display text-white text-sm leading-tight">Tona Ladega</p>
                  <p className="font-condensed text-play-red text-[10px] tracking-[0.25em] uppercase mt-0.5">
                    Founder & Principal Architect
                  </p>
                </div>
              </div>
            </div>

            {/* Intro paragraph */}
            <p className="reveal text-white/55 text-lg leading-relaxed max-w-md font-light md:mb-2">
              Founded by visionary architect <strong className="text-white font-semibold">Tona Ladega</strong>,{" "}
              PLAY in Architecture has spent over two decades redefining what's possible in Nigerian
              residential and commercial architecture — leaving an indelible mark across Western Africa and beyond.
            </p>
          </div>
        </div>

        {/* ── Two col ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Big red card */}
          <div className="reveal bg-play-red relative overflow-hidden p-10 md:p-14 flex flex-col justify-between min-h-[340px]">
            <div className="absolute -right-6 -bottom-6 font-display text-white/10 leading-none pointer-events-none select-none" style={{ fontSize: "10rem" }}>
              PLAY
            </div>
            <div>
              <p className="font-condensed text-white/70 text-sm tracking-[0.3em] uppercase mb-3">Our Philosophy</p>
              <blockquote className="font-display text-white text-3xl md:text-4xl leading-tight relative z-10">
                "We take every project from script to conceptual sketches, all the way to reality."
              </blockquote>
            </div>
            <p className="text-white/60 text-sm mt-6 relative z-10">— Tona Ladega, Founder & Principal Architect</p>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { n: "20+", l: "Years",        sub: "Two decades pushing every boundary of Nigerian architecture." },
              { n: "8+",  l: "Projects",     sub: "Spanning Lagos, Abuja and across Western Africa." },
              { n: "3",   l: "Awards",       sub: "Most Beautiful, Most Romantic & Best Designed houses." },
              { n: "16",  l: "Team Members", sub: "A dedicated crew of architects, designers & builders." },
            ].map((s) => (
              <div
                key={s.l}
                className="reveal bg-[#111] border border-white/[0.06] p-6 hover:border-play-red/40 transition-colors duration-500 group"
              >
                <div className="font-display text-play-red text-5xl leading-none group-hover:scale-110 transition-transform duration-300 origin-left">
                  {s.n}
                </div>
                <div className="text-white font-semibold text-sm mt-1 mb-2">{s.l}</div>
                <div className="text-white/35 text-xs leading-relaxed">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Long description ── */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="reveal md:col-span-2 bg-[#111] border border-white/[0.06] p-8">
            <p className="text-white/60 leading-relaxed">
              PLAY is a full Design-Build firm. We handle everything in-house — from
              architectural conception to bespoke joinery. Our specially trained team
              creates and installs <span className="text-white">windows, doors, staircases, balustrades,
              woodwork, wardrobes, gates</span> and more. We also specialise in innovative
              <span className="text-white"> lighting systems, bathrooms, kitchens, and tiling concepts</span>.
            </p>
            <p className="text-white/60 leading-relaxed mt-4">
              Our diverse clientele ranges from individuals seeking distinctive personal residences
              to industry-leading developers — including <span className="text-white">The Address Homes, Haven Homes,
              Palton Morgan, Cruxstone, and Revolution Plus</span>, among many others.
            </p>
          </div>
          <div className="reveal bg-[#111] border border-white/[0.06] p-8 flex flex-col justify-between">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-3">Recognition</p>
              {[
                '"Most Beautiful House in Lagos"',
                '"Most Romantic House in Lagos"',
                '"Best Designed House in Nigeria"',
              ].map((q) => (
                <div key={q} className="flex items-start gap-2 mb-3">
                  <span className="w-1 h-1 rounded-full bg-play-red mt-2 flex-shrink-0" />
                  <span className="text-white/70 text-sm italic">{q}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/[0.06] pt-4 mt-4">
              <p className="text-white/30 text-xs tracking-widest uppercase">Pilot & Castles Magazine</p>
            </div>
          </div>
        </div>

        {/* ── Info bar ── */}
        <div className="reveal mt-14 pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { l: "Head Office", v: "26b PSSDC Road, Magodo GRA Phase 2, Lagos" },
            { l: "Studio",      v: "FABAC Centre, 3 Ligali Ayorinde St, Victoria Island" },
            { l: "Phone",       v: "+234 806 700 5435" },
            { l: "Email",       v: "tofunmi.ladega@playinarchitecture.com" },
          ].map((i) => (
            <div key={i.l}>
              <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase mb-1">{i.l}</p>
              <p className="text-white/70 text-sm leading-snug">{i.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
