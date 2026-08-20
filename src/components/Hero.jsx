import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-slate-900 text-white min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">Andrés Nieto Bermúdez</h1>
        <h2 className="text-2xl font-semibold mb-6 text-gray-300">Analista de Datos Junior</h2>
        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
          Analista de Datos especializado en procesos híbridos que integran el diseño de matrices de KPIs y benchmarking corporativo con modelado predictivo y análisis táctico. Capaz de estructurar bases de datos robustas, integrar múltiples fuentes y ejecutar la limpieza, transformación y visualización avanzada de información (Power BI, Excel). Mi enfoque consiste en traducir métricas complejas en estrategias accionables para alinear operaciones con estándares internacionales y optimizar el rendimiento empresarial.
        </p>
        
        <div className="bg-slate-800 p-6 rounded-lg text-left shadow-lg mt-8">
          <h3 className="text-xl font-bold text-white mb-3">Sobre mí</h3>
          <p className="text-gray-300 mb-2"><strong>Formación:</strong> Especialista de Gerencia de Proyectos, Administrador de Recursos Humanos, Diplomaturas en Power BI – Analítica de Datos con Inteligencia Artificial.</p>
          <p className="text-gray-300"><strong>Intereses y Objetivos:</strong> Me apasiona resolver problemas de negocio complejos estructurando datos dispersos. Mi objetivo es optimizar procesos operativos mediante visualizaciones interactivas e IA.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;