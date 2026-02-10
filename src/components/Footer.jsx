import { Link } from 'react-router-dom';
import { FileText, ShieldCheck, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Brand */}
        <div className="text-3xl font-bold text-disney font-quicksand mb-12 tracking-tight uppercase">
          Global Dream Travel<span className="text-disney-light">®</span>
        </div>

        {/* Partner Logos (Placeholders) */}
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {['Disney', 'Universal', 'IATA'].map((name) => (
            <div
              key={name}
              className="h-8 px-6 bg-slate-200/50 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <Link
            to="/legales"
            className="hover:text-disney flex items-center gap-1 transition-colors"
          >
            <FileText size={14} /> Términos
          </Link>
          <Link
            to="/legales"
            className="hover:text-disney flex items-center gap-1 transition-colors"
          >
            <ShieldCheck size={14} /> Privacidad
          </Link>
          <Link
            to="/blog"
            className="hover:text-disney transition-colors"
          >
            Blog
          </Link>
          <a
            href="https://64203.webmail.dynadot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-disney flex items-center gap-1 transition-colors"
          >
            <Mail size={14} /> Acceso Agentes
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-slate-300 uppercase tracking-[0.5em] font-medium">
          Marca Registrada. Agencia Acreditada IATA. &copy; {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
