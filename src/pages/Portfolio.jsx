import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 12,
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
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white/80 mb-4">
            Web applications that save the day
          </h1>
          
          {/* Animated Underline */}
          <motion.div 
            className="w-full max-w-2xl mx-auto h-1 bg-linear-to-r from-red-600 via-red-500 to-red-600 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Projects Container with Wavy Border */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Wavy Green Border Background */}
          <div 
            className="absolute inset-0 bg-linear-to-br from-green-400 to-green-500 rounded-[60px] -m-4"
            style={{
              clipPath: `path('M 0 60 Q 10 40, 20 60 T 40 60 T 60 60 T 80 60 T 100 60 L 100 0 L 0 0 Z')`,
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M 0,20 Q 15,10 30,20 T 60,20 T 90,20 L 100,20 L 100,100 Q 85,90 70,100 T 40,100 T 10,100 L 0,100 Z"
                fill="currentColor"
                className="text-green-400"
              />
            </svg>
          </div>

          {/* Projects Grid */}
          <div className="relative bg-[#0f1419] rounded-[50px] p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/50 text-sm sm:text-base mb-3 sm:mb-4">
                      {project.tech?.join(", ")}
                    </p>

                    <Link 
                      to={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold text-sm sm:text-base transition-colors group/link"
                    >
                      View Project
                      <motion.svg 
                        className="w-4 h-4 sm:w-5 sm:h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ x: 5, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </motion.svg>
                    </Link>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-linear-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold">
            <span className="text-red-500">ACHIEVEMENTS</span>
            <span className="text-white"> & </span>
            <span className="text-blue-500">HONORS</span>
          </h2>
          
          <motion.div 
            className="mt-4 w-48 sm:w-64 h-1 bg-white/20 rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          <motion.div 
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {[
              { label: "Projects", value: "100+", color: "text-primary" },
              { label: "Clients", value: "50+", color: "text-secondary" },
              { label: "Awards", value: "15+", color: "text-red-500" },
              { label: "Years", value: "3+", color: "text-blue-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-black/30 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-6 hover:bg-black/40 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/contact"
            className="inline-block px-8 py-4 bg-linear-to-r from-primary to-secondary rounded-full font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
