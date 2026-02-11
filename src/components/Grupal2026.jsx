import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Star, Sparkles, ArrowRight, Plane } from 'lucide-react';

const fotos = [
  '/assets/gruoal2026.jpg',
  '/assets/grupales.jpeg',
  '/assets/epic-universe.jpg',
  '/assets/castillidenocheandiywalt.jpeg',
];

const highlights = [
  { icon: <Calendar size={20} />, title: '14 Días', desc: 'Del 7 al 20 — A pura emoción' },
  { icon: <MapPin size={20} />, title: '8 Parques', desc: '4 Disney + 4 Universal' },
  { icon: <Users size={20} />, title: 'Grupal', desc: 'Viajá con la comunidad GDT' },
  { icon: <Star size={20} />, title: 'Todo Incluido', desc: 'Logística, app y concierge 24/7' },
];

const Grupal2026 = () => {
  return (
    <section id="grupal2026" className="relative overflow-hidden">
      {/* Banner image background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/gruoal2026.jpg"
          alt="Grupal Disney 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-pink-900/90 to-purple-900/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Official banner */}
            <img
              src="/assets/2026grupal22.png"
              alt="Viaje Grupal a Disney 2026"
              className="w-full max-w-md mb-8 rounded-2xl shadow-2xl"
            />

            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-magic" size={20} />
              <span className="text-magic text-[10px] font-bold uppercase tracking-[0.3em]">
                El Viaje del Año
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white font-quicksand leading-tight mb-6">
              14 Días a Pura
              <br />
              <span className="bg-gradient-to-r from-magic via-magic-light to-magic bg-clip-text text-transparent">
                Emoción.
              </span>
            </h2>

            <p className="text-lg text-white/80 mb-8 leading-relaxed font-light max-w-lg">
              Después del éxito rotundo del Grupal 2025, volvemos con todo.
              Del <strong className="text-white font-semibold">7 al 20</strong> — Los 4 parques de Disney World + los 4 de Universal: Studios, Islands of Adventure, Epic Universe y Volcano Bay.
              8 parques, 14 días, 1 comunidad. Viví la experiencia que miles ya vivieron.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-3 items-start p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <div className="text-magic mt-0.5">{h.icon}</div>
                  <div>
                    <div className="text-xs font-bold text-white">{h.title}</div>
                    <div className="text-[10px] text-white/60">{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#planificador"
                className="group bg-magic text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-magic/30 flex items-center justify-center gap-3"
              >
                <Plane size={20} />
                Quiero mi Lugar
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/blog/grupal-2026"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                Ver Detalles Completos
              </a>
            </div>
          </motion.div>

          {/* Right: Photo mosaic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-3"
          >
            {fotos.map((foto, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-xl ${
                  i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
              >
                <img
                  src={foto}
                  alt={`Grupal Global Dream ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 py-8 border-t border-white/10"
        >
          {[
            { value: '2025', label: 'Edición Exitosa' },
            { value: '50+', label: 'Viajeros Grupal' },
            { value: '14', label: 'Días de Magia' },
            { value: '8', label: 'Parques Temáticos' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-magic font-quicksand">{s.value}</div>
              <div className="text-[9px] text-white/50 uppercase tracking-widest font-bold">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Grupal2026;
