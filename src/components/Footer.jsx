import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FileText, ShieldCheck, Mail, LogIn, MapPin, Phone, Heart } from 'lucide-react';

const partnerLogos = [
  { src: '/assets/logo-disney.png', alt: 'Disney' },
  { src: '/assets/logo-universal.png', alt: 'Universal' },
  { src: '/assets/logo-iata.jpg', alt: 'IATA Acreditada' },
];

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path fill="white" d="M0,0 C480,60 960,0 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-12">
        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/assets/logo-global-dream.png"
              alt="Global Dream Travel"
              className="h-14 mb-6 object-contain object-left"
            />
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2 text-magic text-sm font-bold">
              <Heart size={14} className="fill-magic" />
              {t('footer.familiasFelices')}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">{t('footer.navegacion')}</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-sm text-slate-400 hover:text-magic transition-colors">{t('footer.inicio')}</Link>
              <a href="/#app" className="block text-sm text-slate-400 hover:text-magic transition-colors">{t('footer.tecnologia')}</a>
              <a href="/#hub" className="block text-sm text-slate-400 hover:text-magic transition-colors">{t('footer.hubAgentes')}</a>
              <a href="/#planificador" className="block text-sm text-slate-400 hover:text-magic transition-colors">{t('footer.planificarViaje')}</a>
              <Link to="/blog" className="block text-sm text-slate-400 hover:text-magic transition-colors">{t('footer.blogMagico')}</Link>
              <Link to="/legales" className="block text-sm text-slate-400 hover:text-magic transition-colors">{t('footer.terminosPrivacidad')}</Link>
            </div>
          </div>

          {/* Agent Access */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">{t('footer.accesoAgentes')}</h4>
            <div className="space-y-3">
              <a
                href="https://app.globaldream.travel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-magic transition-colors"
              >
                <LogIn size={14} /> {t('footer.plataformaApp')}
              </a>
              <a
                href="https://64203.webmail.dynadot.com/user/signin.html?so=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-magic transition-colors"
              >
                <Mail size={14} /> {t('footer.correoAgentes')}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">{t('footer.contacto')}</h4>
            <div className="space-y-3">
              <a href="tel:+5491125905797" className="flex items-center gap-2 text-sm text-slate-400 hover:text-magic transition-colors">
                <Phone size={14} /> +54 9 11 2590-5797
              </a>
              <a href="tel:+14077682975" className="flex items-center gap-2 text-sm text-slate-400 hover:text-magic transition-colors">
                <Phone size={14} /> +1 (407) 768-2975
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin size={14} className="mt-0.5 shrink-0" /> {t('footer.ubicacion')}
              </div>
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos.map((logo) => (
              <div key={logo.alt} className="w-28 h-14 md:w-36 md:h-16 bg-white/15 rounded-2xl flex items-center justify-center px-4 hover:bg-white/25 transition-all duration-500">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 md:max-h-12 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-medium">
            {t('footer.copyright')} &copy; {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
