// src/pages/BlogPost.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Twitter, Linkedin, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Posts } from '../data/Posts';

export const BlogPost = () => {
 const { id } = useParams();
 const navigate = useNavigate();
 const currentPost = Posts.find(post => post.id === parseInt(id));
 
 if (!currentPost) return <NotFound navigate={navigate} />;

 const currentIndex = Posts.findIndex(post => post.id === parseInt(id));
 const previousPost = currentIndex > 0 ? Posts[currentIndex - 1] : null;
 const nextPost = currentIndex < Posts.length - 1 ? Posts[currentIndex + 1] : null;

 return (
   <main className="pt-20 px-4 bg-white dark:bg-gradient-to-b dark:from-black dark:to-blue-950 text-white">
     <article className="max-w-4xl mx-auto py-12">
       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
         <button 
           onClick={() => navigate('/blog')}
           className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2"
         >
           <ArrowLeft className="w-4 h-4" />
           Volver al blog
         </button>

         <div className="space-y-6">
           <div className="flex flex-wrap gap-4 text-sm">
             <Metadata date={currentPost.date} author={currentPost.author} readTime={currentPost.readTime} />
           </div>

           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
             {currentPost.title}
           </h1>

           <div className="flex flex-wrap gap-2">
             {currentPost.tags.map(tag => (
               <span key={tag} className="bg-gray-100 dark:bg-blue-900/30 text-gray-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
                 {tag}
               </span>
             ))}
           </div>
         </div>

         <div className="relative h-[400px] rounded-xl overflow-hidden">
           <img 
             src={`/api/placeholder/1200/400`}
             alt={currentPost.title}
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
         </div>

         <div className="prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:text-gray-800 dark:prose-pre:text-gray-200 max-w-none">
           <ReactMarkdown
             components={{
               code({node, inline, className, children, ...props}) {
                 const match = /language-(\w+)/.exec(className || '')
                 return !inline && match ? (
                   <SyntaxHighlighter
                     style={atomDark}
                     language={match[1]}
                     className="!bg-gray-100 dark:!bg-gray-800 !text-gray-800 dark:!text-gray-200"
                     {...props}
                   >
                     {String(children).replace(/\n$/, '')}
                   </SyntaxHighlighter>
                 ) : (
                   <code className={className} {...props}>
                     {children}
                   </code>
                 )
               }
             }}
           >
             {currentPost.content}
           </ReactMarkdown>
         </div>

         <AuthorBio author={currentPost.author} />
         <ShareSection title={currentPost.title} />

         <nav className="border-t border-gray-200 dark:border-blue-900/50 pt-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
           {previousPost && <PostNavigationLink direction="previous" post={previousPost} />}
           {nextPost && <PostNavigationLink direction="next" post={nextPost} />}
         </nav>
       </motion.div>
     </article>
   </main>
 );
};

const NotFound = ({ navigate }) => (
 <div className="pt-20 px-4">
   <div className="max-w-4xl mx-auto py-12 text-center">
     <h1 className="text-3xl text-gray-900 dark:text-white mb-4">Artículo no encontrado</h1>
     <button onClick={() => navigate('/blog')} className="text-blue-600 dark:text-blue-400 flex items-center gap-2 mx-auto">
       <ArrowLeft className="w-4 h-4" />
       Volver al blog
     </button>
   </div>
 </div>
);

const Metadata = ({ date, author, readTime }) => (
 <>
   <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
     <Clock className="w-4 h-4" />
     {date}
   </span>
   <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
     <User className="w-4 h-4" />
     {author}
   </span>
   <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
     <Clock className="w-4 h-4" />
     {readTime} lectura
   </span>
 </>
);

const AuthorBio = ({ author }) => (
 <div className="border-t border-gray-200 dark:border-blue-900/50 pt-6">
   <div className="flex items-center gap-4">
     <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-blue-900/50 flex items-center justify-center">
       <User className="w-8 h-8 text-gray-600 dark:text-blue-400" />
     </div>
     <div>
       <h3 className="text-gray-900 dark:text-white font-semibold">{author}</h3>
       <p className="text-gray-700 dark:text-gray-300">
         Desarrollador y especialista en ciberseguridad con experiencia en seguridad web y pentesting.
       </p>
     </div>
   </div>
 </div>
);

const ShareSection = ({ title }) => {
 const shareUrl = window.location.href;
 
 const shareLinks = [
   {
     name: 'Twitter',
     icon: <Twitter className="w-5 h-5" />,
     onClick: () => window.open(`https://twitter.com/intent/tweet?text=${title}&url=${shareUrl}`)
   },
   {
     name: 'LinkedIn',
     icon: <Linkedin className="w-5 h-5" />,
     onClick: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`)
   },
   {
     name: 'Copiar enlace',
     icon: <Share2 className="w-5 h-5" />,
     onClick: () => {
       navigator.clipboard.writeText(shareUrl);
       alert('Enlace copiado al portapapeles');
     }
   }
 ];

 return (
   <div className="border-t border-gray-200 dark:border-blue-900/50 pt-6">
     <div className="flex items-center justify-between flex-wrap gap-4">
       <h3 className="text-gray-900 dark:text-white font-semibold">Compartir artículo</h3>
       <div className="flex gap-4">
         {shareLinks.map(link => (
           <button
             key={link.name}
             onClick={link.onClick}
             className="flex items-center gap-2 bg-gray-100 dark:bg-blue-900/20 text-gray-700 dark:text-blue-400 px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-blue-900/40 transition-colors"
           >
             {link.icon}
             {link.name}
           </button>
         ))}
       </div>
     </div>
   </div>
 );
};

const PostNavigationLink = ({ direction, post }) => {
 const isNext = direction === 'next';
 
 return (
   <Link
     to={`/blog/${post.id}`}
     className={`group flex ${isNext ? 'justify-end text-right' : ''}`}
   >
     <div className="flex flex-col space-y-2">
       <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
         {!isNext && <ChevronLeft className="w-4 h-4" />}
         {isNext ? 'Siguiente artículo' : 'Artículo anterior'}
         {isNext && <ChevronRight className="w-4 h-4" />}
       </span>
       <span className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
         {post.title}
       </span>
     </div>
   </Link>
 );
};

export default BlogPost;