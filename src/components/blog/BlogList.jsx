import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import insightsPosts from '../../data/insightsPosts';

const verticalColors = {
  disney: 'bg-disney/10 text-disney',
  universal: 'bg-purple-50 text-purple-600',
  cruise: 'bg-cyan-50 text-cyan-600',
  logistics: 'bg-orange-50 text-orange-600',
};

const BlogList = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language === 'pt' ? 'pt-BR' : i18n.language === 'en' ? 'en-US' : 'es-AR';

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {insightsPosts.map((post, i) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <Link
            to={`/insights/${post.vertical}/${post.slug}`}
            className="group block bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-disney/20 transition-all duration-300"
          >
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
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`inline-block px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest ${
                    verticalColors[post.vertical] || 'bg-slate-50 text-slate-500'
                  }`}
                >
                  {post.vertical}
                </span>
                <span className="text-[9px] text-slate-400 uppercase tracking-wider font-medium">
                  {post.pillar}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-800 font-quicksand mb-2 group-hover:text-disney transition-colors leading-tight">
                {post.title}
              </h3>

              <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-medium">
                  <Clock size={12} />
                  {post.readTime}
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
