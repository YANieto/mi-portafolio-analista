import LabelChip from './LabelChip';

/* Aptitudes destacadas: las tres que encabezan el perfil */
const destacadas = [
  'Power BI',
  'Inteligencia Artificial Aplicada',
  'Análisis de Datos',
];

const tecnicas = [
  'DAX',
  'Business Intelligence',
  'Automatización de Procesos',
  'Arquitectura de Agentes de IA',
  'Modelado de Datos',
  'Visualización de Datos',
  'Control de Calidad de Datos',
  'Excel Avanzado',
  'Dashboards Ejecutivos',
];

const negocio = [
  'Análisis de Mercado Laboral',
  'Indicadores de Gestión (KPI)',
  'Toma de Decisiones Basada en Datos',
  'Gestión de la Información',
];

const criterio = [
  'Pensamiento Crítico',
  'Verificación y Validación de Datos',
  'Gestión de Riesgo de Información',
  'Resolución de Problemas',
];

const formacion = [
  'Especialista en Gerencia de Proyectos',
  'Administrador de Recursos Humanos',
  'Diplomaturas en Power BI – Analítica de Datos con Inteligencia Artificial',
];

const enfoque = [
  'Resolver problemas de negocio complejos estructurando datos dispersos',
  'Optimizar procesos operativos mediante visualizaciones interactivas e IA',
  'Alinear operaciones con estándares internacionales de desempeño',
];

const BADGE_TONES = {
  sky: 'border-sky-400/25 bg-sky-400/10 text-sky-200 hover:border-sky-400/60 hover:bg-sky-400/20 hover:text-sky-100 hover:shadow-[0_8px_20px_-10px_rgba(56,189,248,0.6)]',
  indigo:
    'border-indigo-400/25 bg-indigo-400/10 text-indigo-200 hover:border-indigo-400/60 hover:bg-indigo-400/20 hover:text-indigo-100 hover:shadow-[0_8px_20px_-10px_rgba(129,140,248,0.6)]',
  emerald:
    'border-emerald-400/25 bg-emerald-400/10 text-emerald-200 hover:border-emerald-400/60 hover:bg-emerald-400/20 hover:text-emerald-100 hover:shadow-[0_8px_20px_-10px_rgba(52,211,153,0.6)]',
};

const DOTS = {
  sky: 'bg-sky-400',
  indigo: 'bg-indigo-400',
  emerald: 'bg-emerald-400',
};

/* Cápsula de aptitud */
const Badge = ({ children, tone }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105 ${BADGE_TONES[tone]}`}
  >
    <span className={`h-1.5 w-1.5 rounded-full ${DOTS[tone]}`} aria-hidden="true" />
    {children}
  </span>
);

/* Tarjeta de perfil: borde fino, etiqueta montada sobre el borde superior */
const ProfileCard = ({ label, tone, className = '', children }) => (
  <article
    className={`relative rounded-2xl border border-white/10 bg-surface-950/40 p-6 pt-9 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/25 hover:bg-surface-950/70 hover:shadow-elevate sm:p-8 sm:pt-9 ${className}`}
  >
    <LabelChip tone={tone} floating>
      {label}
    </LabelChip>
    {children}
  </article>
);

const BadgeList = ({ items, tone }) => (
  <ul className="flex flex-wrap gap-2.5">
    {items.map((item) => (
      <li key={item}>
        <Badge tone={tone}>{item}</Badge>
      </li>
    ))}
  </ul>
);

const BulletList = ({ items, tone }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
        <span
          aria-hidden="true"
          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${DOTS[tone]}`}
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

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
          <div className="flex justify-center">
            <LabelChip tone="slate">Visión del perfil</LabelChip>
          </div>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-slate-100 via-sky-200 to-indigo-300 bg-clip-text pb-1 text-transparent">
              Analista de Datos
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Herramientas y capacidades con las que estructuro, transformo y comunico datos.
          </p>
        </div>

        {/* Aptitudes destacadas: encabezan la sección con peso propio */}
        <div className="mt-14">
          <div className="flex justify-center">
            <LabelChip tone="sky">Destacadas</LabelChip>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {destacadas.map((item, i) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-2xl border border-sky-400/25 bg-gradient-to-br from-sky-400/10 via-surface-950/50 to-indigo-400/10 p-6 text-center transition-all duration-300 hover:scale-105 hover:border-sky-400/50 hover:shadow-elevate"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-[11px] tracking-[0.2em] text-sky-400"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-2 text-lg font-semibold leading-snug text-slate-50">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Técnicas: a todo el ancho, es el bloque más extenso */}
        <div className="mt-12">
          <ProfileCard label="Técnicas" tone="sky">
            <BadgeList items={tecnicas} tone="sky" />
          </ProfileCard>
        </div>

        {/* Resto de la ficha, en rejilla 2×2 */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ProfileCard label="Analíticas y negocio" tone="indigo">
            <BadgeList items={negocio} tone="indigo" />
          </ProfileCard>

          <ProfileCard label="Criterio y forma de trabajar" tone="emerald">
            <BadgeList items={criterio} tone="emerald" />
          </ProfileCard>

          <ProfileCard label="Formación" tone="sky">
            <BulletList items={formacion} tone="sky" />
          </ProfileCard>

          <ProfileCard label="Enfoque" tone="emerald">
            <BulletList items={enfoque} tone="emerald" />
          </ProfileCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
