import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Clock, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { VERTICALS } from '../../data/insightsPosts';

const verticalLabels = {
  disney: 'Disney Intelligence',
  universal: 'Universal Intelligence',
  cruise: 'Cruise Intelligence',
  logistics: 'Florida Mobility & Logistics',
};

const verticalColors = {
  disney: 'bg-disney/10 text-disney',
  universal: 'bg-purple-50 text-purple-600',
  cruise: 'bg-cyan-50 text-cyan-600',
  logistics: 'bg-orange-50 text-orange-600',
};

const BlogPost = ({ post, content }) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'pt' ? 'pt-BR' : i18n.language === 'en' ? 'en-US' : 'es-AR';

  if (!post) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-white text-center">
        <h1 className="text-3xl font-bold text-disney font-quicksand mb-4">
          {t('insights.notFound')}
        </h1>
        <Link to="/insights" className="text-disney hover:underline">
          {t('insights.backToInsights')}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-8 font-medium">
            <Link to="/insights" className="hover:text-disney transition-colors">
              Insights
            </Link>
            <ChevronRight size={11} />
            <Link to={`/insights?v=${post.vertical}`} className="hover:text-disney transition-colors">
              {verticalLabels[post.vertical] || post.vertical}
            </Link>
            <ChevronRight size={11} />
            <span className="text-slate-600 truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Back link */}
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm text-disney hover:text-disney-dark transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t('insights.backToInsights')}
          </Link>

          {/* Meta: vertical badge + pillar + date + readTime */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[9px] font-bold uppercase tracking-widest ${verticalColors[post.vertical] || 'bg-slate-50 text-slate-500'}`}>
              <Tag size={10} />
              {post.vertical}
            </span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
              {post.pillar}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1 text-[10px] text-slate-300 font-medium">
                <Clock size={11} />
                {post.readTime}
              </span>
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[9px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 border border-slate-100">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold font-quicksand text-slate-800 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-slate-400 font-light mb-12">
            {post.excerpt || post.description}
          </p>

          {/* Hero image */}
          {post.image && (
            <div className="rounded-3xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-quicksand prose-headings:text-slate-800 prose-a:text-disney prose-strong:text-slate-700">
            {content}
          </div>

          {/* Schedule Strategic Call CTA */}
          <div className="mt-16 p-8 bg-slate-50 rounded-3xl text-center border border-slate-200">
            <h3 className="text-xl font-bold font-quicksand text-slate-800 mb-3">
              {t('insights.ctaTitle')}
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              {t('insights.ctaDesc')}
            </p>
            <a
              href="https://calendly.com/GLOBALDREAMT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-disney text-white px-8 py-3 rounded-2xl font-bold text-sm hover:scale-105 transition-transform uppercase tracking-wider"
            >
              {t('insights.ctaBtn')}
            </a>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
