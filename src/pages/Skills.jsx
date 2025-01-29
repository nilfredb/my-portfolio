// src/pages/Skills.jsx
import { motion } from 'framer-motion';
import { Code2, Shield, Terminal, Database, Globe, Cpu, Network, Wrench, Server, Lock, Book } from 'lucide-react';
import { useState } from 'react';

export const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = {
    programming: {
      title: "Programación",
      icon: <Code2 className="w-6 h-6 text-white" />,
      color: "blue",
      skills: [
        { name: "Python", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: ".NET", level: 80 },
        { name: "HTML/CSS", level: 85 }
      ],
      description: "Desarrollo de aplicaciones web y scripts de seguridad"
    },
    security: {
      title: "Ciberseguridad",
      icon: <Shield className="w-6 h-6 text-white" />,
      color: "purple",
      skills: [
        { name: "Pentesting", level: 85 },
        { name: "OSINT", level: 90 },
        { name: "Auditorías", level: 85 },
        { name: "SQLmap", level: 80 },
        { name: "Nmap", level: 85 }
      ],
      description: "Análisis de seguridad y auditorías de sistemas"
    },
    systems: {
      title: "Sistemas",
      icon: <Terminal className="w-6 h-6 text-white" />,
      color: "blue",
      skills: [
        { name: "Linux", level: 90 },
        { name: "WSL", level: 85 },
        { name: "Android", level: 80 },
        { name: "Windows", level: 85 }
      ],
      description: "Administración y configuración de sistemas operativos"
    },
    databases: {
      title: "Bases de Datos",
      icon: <Database className="w-6 h-6 text-white" />,
      color: "purple",
      skills: [
        { name: "SQL", level: 85 },
        { name: "NoSQL", level: 80 },
        { name: "Análisis", level: 85 }
      ],
      description: "Gestión y análisis de bases de datos"
    },
    web: {
      title: "Desarrollo Web",
      icon: <Globe className="w-6 h-6 text-white" />,
      color: "blue",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "REST APIs", level: 85 }
      ],
      description: "Desarrollo de aplicaciones web modernas"
    },
    languajes: {
      title: "Idiomas",
      icon: <Book className="w-6 h-6 text-white" />,
      color: "purple",
      skills:[
      { name: "Ingles", level: 95},
      { name: "Español", level: 100}
    ],
    description: "Dominio de idiomas avanzado"
  },
};

  return (
    <main className="pt-20 px-4">
      <section className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Habilidades Técnicas
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Especialización en desarrollo web, ciberseguridad y administración de sistemas
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(skills).map(([key, skill], index) => (
            <SkillCard
              key={key}
              {...skill}
              isActive={activeSkill === key}
              onClick={() => setActiveSkill(activeSkill === key ? null : key)}
              index={index}
            />
          ))}
        </div>

        {/* Detailed View */}
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              {skills[activeSkill].icon}
              <h2 className="text-2xl font-bold text-white">
                {skills[activeSkill].title}
              </h2>
            </div>
            <div className="space-y-6">
              {skills[activeSkill].skills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skills[activeSkill].color}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Additional Skills */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Otras Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AdditionalSkill 
              icon={<Network className="w-5 h-5" />}
              title="Redes"
              items={["SSH", "NAT", "Bridge"]}
            />
            <AdditionalSkill 
              icon={<Wrench className="w-5 h-5" />}
              title="Herramientas"
              items={["Git", "Docker", "WSL"]}
            />
            <AdditionalSkill 
              icon={<Server className="w-5 h-5" />}
              title="Servidores"
              items={["Apache", "Nginx", "IIS"]}
            />
            <AdditionalSkill 
              icon={<Lock className="w-5 h-5" />}
              title="Seguridad"
              items={["Firewall", "IDS/IPS", "VPN"]}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const SkillCard = ({ title, icon, description, color, isActive, onClick, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    onClick={onClick}
    className={`
      cursor-pointer bg-gradient-to-br 
      ${color === 'blue' ? 'from-blue-600 to-blue-400' : 'from-purple-600 to-purple-400'} 
      p-[1px] rounded-xl overflow-hidden
      ${isActive ? 'ring-2 ring-blue-500' : ''}
    `}
  >
    <div className="bg-black/90 p-6 rounded-xl h-full">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const SkillBar = ({ name, level, color, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="flex justify-between mb-2">
      <span className="text-gray-300">{name}</span>
      <span className="text-gray-400">{level}%</span>
    </div>
    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, delay: index * 0.1 }}
        className={`h-full rounded-full ${
          color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
        }`}
      />
    </div>
  </motion.div>
);

const AdditionalSkill = ({ icon, title, items }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-blue-900/20 rounded-lg p-4"
  >
    <div className="flex items-center gap-2 text-blue-400 mb-3">
      {icon}
      <h3 className="font-semibold">{title}</h3>
    </div>
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-gray-300 text-sm">
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Skills;