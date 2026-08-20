import React from 'react';

// Ejes de trabajo — extraídos del propio perfil, sin métricas inventadas
const FOCUS = [
  { label: 'KPIs & Benchmarking', hint: 'Matrices y estándares' },
  { label: 'Modelado predictivo', hint: 'Análisis táctico' },
  { label: 'Visualización avanzada', hint: 'Power BI · Excel' },
  { label: 'IA aplicada', hint: 'Automatización analítica' },
];

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface-950 px-6 pb-24 pt-32"
    >
      {/* Fondo: retícula de datos + aurora de acento */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid mask-fade" />
        <div className="absolute -left-32 top-10 h-[30rem] w-[30rem] rounded-full bg-sky-500/12 blur-[120px] animate-aurora" />
        <div className="absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-indigo-500/12 blur-[120px] animate-aurora [animation-delay:-8s]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-950 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl animate-fade-up">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
            Disponible para proyectos de analítica
          </span>
        </div>

        {/* Titular con degradado */}
        <h1 className="mt-8 text-center text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-sky-200 via-cyan-300 to-indigo-300 bg-clip-text pb-2 text-transparent">
            Andrés Nieto Bermúdez
          </span>
        </h1>

        <p className="mt-4 text-center text-lg font-medium tracking-wide text-slate-400 sm:text-xl">
          Analista de Datos Junior
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-slate-400 sm:text-lg">
          Analista de Datos especializado en procesos híbridos que integran el diseño de
          matrices de KPIs y benchmarking corporativo con modelado predictivo y análisis
          táctico. Capaz de estructurar bases de datos robustas, integrar múltiples fuentes
          y ejecutar la limpieza, transformación y visualización avanzada de información
          (Power BI, Excel). Mi enfoque consiste en traducir métricas complejas en
          estrategias accionables para alinear operaciones con estándares internacionales y
          optimizar el rendimiento empresarial.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#proyectos"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-accent transition-all duration-300 hover:scale-105 hover:shadow-elevate sm:w-auto"
          >
            Ver proyectos
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#habilidades"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:scale-105 hover:border-sky-400/40 hover:bg-white/10 sm:w-auto"
          >
            Explorar habilidades
          </a>
        </div>

        {/* Ejes de trabajo */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {FOCUS.map(({ label, hint }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-surface-900/70 p-4 text-center shadow-card backdrop-blur transition-all duration-300 hover:scale-105 hover:border-sky-400/30 hover:bg-surface-850 hover:shadow-elevate"
            >
              <p className="text-sm font-semibold text-slate-100">{label}</p>
              <p className="mt-1 text-xs text-slate-400">{hint}</p>
            </div>
          ))}
        </div>

        {/* Sobre mí */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-surface-900/70 p-6 shadow-card backdrop-blur transition-all duration-300 hover:border-white/20 hover:shadow-elevate sm:p-8">
          <div className="flex items-center gap-3">
            <span className="h-5 w-1 rounded-full bg-gradient-to-b from-sky-400 to-indigo-400" />
            <h3 className="text-lg font-semibold text-slate-100">Sobre mí</h3>
          </div>

          <dl className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                Formación
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-400">
                Especialista de Gerencia de Proyectos, Administrador de Recursos Humanos,
                Diplomaturas en Power BI – Analítica de Datos con Inteligencia Artificial.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                Intereses y objetivos
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-400">
                Me apasiona resolver problemas de negocio complejos estructurando datos
                dispersos. Mi objetivo es optimizar procesos operativos mediante
                visualizaciones interactivas e IA.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
