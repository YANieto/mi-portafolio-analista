import React from 'react';

const technical = [
  'Excel',
  'SQL',
  'Python',
  'Pandas',
  'Power BI',
  'Power Query',
  'Visualización de datos',
  'IA aplicada al análisis',
];

const soft = [
  'Comunicación',
  'Pensamiento analítico',
  'Resolución de problemas',
  'Planeación Estratégica',
  'Trabajo en equipo',
];

// Cápsula reutilizable: punto de acento + elevación al pasar el cursor
const Badge = ({ children, tone }) => {
  const tones = {
    sky: 'border-sky-400/25 bg-sky-400/10 text-sky-200 hover:border-sky-400/60 hover:bg-sky-400/20 hover:text-sky-100 hover:shadow-[0_8px_20px_-10px_rgba(56,189,248,0.6)]',
    emerald:
      'border-emerald-400/25 bg-emerald-400/10 text-emerald-200 hover:border-emerald-400/60 hover:bg-emerald-400/20 hover:text-emerald-100 hover:shadow-[0_8px_20px_-10px_rgba(52,211,153,0.6)]',
  };
  const dots = { sky: 'bg-sky-400', emerald: 'bg-emerald-400' };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105 ${tones[tone]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[tone]}`} aria-hidden="true" />
      {children}
    </span>
  );
};

const SkillCard = ({ title, subtitle, items, tone, icon }) => {
  const accents = {
    sky: {
      ring: 'hover:border-sky-400/30',
      glow: 'from-sky-500/10',
      icon: 'bg-sky-400/10 text-sky-300 border-sky-400/25',
      rule: 'from-sky-400/60',
    },
    emerald: {
      ring: 'hover:border-emerald-400/30',
      glow: 'from-emerald-500/10',
      icon: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/25',
      rule: 'from-emerald-400/60',
    },
  }[tone];

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-900 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate sm:p-8 ${accents.ring}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${accents.glow} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${accents.icon}`}
          >
            {icon}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
            <p className="text-xs text-slate-400">{subtitle}</p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className={`mt-5 h-px w-full bg-gradient-to-r ${accents.rule} to-transparent`}
        />

        <ul className="mt-5 flex flex-wrap gap-2.5">
          {items.map((item) => (
            <li key={item}>
              <Badge tone={tone}>{item}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Skills = () => {
  return (
    <section
      id="habilidades"
      className="relative overflow-hidden border-y border-white/5 bg-surface-900 px-6 py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/8 blur-[110px]"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Stack
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-slate-100 via-sky-200 to-indigo-300 bg-clip-text pb-1 text-transparent">
              Mis Habilidades
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Herramientas y capacidades con las que estructuro, transformo y comunico datos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <SkillCard
            title="Técnicas"
            subtitle="Análisis, modelado y visualización"
            items={technical}
            tone="sky"
            icon={
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
              </svg>
            }
          />
          <SkillCard
            title="Blandas"
            subtitle="Estrategia y colaboración"
            items={soft}
            tone="emerald"
            icon={
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
