import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  {
    code: 'es',
    label: 'Español',
    flag: (
      <svg viewBox="0 0 640 480" className="w-5 h-3.5 rounded-sm">
        <rect width="640" height="480" fill="#AA151B" />
        <rect width="640" height="240" y="120" fill="#F1BF00" />
      </svg>
    ),
  },
  {
    code: 'en',
    label: 'English',
    flag: (
      <svg viewBox="0 0 640 480" className="w-5 h-3.5 rounded-sm">
        <rect width="640" height="480" fill="#012169" />
        <path d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" fill="#fff" />
        <path d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" fill="#C8102E" />
        <path d="M241 0v480h160V0H241zM0 160v160h640V160H0z" fill="#fff" />
        <path d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" fill="#C8102E" />
      </svg>
    ),
  },
  {
    code: 'pt',
    label: 'Português',
    flag: (
      <svg viewBox="0 0 640 480" className="w-5 h-3.5 rounded-sm">
        <rect width="640" height="480" fill="#009739" />
        <path d="M320 76.8L588.8 240 320 403.2 51.2 240z" fill="#FEDD00" />
        <circle cx="320" cy="240" r="80" fill="#012169" />
        <path d="M270 215c0 0 25-15 50-15s50 15 50 15" stroke="#fff" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
];

const LanguageSwitcher = ({ scrolled = false }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all text-xs font-bold ${
          scrolled
            ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            : 'bg-white/15 text-white hover:bg-white/25'
        }`}
        aria-label="Change language"
      >
        {current.flag}
        <Globe size={14} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 min-w-[150px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLang(lang.code)}
              className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-colors ${
                lang.code === i18n.language
                  ? 'bg-disney/10 text-disney'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {lang.flag}
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
