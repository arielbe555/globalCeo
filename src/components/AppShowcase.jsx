import { motion } from 'framer-motion';
import { Map, FileCheck, Navigation, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AppShowcase = () => {
  const { t } = useTranslation();

  const features = [
    { icon: <Map size={18} />, tKey: 'app.featTrazaDigital', dKey: 'app.featTrazaDigitalDesc' },
    { icon: <FileCheck size={18} />, tKey: 'app.featCeroPapel', dKey: 'app.featCeroPapelDesc' },
    { icon: <Navigation size={18} />, tKey: 'app.featLogistica', dKey: 'app.featLogisticaDesc' },
    { icon: <Headphones size={18} />, tKey: 'app.featConcierge', dKey: 'app.featConciergeDesc' },
  ];

  const itineraryItems = [
    { time: '8:30', title: 'app.mk1Title', land: 'app.mk1Land', active: false },
    { time: '9:00', title: 'app.mk2Title', land: 'app.mk2Land', active: false },
    { time: '10:00', title: 'app.mk3Title', land: 'app.mk3Land', active: false },
    { time: '10:45', title: 'app.mk4Title', land: 'app.mk4Land', active: false },
    { time: '11:30', title: 'app.mk5Title', land: 'app.mk5Land', active: false },
    { time: '12:30', title: 'app.mk6Title', land: 'app.mk6Land', active: true },
  ];

  const tabs = ['app.tabMapa', 'app.tabDocs', 'app.tabChat', 'app.tabPerfil'];

  return (
    <section id="app" className="py-28 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-disney/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative order-2 lg:order-1"
        >
          <div className="relative">
            {/* Phone frame */}
            <div className="w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl shadow-slate-300 overflow-hidden relative z-10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-20" />

              <div className="p-4 pt-10 h-full bg-white flex flex-col font-poppins">
                {/* App Header */}
                <div className="bg-gradient-to-br from-disney to-indigo-500 rounded-2xl p-4 text-white mb-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="text-[8px] font-bold opacity-70 mb-0.5 uppercase tracking-widest">
                    {t('app.mkHeader')}
                  </div>
                  <div className="text-base font-bold font-quicksand">{t('app.mkTitle')}</div>
                  <div className="text-[9px] text-white/60 mt-1">{t('app.mkSubtitle')}</div>
                </div>

                {/* Magic Kingdom Hour-by-Hour */}
                <div className="space-y-2 flex-1 overflow-y-auto">
                  {itineraryItems.map((item, i) => (
                    <div
                      key={i}
                      className={`flex gap-2.5 items-center p-2.5 rounded-xl border transition-all ${
                        item.active
                          ? 'bg-disney/5 border-disney/20 shadow-sm'
                          : 'bg-slate-50 border-slate-100'
                      }`}
                    >
                      <div className={`w-10 h-8 rounded-lg flex items-center justify-center font-bold text-[9px] shrink-0 ${
                        item.active
                          ? 'bg-disney text-white shadow-sm'
                          : 'bg-white text-disney border border-slate-100'
                      }`}>
                        {item.time}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[9px] font-bold text-slate-700 truncate">{t(item.title)}</div>
                        <div className={`text-[8px] ${item.active ? 'text-disney font-semibold' : 'text-slate-400'}`}>{t(item.land)}</div>
                      </div>
                      {item.active && (
                        <div className="w-2 h-2 bg-disney rounded-full animate-pulse shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="py-4 border-t border-slate-100 flex justify-around">
                  {tabs.map((tab) => (
                    <div key={tab} className="text-center">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mx-auto mb-1" />
                      <span className="text-[7px] text-slate-400 uppercase tracking-wider font-bold">{t(tab)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-disney/15 blur-[80px] scale-125 rounded-full -z-10" />

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -left-8 bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 z-20"
            >
              <div className="text-[9px] font-bold text-green-500 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                {t('app.ticketsDescargados')}
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-6 bg-magic text-slate-900 px-4 py-2 rounded-xl shadow-xl z-20"
            >
              <div className="text-[9px] font-bold">{t('app.funcionaOffline')}</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <span className="text-[10px] font-bold text-disney uppercase tracking-[0.3em]">
            {t('app.sectionLabel')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8 font-quicksand text-slate-800 leading-tight">
            {t('app.title')}
            <br />
            <span className="text-disney">{t('app.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-slate-500 mb-12 leading-relaxed font-light max-w-lg">
            {t('app.description')}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:bg-disney/5 hover:border-disney/20 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-disney mb-2 group-hover:scale-110 transition-transform">{f.icon}</div>
                <b className="text-xs uppercase tracking-wider text-slate-800 block mb-1">
                  {t(f.tKey)}
                </b>
                <p className="text-[10px] text-slate-400 leading-relaxed">{t(f.dKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;
