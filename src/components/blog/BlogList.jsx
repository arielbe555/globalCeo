import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import blogPosts from '../../data/blogPosts';

const categoryColors = {
  Grupal: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white',
  Destinos: 'bg-disney/10 text-disney',
  Seguridad: 'bg-green-50 text-green-600',
  Tecnología: 'bg-purple-50 text-purple-600',
  Cruceros: 'bg-cyan-50 text-cyan-600',
  B2B: 'bg-orange-50 text-orange-600',
  Testimonios: 'bg-pink-50 text-pink-600',
};

const BlogList = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language === 'pt' ? 'pt-BR' : i18n.language === 'en' ? 'en-US' : 'es-AR';

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post, i) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <Link
            to={`/blog/${post.slug}`}
            className="group block bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-disney/20 transition-all duration-300"
          >
            {/* Image — fotos reales */}
            <div className="h-52 overflow-hidden bg-slate-100">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-disney/5 via-slate-50 to-disney/10 flex items-center justify-center">
                  <span className="text-6xl font-bold font-quicksand text-disney/20">
                    {i + 1}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6">
              {/* Category Badge */}
              <span
                className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 ${
                  categoryColors[post.category] || 'bg-slate-50 text-slate-500'
                }`}
              >
                {post.category}
              </span>

              <h3 className="text-lg font-bold text-slate-800 font-quicksand mb-2 group-hover:text-disney transition-colors leading-tight">
                {post.title}
              </h3>

              <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                {post.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-medium">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <ArrowRight
                  size={16}
                  className="text-disney opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
};

export default BlogList;
