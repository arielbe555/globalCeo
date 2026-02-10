import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

// Números de contacto de Global Dream
const WHATSAPP_COMERCIAL = '5491125905797';
const WHATSAPP_VENTAS_US = '14077682975';

const destinos = [
  'Disney World & Universal Orlando',
  'Epic Universe 2025',
  'Disney Cruise Line / Royal Caribbean',
  'Europa Familiar Boutique',
  'Dubai & Emirates — Experiencia de Lujo',
];

const PlanificadorMagico = () => {
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
    const mensaje = `¡Hola Global Dream! Queremos planificar:

Familia: ${formData.familia}
Destino: ${formData.destino}
Fecha: ${formData.fecha}
Pasajeros: ${formData.adultos} adultos y ${formData.ninos} niños
Edades de los niños: ${formData.edades || 'Sin niños'}
Contacto: ${formData.telefono}

¿Nos ayudan con la magia?`;
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
            Iniciemos tu Gran Aventura
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10 max-w-md mx-auto">
            Completá el formulario y te contactamos por WhatsApp para armar tu
            viaje soñado.
          </p>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                Familia
              </label>
              <input
                type="text"
                required
                className={inputClass}
                placeholder="Apellido de la familia"
                value={formData.familia}
                onChange={handleChange('familia')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                WhatsApp
              </label>
              <input
                type="tel"
                required
                className={inputClass}
                placeholder="+54 9 11 ..."
                value={formData.telefono}
                onChange={handleChange('telefono')}
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                Destino
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
                Fecha Tentativa
              </label>
              <input
                type="text"
                className={inputClass}
                placeholder="Ej: Julio 2026"
                value={formData.fecha}
                onChange={handleChange('fecha')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                Edades Niños
              </label>
              <input
                type="text"
                placeholder="Ej: 5, 8 y 12 años"
                className={inputClass}
                value={formData.edades}
                onChange={handleChange('edades')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                Adultos
              </label>
              <select
                className={`${inputClass} font-medium`}
                value={formData.adultos}
                onChange={handleChange('adultos')}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'adulto' : 'adultos'}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-disney uppercase tracking-widest">
                Niños
              </label>
              <select
                className={`${inputClass} font-medium`}
                value={formData.ninos}
                onChange={handleChange('ninos')}
              >
                {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'niño' : 'niños'}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-green-500 text-white py-6 rounded-3xl font-bold text-xl hover:bg-green-600 hover:scale-[1.02] transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircle size={24} />
              Enviar a WhatsApp Global Dream
            </button>
          </form>

          {/* Secondary contact */}
          <div className="mt-8 text-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">
              Contacto para Ventas & Proveedores (USA)
            </p>
            <a
              href={`tel:+${WHATSAPP_VENTAS_US}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-disney hover:text-disney-dark transition-colors"
            >
              <Phone size={16} />
              +1 (407) 768-2975
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanificadorMagico;
