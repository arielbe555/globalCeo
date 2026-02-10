import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

const BlogPost = ({ post, content }) => {
  if (!post) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-white text-center">
        <h1 className="text-3xl font-bold text-disney font-quicksand mb-4">
          Artículo no encontrado
        </h1>
        <Link to="/blog" className="text-disney hover:underline">
          Volver al Blog
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
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-disney hover:text-disney-dark transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Volver al Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-disney/10 text-disney text-[10px] font-bold uppercase tracking-widest">
              <Tag size={10} />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString('es-AR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold font-quicksand text-slate-800 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-slate-400 font-light mb-12">
            {post.description}
          </p>

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-quicksand prose-headings:text-slate-800 prose-a:text-disney prose-strong:text-slate-700">
            {content}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-disney/5 rounded-3xl text-center border border-disney/10">
            <h3 className="text-xl font-bold font-quicksand text-disney mb-3">
              ¿Listo para vivir la magia?
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Contactanos y armamos tu viaje soñado con tecnología y calidez humana.
            </p>
            <a
              href="/#planificador"
              className="inline-block bg-disney text-white px-8 py-3 rounded-2xl font-bold text-sm hover:scale-105 transition-transform"
            >
              Planificar mi Viaje
            </a>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
