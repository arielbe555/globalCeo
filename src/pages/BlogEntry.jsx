import { useParams } from 'react-router-dom';
import BlogPost from '../components/blog/BlogPost';
import blogPosts from '../data/blogPosts';
import { blogContent } from '../data/blogContent';

const BlogEntry = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const content = post ? blogContent[slug] : null;

  return <BlogPost post={post} content={content} />;
};

export default BlogEntry;
