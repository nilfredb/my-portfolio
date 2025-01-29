import React from "react";
import { motion } from "framer-motion";
import { Code, Shield, Database, Network } from "lucide-react";

const skills = [
  {
    category: "Desarrollo Frontend",
    icon: <Code className="w-8 h-8 text-purple-400" />,
    items: ["React", "JavaScript", "TypeScript", "CSS", "HTML"],
    color: "from-blue-600 to-cyan-400",
  },
  {
    category: "Desarrollo Backend",
    icon: <Database className="w-8 h-8 text-purple-400" />,
    items: ["Node.js", "Express", "MongoDB", "SQL", "Firebase"],
    color: "from-purple-600 to-indigo-400",
  },
  {
    category: "Ciberseguridad",
    icon: <Shield className="w-8 h-8 text-purple-400" />,
    items: [
      "BurpSuite",
      "SQLmap",
      "Nmap",
      "OSINT",
      "Metasploit",
      "Forense Digital",
    ],
    color: "from-red-600 to-pink-400",
  },
  {
    category: "Redes y Sistemas",
    icon: <Network className="w-8 h-8 text-purple-400" />,
    items: [
      "SSH",
      "Configuración NAT",
      "Túneles VPN",
      "Wireshark",
      "Análisis de Tráfico",
    ],
    color: "from-green-600 to-emerald-400",
  },
];

const SkillsSection = () => {
  return (
    <section className="text-center py-20">
      <h2 className="text-5xl font-bold text-purple-400 mb-8">
        Mis Habilidades Técnicas
      </h2>
      <p className="text-gray-400 text-lg mb-12">
        Una visión general de mis habilidades principales en desarrollo y
        ciberseguridad.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.category}
            className={`p-1 rounded-xl bg-gradient-to-br ${skill.color}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gray-900 p-6 rounded-lg h-full shadow-lg">
              {/* Contenido de la tarjeta */}
              <div className="flex items-center gap-3 mb-6">
                {skill.icon}
                <h3 className="text-2xl font-semibold text-white">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
