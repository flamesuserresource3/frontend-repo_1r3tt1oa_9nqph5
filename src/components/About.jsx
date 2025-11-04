import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About Me</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            I’m Gideon Miracle Sihombing — a college student at Jakarta State University. I enjoy building full‑stack web
            apps and exploring AI as an analyst, applying machine learning concepts to real‑world problems while keeping
            the experience smooth and accessible.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-2 text-lg font-medium">Craft</h3>
            <p className="text-sm text-slate-300">UI/UX, prototyping, design systems, micro‑interactions, visual language.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-2 text-lg font-medium">Code</h3>
            <p className="text-sm text-slate-300">React, TypeScript, Node.js, Python, FastAPI, Tailwind, Framer Motion.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-2 text-lg font-medium">Approach</h3>
            <p className="text-sm text-slate-300">Curious, calm, and collaborative. Ship iteratively with clear structure.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {["React","TypeScript","Python","FastAPI","Node.js","Tailwind","Framer Motion","Figma","Spline"].map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
