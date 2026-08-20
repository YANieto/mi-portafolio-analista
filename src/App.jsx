import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

const SECTIONS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
];

function App() {
  const [active, setActive] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // La navbar gana fondo y borde solo cuando deja de estar sobre el hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 font-sans text-slate-300 antialiased">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-sky-500 focus:px-4 focus:py-2 focus:font-medium focus:text-slate-950"
      >
        Saltar al contenido
      </a>

      {/* ---------- Navbar ---------- */}
      <nav
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'border-b border-white/10 bg-surface-950/80 shadow-[0_8px_30px_-12px_rgba(2,6,23,0.9)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#inicio" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-indigo-400 text-sm font-bold tracking-tight text-slate-950 shadow-accent transition-transform duration-300 group-hover:scale-105">
              AN
            </span>
            <span className="hidden text-sm font-medium tracking-wide text-slate-400 transition-colors group-hover:text-slate-200 sm:block">
              Analista de Datos
            </span>
          </a>

          {/* Escritorio */}
          <div className="hidden items-center gap-1 md:flex">
            {SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === id
                    ? 'text-sky-300'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent transition-opacity duration-300 ${
                    active === id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            ))}
            <a
              href="#proyectos"
              className="ml-3 rounded-lg border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300 transition-all duration-300 hover:scale-105 hover:border-sky-400/60 hover:bg-sky-400/20 hover:text-sky-200"
            >
              Ver trabajo
            </a>
          </div>

          {/* Móvil */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
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
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/5 px-5 pb-4 md:hidden">
            <div className="flex flex-col gap-1 pt-3">
              {SECTIONS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active === id
                      ? 'bg-sky-400/10 text-sky-300'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="relative border-t border-white/10 bg-surface-900">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"
        />
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-slate-200">
              Andrés Nieto Bermúdez
            </p>
            <p className="mt-1 text-sm text-slate-400">
              © {new Date().getFullYear()} · Analista de Datos · Todos los derechos reservados
            </p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { label: 'LinkedIn', href: '#' },
              { label: 'GitHub', href: '#' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
