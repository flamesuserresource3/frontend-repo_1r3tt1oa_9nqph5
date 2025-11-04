import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import MusicBar from './components/MusicBar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced top navigation */}
      <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-400 text-slate-900 font-bold">G</div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Gideon Miracle Sihombing</div>
              <div className="text-xs text-slate-300">Full‑Stack & AI Enthusiast</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a href="#about" className="opacity-80 transition hover:opacity-100">About</a>
            <a href="#skills" className="opacity-80 transition hover:opacity-100">Skills</a>
            <a href="#projects" className="opacity-80 transition hover:opacity-100">Work</a>
            <a href="#contact" className="opacity-80 transition hover:opacity-100">Contact</a>
            <a
              href="#contact"
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 font-medium text-emerald-300 hover:bg-emerald-400/20"
            >
              Let’s talk
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* Contact / footer block inline to keep components focused */}
        <section id="contact" className="w-full bg-slate-950 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-semibold">Let’s build something impactful together</h3>
                <p className="mt-2 max-w-xl text-slate-300">
                  I’m based in Jakarta and open to internships, freelance, and collaborations. I reply within a day.
                </p>
              </div>
              <div className="flex gap-3">
                <a href="mailto:contact@gideonms.dev" className="rounded-full bg-emerald-400 px-6 py-3 font-medium text-slate-900 transition hover:bg-emerald-300">Email Me</a>
                <a href="#projects" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium hover:bg-white/10">See Work</a>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Gideon Miracle Sihombing. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">GitHub</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">Resume</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MusicBar />
    </div>
  );
}

export default App;
