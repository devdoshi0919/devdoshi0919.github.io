// src/App.jsx
import { useState } from "react";
import { motion } from "framer-motion";

// simple helper for reveal animation
const fade = (dir = "up", delay = 0) => {
  const map = {
    up:   { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right:{ x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };
  const offset = map[dir] ?? map.up;
  return {
    initial: { opacity: 0, ...offset },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut", delay },
  };
};

export default function App() {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      {/* ===== Sticky Nav ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Dev Doshi
          </a>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#highlights" className="hover:text-white">Highlights</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* ===== Page content wrapper ===== */}
      <main id="top" className="mx-auto max-w-6xl px-6 pt-28 pb-20 space-y-20">

        {/* ===== Hero ===== */}
        <section className="text-center">
          <motion.h1
            {...fade("none")}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Dev Doshi
          </motion.h1>
          <motion.p
            {...fade("none", 0.12)}
            className="mt-4 text-lg text-gray-300"
          >
            Biomedical Engineer • Researcher • Artist
          </motion.p>

          <motion.div {...fade("none", 0.2)} className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-xl px-5 py-2.5 bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Contact
            </a>
            <a
              href="mailto:dev@example.com"
              className="rounded-xl px-5 py-2.5 border border-white/20 hover:border-white/40 text-white/90 transition"
            >
              Email me
            </a>
          </motion.div>
        </section>

        {/* ===== About ===== */}
        <section id="about" className="scroll-mt-24">
          <motion.h2 {...fade("left")} className="text-3xl font-semibold text-cyan-400">
            About Me
          </motion.h2>
          <motion.p
            {...fade("left", 0.1)}
            className="mt-4 text-gray-300 leading-relaxed max-w-3xl"
          >
            I’m passionate about bridging technology, medicine, and creativity. My
            journey spans biomedical research, art, and leadership—blending
            science with storytelling to shape the future of healthcare and discovery.
          </motion.p>
        </section>

        {/* ===== Highlights ===== */}
        <section id="highlights" className="scroll-mt-24">
          <motion.h2 {...fade("right")} className="text-3xl font-semibold text-purple-400">
            Highlights
          </motion.h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "🏅 Goldwater Scholar & Honors Researcher",
              "🧬 Projects in neuroscience, cardiology, and genomics",
              "🎨 Nationally recognized artist & creative innovator",
              "🌍 President of NJIT HOSA — leading future medical leaders",
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fade(i % 2 ? "left" : "right", i * 0.05)}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:bg-white/[0.04] transition"
              >
                {t}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== Portfolio ===== */}
        <section id="portfolio" className="scroll-mt-24">
          <motion.h2 {...fade("up")} className="text-3xl font-semibold text-pink-400">
            Art & Portfolio
          </motion.h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "🎨 Artwork",     from: "from-violet-500", to: "to-cyan-400" },
              { title: "🧠 Research",     from: "from-pink-500",   to: "to-purple-400" },
              { title: "📚 Publications", from: "from-cyan-500",   to: "to-blue-400" },
              { title: "🌍 Leadership",   from: "from-gray-700",   to: "to-gray-900" },
            ].map((card, i) => (
              <motion.a
                key={card.title}
                href="#"
                {...fade("up", 0.06 * i)}
                className={`group h-48 rounded-2xl bg-gradient-to-br ${card.from} ${card.to} p-[1px] shadow-lg`}
              >
                <div className="h-full w-full rounded-2xl bg-black/40 backdrop-blur-sm grid place-items-center transition group-hover:bg-black/30">
                  <span className="text-xl font-semibold">{card.title}</span>
                </div>
              </motion.a>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Tip: replace these cards with links to Google Drive folders, PDFs, or
            image galleries when you’re ready.
          </p>
        </section>

        {/* ===== Contact ===== */}
        <section id="contact" className="scroll-mt-24">
          <motion.h2 {...fade("left")} className="text-3xl font-semibold text-emerald-400">
            Get in touch
          </motion.h2>
          <motion.div {...fade("left", 0.08)} className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="mailto:dev@example.com"
              className="rounded-xl px-4 py-2 bg-emerald-500 text-black font-medium hover:brightness-110 transition"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank" rel="noreferrer"
              className="rounded-xl px-4 py-2 border border-white/20 text-white/90 hover:border-white/40 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/devdoshi0919"
              target="_blank" rel="noreferrer"
              className="rounded-xl px-4 py-2 border border-white/20 text-white/90 hover:border-white/40 transition"
            >
              GitHub
            </a>
          </motion.div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm">
        © {year} Dev Doshi — All Rights Reserved
      </footer>
    </div>
  );
}
