// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de envío
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            Contacto
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-4">
                <ContactInfo 
                  icon={<Mail />}
                  title="Email"
                  content="nbaez414@gmail.com"
                  href="mailto:nbaez414@gmail.com"
                />
                <ContactInfo 
                  icon={<Github />}
                  title="GitHub"
                  content="https://github.com/Nilfred"
                  href="https://github.com/Etsurou"
                />
                <ContactInfo 
                  icon={<Linkedin />}
                  title="LinkedIn"
                  content="linkedin.com/in/Nilfred"
                  href="https://linkedin.com/in/kei-undefined-787868321"
                />
                <ContactInfo 
                  icon={<MapPin />}
                  title="Ubicación"
                  content="S.D, Republica Dominicana"
                />
                <ContactInfo 
                  icon={<Phone />}
                  title="Teléfono"
                  content="+1 (809) 929-5562"
                  href="tel:+18299295562"
                />
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">
                Horario Disponible
              </h3>
              <div className="space-y-2">
                <p className="text-gray-300">
                  Lunes - Viernes: 9:00 - 18:00
                </p>
                <p className="text-gray-300">
                  Sábado - Domingo: Bajo demanda
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 backdrop-blur-sm">
              <FormField
                label="Nombre"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FormField
                label="Asunto"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <div>
                <label className="block text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-blue-900/20 border border-blue-900 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2"
                type="submit"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            ¿Por qué trabajar conmigo?
            <br/>
            <br/>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Benefit
              title="Experiencia Técnica"
              description="Más de 5 años en desarrollo web y ciberseguridad"
            />
            <Benefit
              title="Soluciones Personalizadas"
              description="Adaptadas a las necesidades específicas de cada proyecto"
            />
            <Benefit
              title="Soporte Continuo"
              description="Comunicación constante y seguimiento del proyecto"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
};

const ContactInfo = ({ icon, title, content, href }) => (
  <div className="flex items-start gap-3">
    <div className="text-blue-400">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-white">{title}</h3>
      {href ? (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-300">{content}</p>
      )}
    </div>
  </div>
);

const FormField = ({ label, name, type, value, onChange, required }) => (
  <div>
    <label className="block text-gray-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-blue-900/20 border border-blue-900 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
    />
  </div>
);

const Benefit = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default Contact;