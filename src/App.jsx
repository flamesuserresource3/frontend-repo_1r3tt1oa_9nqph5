import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import MusicBar from './components/MusicBar';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple top bar navigation */}
      <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-emerald-300">@yourname</a>
          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            <a href="#about" className="opacity-80 transition hover:opacity-100">About</a>
            <a href="#projects" className="opacity-80 transition hover:opacity-100">Work</a>
            <a href="#contact" className="opacity-80 transition hover:opacity-100">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />

        {/* Contact / footer block inline to keep components focused */}
        <section id="contact" className="w-full bg-slate-950 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-semibold">Let’s build something calming and clever</h3>
                <p className="mt-2 max-w-xl text-slate-300">Open to freelance, consulting, and creative collaborations. I reply within a day.</p>
              </div>
              <div className="flex gap-3">
                <a href="mailto:hello@example.com" className="rounded-full bg-emerald-400 px-6 py-3 font-medium text-slate-900 transition hover:bg-emerald-300">Email Me</a>
                <a href="#projects" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium hover:bg-white/10">See Work</a>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-slate-400">
              <p>© {new Date().getFullYear()} Your Name. All vibes reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">GitHub</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
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
