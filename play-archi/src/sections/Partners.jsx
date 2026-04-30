const PARTNERS = [
  "The Address Homes",
  "Haven Homes",
  "Palton Morgan",
  "Grenadines Homes",
  "Propertymart",
  "Cruxstone",
  "Revolution Plus",
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <p className="reveal text-center text-white/30 font-condensed text-xs tracking-[0.5em] uppercase mb-10">
          Trusted by Nigeria's Leading Developers
        </p>

        {/* Scrolling partner names */}
        <div className="overflow-hidden">
          <div className="marquee-track whitespace-nowrap">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-8 mx-10 font-display text-white/20 hover:text-white/60 transition-colors duration-300 text-2xl md:text-3xl cursor-default"
              >
                {p}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-play-red/40" />
              </span>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="reveal mt-12 text-center">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            + Many more across Lagos, Abuja & Western Africa
          </p>
        </div>
      </div>
    </section>
  );
}
