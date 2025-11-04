import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for vibes (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_10%,rgba(56,189,248,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_20%_80%,rgba(16,185,129,0.15),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Gideon Miracle Sihombing · Jakarta State University
        </p>
        <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Full‑Stack Developer & AI Enthusiast
          <br />
          crafting calm, modern experiences.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          I’m a college student at Jakarta State University, interested in full‑stack development and AI analysis. I love
          shipping thoughtful interfaces, smooth interactions, and clean, maintainable code.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-emerald-400 px-6 py-3 font-medium text-slate-900 transition hover:bg-emerald-300"
          >
            See Projects
          </a>
          <a
            href="#skills"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
