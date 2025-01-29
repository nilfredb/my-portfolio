// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { Code2, Shield, Terminal, ArrowRight, Github, Linkedin, Twitter, FileText, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="px-4 max-w-7xl mx-auto py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Web Developer
            </span>
            <br />
            <span className="text-white">
              & Security Specialist
            </span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
            Especializado en desarrollo web seguro y auditorías de sistemas
          </p>
          <div className="flex flex-wrap justify-center gap-4">
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full flex items-center gap-2"
            >
              Ver Proyectos
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          
          <motion.a
            href="/cv.pdf"
            download="Mi_CV.pdf"
            whileHover={{ scale: 1.05 }}
            className="border border-blue-500 text-blue-400 px-8 py-3 rounded-full flex items-center gap-2 hover:bg-blue-500/10 transition-colors"
          >
            <FileText className="w-5 h-5" />
            Descargar CV
          </motion.a>

          <div className="flex gap-4 text-white gap">
            <SocialLink href="https://github.com/nilfredb" icon={<Github />} />
            <SocialLink href="https://linkedin.com/in/nilfred-baez" icon={<Linkedin />} />
            <SocialLink href="https://instagram.com/nilfredb" icon={<Instagram />} />
          </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Overview */}
      <section className="bg-gradient-to-b from-blue-950/50 to-purple-950/50 py-20">
        <div className="px-4 max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Áreas de Especialización
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Code2 className="w-8 h-8" />}
              title="Desarrollo Web"
              items={["React", "TypeScript", "Node.js", "APIs"]}
              delay={0.2}
            />
            <SkillCard 
              icon={<Shield className="w-8 h-8" />}
              title="Ciberseguridad"
              items={["Pentesting", "OSINT", "Auditorías"]}
              delay={0.4}
            />
            <SkillCard 
              icon={<Terminal className="w-8 h-8" />}
              title="Sistemas"
              items={["Linux", "WSL", "Redes", "Android"]}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 max-w-7xl mx-auto py-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Proyectos Destacados
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeaturedProject 
            title="Web Security Scanner"
            description="Herramienta de análisis de seguridad web con detección automática de vulnerabilidades."
            tags={["Python", "Seguridad", "API"]}
            link="/projects"
            delay={0.2}
          />
          <FeaturedProject 
            title="OSINT Dashboard"
            description="Dashboard para análisis OSINT con integración de múltiples fuentes de datos."
            tags={["React", "TypeScript", "OSINT"]}
            link="/projects"
            delay={0.4}
          />
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-gradient-to-b from-blue-950/50 to-purple-950/50 py-20">
        <div className="px-4 max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Últimas Publicaciones
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogPostCard 
              title="Seguridad en React"
              excerpt="Mejores prácticas para mantener tus aplicaciones React seguras."
              date="22 Enero, 2025"
              delay={0.2}
            />
            <BlogPostCard 
              title="OSINT Moderno"
              excerpt="Nuevas herramientas y técnicas para la investigación OSINT."
              date="20 Enero, 2025"
              delay={0.4}
            />
            <BlogPostCard 
              title="WSL para Pentesters"
              excerpt="Configuración de WSL para pruebas de penetración."
              date="18 Enero, 2025"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 max-w-7xl mx-auto py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Interesado en colaborar?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Estoy disponible para proyectos freelance y colaboraciones
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full"
            >
              Contactar
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

const SocialLink = ({ href, icon }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
  >
    {icon}
  </motion.a>
);

const SkillCard = ({ icon, title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 backdrop-blur-sm"
  >
    <div className="text-blue-400 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-300 flex items-center gap-2">
          <span className="text-blue-500">→</span>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const FeaturedProject = ({ title, description, tags, link, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="group"
  >
    <Link to={link}>
      <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 backdrop-blur-sm
                    group-hover:from-blue-900/40 group-hover:to-purple-900/40 transition-all">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
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
      </div>
    </Link>
  </motion.div>
);

const BlogPostCard = ({ title, excerpt, date, delay }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 backdrop-blur-sm"
  >
    <time className="text-sm text-blue-400 mb-2 block">{date}</time>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{excerpt}</p>
    <Link to="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">
      Leer más →
    </Link>
  </motion.article>
);

export default Home;