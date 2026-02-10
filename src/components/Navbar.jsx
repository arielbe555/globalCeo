import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <span className="text-2xl md:text-3xl font-bold font-quicksand text-disney">
            GLOBAL DREAM<span className="text-disney-light">®</span>
          </span>
          <div className="h-8 w-px bg-slate-200 hidden md:block" />
          <span
            className={`hidden md:block text-[9px] font-bold tracking-[0.15em] uppercase ${
              scrolled ? 'text-slate-400' : 'text-white/70'
            }`}
          >
            IATA Acreditada
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <a
            href="/#app"
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
              scrolled ? 'hover:text-disney text-slate-600' : 'text-white/80 hover:text-white'
            }`}
          >
            Tecnología
          </a>
          <a
            href="/#hub"
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
              scrolled ? 'hover:text-disney text-slate-600' : 'text-white/80 hover:text-white'
            }`}
          >
            Hub Agentes
          </a>
          <Link
            to="/blog"
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
              scrolled ? 'hover:text-disney text-slate-600' : 'text-white/80 hover:text-white'
            }`}
          >
            Blog
          </Link>
          <a
            href="/#planificador"
            className="bg-disney text-white px-8 py-3 rounded-2xl text-[10px] font-bold shadow-xl shadow-disney/20 hover:scale-105 transition-all uppercase tracking-wider"
          >
            Planificar Viaje
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
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
              <a
                href="/#app"
                onClick={closeMobile}
                className="text-sm font-bold text-slate-700 hover:text-disney transition-colors"
              >
                Tecnología
              </a>
              <a
                href="/#hub"
                onClick={closeMobile}
                className="text-sm font-bold text-slate-700 hover:text-disney transition-colors"
              >
                Hub Agentes
              </a>
              <Link
                to="/blog"
                onClick={closeMobile}
                className="text-sm font-bold text-slate-700 hover:text-disney transition-colors"
              >
                Blog
              </Link>
              <a
                href="/#planificador"
                onClick={closeMobile}
                className="bg-disney text-white px-8 py-4 rounded-2xl text-sm font-bold text-center shadow-xl"
              >
                Planificar Viaje
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
