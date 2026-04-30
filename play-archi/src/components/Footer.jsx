import logo from "../assets/logo.jpg";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="PLAY" className="h-10 w-10 object-contain" />
              <div>
                <div className="font-display text-white text-2xl tracking-wider leading-none">PLAY</div>
                <div className="text-white/30 text-[8px] tracking-[0.3em] uppercase mt-0.5">In Architecture Ltd</div>
              </div>
            </div>
            <p className="text-white/35 text-xs leading-relaxed max-w-[200px]">
              Nigeria's boldest Design-Build firm. Pushing the boundaries of architecture since 2004.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { l: "IG", href: "https://www.instagram.com/playinarchitecture/" },
                { l: "LI", href: "https://ng.linkedin.com/company/playinarchitecture-limited" },
                { l: "FB", href: "https://www.facebook.com/playinarchitecture/" },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 text-xs font-bold hover:border-play-red hover:text-play-red transition-all duration-300"
                >
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-condensed text-white/25 text-[10px] tracking-[0.4em] uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {["about","services","projects","innovations","awards","contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-white/45 hover:text-white text-sm capitalize tracking-wide transition-colors duration-200"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-condensed text-white/25 text-[10px] tracking-[0.4em] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {["Design & Build","Design & Supervision","Design Only","Bespoke Interiors"].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-white/45 hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-condensed text-white/25 text-[10px] tracking-[0.4em] uppercase mb-5">Contact</h4>
            <div className="space-y-3">
              <p className="text-white/45 text-xs leading-relaxed">26b PSSDC Road, Magodo GRA Phase 2, Lagos</p>
              <p className="text-white/45 text-xs">+234 806 700 5435</p>
              <p className="text-white/45 text-xs">tofunmi.ladega@playinarchitecture.com</p>
              <a
                href="https://wa.me/2348067005435"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-play-red text-xs hover:underline mt-2"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} PLAY in Architecture Ltd. All rights reserved.
          </p>
          <p className="text-white/15 text-xs tracking-widest uppercase">
            Lagos · Nigeria
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-white/25 hover:text-play-red text-xs tracking-widest uppercase transition-colors duration-300"
          >
            Back to top
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
