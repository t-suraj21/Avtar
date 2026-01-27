import { services } from "../data/services";
import { portfolio } from "../data/portfolio";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const navLinkClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive 
        ? "bg-primary/10 text-primary shadow-lg" 
        : "text-[#64748B] hover:text-primary hover:bg-primary/5"
    }`;

  // Trusted brands/partners
  const partners = [
    { name: "Microsoft", logo: "https://img.icons8.com/color/96/microsoft.png" },
    { name: "Google", logo: "https://img.icons8.com/color/96/google-logo.png" },
    { name: "Amazon", logo: "https://img.icons8.com/color/96/amazon.png" },
    { name: "Meta", logo: "https://img.icons8.com/color/96/meta.png" },
    { name: "Apple", logo: "https://img.icons8.com/color/96/apple-logo.png" },
    { name: "Netflix", logo: "https://img.icons8.com/color/96/netflix.png" },
  ];

  // Stats data
  const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "15+", label: "Team Experts" },
    { value: "3+", label: "Years Experience" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-emerald-50 relative overflow-hidden">
      {/* Animated Background - Mobile & Desktop */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Reduced particles for better performance */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            }}
            animate={{
              y: [null, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}

        {/* Gradient Orbs - Optimized */}
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.3, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Navbar */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-4 md:px-8 pt-3 sm:pt-4 md:pt-6"
      >
        <nav className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full shadow-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-poppins font-bold text-[#2C2C2C]">Avtar</span>
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
              <Link to="/contact" className="px-6 py-2.5 bg-linear-to-r from-primary to-secondary rounded-full font-semibold text-[#FFFFFF] shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm">
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
            className="lg:hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl mt-2 shadow-xl max-w-7xl mx-auto"
          >
            <div className="px-3 py-3 flex flex-col gap-1.5">
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/blog" className={navLinkClass}>Blog</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>
              <Link onClick={() => setMobileMenuOpen(false)} to="/contact" className="mt-2 px-6 py-3 bg-linear-to-r from-primary to-secondary rounded-full font-semibold text-[#FFFFFF] text-center">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container-custom max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium">
              🎯 Digital Solutions
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-[#2C2C2C]">Transform Your Vision Into</span>
            <br />
            <span className="text-primary">Actionable Solutions</span>
          </motion.h1>

          <motion.p 
            className="text-[#64748B] text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Unlock the full potential of your business with our suite of development, design, and content creation services
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link 
              to="/services" 
              className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-full font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-center w-full sm:w-auto"
            >
              Discover Services
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border-2 border-primary/30 hover:border-primary rounded-full font-bold text-primary hover:bg-primary/5 transition-all text-center w-full sm:w-auto"
            >
              Talk to Sales
            </Link>
          </motion.div>

          {/* Curved Line Effect */}
          <motion.div
            className="mt-16 sm:mt-20 md:mt-24"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
          >
            <svg 
              viewBox="0 0 800 100" 
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,50 Q200,20 400,50 T800,50"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#6366F1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Avtar Name Scroller Section */}
      <section className="py-12 sm:py-16 px-4 border-y border-white/5 bg-white/2 overflow-hidden">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          </motion.div>
          
          {/* Infinite Scrolling Avtar Name */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-8 sm:gap-12 md:gap-16 items-center"
                animate={{
                  x: [0, -800],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }}
              >
                {/* Repeat Avtar name multiple times for seamless scrolling */}
                {[...Array(12)].map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 text-[#E5E7EB] hover:text-primary/20 transition-all duration-300 cursor-default"
                  >
                    <span className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold whitespace-nowrap">
                      Avtar
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Fade effect on edges */}
            <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-purple-50 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-purple-50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Business Application Style */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              Take Full Control of Your Project
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4">
              <span className="text-[#2C2C2C]">Business </span>
              <span className="text-primary">Application</span>
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Our clients love how Avtar simplifies their processes and streamlines operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Link to={`/services/${service.id}`}>
                  <div className="bg-white/70 backdrop-blur-xl border border-primary/15 rounded-2xl p-6 sm:p-8 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <div className="w-6 h-6 border-2 border-primary rounded"></div>
                    </div>
                    <h3 className="text-[#2C2C2C] font-bold text-xl mb-3">{service.title}</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/services" 
              className="inline-block px-8 py-4 border-2 border-primary/30 hover:border-primary rounded-full font-semibold text-primary hover:bg-primary/5 transition-all"
            >
              View All Services →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats/Impact Section - Hidden on Mobile */}
      <section className="hidden md:block py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white/2">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                Data Insights
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-6">
                <span className="text-[#E8E8E8]">Improved </span>
                <span className="text-primary">decision-making</span>
              </h2>
              <p className="text-[#94A3B8] mb-8 leading-relaxed">
                By leveraging real-time insights and comprehensive data analysis, you can make informed decisions with confidence, reducing uncertainty.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[#E8E8E8] font-semibold mb-2">Comprehensive Data Visualization</h4>
                  <p className="text-[#7A8A99] text-sm">
                    Our advanced visualization tools turn complex datasets into easy-to-understand charts, graphs, and dashboards.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#E8E8E8] font-semibold mb-2">Predictive Modeling</h4>
                  <p className="text-[#7A8A99] text-sm">
                    Leverage cutting-edge predictive analytics to forecast future trends and outcomes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Chart Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/2 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[#E8E8E8] font-semibold">Improved decision-making</h3>
                  <div className="text-[#94A3B8] text-sm">Last 6 months</div>
                </div>

                {/* Bar Chart Simulation */}
                <div className="flex items-end justify-between gap-3 h-64">
                  {[65, 45, 85, 40, 70, 50].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 relative group"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                    >
                      <div className="w-full h-full bg-linear-to-t from-primary to-primary/40 rounded-t-lg group-hover:from-primary group-hover:to-primary/60 transition-all cursor-pointer"></div>
                      <div className="absolute -bottom-6 left-0 right-0 text-center text-[#94A3B8] text-xs">
                        M{i + 1}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-sm"></div>
                    <span className="text-[#94A3B8]">Success Rate</span>
                  </div>
                  <motion.div 
                    className="text-primary font-bold text-2xl"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, type: "spring" }}
                  >
                    85%
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4">
              <span className="text-[#2C2C2C]">Recent </span>
              <span className="text-primary">Projects</span>
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Explore our latest work and see how we've helped businesses transform their digital presence
            </p>
          </motion.div>

          {/* Mobile: Show 2 projects horizontally, Desktop: Show all 6 */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {portfolio.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group ${index >= 2 ? 'hidden md:block' : ''}`}
              >
                <Link to="/portfolio">
                  <div className="bg-white/70 backdrop-blur-xl border border-primary/15 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl transition-all duration-300 h-full">
                    {project.image ? (
                      <div className="aspect-video overflow-hidden relative group">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 p-4 md:p-6 flex items-center justify-center">
                        <motion.div
                          className="text-3xl md:text-4xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {project.type === "web" ? "🌐" : project.type === "app" ? "📱" : "🎬"}
                        </motion.div>
                      </div>
                    )}
                    <div className="p-4 md:p-6">
                      <h3 className="text-[#2C2C2C] font-bold text-base md:text-lg mb-2">{project.title}</h3>
                      <p className="text-[#64748B] text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary text-xs md:text-sm font-medium uppercase tracking-wide">{project.type}</span>
                        <span className="text-secondary text-xs md:text-sm group-hover:translate-x-1 transition-transform">View →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8 md:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/portfolio" 
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-sm md:text-base w-full sm:w-auto"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-secondary/10"></div>
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-6 text-[#2C2C2C]">
              Ready to Transform Your Business?
            </h2>
            <p className="text-[#64748B] text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who transformed their digital presence with Avtar. Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-full font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Start Your Project
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-primary/30 hover:border-primary rounded-full font-bold text-primary hover:bg-primary/5 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
