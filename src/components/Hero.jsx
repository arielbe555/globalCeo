import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

/* Fotos REALES de Global Dream — las mejores del arsenal */
const heroImages = [
  '/assets/castillidenocheandiywalt.jpeg', // Andi con Walt y castillo de noche — ICONICA
  '/assets/epic-universe.jpg',              // Grupo GDT en Epic Universe con bandera argentina
  '/assets/cruceroo.jpeg',                  // Disney Fantasy con personajes y fuegos artificiales
  '/assets/gruoal2026.jpg',                 // Grupo disfrazados frente al castillo de Cinderella
  '/assets/mickeyparis.jpg',               // Mickey en Disneyland Paris — alta definición
  '/assets/montanarusauniversal.png',      // Hulk Coaster en Universal Orlando — acción
  '/assets/familia-parque.jpg',             // Familia en Disney Boardwalk
];

const Hero = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background — fotos reales */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-[2000ms]"
          style={{
            opacity: currentImage === i ? 1 : 0,
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
          }}
        >
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="absolute inset-0 z-[1] bg-disney/15 mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8 mt-6"
        >
          {[
            { text: t('hero.badgeIata'), color: 'bg-disney/80 border-disney-light/40' },
            { text: t('hero.badgeDisney'), color: 'bg-blue-900/60 border-blue-400/30' },
            { text: t('hero.badgeUniversal'), color: 'bg-purple-900/60 border-purple-400/30' },
          ].map((badge) => (
            <span
              key={badge.text}
              className={`${badge.color} backdrop-blur-md px-6 py-2.5 sm:px-7 sm:py-3 rounded-full border text-white text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase shadow-lg min-w-fit whitespace-nowrap`}
            >
              {badge.text}
            </span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-bold text-white mb-6 font-quicksand leading-[0.95] tracking-tight"
        >
          {t('hero.titleLine1')}
          <br />
          <span className="bg-gradient-to-r from-magic via-magic-light to-magic bg-clip-text text-transparent">
            {t('hero.titleLine2')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-2xl text-white/85 max-w-3xl mx-auto font-light mb-14 leading-relaxed"
        >
          {t('hero.subtitle')}{' '}
          <strong className="font-semibold text-white">{t('hero.subtitleAgents')}</strong>{' '}
          {t('hero.subtitleEnd')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#planificador"
            className="group bg-white text-disney px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all flex items-center justify-center gap-3"
          >
            {t('hero.ctaPlan')}
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
          <a
            href="#grupal2026"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-purple-500/20 animate-pulse hover:animate-none"
          >
            {t('hero.ctaGrupal')}
          </a>
        </motion.div>

        {/* Image dots */}
        <div className="flex justify-center gap-2 mt-12">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
                currentImage === i ? 'bg-white w-8' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
          <path fill="white" d="M0,60 C320,100 640,20 960,60 C1120,80 1280,50 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
