import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative my-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card-glass p-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-poppins font-semibold">Ready to Build Something Great?</h2>
          <p className="mt-2 text-[#94A3B8]">Let's turn your idea into a launch-ready product.</p>
          <div className="mt-6 flex gap-3 justify-center">
            <Link to="/contact" className="btn-primary">Get Started</Link>
            <Link to="/portfolio" className="btn-secondary">See Portfolio</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
