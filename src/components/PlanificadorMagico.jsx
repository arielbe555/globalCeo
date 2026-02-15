import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, BookOpen } from 'lucide-react';

// Números de contacto de Global Dream
const WHATSAPP_COMERCIAL = '5491125905797';
const WHATSAPP_VENTAS_US = '14077682975';

const PlanificadorMagico = () => {
  const { t } = useTranslation();
  const destinos = [
    t('planner.destDisney'),
    t('planner.destJapon'),
    t('planner.destCruise'),
    t('planner.destEuropa'),
    t('planner.destDubai'),
  ];
  const [formData, setFormData] = useState({
    familia: '',
    destino: destinos[0],
    fecha: '',
    adultos: '2',
    ninos: '0',
    edades: '',
    telefono: '',
  });

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `${t('planner.waMsg1')}

${t('planner.waFamilia')} ${formData.familia}
${t('planner.waDestino')} ${formData.destino}
${t('planner.waPasajeros')} ${formData.adultos} ${t('planner.waAdultosY')} ${formData.ninos} ${t('planner.waNinos')}
${t('planner.waEdades')} ${formData.edades || t('planner.sinNinos')}
${t('planner.waContacto')} ${formData.telefono}

${t('planner.waCierre')}`;
    window.open(
      `https://wa.me/${WHATSAPP_COMERCIAL}?text=${encodeURIComponent(mensaje)}`,
      '_blank'
    );
  };

  const inputClass =
    'w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-disney transition-all outline-none text-sm';

  return (
    <section id="planificador" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-disney/10 border border-blue-50"
        >
          <h2 className="text-3xl font-bold text-center text-disney mb-3 font-quicksand">
            {t('planner.title')}
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10 max-w-md mx-auto">
            {t('planner.subtitle')}
          </p>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                {t('planner.labelFamilia')}
              </label>
              <input
                type="text"
                required
                className={inputClass}
                placeholder={t('planner.placeholderFamilia')}
                value={formData.familia}
                onChange={handleChange('familia')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                {t('planner.labelWhatsApp')}
              </label>
              <input
                type="tel"
                required
                className={inputClass}
                placeholder={t('planner.placeholderWhatsApp')}
                value={formData.telefono}
                onChange={handleChange('telefono')}
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                {t('planner.labelDestino')}
              </label>
              <select
                className={`${inputClass} font-medium`}
                value={formData.destino}
                onChange={handleChange('destino')}
              >
                {destinos.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                {t('planner.labelFecha')}
              </label>
              <input
                type="text"
                className={inputClass}
                placeholder={t('planner.placeholderFecha')}
                value={formData.fecha}
                onChange={handleChange('fecha')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                {t('planner.labelEdadesNinos')}
              </label>
              <input
                type="text"
                placeholder={t('planner.placeholderEdades')}
                className={inputClass}
                value={formData.edades}
                onChange={handleChange('edades')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                {t('planner.labelAdultos')}
              </label>
              <select
                className={`${inputClass} font-medium`}
                value={formData.adultos}
                onChange={handleChange('adultos')}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? t('planner.adulto') : t('planner.adultos')}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                {t('planner.labelNinos')}
              </label>
              <select
                className={`${inputClass} font-medium`}
                value={formData.ninos}
                onChange={handleChange('ninos')}
              >
                {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? t('planner.nino') : t('planner.ninos')}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-green-500 text-white py-6 rounded-3xl font-bold text-xl hover:bg-green-600 hover:scale-[1.02] transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircle size={24} />
              {t('planner.submitBtn')}
            </button>
          </form>

          {/* Secondary contact */}
          <div className="mt-8 text-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">
              {t('planner.contactoVentas')}
            </p>
            <a
              href={`tel:+${WHATSAPP_VENTAS_US}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-disney hover:text-disney-dark transition-colors"
            >
              <Phone size={16} />
              +1 (407) 768-2975
            </a>
          </div>

          {/* Insights CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-slate-50 rounded-3xl px-10 py-8 border border-slate-100">
              <BookOpen size={28} className="mx-auto text-disney mb-3" />
              <p className="text-lg font-bold text-slate-700 font-quicksand mb-2">
                {t('planner.insightsCtaTitle')}
              </p>
              <p className="text-sm text-slate-400 mb-5 max-w-md">
                {t('planner.insightsCtaDesc')}
              </p>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 bg-disney text-white px-8 py-3 rounded-2xl font-bold text-sm hover:bg-disney-dark hover:scale-105 transition-all shadow-lg shadow-disney/20"
              >
                <BookOpen size={18} />
                {t('planner.insightsCtaBtn')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanificadorMagico;
