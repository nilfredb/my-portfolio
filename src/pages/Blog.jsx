// src/pages/Blog.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Tag, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Posts } from '../data/Posts';

export const Blog = () => {
 const [searchTerm, setSearchTerm] = useState('');
 const [selectedTag, setSelectedTag] = useState('');

 const allTags = [...new Set(Posts.flatMap(post => post.tags))];
 
 const filteredPosts = Posts.filter(post => {
   const matchesSearch = 
     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
   const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
   return matchesSearch && matchesTag;
 });

 return (
   <main className="pt-20 px-4">
     <section className="max-w-7xl mx-auto py-12">
       {/* Header */}
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className="text-center mb-12"
       >
         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
           Blog
         </h1>
         <p className="text-gray-700 dark:text-gray-300 text-xl max-w-3xl mx-auto">
           Artículos sobre desarrollo, ciberseguridad y tecnología
         </p>
       </motion.div>

       {/* Search and Filters */}
       <div className="mb-12 space-y-6">
         <div className="relative">
           <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
           <input
             type="text"
             placeholder="Buscar artículos..."
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="w-full bg-gray-50 dark:bg-blue-900/20 border border-gray-200 dark:border-blue-900 rounded-lg pl-12 pr-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>

         <div className="flex flex-wrap gap-2">
           <Tag className="w-5 h-5 text-gray-400" />
           {allTags.map(tag => (
             <button
               key={tag}
               onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
               className={`px-3 py-1 rounded-full text-sm transition-colors ${
                 selectedTag === tag
                   ? 'bg-blue-500 text-white'
                   : 'bg-gray-100 dark:bg-blue-900/20 text-gray-700 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-blue-900/40'
               }`}
             >
               {tag}
             </button>
           ))}
         </div>
       </div>

       {/* Blog Posts */}
       <div className="space-y-8">
         {filteredPosts.length === 0 ? (
           <div className="text-center text-gray-600 dark:text-gray-400 py-12">
             No se encontraron artículos con los criterios de búsqueda.
           </div>
         ) : (
           filteredPosts.map((post) => (
             <BlogPostCard key={post.id} post={post} />
           ))
         )}
       </div>
     </section>
   </main>
 );
};

const BlogPostCard = ({ post }) => (
 <motion.article
   initial={{ opacity: 0, y: 20 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true }}
   className="bg-white dark:bg-blue-900/20 border border-gray-200 dark:border-blue-900/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
 >
   <div className="flex flex-wrap gap-4 mb-4 text-sm">
     <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
       <Clock className="w-4 h-4" />
       {post.date}
     </span>
     <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
       <User className="w-4 h-4" />
       {post.author}
     </span>
     <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
       <Clock className="w-4 h-4" />
       {post.readTime} lectura
     </span>
   </div>

   <Link to={`/blog/${post.id}`}>
     <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
       {post.title}
     </h2>
   </Link>

   <p className="text-gray-700 dark:text-gray-300 mb-4">
     {post.excerpt}
   </p>

   <div className="flex flex-wrap gap-2 mb-6">
     {post.tags.map(tag => (
       <span
         key={tag}
         className="bg-gray-100 dark:bg-blue-900/30 text-gray-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm"
       >
         {tag}
       </span>
     ))}
   </div>

   <Link 
     to={`/blog/${post.id}`}
     className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
   >
     Leer más
     <ArrowRight className="w-4 h-4" />
   </Link>
 </motion.article>
);

export default Blog;