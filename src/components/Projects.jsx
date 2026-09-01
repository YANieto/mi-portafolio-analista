import { useCallback, useEffect, useState } from 'react';
import LabelChip from './LabelChip';

/*
 * Tres proyectos. Las capturas están anonimizadas: sin marca institucional,
 * sin NIT ni razones sociales de empresas, sin nombres de terceros y
 * recortadas al lienzo útil. width/height reales para evitar saltos (CLS).
 */
const PROJECTS = [
  {
    id: 'tablero-integral',
    chip: 'Proyecto destacado',
    chipTone: 'emerald',
    title: 'Tablero Integral y Estratégico de Empleo',
    problema:
      'Dificultad para visualizar de manera unificada y territorial el cumplimiento de metas en las Agencias de Empleo.',
    hallazgos: [
      {
        valor: '39.2%',
        tono: 'sky',
        texto: 'de personas beneficiarias concentradas en Aburrá Centro',
      },
      {
        valor: '+42.4%',
        tono: 'emerald',
        texto: 'en puestos de trabajo durante julio',
      },
    ],
    tech: ['Excel', 'Power BI', 'Python', 'SQL', 'Claude Code (IA)', 'HTML/JS'],
    links: [
      { label: 'Ver proyecto', href: '/tablero.html', primary: true },
      { label: 'GitHub', href: 'https://github.com/YANieto/mi-portafolio-analista' },
    ],
    shots: [
      {
        src: '/images/dashboard-preview.png',
        label: 'Resumen ejecutivo',
        w: 1884,
        h: 937,
      },
    ],
  },
  {
    id: 'empleo-emprendimiento',
    chip: 'Power BI',
    chipTone: 'sky',
    title: 'Dashboard Empleo y Emprendimiento',
    resumen:
      'Dashboard que reúne el seguimiento de la gestión de empleo y emprendimiento: colocación con enfoque de inclusión, acompañamiento Periscopio y ejecución de formación FOSFEC, con metas y cumplimiento por subregión.',
    tech: ['Power BI'],
    shots: [
      { src: '/images/Captura_5.png', label: 'Portada y navegación', w: 1368, h: 790 },
      { src: '/images/Captura_4.png', label: 'Colocados Inclusión', w: 1552, h: 860 },
      { src: '/images/Captura_3.png', label: 'Periscopio', w: 1552, h: 860 },
      { src: '/images/Captura_1.png', label: 'Usuarios capacitados FOSFEC', w: 1376, h: 756 },
    ],
  },
  {
    id: 'gestion-empresas',
    chip: 'Power BI',
    chipTone: 'sky',
    title: 'Gestión de Empresas',
    resumen:
      'Informe para el seguimiento de las empresas atendidas por la Agencia: vacantes y puestos de trabajo, personas remitidas y colocadas, participación en fomento empresarial y capacitación con recursos FOSFEC.',
    tech: ['Power BI'],
    shots: [
      { src: '/images/Captura_2.png', label: 'Gestión de empresas', w: 1161, h: 700 },
    ],
  },
];

/* ------------------------------------------------------------------
   Lightbox: la evidencia se ve completa y a tamaño real
   ------------------------------------------------------------------ */
