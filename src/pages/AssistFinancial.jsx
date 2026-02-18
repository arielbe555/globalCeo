import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Shield, TrendingUp, Users, Globe, Zap, Target, Award, BarChart3 } from 'lucide-react';

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

const HBar = ({ label, value, max, display, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</span>
        <span className="text-xs font-bold text-slate-900">{display}</span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${(value / max) * 100}%` } : {}}
          transition={{ duration: 1.4, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-slate-800"
        />
      </div>
    </div>
  );
};

const sf = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const AssistFinancial = () => {
  useEffect(() => {
    document.title = 'Brief Estrategico Ejecutivo 2026 — Global Dream Travel';
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
    }
    meta.content = 'noindex, nofollow';
    return () => {
      document.title = 'Global Dream Travel';
      if (meta) meta.content = '';
    };
  }, []);

  return (
    <div className="bg-white min-h-screen font-poppins text-slate-800">

        {/* ─── PORTADA ──────────────────────────────────── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center relative z-10 max-w-3xl"
          >
            <div className="flex items-center justify-center gap-6 mb-16">
              <img
                src="/assets/logo-global-dream.png"
                alt="Global Dream Travel"
                className="h-16 md:h-20 object-contain"
              />
              <div className="w-px h-12 bg-slate-200" />
              <img
                src="/assets/logo-iata.jpg"
                alt="IATA"
                className="h-12 md:h-16 object-contain rounded-lg"
              />
            </div>

            <div className="w-12 h-px bg-slate-800 mx-auto mb-10" />
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-8">
              Brief Estrategico Ejecutivo
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
              Global Dream Travel
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-light mb-2">
              Propuesta de Alianza Estrategica 2026
            </p>
            <p className="text-sm text-slate-400 mb-16">Documento Confidencial</p>
            <div className="w-12 h-px bg-slate-300 mx-auto" />
          </motion.div>
        </section>

        {/* ─── 1. RESUMEN EJECUTIVO ─────────────────────── */}
        <section className="py-20 md:py-28 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...sf}>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">
                Seccion 01
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                Resumen Ejecutivo
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-3xl">
                Global Dream Travel opera dentro del segmento de viajes familiares a Disney y Universal
                en LATAM a traves de una estructura comercial y digital integrada. El ecosistema digital
                representa un canal de distribucion propietario con alcance medible y capacidad de
                conversion comprobada.
              </p>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">
                Indicadores Destacados 2025
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { end: 325, suffix: '', label: 'Polizas Emitidas', prefix: '' },
                  { end: 132, suffix: 'M', label: 'Facturacion en Seguros (ARS)', prefix: '$' },
                  { end: 2.7, suffix: 'M', label: 'Views Organicas Mensuales', prefix: '', raw: '2.7M' },
                  { end: 150, suffix: '+', label: 'Agentes Activos', prefix: '' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="border border-slate-200 rounded-xl p-6 text-center"
                  >
                    <p className="text-3xl md:text-4xl font-black text-slate-900">
                      {item.raw || (
                        <Counter
                          end={item.end}
                          duration={2}
                          prefix={item.prefix}
                          suffix={item.suffix}
                        />
                      )}
                    </p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-2">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <HBar label="Polizas Emitidas" value={325} max={600} display="325" delay={0} />
                <HBar label="Facturacion ARS" value={132} max={250} display="$132M" delay={0.1} />
                <HBar label="Alcance Organico Mensual" value={2.7} max={5} display="2.7M views" delay={0.2} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── 2. ACTIVO DIGITAL ────────────────────────── */}
        <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...sf}>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">
                Seccion 02
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                Activo Digital de Alto Rendimiento
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-3xl">
                Andrea Olivera lidera un canal digital de alto rendimiento que funciona como motor
                de distribucion organica para todo el ecosistema Global Dream Travel.
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {[
                  { value: '2.7M', label: 'Views Organicas Mensuales' },
                  { value: '4%–9%', label: 'Tasa de Engagement' },
                  { value: '80K+', label: 'Interacciones en Contenido Top' },
                  { value: '83%', label: 'Alcance No-Seguidores' },
                  { value: '30–50', label: 'Rango Etario Core (anos)' },
                  { value: 'LATAM', label: 'Familias Viajando a USA' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white border border-slate-200 rounded-lg p-5 text-center"
                  >
                    <p className="text-2xl font-black text-slate-900">{item.value}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-slate-900 rounded-xl p-8 text-center">
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-2">
                  Valor Publicitario Equivalente Estimado
                </p>
                <p className="text-3xl md:text-4xl font-black text-white">
                  USD 30.000 — 40.000
                </p>
                <p className="text-xs text-white/40 mt-2">por mes, en exposicion organica</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── 3. PERFORMANCE COMERCIAL ─────────────────── */}
        <section className="py-20 md:py-28 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...sf}>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">
                Seccion 03
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                Performance Comercial
              </h2>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">
                    Indicadores Actuales
                  </p>
                  <div className="space-y-3">
                    {[
                      { icon: Shield, text: '325 polizas emitidas en el ultimo periodo' },
                      { icon: BarChart3, text: 'Ticket promedio competitivo dentro del segmento' },
                      { icon: TrendingUp, text: 'Crecimiento sostenido interanual' },
                      { icon: Users, text: 'Audiencia de alta conversion orientada a viajes' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-xl px-5 py-4"
                      >
                        <div className="w-9 h-9 rounded-lg bg-slate-800/5 flex items-center justify-center shrink-0">
                          <item.icon size={16} className="text-slate-700" />
                        </div>
                        <span className="text-sm text-slate-600">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2">
                    Proyeccion 2026
                  </p>
                  <div className="border border-slate-200 rounded-xl p-6 bg-white text-center">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                      Escenario Base
                    </p>
                    <p className="text-5xl font-black text-slate-900">+60%</p>
                    <p className="text-xs text-slate-500 mt-2">crecimiento en volumen</p>
                  </div>
                  <div className="border border-slate-800 bg-slate-900 rounded-xl p-6 text-center">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider mb-1">
                      Escenario Expansion
                    </p>
                    <p className="text-5xl font-black text-white">x2</p>
                    <p className="text-xs text-white/40 mt-2">duplicacion de volumen</p>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-slate-800 pl-5">
                <p className="text-sm text-slate-700 font-medium italic">
                  Con integracion estrategica estructurada, las proyecciones de crecimiento se
                  sostienen sobre una base real de audiencia, conversion y operacion.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── 4. PROPUESTA DE ALIANZA EXCLUSIVA ────────── */}
        <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...sf}>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">
                Seccion 04
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Propuesta de Alianza Exclusiva
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-3xl">
                Proponemos estructurar una relacion formal que integre comision, exclusividad,
                posicionamiento y activaciones conjuntas dentro del ecosistema Global Dream Travel.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Estructura Comisional */}
                <div className="bg-white border border-slate-200 rounded-2xl p-8">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/5 flex items-center justify-center mb-5">
                    <BarChart3 size={20} className="text-slate-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Estructura Comisional</h3>
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between border-b border-slate-100 pb-3">
                      <span className="text-sm text-slate-600">Comision fija anual</span>
                      <span className="text-2xl font-black text-slate-900">43%</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-slate-600">Escalamiento automatico por volumen</span>
                      <span className="text-2xl font-black text-slate-900">
                        hasta 45%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Exclusividad */}
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-5">
                    <Award size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    Integracion Exclusiva
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    Exclusividad formal dentro del ecosistema digital y comercial de Global Dream Travel.
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-[10px] text-white/40 uppercase tracking-wider mb-2">
                      Acuerdo de Posicionamiento
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Estructura mensual de posicionamiento alineada al valor de exposicion
                      organica generada por el canal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Activaciones Estrategicas */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  Activaciones Estrategicas Conjuntas
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Globe,
                      title: 'Experiencias Deportivas Corporativas',
                      desc: 'Activaciones presenciales en eventos de alto perfil para posicionamiento de marca.',
                    },
                    {
                      icon: Target,
                      title: 'Viaje Anual de Contenido Sponsoreado',
                      desc: 'Trip de creacion de contenido con cobertura organica de alto alcance.',
                    },
                    {
                      icon: Zap,
                      title: 'Iniciativas de Co-Branding',
                      desc: 'Desarrollo conjunto de materiales y activos de marca compartidos.',
                    },
                    {
                      icon: Users,
                      title: 'Activacion en Red de Agentes',
                      desc: 'Mas de 150 agentes presentando el producto como parte integral del ecosistema.',
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="border border-slate-100 rounded-xl p-5"
                    >
                      <item.icon size={18} className="text-slate-700 mb-3" />
                      <h4 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── 5. VISION ESTRATEGICA 2026 ───────────────── */}
        <section className="py-20 md:py-28 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...sf}>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">
                Seccion 05
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Vision Estrategica 2026
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-3xl">
                Nuestro objetivo es establecer a Assist Card como el partner oficial exclusivo de
                asistencia al viajero dentro del ecosistema Global Dream Travel.
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { label: 'Distribucion Organica', status: 'A Gran Escala' },
                  { label: 'Capacidad de Conversion', status: 'Comprobada' },
                  { label: 'Segmento de Viaje', status: 'Premium' },
                  { label: 'Exclusividad', status: 'Estructural' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="border border-slate-200 rounded-lg p-5 text-center"
                  >
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-slate-900">{item.status}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  La combinacion de distribucion organica a gran escala, capacidad de conversion
                  comprobada, segmento premium de viaje y exclusividad estructural genera una
                  oportunidad clara de expansion significativa en los proximos 12 meses.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── CIERRE ───────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div {...sf}>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-8">
                Cierre
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-12">
                Global Dream Travel ofrece una plataforma de distribucion estructurada, con
                audiencia real, conversion medible y capacidad de escalar dentro del segmento
                de viajes familiares a Estados Unidos.
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {[
                  { label: 'Infraestructura', status: 'Operativa' },
                  { label: 'Distribucion', status: 'Controlada' },
                  { label: 'Crecimiento', status: 'Medible' },
                  { label: 'Riesgo', status: 'Gestionado' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="border border-white/10 rounded-lg p-5 text-center"
                  >
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-white">{item.status}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-center gap-6">
                <img
                  src="/assets/logo-global-dream.png"
                  alt="Global Dream Travel"
                  className="h-8 object-contain opacity-40"
                />
                <div className="w-px h-6 bg-white/10" />
                <img
                  src="/assets/logo-iata.jpg"
                  alt="IATA"
                  className="h-6 object-contain rounded opacity-40"
                />
              </div>

              <div className="w-12 h-px bg-white/20 mx-auto mt-8 mb-6" />
              <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
                Documento Confidencial — Global Dream Travel — 2026
              </p>
            </motion.div>
          </div>
        </section>
      </div>
  );
};

export default AssistFinancial;
