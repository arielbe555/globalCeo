import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenu(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-black/20 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/logo-global-dream.png"
            alt="Global Dream Travel"
            className="h-12 md:h-14 drop-shadow-md"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="/#"
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
              scrolled ? 'hover:text-disney text-slate-600' : 'text-white/90 hover:text-white'
            }`}
          >
            Inicio
          </a>
          <a
            href="/#app"
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
              scrolled ? 'hover:text-disney text-slate-600' : 'text-white/90 hover:text-white'
            }`}
          >
            Servicios
          </a>
          <a
            href="/#hub"
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
              scrolled ? 'hover:text-disney text-slate-600' : 'text-white/90 hover:text-white'
            }`}
          >
            Hub Agentes
          </a>
          <a
            href="/#planificador"
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
              scrolled ? 'hover:text-disney text-slate-600' : 'text-white/90 hover:text-white'
            }`}
          >
            Contacto
          </a>
          <Link
            to="/blog"
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
              scrolled ? 'hover:text-disney text-slate-600' : 'text-white/90 hover:text-white'
            }`}
          >
            Blog Mágico
          </Link>

          {/* Separator */}
          <div className={`h-8 w-px ${scrolled ? 'bg-slate-200' : 'bg-white/30'}`} />

          {/* Agent Buttons */}
          <a
            href="https://globaldream.netlify.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-disney text-white px-6 py-2.5 rounded-xl text-[10px] font-bold shadow-lg shadow-disney/20 hover:scale-105 hover:shadow-xl transition-all uppercase tracking-wider flex items-center gap-2"
          >
            TU APP
          </a>
          <a
            href="https://64203.webmail.dynadot.com/user/signin.html?so=1"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-xl transition-all hover:scale-110 ${
              scrolled
                ? 'bg-slate-100 text-disney hover:bg-disney hover:text-white'
                : 'bg-white/20 text-white hover:bg-white hover:text-disney'
            }`}
            title="Correo Agentes"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden ${scrolled ? 'text-disney' : 'text-white'}`}
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Menu"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-5">
              <a href="/#" onClick={closeMobile} className="text-sm font-bold text-slate-700 hover:text-disney transition-colors">Inicio</a>
              <a href="/#app" onClick={closeMobile} className="text-sm font-bold text-slate-700 hover:text-disney transition-colors">Servicios</a>
              <a href="/#hub" onClick={closeMobile} className="text-sm font-bold text-slate-700 hover:text-disney transition-colors">Hub Agentes</a>
              <a href="/#planificador" onClick={closeMobile} className="text-sm font-bold text-slate-700 hover:text-disney transition-colors">Contacto</a>
              <Link to="/blog" onClick={closeMobile} className="text-sm font-bold text-slate-700 hover:text-disney transition-colors">Blog Mágico</Link>
              <div className="border-t border-slate-100 pt-5 flex flex-col gap-3">
                <a
                  href="https://globaldream.netlify.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-disney text-white px-8 py-4 rounded-2xl text-sm font-bold text-center shadow-xl flex items-center justify-center gap-2"
                >
                  <LogIn size={18} /> Ingresar a Tu App
                </a>
                <a
                  href="https://64203.webmail.dynadot.com/user/signin.html?so=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 text-white px-8 py-4 rounded-2xl text-sm font-bold text-center shadow-xl flex items-center justify-center gap-2"
                >
                  <Mail size={18} /> Correo Agentes
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
