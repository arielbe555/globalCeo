import { motion } from 'framer-motion';
import { Layout, BarChart3, GraduationCap, Shield, Zap, LogIn, Mail, ArrowRight } from 'lucide-react';

const hubFeatures = [
  { icon: <BarChart3 size={22} />, title: 'Gestión IATA', desc: 'Reservas centralizadas con respaldo internacional.' },
  { icon: <GraduationCap size={22} />, title: 'Academy GDT', desc: 'Capacitaciones de élite en destinos y protocolos.' },
  { icon: <Shield size={22} />, title: 'Marca Global', desc: 'Respaldo de la marca más viral del sector.' },
  { icon: <Zap size={22} />, title: 'Tech Stack', desc: 'Herramientas digitales para gestión eficiente.' },
];

const HubAgentes = () => {
  return (
    <section id="hub" className="py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-disney/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: Text + Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[10px] font-bold text-magic uppercase tracking-[0.3em]">
            Exclusivo Agentes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 font-quicksand leading-tight">
            El Hub para el
            <br />
            <span className="text-magic">Agente Profesional.</span>
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light max-w-lg">
            Somos la infraestructura que impulsa a +150 agentes en el mundo.
            Tecnología administrativa B2B, capacitaciones de élite y
            el respaldo de la marca más viral del sector.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10">
            {hubFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-3 items-start p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-magic/30 transition-all duration-300"
              >
                <div className="text-magic mt-0.5">{f.icon}</div>
                <div>
                  <div className="text-xs font-bold text-white">{f.title}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons for Agents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://app.globaldream.travel"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-magic text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-magic/20 flex items-center justify-center gap-3"
            >
              <LogIn size={18} />
              Ingresar a la App
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://64203.webmail.dynadot.com/user/signin.html?so=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <Mail size={18} />
              Correo Agentes
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Dashboard Mockup */}
          <div className="bg-slate-800/80 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 shadow-2xl">
            {/* Top bar */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-[10px] text-slate-500 font-mono">globaldream.netlify.app</span>
            </div>

            {/* Dashboard content */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-disney to-disney-light p-5 rounded-xl">
                <div className="text-[9px] uppercase tracking-widest text-white/60 font-bold mb-1">Reservas este mes</div>
                <div className="text-3xl font-bold font-quicksand text-white">$247,850</div>
                <div className="text-[10px] text-white/70 mt-1">+23% vs mes anterior</div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/5 p-4 rounded-xl text-center">
                  <div className="text-xl font-bold text-magic font-quicksand">38</div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-wider">Activas</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl text-center">
                  <div className="text-xl font-bold text-green-400 font-quicksand">12</div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-wider">Confirmadas</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl text-center">
                  <div className="text-xl font-bold text-disney-light font-quicksand">5</div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-wider">Pendientes</div>
                </div>
              </div>

              <div className="space-y-2">
                {['Fam. Rodriguez — Disney World', 'Fam. López — Crucero Disney', 'Fam. Martínez — Universal'].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                    <span className="text-[11px] text-slate-300">{item}</span>
                    <span className="text-[9px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full font-bold">Confirmada</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating notification */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 bg-magic text-slate-900 px-4 py-2 rounded-xl shadow-xl text-xs font-bold"
          >
            +3 reservas hoy
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HubAgentes;
