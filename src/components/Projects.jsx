import React from 'react';

const projects = [
  {
    title: 'Aura UI',
    desc: 'A minimal component library with motion-first patterns and a soothing palette.',
    link: '#',
    colors: 'from-emerald-400/20 to-cyan-400/20',
  },
  {
    title: 'Echo Studio',
    desc: 'Generative visuals that respond to music. Built with WebGL and shaders.',
    link: '#',
    colors: 'from-fuchsia-400/20 to-violet-400/20',
  },
  {
    title: 'Flowboard',
    desc: 'A focus-friendly dashboard that feels like a deep breath for your tasks.',
    link: '#',
    colors: 'from-amber-300/20 to-rose-400/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-black to-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected Work</h2>
            <p className="mt-3 max-w-2xl text-slate-300">A few things I had fun crafting recently.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 md:block">
            Get in touch
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10`}
            >
              <div className={`absolute -inset-16 bg-gradient-to-tr ${p.colors} blur-2xl opacity-50`} />
              <div className="relative">
                <div className="mb-4 h-40 w-full rounded-xl bg-gradient-to-br from-white/10 to-white/0" />
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
                <span className="mt-4 inline-block text-emerald-300 opacity-0 transition group-hover:opacity-100">View details →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
