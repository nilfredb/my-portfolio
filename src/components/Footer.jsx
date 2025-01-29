// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { Code2, Mail, Github, Linkedin, Twitter, ExternalLink, Shield, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const links = {
    main: [
      { title: 'Inicio', path: '/' },
      { title: 'Proyectos', path: '/projects' },
      { title: 'Habilidades', path: '/skills' },
      { title: 'Sobre Mí', path: '/about' },
      { title: 'Contacto', path: '/contact' }
    ],
    social: [
      { title: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/Etsurou' },
      { title: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'linkedin.com/in/kei-undefined-787868321' },
      { title: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://x.com/leonardoDroii' },
      { title: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:nbaez414@gmail.com' }
    ],
    skills: [
      'React', 'TypeScript', 'Node.js', 'Python', 'Ciberseguridad', 'OSINT'
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-black to-blue-950">
      <div className="max-w-7xl mx-auto pt-20 pb-8 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-blue-900/50">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <div className="relative">
                  <Code2 className="w-8 h-8 text-blue-500" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1"
                  >
                    <Shield className="w-4 h-4 text-purple-500" />
                  </motion.div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Mi Portafolio
                </span>
              </motion.div>
            </Link>
            <p className="text-gray-400">
              Desarrollador web & Especialista en Ciberseguridad
            </p>
            <div className="flex space-x-4">
              {links.social.map((social) => (
                <motion.a
                  key={social.title}
                  whileHover={{ scale: 1.1 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {links.main.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-white font-semibold mb-4">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {links.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-900/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <p className="text-gray-400">S.D, Republica Dominicana</p>
              <a
                href="mailto:nbaez414@gmail.com"
                className="text-gray-400 hover:text-blue-500 transition-colors block"
              >
                nbaez414@gmail.com
              </a>
              <p className="text-gray-400">+1 (809) 929-5562</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 Portfolio. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a
              href="/privacidad"
              className="text-gray-400 hover:text-blue-500 transition-colors text-sm"
            >
              Política de Privacidad
            </a>
            <a
              href="/terminos"
              className="text-gray-400 hover:text-blue-500 transition-colors text-sm"
            >
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;