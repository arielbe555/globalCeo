import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, ShieldCheck } from 'lucide-react';

const Legales = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Términos */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-disney" size={32} />
              <h1 className="text-3xl font-bold font-quicksand text-disney">
                {t('legales.terminosTitle')}
              </h1>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
              <p>
                {t('legales.terminosIntro')}
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                {t('legales.sec1Title')}
              </h3>
              <p>
                {t('legales.sec1Text')}
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                {t('legales.sec2Title')}
              </h3>
              <p>
                {t('legales.sec2Text')}
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                {t('legales.sec3Title')}
              </h3>
              <p>
                {t('legales.sec3Text')}
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                {t('legales.sec4Title')}
              </h3>
              <p>
                {t('legales.sec4Text')}
              </p>
            </div>
          </div>

          {/* Privacidad */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-disney" size={32} />
              <h1 className="text-3xl font-bold font-quicksand text-disney">
                {t('legales.privacidadTitle')}
              </h1>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
              <p>
                {t('legales.privacidadIntro')}
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                {t('legales.datosTitle')}
              </h3>
              <p>
                {t('legales.datosText')}
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                {t('legales.usoTitle')}
              </h3>
              <p>
                {t('legales.usoText')}
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                {t('legales.contactoTitle')}
              </h3>
              <p>
                {t('legales.contactoText')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legales;
