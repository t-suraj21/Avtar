import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { useState } from "react";

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-[700px] h-[700px] bg-secondary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom py-20 relative z-10">
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
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-2xl"
              >
                🚀
              </motion.span>
              <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Services
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
            Transform Your{" "}
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
                Digital Presence
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
            End-to-end solutions tailored for startups and brands. We bring your vision to life with cutting-edge technology and creative excellence.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              custom={index}
              className="group relative"
              style={{ perspective: "1000px" }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
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
                  animate={hoveredCard === service.id ? { x: "200%" } : {}}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container with 3D Effect */}
                  <motion.div
                    className="relative w-24 h-24 mb-6 rounded-2xl overflow-hidden"
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
                        className="text-6xl"
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

                  {/* Title with Gradient on Hover */}
                  <motion.h3
                    className="text-3xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                  >
                    {service.title}
                  </motion.h3>

                  {/* Animated Divider */}
                  <motion.div
                    className="relative h-1 mb-4 overflow-hidden rounded-full bg-white/10"
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

                  {/* Description */}
                  <p className="text-white/70 mb-8 leading-relaxed text-base">
                    {service.desc}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link to={`/services/${service.id}`} className="flex-1">
                      <motion.button
                        className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Learn More
                          <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </span>
                      </motion.button>
                    </Link>
                    <Link to={`/checkout?service=${service.id}`}>
                      <motion.button
                        className="px-6 py-3 border-2 border-white/20 backdrop-blur-xl rounded-xl font-semibold hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Order
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Corner Glow Effect */}
                <motion.div
                  className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={hoveredCard === service.id ? { scale: 1.5, opacity: 1 } : {}}
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

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
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
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Start Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Next Project?
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-white/70 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Let's collaborate and create something extraordinary together. Get in touch with our team today!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    className="px-10 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-lg shadow-2xl shadow-primary/50"
                    whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(99, 102, 241, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started Now →
                  </motion.button>
                </Link>
                <Link to="/portfolio">
                  <motion.button
                    className="px-10 py-4 border-2 border-white/20 backdrop-blur-xl rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Our Work
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
