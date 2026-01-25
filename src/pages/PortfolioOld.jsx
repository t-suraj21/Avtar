import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "../data/portfolio";

const filters = [
  { key: "all", label: "All Projects", icon: "✨" },
  { key: "web", label: "Web", icon: "🌐" },
  { key: "app", label: "App", icon: "📱" },
  { key: "video", label: "Video", icon: "🎬" },
  { key: "content", label: "Content", icon: "✍️" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3 },
  },
};

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const items = portfolio.filter(p => filter === "all" ? true : p.type === filter);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-[700px] h-[700px] bg-secondary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Animated Lines Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>

      <div className="container-custom py-6 sm:py-12 md:py-16 lg:py-20 pt-24 sm:pt-28 md:pt-32 lg:pt-36 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <motion.div
              className="px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-xl border border-white/20 rounded-full inline-flex items-center gap-3"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)" }}
            >
              <motion.span
                animate={{ 
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
              >
                🎨
              </motion.span>
              <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-8xl font-poppins font-black mb-6 leading-tight"
          >
            Our Creative{" "}
            <motion.span className="relative inline-block">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Masterpieces
              </motion.span>
              {/* Animated Underline */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
          >
            Selected works across web, apps, video and content. Each project tells a unique story of innovation and excellence.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((f, index) => (
            <motion.button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`group relative px-6 py-3 rounded-full font-semibold transition-all ${
                filter === f.key
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active Background */}
              {filter === f.key && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Hover Background */}
              {filter !== f.key && (
                <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">{f.icon}</span>
                {f.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                custom={index}
                className="group relative"
                style={{ perspective: "1000px" }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <motion.div
                  className="relative h-full min-h-[400px] bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10"
                  whileHover={{
                    y: -15,
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.02,
                    boxShadow: "0 30px 60px rgba(99, 102, 241, 0.5)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  {/* Gradient Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/20 to-secondary/0 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                    initial={{ x: "-200%" }}
                    animate={hoveredItem === item.id ? { x: "200%" } : {}}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  {/* Image Placeholder with Gradient */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/30 to-secondary/30"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    />
                    
                    {/* Floating Type Badge */}
                    <motion.div
                      className="absolute top-4 right-4 px-4 py-2 bg-black/50 backdrop-blur-xl rounded-full text-sm font-semibold border border-white/20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {filters.find(f => f.key === item.type)?.icon} {item.type.toUpperCase()}
                    </motion.div>

                    {/* Center Icon */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20">
                        <span className="text-4xl">{filters.find(f => f.key === item.type)?.icon}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    <motion.h3
                      className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                    >
                      {item.title}
                    </motion.h3>

                    {/* Animated Divider */}
                    <motion.div
                      className="relative h-1 mb-4 overflow-hidden rounded-full bg-white/10"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                        initial={{ x: "-100%" }}
                        animate={hoveredItem === item.id ? { x: "0%" } : {}}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>

                    <p className="text-white/70 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* View Project Button */}
                    <motion.button
                      className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Project
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>
                  </div>

                  {/* Corner Glow */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={hoveredItem === item.id ? { scale: 1.5, opacity: 1 } : {}}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Bottom Glow */}
                  <motion.div
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-t from-primary/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  {/* Particle Effect */}
                  <motion.div
                    className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full"
                    animate={{
                      x: [0, 60, 0],
                      y: [0, 40, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {items.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🔍
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-white/60">Try selecting a different filter</p>
          </motion.div>
        )}

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Have a Project in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Mind?
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-white/70 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Let's bring your vision to life! Our team is ready to create something extraordinary with you.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.a
                  href="/contact"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-lg shadow-2xl shadow-primary/50"
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(99, 102, 241, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project →
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
