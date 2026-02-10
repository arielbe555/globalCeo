import { motion } from 'framer-motion';
import { Star, ShieldCheck, Award } from 'lucide-react';

const credentials = [
  { icon: <ShieldCheck size={18} />, text: 'Agencia Acreditada IATA' },
  { icon: <Award size={18} />, text: 'Certificación Disney & Universal' },
  { icon: <Star size={18} />, text: '2.7M+ Vistas en Redes Sociales' },
];

const CeoBrand = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Photo Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-[3rem] bg-gradient-to-br from-disney via-disney-light to-magic overflow-hidden shadow-2xl">
                {/* Placeholder — reemplazar con foto de Andi */}
                <div className="w-full h-full flex items-center justify-center bg-disney/10">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-white/30 rounded-full flex items-center justify-center mb-4">
                      <span className="text-5xl font-bold font-quicksand text-white">AO</span>
                    </div>
                    <div className="text-white/80 text-sm font-medium">Foto de Andi</div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">CEO & Fundadora</div>
                <div className="text-sm font-bold text-disney font-quicksand">Andi Olivera</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="text-[10px] font-bold text-disney uppercase tracking-[0.3em] mb-4">
              La Cara de la Confianza
            </div>
            <h2 className="text-4xl font-bold mb-6 font-quicksand text-slate-800 leading-tight">
              Tu familia merece a alguien que cuide cada detalle.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
              Andi Olivera es la fundadora y CEO de Global Dream Travel®, la agencia
              que convirtió las redes sociales en la herramienta de confianza más
              poderosa del turismo familiar. Con más de 2.7 millones de vistas
              virales y una red de 150 agentes certificados, Andi es la garantía
              personal de que tu viaje será perfecto.
            </p>

            <div className="space-y-4 mb-8">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-disney/10 rounded-xl flex items-center justify-center text-disney">
                    {c.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{c.text}</span>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-magic pl-6 py-2">
              <p className="text-lg text-slate-500 italic font-light">
                "Cada familia que confía en nosotros recibe la misma dedicación
                que le daría a la mía. Esa es mi promesa."
              </p>
              <cite className="text-sm font-bold text-disney mt-2 block not-italic">
                — Andi Olivera
              </cite>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeoBrand;
