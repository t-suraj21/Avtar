import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../data/blog";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Reading Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001
  });

  // Show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!post) {
    return (
      <main className="container-custom py-10 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-8xl mb-6">😕</div>
          <h1 className="text-3xl font-poppins font-semibold mb-4">Post Not Found</h1>
          <p className="text-white/60 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              ← Back to Blog
            </motion.button>
          </Link>
        </motion.div>
      </main>
    );
  }

  // Get related posts
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category ||
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);

  const getCategoryIcon = (category) => {
    const icons = {
      Development: "💻",
      Marketing: "📈",
      Design: "🎨",
      Video: "🎥",
      Mobile: "📱",
      Tutorial: "📚"
    };
    return icons[category] || "📝";
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <main className="container-custom py-10 pt-32 md:pt-36 relative">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/blog">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8 group"
              >
                <motion.span
                  animate={{ x: 0 }}
                  className="group-hover:animate-bounce-x"
                >
                  ←
                </motion.span>
                Back to Blog
              </motion.button>
            </Link>
          </motion.div>

          {/* Header Section */}
          <div className="mb-10">
            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 text-sm text-white/60 mb-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full font-medium text-primary flex items-center gap-2"
              >
                <span>{getCategoryIcon(post.category)}</span>
                {post.category}
              </motion.div>
              <span className="flex items-center gap-1">
                <span>📅</span>
                {post.publishedAt.toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span>✍️</span>
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span>⏱</span>
                {post.readTime || "5 min read"}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent"
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-white/70 leading-relaxed mb-6"
            >
              {post.excerpt}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {post.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:bg-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                >
                  #{tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="relative mb-12 rounded-2xl overflow-hidden"
          >
            <div className="h-96 bg-gradient-to-br from-primary/30 via-secondary/30 to-primary/20 flex items-center justify-center relative group">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-9xl"
              >
                {getCategoryIcon(post.category)}
              </motion.div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Particles */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    animate={{
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="card-glass p-8 md:p-12 mb-12"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-white/90 leading-relaxed">
                {post.content}
              </div>
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">💫</span>
              <div>
                <h3 className="font-semibold">Found this helpful?</h3>
                <p className="text-sm text-white/60">Share it with your network</p>
              </div>
            </div>
            <div className="flex gap-3">
              {['Twitter', 'LinkedIn', 'Facebook'].map((platform, index) => (
                <motion.button
                  key={platform}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 flex items-center justify-center"
                >
                  {platform[0]}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-glass p-8 md:p-10 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 mb-12 text-center"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-5xl mb-4"
            >
              🚀
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-3">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Whether you need web development, video production, or digital solutions, 
              our team is ready to help you succeed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-8 py-3"
                >
                  View Our Services
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary px-8 py-3"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-poppins font-bold mb-8 flex items-center gap-3">
                <span>📚</span>
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Link to={`/blog/${relatedPost.slug}`} className="block h-full">
                      <div className="card-glass p-5 h-full hover:border-primary/30 transition-all duration-300">
                        <div className="text-4xl mb-3">{getCategoryIcon(relatedPost.category)}</div>
                        <div className="text-xs text-primary mb-2">{relatedPost.category}</div>
                        <h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-white/60 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.article>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 text-white text-2xl z-40 hover:shadow-2xl hover:shadow-primary/50 transition-shadow"
            >
              ↑
            </motion.button>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
