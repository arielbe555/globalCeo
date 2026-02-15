import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Calendar, Navigation, Smartphone, Users, BarChart3, Network, Shield, Cpu, Clock, MapPin, Zap, Layers } from 'lucide-react';

const Technology = () => {
  const { t } = useTranslation();

  const tripFeatures = [
    { icon: <Calendar size={20} />, title: t('tech.tripFeat1'), desc: t('tech.tripFeat1Desc') },
    { icon: <Clock size={20} />, title: t('tech.tripFeat2'), desc: t('tech.tripFeat2Desc') },
    { icon: <Navigation size={20} />, title: t('tech.tripFeat3'), desc: t('tech.tripFeat3Desc') },
    { icon: <Zap size={20} />, title: t('tech.tripFeat4'), desc: t('tech.tripFeat4Desc') },
    { icon: <MapPin size={20} />, title: t('tech.tripFeat5'), desc: t('tech.tripFeat5Desc') },
    { icon: <Smartphone size={20} />, title: t('tech.tripFeat6'), desc: t('tech.tripFeat6Desc') },
  ];

  const agencyFeatures = [
    { icon: <BarChart3 size={20} />, title: t('tech.agencyFeat1'), desc: t('tech.agencyFeat1Desc') },
    { icon: <Users size={20} />, title: t('tech.agencyFeat2'), desc: t('tech.agencyFeat2Desc') },
    { icon: <Network size={20} />, title: t('tech.agencyFeat3'), desc: t('tech.agencyFeat3Desc') },
    { icon: <Shield size={20} />, title: t('tech.agencyFeat4'), desc: t('tech.agencyFeat4Desc') },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-disney-dark to-slate-900">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-7xl mx-auto px-6 py-40 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[10px] font-bold text-magic uppercase tracking-[0.4em] mb-6">
              {t('tech.heroLabel')}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-quicksand leading-tight mb-8 max-w-5xl mx-auto">
              {t('tech.heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              {t('tech.heroSubtitle')}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path fill="white" d="M0,60 C360,0 720,80 1440,20 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* SECTION 1 — TRIP Dynamic Itinerary Engine */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-disney/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Video / Visual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-disney/20 border border-slate-100">
                <video
                  src="/assets/fix/appTRIPGlobal.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 z-10"
              >
                <div className="text-[10px] font-bold text-disney uppercase tracking-wider">Behavioral Experience Automation</div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-disney/10 rounded-xl flex items-center justify-center">
                  <Cpu size={20} className="text-disney" />
                </div>
                <span className="text-[10px] font-bold text-disney uppercase tracking-[0.3em]">Section 01</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-quicksand text-slate-800 mb-6 leading-tight">
                {t('tech.tripTitle')}
              </h2>
              <p className="text-lg text-slate-500 mb-4 leading-relaxed font-light">
                {t('tech.tripDesc')}
              </p>
              <div className="bg-disney/5 border border-disney/10 rounded-2xl p-5 mb-8">
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  {t('tech.tripKeyInsight')}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {tripFeatures.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-disney/5 hover:border-disney/20 transition-all"
                  >
                    <div className="text-disney shrink-0 mt-0.5">{f.icon}</div>
                    <div>
                      <div className="text-xs font-bold text-slate-700">{f.title}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{f.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Centralized Agent Operating Platform */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-disney/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-disney/10 rounded-xl flex items-center justify-center">
                <BarChart3 size={20} className="text-disney" />
              </div>
              <span className="text-[10px] font-bold text-disney uppercase tracking-[0.3em]">Section 02</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-quicksand text-slate-800 mb-6 leading-tight max-w-3xl mx-auto">
              {t('tech.agencyTitle')}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
              {t('tech.agencyDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencyFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-disney/20 transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 bg-disney/10 rounded-2xl flex items-center justify-center text-disney mx-auto mb-5 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Integrated Ecosystem */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-disney/10 rounded-xl flex items-center justify-center">
                  <Layers size={20} className="text-disney" />
                </div>
                <span className="text-[10px] font-bold text-disney uppercase tracking-[0.3em]">Section 03</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-quicksand text-slate-800 mb-6 leading-tight">
                {t('tech.ecosystemTitle')}
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed font-light">
                {t('tech.ecosystemDesc')}
              </p>
              <div className="space-y-4">
                {[
                  { label: t('tech.ecoDigital'), desc: t('tech.ecoDigitalDesc') },
                  { label: t('tech.ecoOperational'), desc: t('tech.ecoOperationalDesc') },
                  { label: t('tech.ecoClient'), desc: t('tech.ecoClientDesc') },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <div className="w-8 h-8 bg-disney rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800">{item.label}</div>
                      <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Diagram visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Center hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-disney to-disney-dark rounded-full flex items-center justify-center shadow-2xl shadow-disney/30 z-10">
                  <div className="text-center">
                    <div className="text-white text-[8px] font-bold uppercase tracking-widest">Global Dream</div>
                    <div className="text-magic text-xs font-bold mt-1">Ecosystem</div>
                  </div>
                </div>
                {/* Orbiting nodes */}
                {[
                  { label: 'CLIENT', angle: 0, color: 'bg-magic' },
                  { label: 'AGENT', angle: 120, color: 'bg-disney-light' },
                  { label: 'PLATFORM', angle: 240, color: 'bg-white' },
                ].map((node, i) => {
                  const radius = 130;
                  const rad = (node.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;
                  return (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                      className={`absolute top-1/2 left-1/2 w-20 h-20 ${node.color} rounded-2xl shadow-xl flex items-center justify-center border border-slate-100`}
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      <span className="text-[8px] font-bold uppercase tracking-wider text-slate-800">{node.label}</span>
                    </motion.div>
                  );
                })}
                {/* Connecting lines visual - subtle glow rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-disney/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-disney/10 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Closed-Loop */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-disney-dark to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 2-2 2z' fill='%23fff' fill-opacity='.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold text-magic uppercase tracking-[0.4em] mb-6 block">
              {t('tech.closedLabel')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-quicksand mb-8 leading-tight">
              {t('tech.closedTitle')}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              {t('tech.closedDesc')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: t('tech.closedReach'), value: '2.7M+' },
              { label: t('tech.closedInfra'), value: '150+' },
              { label: t('tech.closedTech'), value: 'TRIP' },
              { label: t('tech.closedMarket'), value: 'LATAM' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="text-2xl md:text-3xl font-bold text-magic font-quicksand mb-2">{item.value}</div>
                <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <a
              href="/#planificador"
              className="inline-block bg-magic text-slate-900 px-10 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider hover:scale-105 transition-transform shadow-xl shadow-magic/20"
            >
              {t('tech.closedCta')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
