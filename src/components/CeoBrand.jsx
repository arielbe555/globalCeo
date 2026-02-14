import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star, ShieldCheck, Award, TrendingUp } from 'lucide-react';

const CeoBrand = () => {
  const { t } = useTranslation();
  const credentials = [
    { icon: <ShieldCheck size={18} />, text: t('ceo.credIata'), sub: t('ceo.credIataDesc') },
    { icon: <Award size={18} />, text: t('ceo.credDisney'), sub: t('ceo.credDisneyDesc') },
    { icon: <TrendingUp size={18} />, text: t('ceo.credVistas'), sub: t('ceo.credVistasDesc') },
    { icon: <Star size={18} />, text: t('ceo.credFamilias'), sub: t('ceo.credFamiliasDesc') },
  ];
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-disney/[0.03] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-bold text-disney uppercase tracking-[0.3em]">
            {t('ceo.sectionLabel')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-quicksand text-disney mt-3 leading-tight">
            {t('ceo.titleLine1')}{' '}
            <br className="hidden md:block" />
            {t('ceo.titleLine2')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Photo — 2 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              {/* Main photo — Andi con Walt y Castillo de noche */}
              <div className="w-[22rem] h-[32rem] md:w-[30rem] md:h-[42rem] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-disney/20 border-4 border-white ring-1 ring-slate-100">
                <img
                  src="/assets/castillidenocheandiywalt.jpeg"
                  alt="Andi Olivera frente al Castillo de Cinderella y la estatua de Walt Disney"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="text-2xl font-bold text-disney font-quicksand">2.7M+</div>
                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{t('ceo.vistasVirales')}</div>
              </motion.div>

              {/* Floating badge bottom */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-magic text-slate-900 px-5 py-3 rounded-2xl shadow-xl"
              >
                <div className="text-[9px] font-bold uppercase tracking-widest">{t('ceo.ceoFundadora')}</div>
                <div className="text-sm font-bold font-quicksand">Andi Olivera</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content — 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-xl md:text-2xl text-slate-500 mb-10 leading-relaxed font-light">
              {t('ceo.bio1')} <strong className="font-semibold text-disney">{t('ceo.bio2')}</strong> {t('ceo.bio3')} <strong className="font-semibold text-disney">{t('ceo.bio4')}</strong>{t('ceo.bio5')}
            </p>

            {/* Credentials grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-disney/5 hover:border-disney/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-disney/10 rounded-xl flex items-center justify-center text-disney shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-disney">{c.text}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{c.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative p-8 bg-gradient-to-br from-disney/5 to-transparent rounded-3xl border border-disney/10">
              <div className="absolute -top-3 left-8 text-6xl text-disney/20 font-serif leading-none">&ldquo;</div>
              <p className="text-lg text-slate-600 italic font-light leading-relaxed relative z-10">
                {t('ceo.quote')}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img src="/assets/andi-olivera.jpg" alt="Andi" className="w-16 h-16 rounded-full object-cover object-top shadow-lg ring-2 ring-disney/20" />
                <div>
                  <cite className="text-lg font-bold text-disney not-italic">Andi Olivera</cite>
                  <div className="text-sm text-slate-400">{t('ceo.quoteCitation')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CeoBrand;