const Lightbox = ({ shots, index, onClose, onStep }) => {
  const shot = shots[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onStep]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${shot.label} — imagen ${index + 1} de ${shots.length}`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/92 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition-colors hover:bg-white/15 hover:text-white"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {/* En pantalla ancha la imagen entra completa. En móvil, encajarla en 390 px
          la vuelve ilegible, así que se muestra a altura de pantalla y el
          contenedor se desplaza en horizontal. */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-full overflow-auto rounded-xl border border-white/10 shadow-elevate"
      >
        <img
          src={shot.src}
          alt={shot.label}
          width={shot.w}
          height={shot.h}
          className="h-[74vh] w-auto max-w-none object-contain sm:h-auto sm:max-h-[80vh] sm:max-w-full"
        />
      </div>

      <div className="mt-5 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
        {shots.length > 1 && (
          <button
            type="button"
            onClick={() => onStep(-1)}
            aria-label="Imagen anterior"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-slate-200 transition-colors hover:bg-white/15"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}
        <p className="min-w-40 text-center text-sm font-medium text-slate-200 sm:min-w-52">
          {shot.label}
          {shots.length > 1 && (
            <span className="ml-2 text-slate-400">
              {index + 1}/{shots.length}
            </span>
          )}
          <span className="mt-0.5 block text-xs font-normal text-slate-400 sm:hidden">
            desliza para explorar
          </span>
        </p>
        {shots.length > 1 && (
          <button
            type="button"
            onClick={() => onStep(1)}
            aria-label="Imagen siguiente"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-slate-200 transition-colors hover:bg-white/15"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

/* Visor con miniaturas. El marco fijo conserva su tamaño aunque la imagen
   aún no haya cargado, y object-contain evita recortar la evidencia. */
const Gallery = ({ shots, current, onSelect, onZoom, compact = false }) => {
  const shot = shots[current];

  return (
    <div>
      <button
        type="button"
        onClick={onZoom}
        aria-label={`Ampliar: ${shot.label}`}
        className="group/zoom relative block w-full overflow-hidden rounded-xl border border-white/10 bg-surface-950 shadow-card transition-colors hover:border-sky-400/40"
      >
        <span className="block aspect-[16/10] p-2">
          <img
            src={shot.src}
            alt={shot.label}
            width={shot.w}
            height={shot.h}
            loading={compact ? 'lazy' : 'eager'}
            decoding="async"
            className="h-full w-full rounded-md object-contain transition-transform duration-500 group-hover/zoom:scale-[1.02]"
          />
        </span>
        <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-slate-950/70 px-2.5 py-1.5 text-xs font-medium text-slate-200 opacity-0 backdrop-blur transition-opacity duration-300 group-hover/zoom:opacity-100">
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
          </svg>
          Ampliar
        </span>
      </button>

      {shots.length > 1 && (
        // En móvil, 4 columnas dejan miniaturas de 65×44 px: justo en el mínimo
        // táctil. Dos columnas las llevan a un tamaño cómodo.
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {shots.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Ver ${item.label}`}
              aria-pressed={current === i}
              title={item.label}
              className={`overflow-hidden rounded-lg border bg-surface-950 p-1 transition-all duration-300 hover:scale-105 ${
                current === i
                  ? 'border-sky-400/70 shadow-accent'
                  : 'border-white/10 opacity-55 hover:opacity-100'
              }`}
            >
              <span className="block aspect-[16/10]">
                <img
                  src={item.src}
                  alt=""
                  width={item.w}
                  height={item.h}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </span>
            </button>
          ))}
        </div>
      )}

      <p className="mt-3 text-center text-xs text-slate-400">
        {shot.label}
        {shots.length > 1 && ` · ${current + 1} de ${shots.length}`} · clic para ampliar
      </p>
    </div>
  );
};

const TechList = ({ items }) => (
  <ul className="mt-3 flex flex-wrap gap-2">
    {items.map((tech) => (
      <li key={tech}>
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-200">
          {tech}
        </span>
      </li>
    ))}
  </ul>
);

