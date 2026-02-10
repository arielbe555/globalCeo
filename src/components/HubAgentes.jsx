import { motion } from 'framer-motion';
import { Layout, BarChart3, GraduationCap, Shield, Zap } from 'lucide-react';

const hubFeatures = [
  { icon: <BarChart3 size={20} />, title: 'Gestión IATA', desc: 'Reservas centralizadas con respaldo internacional.' },
  { icon: <GraduationCap size={20} />, title: 'Academy GDT', desc: 'Capacitaciones de élite en destinos y protocolos.' },
  { icon: <Shield size={20} />, title: 'Marca Global', desc: 'Respaldo de la marca más viral del sector.' },
  { icon: <Zap size={20} />, title: 'Tech Stack', desc: 'Herramientas digitales para gestión eficiente.' },
];

const HubAgentes = () => {
  return (
    <section id="hub" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Layout className="text-disney mb-6" size={40} />
          <h2 className="text-4xl font-bold mb-8 font-quicksand text-disney leading-tight">
            El Hub para el Agente Profesional.
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
            Somos la infraestructura que impulsa a +150 agentes en el mundo.
            Ofrecemos tecnología administrativa B2B, capacitaciones de élite y
            el respaldo de la marca más viral del sector.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {hubFeatures.map((f, i) => (
              <div
                key={i}
                className="flex gap-3 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-50 transition-colors"
              >
                <div className="text-disney mt-0.5">{f.icon}</div>
                <div>
                  <div className="text-xs font-bold text-slate-700">{f.title}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[3rem] shadow-2xl overflow-hidden border-8 border-slate-50"
        >
          {/* Placeholder — reemplazar con screenshot real del Hub */}
          <div className="w-full aspect-[4/3] bg-gradient-to-br from-disney/10 via-slate-100 to-disney/5 flex items-center justify-center">
            <div className="text-center p-12">
              <BarChart3 className="text-disney mx-auto mb-4" size={64} />
              <div className="text-2xl font-bold font-quicksand text-disney mb-2">
                Hub de Operaciones
              </div>
              <div className="text-sm text-slate-400">
                Plataforma de administración para agentes certificados
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-disney-dark/40 to-transparent flex items-end p-12">
            <div className="text-white text-xl font-bold font-quicksand">
              Hub de Operaciones Global Dream
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HubAgentes;
