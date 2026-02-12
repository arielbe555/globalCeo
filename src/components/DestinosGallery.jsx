import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/* Fotos REALES de Global Dream */
const destinos = [
  {
    nombre: 'Epic Universe',
    lugar: 'Universal Orlando — 2025',
    img: '/assets/epic-universe.jpg',
    tag: 'NUEVO',
  },
  {
    nombre: 'Magic Kingdom',
    lugar: 'Walt Disney World, Orlando',
    img: '/assets/gruoal2026.jpg',
    tag: 'Disney',
  },
  {
    nombre: 'Universal Studios',
    lugar: 'Universal Orlando Resort',
    img: '/assets/universal-globe.jpeg',
    tag: 'Universal',
  },
  {
    nombre: 'Disney Cruise Line',
    lugar: 'Caribe & Bahamas',
    img: '/assets/cruceroo.jpeg',
    tag: 'Cruceros',
  },
  {
    nombre: 'Tokyo Disneyland',
    lugar: 'Tokio, Japón',
    img: '/assets/disney-tokio.png',
    tag: 'Disney',
  },
  {
    nombre: 'Disneyland Paris',
    lugar: 'París, Francia',
    img: '/assets/daisyparis.jpg',
    tag: 'Disney',
  },
];

const tagColors = {
  Disney: 'bg-disney text-white',
  Universal: 'bg-purple-600 text-white',
  NUEVO: 'bg-magic text-slate-800',
  Cruceros: 'bg-cyan-500 text-white',
};

const DestinosGallery = () => {
  const { t } = useTranslation();

  return (
    <section id="destinos" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4"
        >
          <div>
            <span className="text-[10px] font-bold text-disney uppercase tracking-[0.3em]">
              Destinos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-quicksand text-slate-800 mt-3">
              ¿Hacia Dónde Viaja tu Sueño?
            </h2>
          </div>
          <a
            href="#planificador"
            className="text-sm font-bold text-disney hover:text-disney-dark transition-colors flex items-center gap-2 shrink-0"
          >
            {t('destinos.verTodos')} <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:overflow-visible">
          {destinos.map((d, i) => (
            <motion.a
              key={i}
              href="#planificador"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative min-w-[280px] lg:min-w-0 aspect-[3/4] rounded-[2rem] overflow-hidden snap-center cursor-pointer"
            >
              <img
                src={d.img}
                alt={d.nombre}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${tagColors[d.tag] || 'bg-white text-slate-800'}`}>
                  {d.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white font-quicksand mb-1 group-hover:translate-x-2 transition-transform duration-300">
                  {d.nombre}
                </h3>
                <div className="flex items-center gap-1.5 text-white/70 text-sm">
                  <MapPin size={14} />
                  {d.lugar}
                </div>
              </div>
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight size={18} className="text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinosGallery;
