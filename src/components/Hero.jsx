import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Placeholder — reemplazar con video real en /public/assets/ */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-disney-dark via-disney to-blue-400 animate-pulse" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2260%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22%20fill%3D%22rgba(255%2C255%2C255%2C0.15)%22%2F%3E%3C%2Fsvg%3E')] opacity-40" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-8 inline-block"
        >
          Agencia Acreditada IATA &bull; Certificación Disney & Universal
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-white mb-6 font-quicksand drop-shadow-2xl"
        >
          La Magia en Buenas Manos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto font-light mb-12"
        >
          Somos el Hub tecnológico que traza los sueños de tu familia con el
          respaldo de 150 expertos mundiales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-5"
        >
          <a
            href="#planificador"
            className="bg-white text-disney px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all"
          >
            Planificar mi Sueño
          </a>
          <a
            href="#app"
            className="bg-disney/30 backdrop-blur-md border border-white/40 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-disney/50 transition-all"
          >
            Ver Tecnología
          </a>
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" className="w-full">
          <path
            fill="white"
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,40 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
