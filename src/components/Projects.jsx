import React from 'react';

const Projects = () => {
  return (
    <section id="proyectos" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Proyectos Destacados</h2>
        
        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
          {/* Reemplaza el src con la ruta real de tu imagen */}
          <div className="md:w-1/2 bg-gray-200 flex items-center justify-center min-h-[250px]">
             <img src="/dashboard-preview.jpg" alt="Tablero Integral y Estratégico de Empleo" className="object-cover w-full h-full" />
          </div>
          
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Tablero Integral y Estratégico de Empleo</h3>
            <p className="text-gray-700 mb-4 text-sm">
              <strong>Problema analizado:</strong> Dificultad para visualizar de manera unificada y territorial el cumplimiento de metas en las Agencias de Empleo.
            </p>
            <p className="text-gray-700 mb-4 text-sm">
              <strong>Hallazgos principales:</strong> Se identificó una concentración del 39.2% de personas beneficiarias en Aburrá Centro y un aumento del 42.4% en puestos de trabajo en julio.
            </p>
            
            <div className="mb-6">
              <strong className="text-sm text-gray-800 block mb-2">Herramientas utilizadas:</strong>
              <div className="flex flex-wrap gap-2">
                {["Excel", "Power BI", "Python", "SQL", "Claude Code (IA)", "HTML/JS"].map((tech, i) => (
                  <span key={i} className="bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition">Ver Proyecto</a>
              <a href="#" className="border border-slate-300 text-slate-700 px-4 py-2 rounded font-medium hover:bg-slate-100 transition">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;