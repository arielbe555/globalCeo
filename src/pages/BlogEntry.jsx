import { useParams } from 'react-router-dom';
import BlogPost from '../components/blog/BlogPost';
import insightsPosts from '../data/insightsPosts';
import { insightsContent } from '../data/insightsContent';

const BlogEntry = () => {
  const { slug } = useParams();
  const post = insightsPosts.find((p) => p.slug === slug);
  const content = post ? insightsContent[slug] : null;

  return <BlogPost post={post} content={content} />;
};

export default BlogEntry;
