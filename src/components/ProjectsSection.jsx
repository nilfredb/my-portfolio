import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Sistema de Pasarela de Pago",
    description:
      "Una plataforma de procesamiento de pagos integrada con múltiples proveedores que facilita transacciones seguras.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Dashboard Analytics",
    description:
      "Panel de control interactivo para visualización de datos empresariales en tiempo real.",
    tags: ["React", "D3.js", "Firebase"],
  },
  {
    title: "App de Gestión de Tareas",
    description:
      "Aplicación móvil para gestión eficiente de tareas y proyectos en equipo.",
    tags: ["React Native", "Redux", "Firebase"],
  },
];

const categories = ["Todos", "Web App", "Dashboard", "Mobile"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    <section>
      <h2 className="text-5xl font-bold text-purple-400 mb-6 text-center">
        Mis Proyectos
      </h2>
      <p className="text-gray-400 text-center mb-12 text-lg">
        Una colección de mis trabajos más destacados
      </p>
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold ${
              activeCategory === category
                ? "bg-purple-500 text-white"
                : "bg-gray-700 text-gray-400 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
