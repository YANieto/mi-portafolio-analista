
const TONES = {
  sky: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
  emerald: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  indigo: 'border-indigo-400/30 bg-indigo-400/10 text-indigo-300',
  slate: 'border-white/15 bg-white/5 text-slate-300',
};

const base =
  'inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em]';

/**
 * Etiqueta monoespaciada tipo ficha técnica.
 *
 * `floating` la monta sobre el borde superior de una tarjeta. El tono es
 * translúcido, así que en ese caso va dentro de un contenedor opaco del color
 * de la sección (`bg`) para que el borde de la tarjeta no se transparente.
 */
const LabelChip = ({ children, tone = 'sky', floating = false, bg = 'bg-surface-900' }) => {
  if (!floating) return <span className={`${base} ${TONES[tone]}`}>{children}</span>;

  return (
    <span className={`absolute -top-3 left-6 rounded-md ${bg}`}>
      <span className={`${base} ${TONES[tone]}`}>{children}</span>
    </span>
  );
};

export default LabelChip;
