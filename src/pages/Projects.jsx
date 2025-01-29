// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import { Code2, Shield, Terminal, Globe, Search, Database } from 'lucide-react';
import { useState } from 'react';

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Dorking tool",
      description: "Herramienta de análisis de seguridad web con detección automática de vulnerabilidades y reportes detallados.",
      tags: ["Python", "Seguridad", "API"],
      category: "security",
      image: "../img/Dorking-tool.png",
      icon: <Shield className="w-6 h-6 text-white" />,
      gradient: "from-blue-600 to-blue-400",
      link: "https://github.com/nilfredb/Dorking-tool"
    },
    {
      title: "Phishing Simulation Tool",
      description: "Herramienta diseñada para simular ataques de phishing, utilizada con fines educativos y de concienciación sobre ciberseguridad.",
      tags: ["HTML", "CSS", "JavaScript", "Seguridad"],
      category: "security",
      image: "../img/login_page_email.PNG", 
      icon: <Shield className="w-6 h-6 text-white" />,
      gradient: "from-purple-600 to-purple-400",
      link: "https://github.com/nilfredb/google-login"
    }
    
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <main className="pt-20 px-4">
      <section className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Proyectos
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Una colección de proyectos enfocados en seguridad, desarrollo web y herramientas de análisis.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            Todos
          </FilterButton>
          <FilterButton 
            active={filter === 'security'} 
            onClick={() => setFilter('security')}
          >
            Seguridad
          </FilterButton>
          <FilterButton 
            active={filter === 'web'} 
            onClick={() => setFilter('web')}
          >
            Web
          </FilterButton>
          <FilterButton 
            active={filter === 'tools'} 
            onClick={() => setFilter('tools')}
          >
            Herramientas
          </FilterButton>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              {...project}
              index={index}
            />
          ))}
        </motion.div>
      </section>
    </main>
  );
};

const ProjectCard = ({ title, description, tags, image, icon, gradient, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className={`bg-gradient-to-br ${gradient} p-[1px] rounded-xl overflow-hidden`}
  >
    <div className="bg-black/90 p-6 rounded-xl h-full flex flex-col">
      <div className="relative mb-4 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-4 left-4 bg-black/50 p-2 rounded-full backdrop-blur-sm">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full"
          >
            Ver Proyecto
          </motion.button>
        </a>
      </div>
    </div>
  </motion.div>
);

const FilterButton = ({ children, active, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    className={`px-6 py-2 rounded-full transition-colors ${
      active 
        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
        : 'border border-blue-500 text-blue-500'
    }`}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

export default Projects;