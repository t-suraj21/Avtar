import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Stats data
  const stats = [
    { id: 1, number: "100+", label: "Projects Completed", icon: "🚀" },
    { id: 2, number: "50+", label: "Happy Clients", icon: "😊" },
    { id: 3, number: "3+", label: "Years Experience", icon: "⏱️" },
    { id: 4, number: "24/7", label: "Support Available", icon: "💬" }
  ];

  // Values data
  const values = [
    {
      id: 1,
      icon: "⚡",
      title: "Speed & Efficiency",
      description: "We deliver projects fast without compromising quality. Our agile approach ensures rapid iterations and quick turnarounds.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      icon: "🎨",
      title: "Design Excellence",
      description: "Beautiful, user-centric designs that not only look great but provide exceptional user experiences across all devices.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: "💡",
      title: "Innovation First",
      description: "We stay ahead of the curve, leveraging the latest technologies and trends to give your business a competitive edge.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      icon: "🤝",
      title: "Client Partnership",
      description: "Your success is our success. We work as an extension of your team, collaborating closely to achieve your goals.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      icon: "🔒",
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensure every deliverable meets the highest standards of excellence.",
      color: "from-red-500 to-rose-500"
    },
    {
      id: 6,
      icon: "🌟",
      title: "Continuous Growth",
      description: "We're always learning, improving, and evolving to provide you with the best possible solutions and service.",
      color: "from-indigo-500 to-violet-500"
    }
  ];

  // Team members
  const team = [
    {
      id: 1,
      name: "Development Team",
      role: "Full Stack & Mobile Experts",
      icon: "👨‍💻",
      skills: ["React", "Node.js", "React Native", "MongoDB"],
      gradient: "from-primary to-secondary"
    },
    {
      id: 2,
      name: "Design Team",
      role: "UI/UX Designers",
      icon: "🎨",
      skills: ["Figma", "Adobe XD", "Prototyping", "Branding"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Video Team",
      role: "Production & Editing",
      icon: "🎬",
      skills: ["Premiere Pro", "After Effects", "Cinematography", "Color Grading"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      name: "Content Team",
      role: "Strategy & Creation",
      icon: "✍️",
      skills: ["Copywriting", "SEO", "Social Media", "Content Strategy"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  // Timeline/Journey
  const timeline = [
    { year: "2023", event: "Founded Avtar", description: "Started with a vision to transform digital experiences" },
    { year: "2024", event: "Expanded Services", description: "Added video production and content marketing to our offerings" },
    { year: "2025", event: "50+ Clients", description: "Reached major milestone serving clients across multiple industries" },
    { year: "2026", event: "Going Global", description: "Expanding our reach and building products for international markets" }
  ];

  return (
    <main className="container-custom py-6 sm:py-8 md:py-10 pt-24 sm:pt-28 md:pt-32 lg:pt-36 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-block mb-6"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center text-5xl shadow-lg shadow-primary/30">
            ✨
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent mb-4 sm:mb-6 px-4"
        >
          About Avtar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
        >
          We're a creative digital agency transforming ideas into exceptional digital experiences through innovative development, stunning design, and compelling content.
        </motion.p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            onHoverStart={() => setHoveredStat(stat.id)}
            onHoverEnd={() => setHoveredStat(null)}
            whileHover={{ y: -10, scale: 1.05 }}
            className="card-glass p-6 text-center relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={hoveredStat === stat.id ? { scale: 1.1 } : { scale: 1 }}
            />
            <motion.div
              animate={hoveredStat === stat.id ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl mb-3 relative z-10"
            >
              {stat.icon}
            </motion.div>
            <motion.div
              animate={hoveredStat === stat.id ? { scale: 1.1 } : { scale: 1 }}
              className="text-4xl font-bold text-primary mb-2 relative z-10"
            >
              {stat.number}
            </motion.div>
            <div className="text-white/70 text-sm relative z-10">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Our Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="card-glass p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl mb-6 text-center"
          >
            📖
          </motion.div>
          <h2 className="text-4xl font-poppins font-bold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-white/80 leading-relaxed">
            <p>
              Avtar was born from a simple belief: <span className="text-primary font-semibold">exceptional digital experiences shouldn't be a luxury—they should be the standard</span>. We started as a small team of passionate developers and creators who saw the gap between what businesses needed and what traditional agencies were offering.
            </p>
            <p>
              From full-stack web applications to mobile apps, from professional video production to strategic content creation, we've built our expertise across the entire digital spectrum. We're not just service providers—we're <span className="text-secondary font-semibold">your growth partners</span>, invested in your success as much as you are.
            </p>
            <p>
              Today, we work with startups disrupting industries, established brands evolving their digital presence, and ambitious entrepreneurs bringing their visions to life. Every project is an opportunity to push boundaries, challenge conventions, and create something remarkable.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-poppins font-bold mb-4 flex items-center justify-center gap-3">
            <span>💎</span>
            <span>Our Core Values</span>
          </h2>
          <p className="text-white/70 text-lg">The principles that guide everything we do</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredValue(value.id)}
              onHoverEnd={() => setHoveredValue(null)}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-glass p-8 relative overflow-hidden group"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                animate={hoveredValue === value.id ? { scale: 1.2 } : { scale: 1 }}
              />
              
              <motion.div
                animate={hoveredValue === value.id ? { rotate: [0, -10, 10, -10, 0], scale: 1.2 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl mb-4 relative z-10"
              >
                {value.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3 relative z-10 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed relative z-10">
                {value.description}
              </p>

              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredValue === value.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-poppins font-bold mb-4 flex items-center justify-center gap-3">
            <span>👥</span>
            <span>Meet Our Teams</span>
          </h2>
          <p className="text-white/70 text-lg">Talented specialists working together to bring your vision to life</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -10, rotateY: 5 }}
              className="card-glass p-6 text-center group relative overflow-hidden"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-6xl mb-4 relative z-10"
              >
                {member.icon}
              </motion.div>
              
              <h3 className="text-lg font-semibold mb-2 relative z-10 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              
              <p className="text-sm text-white/60 mb-4 relative z-10">
                {member.role}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center relative z-10">
                {member.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/70 border border-white/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-poppins font-bold mb-4 flex items-center justify-center gap-3">
            <span>🚀</span>
            <span>Our Journey</span>
          </h2>
          <p className="text-white/70 text-lg">Milestones that shaped who we are today</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-gray-900 z-10 transform -translate-x-1/2"
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.05, x: index % 2 === 0 ? -10 : 10 }}
                  className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
                >
                  <div className="card-glass p-6 bg-gradient-to-br from-white/5 to-white/0">
                    <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="card-glass p-8 md:p-12">
          <h2 className="text-3xl font-poppins font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">🛠️</span>
            <span>Our Tech Stack & Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Development</h3>
              <div className="space-y-3">
                {['React & Next.js', 'Node.js & Express', 'MongoDB & PostgreSQL', 'React Native & Expo', 'TypeScript', 'Tailwind CSS'].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-primary/30 transition-all"
                  >
                    <span className="text-primary">✓</span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-secondary mb-4">Creative Services</h3>
              <div className="space-y-3">
                {['Adobe Premiere Pro', 'After Effects', 'Figma & Adobe XD', 'Canva & Photoshop', 'Final Cut Pro', 'Content Strategy'].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ x: -10, scale: 1.02 }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-secondary/30 transition-all"
                  >
                    <span className="text-secondary">✓</span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="card-glass p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-6xl mb-4"
            >
              🎯
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To democratize exceptional digital experiences by making high-quality development, design, and content services accessible to businesses of all sizes. We're committed to turning your ideas into reality with speed, precision, and creativity.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="card-glass p-8 bg-gradient-to-br from-secondary/10 to-transparent border-secondary/20"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl mb-4"
            >
              🔮
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
            <p className="text-white/80 leading-relaxed">
              To become the go-to digital partner for ambitious brands worldwide, known for our rapid execution, innovative solutions, and unwavering commitment to client success. We envision a future where every business has the digital presence it deserves.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card-glass p-8 md:p-16 text-center bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 border-primary/30 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${i * 30}%`,
                top: `${i * 20}%`
              }}
            />
          ))}
        </div>

        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-7xl mb-6 relative z-10"
        >
          🚀
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 relative z-10">
          Ready to Build Something Amazing?
        </h2>
        
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto relative z-10">
          Let's transform your vision into reality. Whether it's a website, mobile app, or video content, we're here to make it happen.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center relative z-10">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 text-lg"
            >
              Get in Touch
            </motion.button>
          </Link>
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-4 text-lg"
            >
              View Our Services
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
