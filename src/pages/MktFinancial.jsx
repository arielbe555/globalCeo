import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/* ── Counter ──────────────────────────────────────── */
const Counter = ({ end, duration = 2, prefix = '', suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = end / (duration * 60);
    const id = setInterval(() => {
      s += step;
      if (s >= end) { setVal(end); clearInterval(id); }
      else setVal(Math.floor(s));
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [inView, end, duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString('es-AR')}{suffix}</span>;
};

/* ── Bar ──────────────────────────────────────────── */
const HBar = ({ label, value, max, display, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{label}</span>
        <span className="text-xs font-bold text-slate-900">{display}</span>
      </div>
      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${(value / max) * 100}%` } : {}}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-slate-800"
        />
      </div>
    </div>
  );
};

const sf = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

/* ════════════════════════════════════════════════════ */
/*          INFORME TECNICO — CANAL GDT                */
/* ════════════════════════════════════════════════════ */
const MktFinancial = () => {
  return (
    <div className="bg-white min-h-screen font-poppins text-slate-800">

      {/* ─── COVER ─────────────────────────────────── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center relative z-10 max-w-3xl">
          <div className="w-12 h-px bg-slate-800 mx-auto mb-10" />
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-8">Informe Tecnico de Canal</p>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Global Dream Travel
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light mb-2">
            Canal Estrategico de Distribucion Internacional
          </p>
          <p className="text-sm text-slate-400 mb-12">Documento confidencial — Solo para uso interno</p>
          <div className="w-12 h-px bg-slate-300 mx-auto" />
        </motion.div>
      </section>

      {/* ─── 1. RESUMEN EJECUTIVO ──────────────────── */}
      <section className="py-20 md:py-28 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Seccion 01</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Resumen Ejecutivo</h2>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { end: 1500, suffix: '+', label: 'Familias Anuales', prefix: '' },
                { end: 325, suffix: '', label: 'Polizas Emitidas', prefix: '' },
                { end: 132, suffix: 'M', label: 'Volumen de Ventas', prefix: '$' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="border border-slate-200 rounded-xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-black text-slate-900">
                    <Counter end={item.end} duration={2} prefix={item.prefix} suffix={item.suffix} />
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-2">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
              <HBar label="Volumen Total" value={132} max={250} display="$132M" delay={0} />
              <HBar label="Polizas de Asistencia" value={325} max={1500} display="325 emitidas" delay={0.1} />
              <HBar label="Penetracion Actual" value={20} max={100} display="20%" delay={0.2} />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-5">
              Global Dream Travel opera como un canal de distribucion estructurado con acreditacion IATA (USA),
              presencia operativa en Argentina y Orlando, y un ecosistema digital propio que integra
              red comercial, tecnologia y posicionamiento de marca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. ESTRUCTURA COMERCIAL ───────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Seccion 02</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Estructura Comercial</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { value: '150+', label: 'Agentes Activos' },
                { value: 'Centralizada', label: 'Supervision' },
                { value: 'Continua', label: 'Capacitacion' },
                { value: 'Mensual', label: 'Monitoreo de Produccion' },
                { value: 'Interno', label: 'Control de Comisiones' },
                { value: 'Disney + Universal', label: 'Especializacion' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-white border border-slate-200 rounded-lg p-5">
                  <p className="text-lg font-black text-slate-900">{item.value}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="border-l-2 border-slate-800 pl-5">
              <p className="text-sm text-slate-700 font-medium italic">
                La red permite expansion controlada sin perdida de calidad operativa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. INFRAESTRUCTURA DIGITAL ────────────── */}
      <section className="py-20 md:py-28 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Seccion 03</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Infraestructura Digital</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-3xl">
              Global Dream Travel no opera como una agencia tradicional. Funciona como un hub digital
              de distribucion que integra:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { title: 'Plataforma B2B', desc: 'Sistema centralizado de operaciones comerciales para toda la red.' },
                { title: 'CRM Comercial', desc: 'Seguimiento de clientes, pipeline de ventas y gestion de relaciones.' },
                { title: 'App TRIP', desc: 'Itinerarios dinamicos activados por fecha y actividad.' },
                { title: 'Actualizacion Automatica', desc: 'El dia de viaje se actualiza en tiempo real sin intervencion manual.' },
                { title: 'Integracion Contextual', desc: 'Partners integrados dentro de la experiencia del pasajero.' },
                { title: 'Control de Red', desc: 'Supervision, auditoria y monitoreo operativo centralizado.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="border border-slate-200 rounded-lg p-5">
                  <p className="text-sm font-bold text-slate-800 mb-2">{item.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <p className="text-sm text-white/80 leading-relaxed">
                La marca asociada puede acompanar al viajero <span className="font-bold text-white">antes, durante y despues del viaje</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. INDICADORES DE OPORTUNIDAD ─────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Seccion 04</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Indicadores de Oportunidad</h2>

            <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
              <div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  La tasa de penetracion de asistencia sobre el total de familias se encuentra en torno al
                  <span className="font-bold text-slate-900"> 20%</span>. Esto representa una oportunidad concreta de crecimiento
                  interno sin necesidad de ampliar la base de clientes.
                </p>
                <div className="space-y-3">
                  {[
                    'Integracion contextual dentro de itinerarios',
                    'Activacion automatizada pre-viaje',
                    'Priorizacion comercial dentro de la red',
                    'Posicionamiento estructural en ecosistema digital',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ArrowRight size={12} className="text-slate-400 shrink-0" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-slate-200 bg-white rounded-xl p-6 text-center">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Penetracion Actual</p>
                  <p className="text-5xl font-black text-slate-900">20%</p>
                  <p className="text-xs text-slate-500 mt-1">sobre 1.500+ familias</p>
                </div>
                <div className="border border-slate-800 bg-slate-900 rounded-xl p-6 text-center">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Oportunidad Latente</p>
                  <p className="text-5xl font-black text-white">80%</p>
                  <p className="text-xs text-white/40 mt-1">familias sin cobertura integrada</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <HBar label="Penetracion Actual" value={20} max={100} display="20%" delay={0} />
              <HBar label="Potencial de Expansion" value={80} max={100} display="80%" delay={0.15} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 5. MODELO DE INTEGRACION ──────────────── */}
      <section className="py-20 md:py-28 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Seccion 05</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Modelo de Integracion Propuesto</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-3xl">
              Global Dream Travel propone una integracion estructural de marca que contemple:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                'Presencia permanente dentro de la App TRIP',
                'Activacion prioritaria en la red de 150+ agentes',
                'Inclusion dentro de flujos automaticos pre-viaje',
                'Comunicacion directa a 1.500+ familias anuales',
                'Posicionamiento contextual durante la planificacion del viaje',
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 border border-slate-200 rounded-lg p-4">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-l-2 border-slate-800 pl-5">
              <p className="text-sm text-slate-700 leading-relaxed">
                Este modelo permite que la marca asociada forme parte integral de la experiencia del pasajero,
                no como producto adicional sino como componente estrategico del viaje.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 6. COLABORACION ESTRATEGICA ───────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Seccion 06</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Colaboracion Estrategica</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-3xl">
              Global Dream Travel se encuentra abierta a evaluar un modelo de colaboracion estructural que refleje:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { title: 'Volumen Consolidado', desc: '$132M en ventas anuales a traves de un canal estructurado y medible.' },
                { title: 'Alcance y Posicionamiento', desc: '+2.7M visualizaciones organicas con liderazgo visible en el segmento.' },
                { title: 'Integracion Tecnologica', desc: 'Ecosistema propio que permite activacion contextual y medicion de impacto.' },
                { title: 'Crecimiento Proyectado', desc: 'Expansion sostenible del segmento con infraestructura operativa ya implementada.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-white border border-slate-200 rounded-xl p-6">
                  <p className="text-sm font-bold text-slate-800 mb-2">{item.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                El objetivo es construir una alianza de largo plazo orientada a expansion sostenible
                y fortalecimiento mutuo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 7. CIERRE ─────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...sf}>
            <div className="w-12 h-px bg-white/20 mx-auto mb-8" />
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-8">
              Global Dream Travel opera como un canal de distribucion estructurado,
              medible y escalable en el segmento de viajes familiares hacia Estados Unidos.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Infraestructura', status: 'Operativa' },
                { label: 'Distribucion', status: 'Controlada' },
                { label: 'Crecimiento', status: 'Medible' },
                { label: 'Riesgo', status: 'Gestionado' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="border border-white/10 rounded-lg p-5 text-center">
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-white">{item.status}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="https://calendly.com/GLOBALDREAMT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-slate-100 transition-all no-underline"
            >
              Solicitar Reunion Estrategica
              <ArrowRight size={16} />
            </a>

            <div className="mt-16 w-12 h-px bg-white/10 mx-auto mb-4" />
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
              Global Dream Travel — Informe Tecnico de Canal — Confidencial
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default MktFinancial;
