import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  Smartphone,
  Globe,
  BarChart3,
  CheckCircle2,
  Zap,
  Target,
  Building2,
  Handshake,
} from 'lucide-react';

/* ── Animated counter ─────────────────────────────── */
const Counter = ({ end, duration = 2, prefix = '', suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const id = setInterval(() => {
      start += step;
      if (start >= end) {
        setVal(end);
        clearInterval(id);
      } else {
        setVal(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [inView, end, duration]);

  const formatted = val.toLocaleString('es-AR');
  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

/* ── Animated bar chart ───────────────────────────── */
const BarChart = ({ data }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const maxVal = Math.max(...data.map((d) => d.value));

  return (
    <div ref={ref} className="space-y-6">
      {data.map((item, i) => (
        <div key={i}>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-slate-700">{item.label}</span>
            <span className="text-sm font-bold text-slate-900">{item.display}</span>
          </div>
          <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${(item.value / maxVal) * 100}%` } : {}}
              transition={{ duration: 1.2, delay: i * 0.2, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${item.color || '#1e3a5f'}, ${item.colorEnd || '#3b82f6'})`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

/* ── Projection line chart (SVG) ──────────────────── */
const ProjectionChart = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const points = [
    { x: 0, y: 127, label: 'Actual' },
    { x: 1, y: 145, label: '6m' },
    { x: 2, y: 170, label: '12m' },
    { x: 3, y: 200, label: '18m' },
    { x: 4, y: 250, label: '24m' },
  ];

  const w = 500;
  const h = 220;
  const pad = { top: 30, right: 40, bottom: 40, left: 50 };
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;
  const maxY = 260;

  const toX = (i) => pad.left + (i / 4) * plotW;
  const toY = (v) => pad.top + plotH - (v / maxY) * plotH;

  const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');
  const area = `${line} L${toX(4)},${toY(0)} L${toX(0)},${toY(0)} Z`;

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-[540px] mx-auto">
        {[0, 65, 130, 195, 260].map((v) => (
          <g key={v}>
            <line
              x1={pad.left}
              y1={toY(v)}
              x2={w - pad.right}
              y2={toY(v)}
              stroke="#e2e8f0"
              strokeWidth="1"
            />
            <text x={pad.left - 8} y={toY(v) + 4} textAnchor="end" className="text-[10px] fill-slate-400">
              {v}M
            </text>
          </g>
        ))}

        <motion.path
          d={area}
          fill="url(#areaGrad)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.15 } : {}}
          transition={{ duration: 1 }}
        />

        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d={line}
          fill="none"
          stroke="#1e3a5f"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />

        {points.map((p, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.2 }}
          >
            <circle cx={toX(p.x)} cy={toY(p.y)} r="5" fill="#1e3a5f" stroke="#fff" strokeWidth="2" />
            <text
              x={toX(p.x)}
              y={toY(p.y) - 14}
              textAnchor="middle"
              className="text-[11px] font-bold fill-slate-800"
            >
              ${p.y}M
            </text>
            <text
              x={toX(p.x)}
              y={h - 10}
              textAnchor="middle"
              className="text-[10px] fill-slate-400"
            >
              {p.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

/* ── Section fade animation helper ────────────────── */
const sectionFade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

/* ════════════════════════════════════════════════════ */
/*                    MKT PAGE                         */
/* ════════════════════════════════════════════════════ */
const Mkt = () => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const el = videoContainerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen font-poppins">

      {/* ══════════════════════════════════════════════ */}
      {/* 1 — HERO                                       */}
      {/* ══════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1e3a5f 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6 max-w-5xl mx-auto relative z-10"
        >
          <div className="flex items-center justify-center gap-8 mb-12">
            <img src="/assets/logo-global-dream.png" alt="Global Dream Travel" className="h-20 md:h-28 object-contain" />
            <div className="w-px h-16 bg-slate-200" />
            <img src="/assets/logo-iata.jpg" alt="IATA Accredited US" className="h-16 md:h-24 object-contain rounded-lg" />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
            Ecosistema de Crecimiento Comercial
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto mb-4">
            Global Dream Travel
          </p>
          <div className="w-20 h-px bg-[#1e3a5f] mx-auto my-8" />
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
            Plataforma tecnologica + Red Comercial + Alcance Organico = Escalabilidad financiera sostenible
          </p>

          <a
            href="https://calendly.com/GLOBALDREAMT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1e3a5f] text-white px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#162d4a] transition-all hover:shadow-xl hover:shadow-[#1e3a5f]/20 no-underline"
          >
            Solicitar Reunion Estrategica
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* 2 — RESULTADOS REALES                          */}
      {/* ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-[0.3em] mb-4">01</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Resultados Economicos Comprobados
            </h2>
            <div className="w-16 h-px bg-[#1e3a5f] mb-12" />

            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Big counters */}
              <div className="space-y-10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Volumen Anual Vendido</p>
                  <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                    $<Counter end={127000000} duration={2.5} />
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Comision Generada (30%)</p>
                  <p className="text-4xl md:text-5xl font-black text-[#1e3a5f] tracking-tight">
                    $<Counter end={38100000} duration={2.5} />
                  </p>
                </div>
                <div className="flex gap-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Red Activa</p>
                    <p className="text-3xl font-black text-slate-900">+<Counter end={150} duration={1.5} /></p>
                    <p className="text-sm text-slate-500">agentes</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Operacion</p>
                    <p className="text-lg font-bold text-slate-700">LATAM + USA</p>
                    <p className="text-sm text-slate-500">IATA Accredited</p>
                  </div>
                </div>
              </div>

              {/* Bar chart */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <p className="text-sm font-bold text-slate-700 mb-6 uppercase tracking-wider">Indicadores Financieros</p>
                <BarChart
                  data={[
                    { label: 'Volumen Total', value: 127, display: '$127M', color: '#1e3a5f', colorEnd: '#2d5a8e' },
                    { label: 'Comision Generada', value: 38.1, display: '$38.1M', color: '#1e3a5f', colorEnd: '#3b82f6' },
                    { label: 'Proyeccion 12 Meses', value: 200, display: '$200M+', color: '#059669', colorEnd: '#34d399' },
                  ]}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* 3 — PROYECCION DE ESCALAMIENTO                 */}
      {/* ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-[0.3em] mb-4">02</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Proyeccion de Crecimiento 12 – 24 Meses
            </h2>
            <div className="w-16 h-px bg-[#1e3a5f] mb-8" />
            <p className="text-base text-slate-600 leading-relaxed max-w-3xl mb-12">
              Mediante integracion tecnologica, optimizacion comercial y activacion interna,
              proyectamos duplicar el volumen en un plazo de 18 a 24 meses.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Chart */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <p className="text-sm font-bold text-slate-700 mb-6 uppercase tracking-wider">Trayectoria de Volumen</p>
                <ProjectionChart />
              </div>

              {/* Indicators */}
              <div className="space-y-4">
                {[
                  { icon: Smartphone, text: 'Integracion en App TRIP' },
                  { icon: Zap, text: 'Activacion automatica pre-viaje' },
                  { icon: Users, text: 'Incentivo estructurado a agentes' },
                  { icon: Target, text: 'Posicionamiento de marca permanente' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-6 py-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1e3a5f]/5 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-[#1e3a5f]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                    <CheckCircle2 size={16} className="text-emerald-500 ml-auto shrink-0" />
                  </motion.div>
                ))}

                {/* Big projection number */}
                <div className="bg-[#1e3a5f] rounded-2xl p-8 text-center mt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Proyeccion Objetivo</p>
                  <p className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    $<Counter end={200000000} duration={3} suffix="+" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* 4 — ECOSISTEMA TECNOLOGICO                     */}
      {/* ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-[0.3em] mb-4">03</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Infraestructura Propia
            </h2>
            <div className="w-16 h-px bg-[#1e3a5f] mb-12" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Globe, title: 'Plataforma B2B', desc: 'globaldream.netlify.app — Sistema de operaciones centralizado para toda la red.' },
                { icon: BarChart3, title: 'CRM Interno', desc: 'Gestion de clientes, seguimiento de ventas y pipeline comercial integrado.' },
                { icon: Smartphone, title: 'App TRIP', desc: 'Itinerarios dinamicos con activacion por fecha. Guia en tiempo real para familias.' },
                { icon: Zap, title: 'Automatizacion', desc: 'Activacion automatica por fecha y actividad. Actualizacion horaria inteligente.' },
                { icon: TrendingUp, title: 'Integracion de Partners', desc: 'Partners integrados dentro del flujo del viaje. Visibilidad garantizada.' },
                { icon: Shield, title: 'Seguridad Operativa', desc: 'Infraestructura cerrada. Datos protegidos. Operacion auditable.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-[#1e3a5f]/20 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/5 flex items-center justify-center mb-4">
                    <item.icon size={22} className="text-[#1e3a5f]" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* TRIP App Video + Description */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div ref={videoContainerRef} className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-black">
                <video
                  ref={videoRef}
                  src="/assets/fix/appTRIPGlobal.mp4"
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">App TRIP — Motor de Itinerarios</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  El itinerario se activa automaticamente segun la fecha de viaje. El viajero recibe su agenda diaria
                  sin necesidad de buscar, consultar ni decidir en el momento. Cada partner integrado aparece
                  en el momento exacto del viaje donde genera mayor conversion.
                </p>
                <div className="space-y-3">
                  {[
                    'Activacion automatica por fecha de llegada',
                    'Navegacion vinculada a cada actividad',
                    'Partners visibles en el flujo diario del viajero',
                    'Reduccion de fatiga de decision para familias',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      <span className="text-xs text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#1e3a5f] rounded-2xl p-8 md:p-10 text-center">
              <p className="text-lg md:text-xl text-white font-semibold leading-relaxed max-w-2xl mx-auto">
                "No somos una agencia tradicional. Operamos como un Hub Digital de Distribucion."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* 5 — LIDERAZGO — ANDREA OLIVERA                 */}
      {/* ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-[0.3em] mb-4">04</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Liderazgo y Posicionamiento
            </h2>
            <div className="w-16 h-px bg-[#1e3a5f] mb-12" />

            <div className="grid md:grid-cols-5 gap-10 items-start">
              {/* Photo */}
              <div className="md:col-span-2">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                  <img
                    src="/assets/andi-olivera.jpg"
                    alt="Andrea Olivera — CEO Global Dream Travel"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-bold text-slate-900">Andrea Olivera</p>
                  <p className="text-sm text-slate-500">CEO — Global Dream Travel</p>
                </div>
              </div>

              {/* Credentials + Metrics */}
              <div className="md:col-span-3 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'CEO', label: 'Global Dream Travel' },
                    { value: 'IATA', label: 'Accredited USA' },
                    { value: '+2.7M', label: 'Views — Reel viral' },
                    { value: 'LATAM', label: 'Referente turismo familiar' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white border border-slate-200 rounded-xl p-5 text-center"
                    >
                      <p className="text-xl font-black text-[#1e3a5f]">{item.value}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3">
                  {[
                    'Comunidad activa en crecimiento continuo',
                    'Presencia fisica Argentina + Orlando',
                    'Posicionamiento ejecutivo en LinkedIn y medios',
                    'Red de mas de 150 agentes bajo su liderazgo',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white border-l-4 border-[#1e3a5f] rounded-r-xl p-6 mt-6">
                  <p className="text-base text-slate-700 italic leading-relaxed">
                    "Los clientes no compran un producto, compran confianza.
                    Esa confianza se construye con liderazgo visible."
                  </p>
                  <p className="text-xs text-slate-400 mt-3 uppercase tracking-wider">Andrea Olivera</p>
                </div>
              </div>
            </div>

            {/* ── Metricas del ultimo mes ── */}
            <div className="mt-16">
              <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-[0.3em] mb-6">Metricas Verificadas — Ultimo Periodo</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {[
                  { value: '2.7M+', label: 'Views Reel Viral' },
                  { value: '1.9M+', label: 'Alcance Secundario' },
                  { value: '900K+', label: 'Engagement Organico' },
                  { value: '83%', label: 'Penetracion No-Seguidores' },
                  { value: '1.1M+', label: 'Views Ultimos 30 Dias' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white border border-slate-200 rounded-xl p-5 text-center"
                  >
                    <p className="text-2xl font-black text-[#1e3a5f]">{item.value}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{item.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Instagram proof screenshots */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { src: '/assets/metrics-2.7m.jpeg', alt: '2.7M views reel' },
                  { src: '/assets/metrics-1.9m.jpeg', alt: '1.9M views reel' },
                  { src: '/assets/metrics-904k.jpeg', alt: '904K engagement' },
                  { src: '/assets/metrics-30days.jpeg', alt: '1.1M views 30 dias' },
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl overflow-hidden border border-slate-200 shadow-sm"
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-auto object-contain bg-white" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* 6 — MODELO DE ALIANZA                          */}
      {/* ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-[0.3em] mb-4">05</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Modelo de Crecimiento Compartido
            </h2>
            <div className="w-16 h-px bg-[#1e3a5f] mb-12" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: TrendingUp,
                  title: 'Comision Escalonada',
                  items: ['40% base', '42% por volumen', '47% por escala'],
                },
                {
                  icon: Target,
                  title: 'Bono por Metas',
                  items: ['Superacion de objetivos anuales', 'Incentivo por crecimiento'],
                },
                {
                  icon: Smartphone,
                  title: 'Integracion Tecnologica',
                  items: ['Integracion exclusiva en App TRIP', 'Visibilidad en plataforma B2B'],
                },
                {
                  icon: Building2,
                  title: 'Fee de Posicionamiento',
                  items: ['Presencia en ecosistema digital', 'Activacion pre y post viaje'],
                },
              ].map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1e3a5f]/5 flex items-center justify-center mb-4">
                    <block.icon size={20} className="text-[#1e3a5f]" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-3">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="mt-1 w-1 h-1 rounded-full bg-[#1e3a5f] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="bg-[#1e3a5f] rounded-2xl p-8 text-center">
              <p className="text-lg text-white font-semibold">
                "La alianza no es publicitaria. Es estructural."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* 7 — DIFERENCIAL COMPETITIVO                    */}
      {/* ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-[0.3em] mb-4">06</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Diferencial Competitivo
            </h2>
            <div className="w-16 h-px bg-[#1e3a5f] mb-12" />

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-bold uppercase tracking-wider text-slate-400 pb-4 pr-6 w-1/3">Dimension</th>
                    <th className="text-left text-xs font-bold uppercase tracking-wider text-slate-400 pb-4 pr-6 w-1/3">Agencia Tradicional</th>
                    <th className="text-left text-xs font-bold uppercase tracking-wider text-[#1e3a5f] pb-4 w-1/3">Global Dream Travel</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dim: 'Modelo de Venta', trad: 'Venta aislada', gdt: 'Ecosistema integrado' },
                    { dim: 'Tecnologia', trad: 'Sin plataforma propia', gdt: 'App TRIP + CRM + B2B' },
                    { dim: 'Activacion Digital', trad: 'Ninguna o tercerizada', gdt: 'Pre-viaje + durante + post-viaje' },
                    { dim: 'Red Comercial', trad: 'Estructura limitada', gdt: '+150 agentes estructurados' },
                    { dim: 'Liderazgo de Marca', trad: 'Sin figura visible', gdt: 'CEO con +2.7M alcance organico' },
                    { dim: 'Datos e Inteligencia', trad: 'Manual o inexistente', gdt: 'Automatizacion por fecha y actividad' },
                  ].map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="border-t border-slate-200"
                    >
                      <td className="py-4 pr-6 text-sm font-semibold text-slate-700">{row.dim}</td>
                      <td className="py-4 pr-6 text-sm text-slate-400">{row.trad}</td>
                      <td className="py-4 text-sm font-semibold text-[#1e3a5f]">{row.gdt}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* 8 — INTEGRACION DE SPONSORS                    */}
      {/* ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-[0.3em] mb-4">07</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Integracion Estrategica de Sponsors
            </h2>
            <div className="w-16 h-px bg-[#1e3a5f] mb-8" />
            <p className="text-base text-slate-600 leading-relaxed max-w-3xl mb-12">
              Nuestro ecosistema no es un canal publicitario. Es una plataforma de retroalimentacion donde cada partner
              se integra directamente en el flujo operativo del viajero, generando valor real en el momento exacto de decision.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* What we offer sponsors */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Lo que ofrecemos al sponsor</h3>
                <div className="space-y-4">
                  {[
                    { icon: Smartphone, text: 'Presencia nativa dentro de App TRIP — el viajero lo ve mientras ejecuta su itinerario' },
                    { icon: Users, text: 'Acceso a +150 agentes que recomiendan activamente el producto al cierre de venta' },
                    { icon: TrendingUp, text: 'Visibilidad organica a traves de contenido de Andrea Olivera (+2.7M views)' },
                    { icon: Globe, text: 'Integracion en plataforma B2B — cada agente presenta el producto como parte del ecosistema' },
                    { icon: Zap, text: 'Activacion automatica pre-viaje: el producto aparece en el momento de mayor receptividad' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1e3a5f]/5 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon size={16} className="text-[#1e3a5f]" />
                      </div>
                      <span className="text-sm text-slate-600 leading-relaxed">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* What the sponsor brings */}
              <div className="bg-[#1e3a5f] rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold text-white mb-6">Lo que el sponsor aporta al ecosistema</h3>
                <div className="space-y-4">
                  {[
                    'Producto o servicio de alto valor percibido para el viajero',
                    'Comision o fee por integracion que fortalece la rentabilidad de la red',
                    'Co-branding que eleva la percepcion de profesionalismo del ecosistema',
                    'Datos de conversion que permiten optimizar la oferta en tiempo real',
                    'Cobertura y respaldo que genera confianza en el proceso de venta',
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-white/85 leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ideal partner profile */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Perfil de Sponsor Ideal</h3>
              <p className="text-sm text-slate-500 mb-8">
                Buscamos partners cuyo producto sea parte natural del viaje, no una venta forzada.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Shield, title: 'Asistencia al Viajero', desc: 'Seguros y coberturas que se integran desde la reserva hasta el regreso.' },
                  { icon: Building2, title: 'Hoteleria y Alojamiento', desc: 'Partners de hospedaje que mejoran la experiencia con beneficios exclusivos.' },
                  { icon: Globe, title: 'Conectividad y Servicios', desc: 'Soluciones de comunicacion, traslados y servicios en destino.' },
                  { icon: BarChart3, title: 'Financiamiento', desc: 'Opciones de pago y financiacion que facilitan la decision de compra.' },
                  { icon: Handshake, title: 'Parques y Experiencias', desc: 'Alianzas con proveedores de experiencias y productos en destino.' },
                  { icon: Target, title: 'Marcas LATAM', desc: 'Empresas con foco en el viajero latinoamericano que buscan canal directo.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white border border-slate-100 rounded-xl p-5"
                  >
                    <item.icon size={18} className="text-[#1e3a5f] mb-3" />
                    <h4 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] rounded-2xl p-8 md:p-10 text-center">
              <p className="text-lg md:text-xl text-white font-semibold leading-relaxed max-w-2xl mx-auto">
                "No buscamos sponsors. Buscamos socios que quieran crecer dentro de un ecosistema
                que ya factura, ya opera y ya tiene la audiencia."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* 9 — CALL TO ACTION                             */}
      {/* ══════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-[#1e3a5f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div {...sectionFade}>
            <Handshake size={48} className="text-white/30 mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Escalemos Juntos
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-12 max-w-xl mx-auto">
              Buscamos alianzas estructurales con vision de crecimiento a largo plazo.
              Hablemos de numeros reales.
            </p>

            <a
              href="https://calendly.com/GLOBALDREAMT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#1e3a5f] px-12 py-5 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-slate-100 transition-all hover:shadow-2xl no-underline"
            >
              Agendar Reunion Estrategica
              <ArrowRight size={18} />
            </a>

            <div className="mt-20 pt-8 border-t border-white/10 flex items-center justify-center gap-6">
              <img src="/assets/logo-global-dream.png" alt="Global Dream Travel" className="h-8 object-contain opacity-40" />
              <div className="w-px h-6 bg-white/10" />
              <img src="/assets/logo-iata.jpg" alt="IATA" className="h-6 object-contain rounded opacity-40" />
            </div>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mt-4">
              Documento Confidencial — Global Dream Travel
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Mkt;
