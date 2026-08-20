import React from 'react';

const Skills = () => {
  const technical = ["Excel", "SQL", "Python", "Pandas", "Power BI", "Power Query", "Visualización de datos", "IA aplicada al análisis"];
  const soft = ["Comunicación", "Pensamiento analítico", "Resolución de problemas", "Planeación Estratégica", "Trabajo en equipo"];

  return (
    <section id="habilidades" className="bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Mis Habilidades</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Técnicas */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 border-b pb-2">Técnicas</h3>
            <div className="flex flex-wrap gap-2">
              {technical.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Blandas */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-4 border-b pb-2">Blandas</h3>
            <div className="flex flex-wrap gap-2">
              {soft.map((skill, index) => (
                <span key={index} className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;