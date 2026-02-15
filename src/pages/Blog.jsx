import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import insightsPosts, { VERTICALS } from '../data/insightsPosts';

const verticalColors = {
  disney: 'bg-disney/10 text-disney',
  universal: 'bg-purple-50 text-purple-600',
  cruise: 'bg-cyan-50 text-cyan-600',
  logistics: 'bg-orange-50 text-orange-600',
};

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [vertical, setVertical] = useState('all');
  const [q, setQ] = useState('');
  const locale = i18n.language === 'pt' ? 'pt-BR' : i18n.language === 'en' ? 'en-US' : 'es-AR';

  const items = useMemo(() => {
    const query = q.trim().toLowerCase();
    return insightsPosts.filter((x) => {
      const matchVertical = vertical === 'all' || x.vertical === vertical;
      const haystack = `${x.title} ${x.excerpt} ${(x.tags || []).join(' ')} ${x.pillar}`.toLowerCase();
      const matchQuery = query ? haystack.includes(query) : true;
      return matchVertical && matchQuery;
    });
  }, [vertical, q]);

  const getVerticalLabel = (v) => {
    const found = VERTICALS.find((x) => x.key === v.key);
    if (!found) return v.label;
    if (i18n.language === 'pt') return found.labelPt;
    if (i18n.language === 'es') return found.labelEs;
    return found.label;
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-[10px] font-bold text-disney uppercase tracking-[0.3em] mb-4">
            {t('insights.sectionLabel')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-quicksand text-slate-800 mb-4">
            {t('insights.title')}
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-3xl">
            {t('insights.description')}
          </p>
        </motion.div>

        {/* Search + Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-10"
        >
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 w-full lg:w-[400px] bg-slate-50">
            <Search size={18} className="text-slate-400 shrink-0" />
            <input
              className="w-full outline-none text-slate-700 placeholder:text-slate-400 bg-transparent text-sm"
              placeholder={t('insights.searchPlaceholder')}
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter size={16} className="text-slate-400 shrink-0" />
            <div className="flex flex-wrap gap-2">
              {VERTICALS.map((v) => (
                <button
                  key={v.key}
                  onClick={() => setVertical(v.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                    vertical === v.key
                      ? 'border-disney bg-disney/5 text-disney'
                      : 'border-slate-200 text-slate-500 hover:border-slate-400'
                  }`}
                >
                  {getVerticalLabel(v)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        <div className="text-xs text-slate-400 uppercase tracking-wider mb-6">
          {items.length} {items.length === 1 ? 'insight' : 'insights'}
          {vertical !== 'all' && ` — ${VERTICALS.find((v) => v.key === vertical)?.label}`}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <Link
                to={`/insights/${post.vertical}/${post.slug}`}
                className="group block bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-disney/20 transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden bg-slate-100">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-disney/5 via-slate-50 to-disney/10 flex items-center justify-center">
                      <span className="text-5xl font-bold font-quicksand text-disney/20">{i + 1}</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Vertical + Pillar badges */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest ${verticalColors[post.vertical] || 'bg-slate-50 text-slate-500'}`}>
                      {post.vertical}
                    </span>
                    <span className="text-[9px] text-slate-400 uppercase tracking-wider font-medium">
                      {post.pillar}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-800 font-quicksand mb-2 group-hover:text-disney transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(post.tags || []).slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[9px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-medium">
                      <Clock size={11} />
                      {post.readTime}
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-disney opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">{t('insights.noResults')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
