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
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {stats.map((stat, index) => (
                  <motion.div key={index} variants={itemVariants} className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Active Users */}
              <motion.div 
                className="mt-8 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary border-2 border-gray-900 flex items-center justify-center text-lg">
                      {['👨‍💼', '👩‍💻', '👨‍🎨', '👩‍💼'][i - 1]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-white font-semibold">500+</div>
                  <div className="text-white/60 text-sm">Active Clients</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Project */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-3/4 bg-linear-to-br from-primary/40 via-purple-500/30 to-secondary/40 backdrop-blur-xl p-8 flex flex-col justify-between relative">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Featured Project" className="w-full h-full object-cover" />
                  </div>
                  {/* Mock Project Display */}
                  <div className="space-y-4 relative z-10">
                    <div className="w-full h-48 bg-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Dashboard" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-white/20 rounded w-3/4"></div>
                      <div className="h-3 bg-white/10 rounded w-1/2"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white/60 text-sm mb-1">Featured Project</div>
                        <div className="text-white font-bold text-xl">E-Commerce Platform</div>
                      </div>
                      <div className="text-2xl">💼</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-4 py-2 bg-white/10 rounded-full text-sm text-white backdrop-blur-sm">React</div>
                      <div className="px-4 py-2 bg-white/10 rounded-full text-sm text-white backdrop-blur-sm">Node.js</div>
                    </div>
                    <Link to="/portfolio" className="block w-full py-3 bg-white/20 backdrop-blur-xl rounded-full text-center text-white font-semibold hover:bg-white/30 transition-all">
                      View Project →
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-linear-to-br from-primary to-secondary rounded-2xl shadow-xl flex items-center justify-center text-3xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🚀
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-linear-to-br from-secondary to-primary rounded-2xl shadow-xl flex items-center justify-center text-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                ✨
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
                whileHover={{ y: -10, scale: 1.02 }}
                className={index === 2 ? "sm:col-span-2 lg:col-span-1 xl:row-span-2" : ""}
              >
                <Link to={`/services/${service.id}`}>
                  <div className={`relative rounded-2xl overflow-hidden group ${
                    index === 2 ? "h-full min-h-100" : "h-80"
                  }`}>
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={[
                          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
                          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
                          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
                          "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
                          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
                        ][index]}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 bg-linear-to-br from-primary/60 via-purple-500/50 to-secondary/60"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative h-full p-6 flex flex-col justify-between backdrop-blur-sm border border-white/10">
                      <div className="flex-1 flex items-center justify-center">
                        <motion.div 
                          className="text-7xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.icon}
                        </motion.div>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
                        <p className="text-white/70 text-sm mb-4">{service.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.tools?.slice(0, 2).map((tool, i) => (
                            <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </Link>
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
