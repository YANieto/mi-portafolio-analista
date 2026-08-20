import LabelChip from './LabelChip';

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

/* Cápsula de habilidad */
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

/* Tarjeta de perfil: borde fino, etiqueta montada sobre el borde superior */
const ProfileCard = ({ label, tone, children }) => (
  <article className="group relative rounded-2xl border border-white/10 bg-surface-950/40 p-6 pt-9 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/25 hover:bg-surface-950/70 hover:shadow-elevate sm:p-8 sm:pt-9">
    <LabelChip tone={tone} floating>
      {label}
    </LabelChip>
    {children}
  </article>
);

/* Lista con viñetas, en el espíritu de una ficha de perfil */
const BulletList = ({ items, tone }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
        <span
          aria-hidden="true"
          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
            tone === 'emerald' ? 'bg-emerald-400' : 'bg-sky-400'
          }`}
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

        {/* Rejilla 2×2 tipo ficha técnica */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <ProfileCard label="Técnicas" tone="sky">
            <ul className="flex flex-wrap gap-2.5">
              {technical.map((item) => (
                <li key={item}>
                  <Badge tone="sky">{item}</Badge>
                </li>
              ))}
            </ul>
          </ProfileCard>

          <ProfileCard label="Blandas" tone="emerald">
            <ul className="flex flex-wrap gap-2.5">
              {soft.map((item) => (
                <li key={item}>
                  <Badge tone="emerald">{item}</Badge>
                </li>
              ))}
            </ul>
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
