import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceCard({ id, title, desc, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card-glass p-5"
    >
      <div className="flex items-start gap-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-white/70 mt-1">{desc}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Link to={`/services/${id}`} className="btn-primary text-sm flex-1">View Details</Link>
        <Link to="/contact" className="btn-secondary text-sm">Get Quote</Link>
      </div>
    </motion.div>
  );
}
