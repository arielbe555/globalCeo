import { motion, useInView } from 'framer-motion';
import { Heart, Globe, Users, CheckCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

/* Animated Counter Hook */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(eased * numericTarget);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function formatValue(raw, template) {
  if (template.includes('M')) return raw.toFixed(1) + 'M+';
  if (template.includes('K')) return Math.round(raw) + 'K+';
  return Math.round(raw) + '+';
}

const buildStats = (t) => [
  { label: t('metrics.vistasVirales'), value: '2.7M+', icon: <Heart className="text-pink-500" size={28} />, color: 'from-pink-500/10 to-pink-500/5' },
  { label: t('metrics.compartidos'), value: '51K+', icon: <Globe className="text-disney" size={28} />, color: 'from-disney/10 to-disney/5' },
  { label: t('metrics.agentesCertificados'), value: '150+', icon: <Users className="text-purple-500" size={28} />, color: 'from-purple-500/10 to-purple-500/5' },
  { label: t('metrics.familiasFelices'), value: '5000+', icon: <CheckCircle className="text-green-500" size={28} />, color: 'from-green-500/10 to-green-500/5' },
];

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const count = useCounter(stat.value, 2200, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`relative bg-gradient-to-br ${stat.color} p-10 rounded-[2.5rem] text-center border border-white/60 hover:shadow-xl hover:scale-[1.03] transition-all duration-500 group backdrop-blur-sm overflow-hidden`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-white/60 rounded-[2.5rem]" />
      <div className="relative z-10">
        <div className="flex justify-center mb-4 group-hover:scale-125 transition-transform duration-500">
          {stat.icon}
        </div>
        <div className="text-5xl font-bold text-disney font-quicksand mb-2 tabular-nums">
          {isInView ? formatValue(count, stat.value) : '0'}
        </div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

const MetricasImpacto = () => {
  const { t } = useTranslation();
  const stats = buildStats(t);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230072bc' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-bold text-disney uppercase tracking-[0.3em]">
            {t('metrics.sectionLabel')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-quicksand text-slate-800 mt-3">
            {t('metrics.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricasImpacto;
