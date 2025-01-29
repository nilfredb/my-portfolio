// src/pages/About.jsx
import { motion } from 'framer-motion';
import { FileText, Linkedin, Mail, Shield, Code2, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <main className="pt-20 px-4">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Sobre Mí
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Desarrollador web y especialista en ciberseguridad, apasionado por crear 
            soluciones web seguras y eficientes.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-blue-900/20 rounded-xl p-8 backdrop-blur-sm mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Experiencia</h2>
              <div className="space-y-6">
                <ExperienceItem 
                  title="Desarrollador Web"
                  company="Web & It Solutions"
                  period="2023 - Presente"
                  description="Desarrollo de aplicaciones web seguras utilizando React y TypeScript. Implementación de medidas de seguridad y optimización de rendimiento."
                />
                <ExperienceItem 
                  title="Analista de Ciberseguridad"
                  company="SecureNet"
                  period="2022 - 2023"
                  description="Realización de auditorías de seguridad, análisis OSINT y pentesting en aplicaciones web."
                />
              </div>
            </div>

            <div className="bg-purple-900/20 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Educación</h2>
              <div className="space-y-6">
                <EducationItem 
                  degree="Desarrollo de Software"
                  school="Instituto Tecnologico de las Americas"
                  period="2019 - presente"
                  description="Especialización en desarrollo de software y ciberseguridad."
                />
                <EducationItem 
                  degree="Certificación en Ciberseguridad"
                  school="CyberAcademy"
                  period="2023"
                  description="Formación avanzada en pentesting y auditoría de sistemas."
                />
                <EducationItem 
                  degree="Certificación en Ciberseguridad"
                  school="CyberAcademy"
                  period="2023"
                  description="Formación avanzada en pentesting y auditoría de sistemas."
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-8 backdrop-blur-sm mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Áreas de Especialización</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SpecializationCard 
                  icon={<Code2 className="w-6 h-6" />}
                  title="Desarrollo Web"
                  items={["React", "TypeScript", "Node.js", "REST APIs"]}
                />
                <SpecializationCard 
                  icon={<Shield className="w-6 h-6" />}
                  title="Ciberseguridad"
                  items={["Pentesting", "OSINT", "Auditorías", "Análisis"]}
                />
                <SpecializationCard 
                  icon={<Terminal className="w-6 h-6" />}
                  title="Sistemas"
                  items={["Linux", "WSL", "Android", "Redes"]}
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Contacto</h2>
              <div className="space-y-4">
                <ContactLink 
                  icon={<Mail className="w-5 h-5" />}
                  text="nbaez414@gmail.com"
                  href="mailto:nbaez414@gmail.com"
                />
                <ContactLink 
                  icon={<Linkedin className="w-5 h-5" />}
                  text="linkedin.com/in/Nilfred"
                  href="https://linkedin.com/in/kei-undefined-787868321"
                />
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="/cv.pdf"
                  download="Mi_CV.pdf"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full"
                >
                  <FileText className="w-5 h-5" />
                  Descargar CV
                </motion.a>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 border border-blue-500 text-blue-500 px-6 py-3 rounded-full"
                  >
                    <Mail className="w-5 h-5" />
                    Contactar
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

const ExperienceItem = ({ title, company, period, description }) => (
  <div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <div className="text-blue-400 mb-2">{company} • {period}</div>
    <p className="text-gray-300">{description}</p>
  </div>
);

const EducationItem = ({ degree, school, period, description }) => (
  <div>
    <h3 className="text-lg font-semibold text-white">{degree}</h3>
    <div className="text-purple-400 mb-2">{school} • {period}</div>
    <p className="text-gray-300">{description}</p>
  </div>
);

const SpecializationCard = ({ icon, title, items }) => (
  <div className="bg-black/50 rounded-lg p-4">
    <div className="flex items-center gap-2 text-blue-400 mb-3">
      {icon}
      <h3 className="font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-300 flex items-center gap-2">
          <span className="text-blue-500">→</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ContactLink = ({ icon, text, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
  >
    {icon}
    {text}
  </a>
);



export default About;