import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BlogList from '../components/blog/BlogList';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-[10px] font-bold text-disney uppercase tracking-[0.3em] mb-4">
            {t('blog.sectionLabel')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-quicksand text-slate-800 mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">
            {t('blog.description')}
          </p>
        </motion.div>

        <BlogList />
      </div>
    </div>
  );
};

export default Blog;
