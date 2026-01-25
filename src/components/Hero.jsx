import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 pt-32 md:pt-36">
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage: 'radial-gradient(600px 300px at 10% 10%, rgba(99,102,241,0.2), transparent), radial-gradient(600px 300px at 90% 20%, rgba(34,211,238,0.15), transparent)'
      }} />
      <div className="container-custom relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-poppins font-bold tracking-tight"
        >
          Build. Launch. Grow.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-white/80 max-w-2xl"
        >
          Full-stack development, app building, and content/video services to grow your brand with speed and quality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex gap-3"
        >
          <Link to="/services" className="btn-primary">Explore Services</Link>
          <Link to="/contact" className="btn-secondary">Get a Quote</Link>
        </motion.div>
      </div>
    </section>
  );
}
