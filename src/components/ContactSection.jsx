import React from "react";
import { User, Calendar, Code } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      {/* Texto principal */}
      <div>
        <h2 className="text-5xl font-bold text-purple-400 mb-4 leading-snug">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-gray-400 mb-6 text-lg">
          Estoy disponible para nuevos proyectos y colaboraciones. ¡Hablemos sobre cómo puedo ayudarte!
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-4">
            <User className="w-8 h-8 text-purple-400" />
            <span className="text-lg">Disponible para trabajo freelance</span>
          </li>
          <li className="flex items-center gap-4">
            <Calendar className="w-8 h-8 text-purple-400" />
            <span className="text-lg">Disponibilidad: 20h/semana</span>
          </li>
          <li className="flex items-center gap-4">
            <Code className="w-8 h-8 text-purple-400" />
            <span className="text-lg">Desarrollo web y móvil</span>
          </li>
        </ul>
        <a
          href="#contact"
          className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition inline-block"
        >
          Enviar mensaje
        </a>
      </div>

      {/* Caja de información */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-green-400 font-semibold">
            Disponible para proyectos
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-4">Horario de trabajo</h3>
        <p className="text-gray-400">
          Lunes - Viernes
          <br />
          9:00 AM - 6:00 PM
        </p>
        <h4 className="text-lg font-bold text-white mt-6 mb-4">Servicios</h4>
        <ul className="text-gray-400 space-y-2">
          <li>• Desarrollo Frontend</li>
          <li>• Desarrollo Backend</li>
          <li>• Aplicaciones Móviles</li>
          <li>• UI/UX Design</li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
