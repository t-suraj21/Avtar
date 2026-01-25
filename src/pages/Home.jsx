import { services } from "../data/services";
import { portfolio } from "../data/portfolio";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { label: "Projects Delivered", value: "100+", icon: "🚀" },
    { label: "Happy Clients", value: "50+", icon: "😊" },
    { label: "Team Experts", value: "15+", icon: "👥" },
    { label: "Years Experience", value: "3+", icon: "⭐" },
  ];

  const techPartners = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "AWS", icon: "☁️" },
    { name: "Adobe", icon: "🎨" },
    { name: "Figma", icon: "🎯" },
  ];

  const topClients = [
    { name: "TechCorp Inc", value: "25 Projects", avatar: "🏢" },
    { name: "StartupHub", value: "18 Projects", avatar: "🚀" },
    { name: "Digital Co", value: "15 Projects", avatar: "💼" },
    { name: "Creative Labs", value: "12 Projects", avatar: "🎨" },
    { name: "Innovation Inc", value: "10 Projects", avatar: "💡" },
    { name: "Tech Solutions", value: "8 Projects", avatar: "🔧" },
  ];

  const navLinkClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive 
        ? "bg-white/20 text-white shadow-lg" 
        : "text-white/70 hover:text-white hover:bg-white/10"
    }`;

  return (
    <main className="min-h-screen bg-linear-to-b from-[#0a0a0f] via-[#13111f] to-[#0a0a0f]">
      {/* Navbar */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-4 md:px-8 pt-3 sm:pt-4 md:pt-6"
      >
        <nav className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-poppins font-bold text-white">Avtar</span>
            </NavLink>

            <div className="hidden lg:flex items-center gap-2">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
              <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link to="/contact" className="px-6 py-2.5 bg-linear-to-r from-primary to-secondary rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm">
                Get Started
              </Link>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl mt-2 shadow-xl max-w-7xl mx-auto"
          >
            <div className="px-3 py-3 flex flex-col gap-1.5">
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/blog" className={navLinkClass}>Blog</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>
              <Link onClick={() => setMobileMenuOpen(false)} to="/contact" className="mt-2 px-6 py-3 bg-linear-to-r from-primary to-secondary rounded-full font-semibold text-white text-center">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container-custom max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-white">Discover, Create</span>
                <br />
                <span className="text-white">and Launch</span>
                <br />
                <span className="bg-linear-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </motion.h1>

              <motion.p 
                className="text-white/70 text-lg sm:text-xl mb-8 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                The world's leading digital agency for innovative solutions. We transform your vision into stunning reality through cutting-edge development, design, and content creation.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/services" className="px-8 py-4 bg-linear-to-r from-primary to-secondary rounded-full font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-center">
                  Discover Services
                </Link>
                <Link to="/portfolio" className="px-8 py-4 border-2 border-white/30 rounded-full font-bold text-white hover:bg-white/10 transition-all text-center backdrop-blur-xl">
                  View Portfolio
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group"
                  >
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-linear-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="relative z-10">
                        <motion.div 
                          className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs sm:text-sm text-white/70 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Active Clients Showcase */}
              <motion.div 
                className="mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <motion.div 
                      className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent mb-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1, type: "spring" }}
                    >
                      500+
                    </motion.div>
                    <div className="text-white/70 text-sm font-medium">Active Clients Worldwide</div>
                  </div>
                  <div className="flex -space-x-2">
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div 
                        key={i}
                        className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary border-2 border-gray-900"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                      />
                    ))}
                  </div>
                </div>
                <motion.div 
                  className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <motion.div
                    className="h-full bg-linear-to-r from-primary to-secondary"
                    initial={{ width: "0%" }}
                    animate={{ width: "87%" }}
                    transition={{ delay: 1.4, duration: 1 }}
                  />
                </motion.div>
                <div className="mt-2 text-xs text-white/50">87% satisfaction rate</div>
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Project Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-3/4 bg-linear-to-br from-primary/20 via-purple-500/20 to-secondary/20 backdrop-blur-xl p-6 flex flex-col justify-between relative">
                  {/* Background Image with Parallax Effect */}
                  <motion.div 
                    className="absolute inset-0 opacity-30"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Featured Project" className="w-full h-full object-cover" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white/70 border border-white/20 mb-4">
                        Featured Work
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="w-full h-48 bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Dashboard" className="w-full h-full object-cover" />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="space-y-4 relative z-10"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div>
                      <div className="text-white font-bold text-2xl mb-2">E-Commerce Platform</div>
                      <div className="text-white/70 text-sm">Full-stack solution with modern architecture</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'MongoDB'].map((tech, i) => (
                        <motion.div 
                          key={tech}
                          className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white border border-white/20"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                    
                    <Link to="/portfolio">
                      <motion.button 
                        className="w-full py-3 bg-linear-to-r from-primary to-secondary rounded-full text-center text-white font-semibold shadow-lg overflow-hidden relative"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className="relative z-10">View Project →</span>
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Accent Cards - No Icons */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-linear-to-br from-primary to-secondary rounded-2xl shadow-xl backdrop-blur-xl border border-white/20"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className="w-12 h-12 border-4 border-white/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-linear-to-br from-secondary to-primary rounded-2xl shadow-xl backdrop-blur-xl border border-white/20"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className="grid grid-cols-2 gap-1 p-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="w-2 h-2 bg-white/40 rounded-sm" />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Partners */}
      <section className="py-8 sm:py-12 px-4 border-y border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 sm:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {techPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-2xl">{partner.icon}</span>
                <span className="font-medium">{partner.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Services This Week */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Popular Services </span>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">This Week</span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link to={`/services/${service.id}`}>
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden group h-80 shadow-lg"
                    initial={{ opacity: 0, rotateY: -10 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Background Image - Full opacity, no color overlay */}
                    <div className="absolute inset-0">
                      <motion.img 
                        src={[
                          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
                          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
                          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
                          "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
                          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
                        ][index]}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    
                    {/* Text Content - Hidden by default, shown on hover for desktop */}
                    <motion.div 
                      className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden lg:flex flex-col justify-center items-center p-6"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <motion.h3 
                        className="text-white font-bold text-2xl mb-3 text-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        className="text-white/90 text-base mb-4 text-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {service.desc}
                      </motion.p>
                      <motion.div 
                        className="flex flex-wrap gap-2 justify-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {service.tools?.slice(0, 3).map((tool, i) => (
                          <span key={i} className="px-4 py-2 bg-white/20 rounded-full text-sm text-white backdrop-blur-sm">
                            {tool}
                          </span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </Link>
                
                {/* Service Name Below - Mobile Only */}
                <motion.div 
                  className="lg:hidden mt-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <h3 className="text-white font-bold text-lg">{service.title}</h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Top Clients */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-xl">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Top </span>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Clients</span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {topClients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center"
              >
                <div className="text-4xl mb-3">{client.avatar}</div>
                <div className="text-white font-semibold text-sm mb-1">{client.name}</div>
                <div className="text-primary text-xs font-medium">{client.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Explore Portfolio */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Explore </span>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Our Work</span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {portfolio.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to="/portfolio">
                  <div className="relative rounded-2xl overflow-hidden">
                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-3 gap-1 mb-2">
                      {[
                        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&q=80",
                        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&q=80",
                        "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=300&q=80"
                      ].map((img, i) => (
                        <div key={i} className="aspect-square bg-linear-to-br from-primary/30 to-secondary/30 rounded-lg overflow-hidden">
                          <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover opacity-60" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Main Image */}
                    <div className="aspect-video bg-linear-to-br from-primary/40 via-purple-500/30 to-secondary/40 rounded-2xl mb-4 overflow-hidden relative">
                      <img 
                        src={[
                          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
                          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
                          "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
                          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
                          "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                        ][index]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* Info */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-bold">{project.title}</h3>
                        <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">{project.type || project.category || 'web'}</span>
                      </div>
                      <p className="text-white/60 text-sm mb-3">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-white/40 text-xs">{project.tech ? project.tech.slice(0, 2).join(", ") : project.type}</span>
                        <span className="text-primary text-sm font-semibold">View →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/portfolio" className="inline-block px-8 py-4 bg-linear-to-r from-primary to-secondary rounded-full font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-secondary/20"></div>
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-6 text-white">
              Ready to Launch Your Project?
            </h2>
            <p className="text-white/70 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who transformed their digital presence with Avtar. Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-linear-to-r from-primary to-secondary rounded-full font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                Start Your Project
              </Link>
              <Link to="/services" className="px-8 py-4 border-2 border-white/30 rounded-full font-bold text-white hover:bg-white/10 transition-all backdrop-blur-xl">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
