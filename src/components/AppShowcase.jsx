import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

const features = [
  { t: 'Traza Digital', d: 'Tu viaje en el mapa, día por día.' },
  { t: 'Cero Papel', d: 'Tickets y vouchers offline.' },
  { t: 'Logística', d: 'Cómo llegar a todo, sin estrés.' },
  { t: 'Concierge', d: 'Soporte real 24/7 con tu agente.' },
];

const AppShowcase = () => {
  return (
    <section id="app" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center relative"
        >
          <div className="w-[300px] h-[610px] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-800 shadow-2xl overflow-hidden relative z-10">
            <div className="p-5 pt-12 h-full bg-white flex flex-col font-poppins">
              {/* App Header */}
              <div className="bg-gradient-to-br from-disney to-indigo-500 rounded-3xl p-5 text-white mb-6">
                <div className="text-[9px] font-bold opacity-70 mb-1 uppercase tracking-widest">
                  Tu Itinerario
                </div>
                <div className="text-xl font-bold font-quicksand">
                  Misión Mágica
                </div>
              </div>

              {/* Itinerary Items */}
              <div className="space-y-4">
                <div className="flex gap-4 items-center p-3 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold text-disney text-xs">
                    D1
                  </div>
                  <div className="text-[10px]">
                    <b>Llegada & Resort</b>
                    <br />
                    <span className="text-slate-400">Reserva Confirmada</span>
                  </div>
                </div>
                <div className="flex gap-4 items-center p-3 bg-blue-50 rounded-2xl border border-blue-100 animate-pulse">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold text-disney text-xs">
                    D2
                  </div>
                  <div className="text-[10px]">
                    <b>Magic Kingdom</b>
                    <br />
                    <span className="text-slate-400">Ver Itinerario Completo</span>
                  </div>
                </div>
                <div className="flex gap-4 items-center p-3 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold text-disney text-xs">
                    D3
                  </div>
                  <div className="text-[10px]">
                    <b>Universal Studios</b>
                    <br />
                    <span className="text-slate-400">Express Pass Incluido</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto py-6 border-t border-slate-100 text-center font-bold text-disney text-[9px] uppercase tracking-widest">
                Documentos Digitales Siempre Listos
              </div>
            </div>
          </div>
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-disney/20 blur-[100px] scale-150 rounded-full" />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Smartphone className="text-disney mb-6" size={40} />
          <h2 className="text-4xl font-bold mb-8 font-quicksand text-disney leading-tight tracking-tight">
            La calma de tenerlo todo en tu bolsillo.
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
            Nuestra tecnología exclusiva es el diferencial de tu viaje. Olvidate
            de los papeles: itinerarios día por día, documentos digitales
            offline, logística inteligente y soporte directo con tu agente
            experto.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-disney/20 transition-all duration-300"
              >
                <b className="text-xs uppercase tracking-wider text-disney block mb-1">
                  {f.t}
                </b>
                <p className="text-[10px] text-slate-400">{f.d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;
