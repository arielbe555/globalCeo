import { motion } from 'framer-motion';
import { FileText, ShieldCheck } from 'lucide-react';

const Legales = () => {
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
                Términos y Condiciones
              </h1>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
              <p>
                Bienvenido a Global Dream Travel® ("la Agencia"). Al acceder y utilizar
                este sitio web, aceptás cumplir con los siguientes términos y condiciones.
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                1. Servicios
              </h3>
              <p>
                Global Dream Travel® es una agencia de viajes acreditada por IATA que
                ofrece servicios de planificación de viajes familiares, incluyendo
                reservas de hoteles, parques temáticos, cruceros, seguros de viaje y
                transporte. Todos los servicios están sujetos a disponibilidad y a los
                términos de los proveedores asociados (Disney, Universal, líneas de
                cruceros, etc.).
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                2. Reservas y Pagos
              </h3>
              <p>
                Las reservas se confirman una vez recibido el depósito correspondiente
                según las políticas de cada proveedor. Los precios están sujetos a
                cambios sin previo aviso hasta la confirmación del pago. La agencia
                actúa como intermediaria entre el cliente y los proveedores de servicios.
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                3. Cancelaciones
              </h3>
              <p>
                Las políticas de cancelación varían según el proveedor y el tipo de
                servicio contratado. Recomendamos la contratación de seguros de viaje
                que cubran cancelaciones imprevistas. Global Dream Travel® informará
                las condiciones específicas antes de confirmar cada reserva.
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                4. Responsabilidad
              </h3>
              <p>
                Global Dream Travel® no se responsabiliza por cambios, cancelaciones
                o modificaciones realizadas por terceros proveedores. La agencia se
                compromete a gestionar cualquier inconveniente en representación del
                cliente ante los proveedores.
              </p>
            </div>
          </div>

          {/* Privacidad */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-disney" size={32} />
              <h1 className="text-3xl font-bold font-quicksand text-disney">
                Política de Privacidad
              </h1>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
              <p>
                En Global Dream Travel® nos comprometemos a proteger la información
                personal de nuestros clientes y visitantes.
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                Datos que Recopilamos
              </h3>
              <p>
                Recopilamos únicamente los datos necesarios para gestionar tu viaje:
                nombre, teléfono, correo electrónico, preferencias de viaje y datos
                de los pasajeros. Esta información se utiliza exclusivamente para la
                planificación y gestión de tu experiencia de viaje.
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                Uso de la Información
              </h3>
              <p>
                Tu información personal se comparte únicamente con los proveedores de
                servicios necesarios para tu viaje (hoteles, aerolíneas, parques,
                seguros). No vendemos ni compartimos datos personales con terceros
                para fines publicitarios.
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">
                Contacto
              </h3>
              <p>
                Para consultas sobre tus datos personales, podés contactarnos a través
                del formulario de WhatsApp en nuestro sitio o escribir a nuestro equipo
                de soporte.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legales;
