// src/pages/BlogPostWrapper.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Twitter, Linkedin, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BlogPost } from './BlogPost';
import { Posts } from '../data/Posts';

export const BlogPostWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = Posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="pt-20 px-4">
        <div className="max-w-4xl mx-auto py-12 text-center">
          <h1 className="text-3xl text-white mb-4">Artículo no encontrado</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="text-blue-500 hover:text-blue-400 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BlogPost post={post} />
    </motion.div>
  );
};

export default BlogPostWrapper;