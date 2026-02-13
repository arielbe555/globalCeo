import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const partners = [
  { src: '/assets/logo-disney.png', alt: 'Disney' },
  { src: '/assets/logo-universal.png', alt: 'Universal' },
  { src: '/assets/logo-iata.jpg', alt: 'IATA Acreditada' },
];

const AuthorityStrip = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gradient-to-r from-disney via-disney-dark to-disney relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 2-2 2z' fill='%23fff' fill-opacity='.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left text */}
          <div className="text-center md:text-left shrink-0">
            <div className="text-[10px] font-bold text-magic uppercase tracking-[0.3em] mb-1">
              {t('authority.label')}
            </div>
            <div className="text-lg md:text-xl font-bold text-white font-quicksand">
              {t('authority.title')}
            </div>
          </div>

          {/* Real Partner Logos — uniform proportional canvases */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-10 md:h-14 max-w-[120px] md:max-w-[150px] object-contain hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorityStrip;
