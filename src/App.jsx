// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPostWrapper } from './pages/BlogPostWrapper';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  // Efecto para el scroll al cambiar de ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-black dark:via-black dark:to-blue-950 transition-colors duration-300">
          <Header />
          <AnimatePresence mode="wait">
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPostWrapper />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;