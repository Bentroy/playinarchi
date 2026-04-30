import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Replace with your form handler / emailjs / formspree
    setSent(true);
  };

  const INPUT =
    "w-full bg-transparent border-b border-white/15 py-3 text-white placeholder-white/25 text-sm font-body focus:outline-none focus:border-play-red transition-colors duration-300";

  return (
    <section id="contact" className="py-28 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-play-red/50 to-transparent" />

      {/* BG geometry */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: "linear-gradient(225deg, rgba(232,0,45,0.06) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left info */}
          <div>
            <p className="reveal text-play-red font-condensed font-semibold text-xs tracking-[0.5em] uppercase mb-4">
              Get in Touch
            </p>
            <h2
              className="reveal font-display text-white leading-tight mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              LET'S
              <br />
              <span className="text-play-red">PLAY</span>
              <br />
              TOGETHER
            </h2>
            <p className="reveal text-white/50 leading-relaxed mb-10 font-light">
              Ready to build something sensational? Whether you have a plot of land
              and a dream, or a fully formed brief — reach out and let's talk.
            </p>

            {/* Contact details */}
            <div className="reveal space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: "Phone",
                  val: "+234 806 700 5435",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "Email",
                  val: "tofunmi.ladega@playinarchitecture.com",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: "Studio",
                  val: "FABAC Centre, 3 Ligali Ayorinde St, Victoria Island, Lagos",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-play-red flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/25 text-xs tracking-widest uppercase mb-0.5">{item.label}</p>
                    <p className="text-white/70 text-sm">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="reveal mt-10 flex gap-4">
              {[
                { label: "Instagram", href: "https://www.instagram.com/playinarchitecture/" },
                { label: "LinkedIn", href: "https://ng.linkedin.com/company/playinarchitecture-limited" },
                { label: "Facebook", href: "https://www.facebook.com/playinarchitecture/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/15 text-white/40 text-xs px-4 py-2 font-condensed tracking-widest uppercase hover:border-play-red hover:text-play-red transition-all duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="reveal">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="font-display text-white text-4xl mb-3">Message Sent!</h3>
                <p className="text-white/50">We'll be in touch soon. It's PLAY time!</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 border border-white/15 text-white/50 px-6 py-3 text-xs tracking-widest uppercase hover:border-play-red hover:text-play-red transition-all duration-300"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/30 text-[10px] tracking-[0.3em] uppercase block mb-2">Full Name *</label>
                    <input
                      name="name" required value={form.name} onChange={handle}
                      placeholder="Your name"
                      className={INPUT}
                    />
                  </div>
                  <div>
                    <label className="text-white/30 text-[10px] tracking-[0.3em] uppercase block mb-2">Phone</label>
                    <input
                      name="phone" value={form.phone} onChange={handle}
                      placeholder="+234 ..."
                      className={INPUT}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/30 text-[10px] tracking-[0.3em] uppercase block mb-2">Email *</label>
                  <input
                    type="email" name="email" required value={form.email} onChange={handle}
                    placeholder="your@email.com"
                    className={INPUT}
                  />
                </div>

                <div>
                  <label className="text-white/30 text-[10px] tracking-[0.3em] uppercase block mb-2">Service</label>
                  <select
                    name="service" value={form.service} onChange={handle}
                    className={`${INPUT} bg-[#0a0a0a] cursor-pointer`}
                  >
                    <option value="" className="bg-[#0a0a0a]">Select a service</option>
                    <option value="design-build" className="bg-[#0a0a0a]">Design & Build</option>
                    <option value="design-supervision" className="bg-[#0a0a0a]">Design & Supervision</option>
                    <option value="design-only" className="bg-[#0a0a0a]">Design Only</option>
                    <option value="interiors" className="bg-[#0a0a0a]">Bespoke Interiors</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/30 text-[10px] tracking-[0.3em] uppercase block mb-2">Your Vision</label>
                  <textarea
                    name="message" rows={4} value={form.message} onChange={handle}
                    placeholder="Tell us about your project, land, or dream home..."
                    className={`${INPUT} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-play-red text-white py-4 font-condensed font-bold text-sm tracking-[0.25em] uppercase hover:bg-white hover:text-play-red transition-all duration-300 group flex items-center justify-center gap-3"
                >
                  Send Message
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <p className="text-white/20 text-xs text-center">
                  Or WhatsApp us directly: <a href="https://wa.me/2348067005435" target="_blank" rel="noopener noreferrer" className="text-play-red hover:underline">+234 806 700 5435</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
