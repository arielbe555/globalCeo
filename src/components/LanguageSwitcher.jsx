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
        <rect width="640" height="480" fill="#fff" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} y={i * 74} width="640" height="37" fill="#B22234" />
        ))}
        <rect width="260" height="260" fill="#3C3B6E" />
        {[
          [17,14],[51,14],[85,14],[119,14],[153,14],[187,14],
          [34,36],[68,36],[102,36],[136,36],[170,36],
          [17,58],[51,58],[85,58],[119,58],[153,58],[187,58],
          [34,80],[68,80],[102,80],[136,80],[170,80],
          [17,102],[51,102],[85,102],[119,102],[153,102],[187,102],
          [34,124],[68,124],[102,124],[136,124],[170,124],
          [17,146],[51,146],[85,146],[119,146],[153,146],[187,146],
          [34,168],[68,168],[102,168],[136,168],[170,168],
          [17,190],[51,190],[85,190],[119,190],[153,190],[187,190],
          [34,212],[68,212],[102,212],[136,212],[170,212],
          [17,234],[51,234],[85,234],[119,234],[153,234],[187,234],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#fff" />
        ))}
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
