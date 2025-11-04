import React from 'react';

const skills = [
  { name: 'JavaScript / TypeScript', level: 85 },
  { name: 'React / Next.js', level: 82 },
  { name: 'Node.js / Express', level: 75 },
  { name: 'Python', level: 78 },
  { name: 'FastAPI', level: 72 },
];

const aiSkills = [
  { name: 'AI / ML Fundamentals', level: 70 },
  { name: 'Data Analysis (Pandas/Numpy)', level: 74 },
  { name: 'Prompt Engineering', level: 80 },
  { name: 'Vector Databases', level: 65 },
  { name: 'MLOps Basics', level: 55 },
];

const Bar = ({ label, value }) => (
  <div className="mb-4">
    <div className="mb-1 flex items-center justify-between text-xs text-slate-300">
      <span>{label}</span>
      <span className="tabular-nums">{value}%</span>
    </div>
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400"
        style={{ width: `${value}%` }}
        aria-hidden
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Skills & Proficiency</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            A snapshot of where I am today. I love learning in public and continuously improving my craft.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-4 text-lg font-medium">Web & Programming</h3>
            {skills.map((s) => (
              <Bar key={s.name} label={s.name} value={s.level} />
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-4 text-lg font-medium">AI, Data & Platforms</h3>
            {aiSkills.map((s) => (
              <Bar key={s.name} label={s.name} value={s.level} />
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-fuchsia-400/10 p-6">
          <p className="text-sm text-slate-200">
            Focus areas this year: building full‑stack apps with delightful UX, applying AI to developer workflows, and
            deepening understanding of data pipelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
