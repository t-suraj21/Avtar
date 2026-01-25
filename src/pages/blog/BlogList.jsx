import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blog";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Get unique categories
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "linear"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    }
  };

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
    <main className="container-custom py-6 sm:py-8 md:py-10 pt-24 sm:pt-28 md:pt-32 lg:pt-36 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "linear" }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="inline-block mb-4"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-primary/30">
            📰
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent px-4"
        >
          Our Blog
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg text-white/70 max-w-2xl mx-auto"
        >
          Insights, tutorials, and industry updates on web development, video production, and digital innovation
        </motion.p>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-10 space-y-6"
      >
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="🔍 Search articles, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-xl"
            />
            {searchQuery && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              >
                ✕
              </motion.button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category !== "All" && <span className="mr-2">{getCategoryIcon(category)}</span>}
              {category}
            </motion.button>
          ))}
        </div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white/50 text-sm"
        >
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
        </motion.div>
      </motion.div>

      {/* Blog Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory + searchQuery}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(post.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="card-glass overflow-hidden h-full flex flex-col relative">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 opacity-0 group-hover:from-primary/10 group-hover:to-secondary/10 group-hover:opacity-100 transition-all duration-500"
                    animate={hoveredCard === post.id ? { scale: 1.1 } : { scale: 1 }}
                  />

                  {/* Image Section */}
                  <div className="relative h-56 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 flex items-center justify-center overflow-hidden">
                    <motion.div
                      animate={hoveredCard === post.id ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-7xl"
                    >
                      {getCategoryIcon(post.category)}
                    </motion.div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/20"
                      >
                        {post.category}
                      </motion.div>
                    </div>

                    {/* Reading Time Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white/80">
                        ⏱ {post.readTime || "5 min read"}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    {/* Meta Info */}
                    <div className="flex items-center gap-2 text-xs text-white/50 mb-3">
                      <span>📅 {post.publishedAt.toLocaleDateString()}</span>
                      <span>•</span>
                      <span>✍️ {post.author}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-poppins font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-white/70 text-sm mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * tagIndex }}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300"
                        >
                          #{tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <motion.div
                      className="flex items-center gap-2 text-primary font-medium text-sm"
                      animate={hoveredCard === post.id ? { x: 5 } : { x: 0 }}
                    >
                      Read More
                      <motion.span
                        animate={hoveredCard === post.id ? { x: 5 } : { x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-primary to-secondary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredCard === post.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Results Message */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
          <p className="text-white/60 mb-6">Try adjusting your search or filter criteria</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="btn-primary"
          >
            Reset Filters
          </motion.button>
        </motion.div>
      )}

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 card-glass p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-5xl mb-4"
        >
          📬
        </motion.div>
        <h3 className="text-3xl font-poppins font-bold mb-3">Stay Updated</h3>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Get the latest articles, tutorials, and industry insights delivered to your inbox every week
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-3"
          >
            Subscribe Now
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}
