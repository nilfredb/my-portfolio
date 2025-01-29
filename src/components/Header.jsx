// Header.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const location = useLocation();

 useEffect(() => {
   const handleScroll = () => setScrolled(window.scrollY > 20);
   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const navigationItems = [
   { path: '/', label: 'Inicio' },
   { path: '/projects', label: 'Proyectos' },
   { path: '/skills', label: 'Habilidades' },
   { path: '/about', label: 'Sobre Mí' },
   { path: '/contact', label: 'Contacto' }
 ];

 return (
   <motion.header 
     initial={{ y: -100 }}
     animate={{ y: 0 }}
     className={`fixed w-full z-50 transition-all duration-300 ${
       scrolled 
         ? 'bg-black/80 backdrop-blur-lg py-2' 
         : 'bg-transparent py-4'
     }`}
   >
     <nav className="max-w-7xl mx-auto px-4">
       {/* Main Navigation */}
       <div className="flex items-center justify-between">
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
               Mi Portfolio
             </span>
           </motion.div>
         </Link>

         {/* Desktop Navigation */}
         <div className="hidden md:flex items-center space-x-6">
           {navigationItems.map((item) => (
             <NavLink 
               key={item.path}
               to={item.path}
               isActive={location.pathname === item.path}
             >
               {item.label}
             </NavLink>
           ))}
         </div>

         {/* Mobile Menu Button */}
         <button
           onClick={() => setIsOpen(!isOpen)}
           className="md:hidden text-gray-300 focus:outline-none"
           aria-label="Toggle menu"
         >
           {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
         </button>
       </div>

       {/* Mobile Menu */}
       <AnimatePresence>
         {isOpen && (
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.2 }}
             className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-blue-900/30 shadow-xl"
           >
             <div className="max-w-7xl mx-auto py-4 px-4 space-y-1">
               {navigationItems.map((item) => (
                 <NavLink
                   key={item.path}
                   to={item.path}
                   isActive={location.pathname === item.path}
                   onClick={() => setIsOpen(false)}
                   className={`block w-full py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                     location.pathname === item.path
                       ? 'text-blue-500 bg-blue-900/20'
                       : 'text-gray-300 hover:text-blue-500 hover:bg-blue-900/10'
                   }`}
                 >
                   {item.label}
                 </NavLink>
               ))}
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </nav>
   </motion.header>
 );
};

const NavLink = ({ to, children, isActive, onClick, className }) => (
 <Link
   to={to}
   onClick={onClick}
   className={className || `relative py-2 text-sm font-medium transition-colors ${
     isActive 
       ? 'text-blue-500' 
       : 'text-gray-300 hover:text-blue-500'
   }`}
 >
   {children}
   {isActive && !className && (
     <motion.div
       layoutId="activeTab"
       className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-blue-500"
       transition={{ type: "spring", stiffness: 380, damping: 30 }}
     />
   )}
 </Link>
);

export default Header;