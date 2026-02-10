import { motion } from 'framer-motion';
import { Heart, Globe, Users, CheckCircle } from 'lucide-react';

const stats = [
  { label: 'Vistas Virales', value: '2.7M+', icon: <Heart className="text-pink-500" size={28} /> },
  { label: 'Compartidos', value: '51K+', icon: <Globe className="text-disney" size={28} /> },
  { label: 'Agentes Certificados', value: '150+', icon: <Users className="text-purple-500" size={28} /> },
  { label: 'Familias Felices', value: '5000+', icon: <CheckCircle className="text-green-500" size={28} /> },
];

const MetricasImpacto = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-slate-50 p-10 rounded-[3rem] text-center border border-slate-100 hover:bg-blue-50 hover:border-disney/20 transition-colors duration-300 group"
          >
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-4xl font-bold text-disney font-quicksand mb-2">
              {stat.value}
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MetricasImpacto;
