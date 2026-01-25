import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PaymentSuccess() {
  return (
    <main className="container-custom py-20 flex items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <div className="card-glass p-8">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl">✓</span>
          </div>
          <h1 className="text-3xl font-poppins font-semibold mt-6">Payment Successful!</h1>
          <p className="mt-3 text-white/70">
            Your order has been placed successfully. We'll contact you shortly with the next steps.
          </p>

          <div className="mt-8 space-y-3">
            <Link to="/my-orders" className="btn-primary w-full block">
              View My Orders
            </Link>
            <Link to="/" className="btn-secondary w-full block">
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
