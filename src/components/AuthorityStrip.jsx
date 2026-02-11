import { motion } from 'framer-motion';
import { ShieldCheck, Award, Globe, Plane } from 'lucide-react';

const certifications = [
  { icon: <ShieldCheck size={24} />, title: 'IATA', sub: 'Agencia Acreditada' },
  { icon: <Award size={24} />, title: 'Disney', sub: 'Certified Partner' },
  { icon: <Globe size={24} />, title: 'Universal', sub: 'Authorized Agent' },
  { icon: <Plane size={24} />, title: 'Assist Card', sub: 'Official Partner' },
];

const AuthorityStrip = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-disney via-disney-dark to-disney relative overflow-hidden">
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
          <div className="text-center md:text-left">
            <div className="text-[10px] font-bold text-magic uppercase tracking-[0.3em] mb-1">
              Respaldo Internacional
            </div>
            <div className="text-xl md:text-2xl font-bold text-white font-quicksand">
              Certificados por los Mejores del Mundo
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  {cert.icon}
                </div>
                <div>
                  <div className="text-sm font-bold">{cert.title}</div>
                  <div className="text-[9px] text-white/60 uppercase tracking-wider">{cert.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorityStrip;