const Projects = () => {
  // Índice de la vista activa por proyecto
  const [active, setActive] = useState({});
  const [zoom, setZoom] = useState(null); // { projectId, index }

  const indexOf = (id) => active[id] ?? 0;
  const select = (id, i) => setActive((prev) => ({ ...prev, [id]: i }));

  const zoomShots = zoom
    ? PROJECTS.find((p) => p.id === zoom.projectId).shots
    : null;

  const step = useCallback(
    (delta) =>
      setZoom((z) => {
        if (!z) return z;
        const shots = PROJECTS.find((p) => p.id === z.projectId).shots;
        const next = (z.index + delta + shots.length) % shots.length;
        setActive((prev) => ({ ...prev, [z.projectId]: next }));
        return { ...z, index: next };
      }),
    []
  );

  const [featured, ...rest] = PROJECTS;

  return (
    <section id="proyectos" className="relative overflow-hidden bg-surface-950 px-6 py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid mask-fade opacity-60" />
        <div className="absolute -right-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* ---------- Encabezado ---------- */}
        <div className="text-center">
          <div className="flex justify-center">
            <LabelChip tone="slate">Portafolio</LabelChip>
          </div>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-slate-100 via-sky-200 to-indigo-300 bg-clip-text pb-1 text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Casos donde los datos dispersos se convirtieron en decisiones medibles.
          </p>
        </div>

        {/* ---------- Proyecto destacado ---------- */}
        <article className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-surface-900 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-sky-400/25 hover:shadow-elevate">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-white/10 bg-surface-850 p-5 sm:p-6 lg:border-b-0 lg:border-r">
              <Gallery
                shots={featured.shots}
                current={indexOf(featured.id)}
                onSelect={(i) => select(featured.id, i)}
                onZoom={() =>
                  setZoom({ projectId: featured.id, index: indexOf(featured.id) })
                }
              />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="w-fit">
                <LabelChip tone={featured.chipTone}>{featured.chip}</LabelChip>
              </div>

              <h3 className="mt-4 text-2xl font-bold leading-snug text-slate-50 sm:text-3xl">
                {featured.title}
              </h3>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-white/10 bg-surface-850/70 p-4">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-sky-400">
                    Problema analizado
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {featured.problema}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-surface-850/70 p-4">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-sky-400">
                    Hallazgos principales
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {featured.hallazgos.map((h) => (
                      <div
                        key={h.valor}
                        className={`rounded-lg border border-white/5 bg-surface-900 p-3 transition-all duration-300 hover:scale-105 ${
                          h.tono === 'emerald'
                            ? 'hover:border-emerald-400/30'
                            : 'hover:border-sky-400/30'
                        }`}
                      >
                        <p
                          className={`text-2xl font-bold ${
                            h.tono === 'emerald' ? 'text-emerald-300' : 'text-sky-300'
                          }`}
                        >
                          {h.valor}
                        </p>
                        <p className="mt-1 text-xs leading-snug text-slate-400">
                          {h.texto}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
                  Herramientas utilizadas
                </p>
                <TechList items={featured.tech} />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {featured.links.map(({ label, href, primary }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      primary
                        ? 'inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-accent transition-all duration-300 hover:scale-105 hover:shadow-elevate'
                        : 'inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:scale-105 hover:border-sky-400/40 hover:bg-white/10'
                    }
                  >
                    {label}
                    {primary && (
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* ---------- Resto de proyectos ---------- */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {rest.map((p) => (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface-900 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-sky-400/25 hover:shadow-elevate"
            >
              <div className="border-b border-white/10 bg-surface-850 p-5 sm:p-6">
                <Gallery
                  compact
                  shots={p.shots}
                  current={indexOf(p.id)}
                  onSelect={(i) => select(p.id, i)}
                  onZoom={() => setZoom({ projectId: p.id, index: indexOf(p.id) })}
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="w-fit">
                  <LabelChip tone={p.chipTone}>{p.chip}</LabelChip>
                </div>
                <h3 className="mt-4 text-xl font-bold leading-snug text-slate-50 sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {p.resumen}
                </p>
                <div className="mt-5">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
                    Herramientas utilizadas
                  </p>
                  <TechList items={p.tech} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {zoom && (
        <Lightbox
          shots={zoomShots}
          index={zoom.index}
          onClose={() => setZoom(null)}
          onStep={step}
        />
      )}
    </section>
  );
};

export default Projects;
