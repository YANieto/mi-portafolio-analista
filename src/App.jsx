import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      {/* Navbar Fija */}
      <nav className="bg-slate-900 text-white fixed w-full z-10 top-0 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-wider text-blue-400">AN.</div>
          <div className="space-x-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-blue-400 transition">Inicio</a>
            <a href="#habilidades" className="hover:text-blue-400 transition">Habilidades</a>
            <a href="#proyectos" className="hover:text-blue-400 transition">Proyectos</a>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="pt-16">
        <Hero />
        <Skills />
        <Projects />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 text-center border-t border-slate-800">
        <p className="mb-2">© {new Date().getFullYear()} Andrés Nieto Bermúdez. Todos los derechos reservados.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;