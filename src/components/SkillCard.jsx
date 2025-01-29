import React from "react";
import { Code, Shield, Database, Network, Coffee } from "lucide-react";

const icons = { Code, Shield, Database, Network }; // Mapeo de los íconos disponibles

const SkillCard = ({ skill }) => {
  const Icon = icons[skill.icon]; // Seleccionamos el ícono correspondiente

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-1 rounded-xl shadow-lg hover:scale-105 transition transform">
      <div className="bg-gray-900 p-6 rounded-lg h-full">
        <div className="flex items-center gap-4 mb-6">
          {Icon && <Icon className="w-8 h-8 text-white" />} {/* Renderizamos el ícono si existe */}
          <h3 className="text-2xl font-semibold text-white">{skill.category}</h3>
        </div>
        <ul className="space-y-3">
          {skill.items.map((item, index) => (
            <li
              key={index}
              className="flex items-center text-gray-300 text-lg gap-2"
            >
              <Coffee className="w-4 h-4 text-gray-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
