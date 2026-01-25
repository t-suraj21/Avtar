import { services } from "../data/services";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  },
};

// Water droplet component
const WaterDroplet = ({ delay }) => {
  const randomX = Math.random() * 100;
  const randomDelay = delay + Math.random() * 0.5;
  const randomDuration = 1 + Math.random() * 0.5;
  
  return (
    <motion.div
      initial={{ y: -20, x: `${randomX}vw`, opacity: 0, scale: 0 }}
      animate={{ 
        y: "100vh", 
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0.5],
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        ease: "easeIn",
      }}
      className="absolute w-2 h-2 bg-gradient-to-b from-primary/80 to-secondary/80 rounded-full blur-[1px]"
      style={{ left: 0, top: 0 }}
    />
  );
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showWater, setShowWater] = useState(true);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setShowWater(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  const companyLogos = [
    { name: "Envato", color: "#82b541" },
    { name: "Slack", color: "#e01e5a" },
    { name: "Figma", color: "#f24e1e" },
    { name: "Sketch", color: "#f7b500" },
  ];

  const stats = [
    { label: "Projects Done", value: "20+", icon: "📊" },
    { label: "Years Of Expertise", value: "2+", icon: "⭐" },
    { label: "Happy Clients", value: "10+", icon: "😊" },
    { label: "Team Members", value: "10", icon: "👥" },
  ];

  const teamMembers = [
    { name: "Alex Smith", role: "CEO & Founder", emoji: "👨‍💼", desc: "With 15 years of experience in digital innovation and brand strategy, leading the creative vision." },
    { name: "Sarah Johnson", role: "Creative Director", emoji: "🎨", desc: "Passionate about creating exceptional user experiences through innovative design solutions." },
    { name: "Mike Chen", role: "Lead Developer", emoji: "💻", desc: "Full-stack expert specializing in modern web technologies and scalable architectures." },
    { name: "Emily Davis", role: "Project Manager", emoji: "📋", desc: "Ensures seamless project delivery with 10+ years of agile project management experience." },
    { name: "John Williams", role: "UX Designer", emoji: "🎯", desc: "Crafting intuitive and engaging interfaces that users love to interact with." },
    { name: "Lisa Brown", role: "Marketing Lead", emoji: "📱", desc: "Strategic marketing professional driving growth through data-driven campaigns." },
  ];

  const testimonials = [
    {
      name: "Yasir Fasail",
      role: "Product Manager, TechCorp",
      text: "Working with Avtar has been an incredible experience. They transformed our vision into a stunning digital product that exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Sarah Mitchell",
      role: "CEO, StartupHub",
      text: "The team's attention to detail and commitment to excellence is unmatched. They delivered our project on time and within budget.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Founder, CreativeSpace",
      text: "Exceptional creativity and technical expertise. Avtar helped us establish a strong digital presence that drives real results.",
      rating: 5,
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive 
        ? "bg-white/20 text-white shadow-lg" 
        : "text-white/70 hover:text-white hover:bg-white/10"
    }`;

  return (
    <main className="overflow-hidden relative">
      {/* Navbar - Fixed overlay for fullscreen experience */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-8 pt-6"
      >
        <nav className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-2xl px-6 md:px-8 py-4 max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-poppins font-bold text-white">Avtar</span>
            </NavLink>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
              <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </div>

            {/* Right Actions - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <NavLink 
                to="/login" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                title="Login"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </NavLink>
              <NavLink 
                to="/contact" 
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm"
              >
                Get Started
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden mt-2 shadow-xl max-w-6xl mx-auto"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/blog" className={navLinkClass}>Blog</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>
              <NavLink onClick={() => setMobileMenuOpen(false)} to="/login" className={navLinkClass}>Login</NavLink>
              <NavLink 
                onClick={() => setMobileMenuOpen(false)} 
                to="/contact" 
                className="mt-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-white text-center shadow-lg"
              >
                Get Started
              </NavLink>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Water Sprinkle Animation */}
      {showWater && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <WaterDroplet key={i} delay={i * 0.05} />
          ))}
        </div>
      )}

      {/* Hero Section - Fullscreen Extraordinary Design */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-secondary/20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-[120px]"
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              {/* Floating Badge */}
              <motion.div
                variants={fadeInUp}
                className="inline-block mb-6 md:mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium relative overflow-hidden group"
                  whileHover={{ boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span className="relative z-10">✨ Transform Your Digital Presence</span>
                </motion.div>
              </motion.div>

              {/* Main Headline with 3D Effect */}
              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins font-black leading-[1.1] mb-6 md:mb-8"
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.05, rotateZ: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Create.
                </motion.span>{" "}
                <motion.span
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                >
                  Innovate.
                </motion.span>{" "}
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.05, rotateZ: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Dominate.
                </motion.span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
              >
                We craft extraordinary digital experiences that captivate audiences and drive results. 
                Your vision, our expertise, limitless possibilities.
              </motion.p>

              {/* CTA Buttons with Magnetic Effect */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 md:gap-6 justify-center px-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/services" 
                    className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-base md:text-lg overflow-hidden shadow-2xl shadow-primary/50"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      Start Your Journey
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/portfolio" 
                    className="group px-8 md:px-10 py-4 md:py-5 border-2 border-white/30 backdrop-blur-xl rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-all shadow-xl"
                  >
                    <span className="flex items-center gap-2">
                      View Our Work
                      <motion.span
                        className="inline-block"
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        ↗
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating Service Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mt-12 md:mt-20 px-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -20, 
                    rotateY: 10,
                    rotateX: 10,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ perspective: 1000 }}
                >
                  <Link to={`/services/${service.id}`}>
                    <motion.div 
                      className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 text-center border border-white/20 group overflow-hidden"
                      whileHover={{
                        boxShadow: "0 20px 60px rgba(99, 102, 241, 0.3)",
                      }}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      <motion.div
                        className="text-3xl md:text-5xl mb-3 md:mb-4 relative z-10"
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="font-bold text-xs md:text-sm leading-tight relative z-10">{service.title}</h3>
                      
                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 blur-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
            >
              <motion.div
                className="w-1.5 h-3 bg-white/60 rounded-full mx-auto"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mindblowing Services Showcase - Enhanced UI/UX */}
      <section className="container-custom py-32 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div
          className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          {/* Floating Badge with Rotation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <motion.div
              className="px-6 py-2.5 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-xl border border-white/20 rounded-full inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)" }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-lg"
              >
                ⚡
              </motion.span>
              <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                What We Offer
              </span>
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-7xl font-poppins font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Our{" "}
            <motion.span className="relative inline-block">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary inline-block"
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
                Expertise
              </motion.span>
              {/* Animated Underline */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Cutting-edge solutions tailored to elevate your business to new heights
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              custom={index}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <Link to={`/services/${service.id}`}>
                <motion.div
                  className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 overflow-hidden"
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
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  
                  {/* Floating Icon with 3D Effect */}
                  <motion.div
                    className="relative z-10 w-20 h-20 mb-6 rounded-2xl overflow-hidden"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <div className="relative flex items-center justify-center w-full h-full">
                      <motion.span 
                        className="text-5xl"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {service.icon}
                      </motion.span>
                    </div>
                  </motion.div>

                  <motion.h3 
                    className="relative z-10 text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                  >
                    {service.title}
                  </motion.h3>
                  
                  {/* Animated Progress Bar */}
                  <motion.div
                    className="relative z-10 h-1 mb-4 overflow-hidden rounded-full bg-white/10"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.8,
                        ease: "easeOut" 
                      }}
                    />
                  </motion.div>
                  
                  <p className="relative z-10 text-white/70 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  <motion.div
                    className="relative z-10 flex items-center gap-2 text-primary font-semibold"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span>Explore Service</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>

                  {/* Corner Glow Effect */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Bottom Reflection */}
                  <motion.div
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-t from-primary/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  {/* Particle Animation */}
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
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16 relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-lg shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-shadow"
            >
              <span>View All Services</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-[600px] my-32 overflow-hidden rounded-3xl">
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=90&auto=format&fit=crop"
            alt="Team Collaboration"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          {/* Lighter gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70" />
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex items-center justify-center text-center px-4"
        >
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-poppins font-black mb-6 drop-shadow-2xl"
            >
              We Don't Just Build.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                We Transform.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl lg:text-2xl text-white mb-8 drop-shadow-lg font-medium"
            >
              Turning ambitious ideas into reality with cutting-edge technology and creative excellence
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="inline-block px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-lg shadow-2xl shadow-primary/50 hover:scale-105 transition-transform hover:shadow-primary/70"
              >
                Let's Create Together →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Counter with Animation */}
      <section className="container-custom py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/10"
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-5xl font-black font-poppins mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-white/60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials with 3D Cards */}
      <section className="container-custom py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-poppins font-black mb-4">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-white/70">Real results from real partnerships</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/20 relative overflow-hidden"
              whileHover={{
                boxShadow: "0 40px 80px rgba(99, 102, 241, 0.4)",
              }}
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute top-8 right-8 text-primary/20 text-9xl font-serif"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                "
              </motion.div>

              <div className="relative z-10">
                <div className="flex gap-2 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-3xl"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                <motion.p
                  className="text-2xl lg:text-3xl text-white/90 leading-relaxed mb-8 font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.p>

                <div className="flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-xl font-bold mb-1">{testimonials[currentTestimonial].name}</p>
                    <p className="text-white/60">{testimonials[currentTestimonial].role}</p>
                  </motion.div>

                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                      className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl hover:bg-white/20 flex items-center justify-center transition-all border border-white/20"
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ←
                    </motion.button>
                    <motion.button
                      onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                      className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 flex items-center justify-center transition-all"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      →
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentTestimonial ? 'w-12 bg-gradient-to-r from-primary to-secondary' : 'w-2 bg-white/30'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Particles */}
      <section className="container-custom py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-primary via-purple-600 to-secondary p-1"
        >
          <motion.div
            className="relative bg-gradient-to-br from-primary/95 via-purple-600/95 to-secondary/95 rounded-[4rem] px-12 py-24 text-center overflow-hidden"
            whileHover={{
              boxShadow: "0 50px 100px rgba(99, 102, 241, 0.6)",
            }}
          >
            {/* Animated Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-poppins font-black mb-6 relative z-10"
            >
              Ready to Start Your
              <br />
              Success Story?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl lg:text-2xl mb-12 text-white/90 max-w-3xl mx-auto relative z-10"
            >
              Let's collaborate and create something extraordinary that makes your brand unforgettable
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 justify-center relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-block px-12 py-6 bg-white text-primary rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all"
                >
                  Get Started Now
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/portfolio" 
                  className="inline-block px-12 py-6 border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-xl"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
