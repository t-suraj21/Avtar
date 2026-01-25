import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { services } from "../data/services";

export default function Contact() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "",
    service: "", 
    message: "" 
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log("EmailJS Config Check:", {
        serviceId: serviceId ? "✓" : "✗",
        templateId: templateId ? "✓" : "✗",
        publicKey: publicKey ? "✓" : "✗"
      });

      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your .env file and restart the server.");
      }

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Template parameters matching EmailJS template
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone || "Not provided",
        service: form.service,
        message: form.message,
        to_name: "Avtar Team",
        to_email: "avtarvison@gmail.com",
        reply_to: form.email // So you can reply directly to the user
      };

      console.log("Sending email with params:", templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log("Email sent successfully:", response);

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We'll get back to you soon!",
      });
      
      // Reset form
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      
      // Auto-dismiss success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 5000);
    } catch (error) {
      console.error("Email send error:", error);
      
      let errorMessage = "Oops! Something went wrong. Please try again or email us directly at avtarvison@gmail.com";
      
      // Provide more specific error messages
      if (error.text) {
        console.error("EmailJS Error:", error.text);
        if (error.text.includes("not found")) {
          errorMessage = "Email service configuration error. Please contact support at avtarvison@gmail.com";
        }
      }
      
      setStatus({
        type: "error",
        message: errorMessage,
      });
      
      // Auto-dismiss error message after 8 seconds
      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 8000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-secondary/10" />
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container-custom py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-primary font-semibold text-sm mb-4 tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get In Touch
          </motion.span>
          <h1 className="text-5xl lg:text-7xl font-poppins font-black mb-6">
            Let's Start{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Something Amazing
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card-glass p-8 space-y-6 rounded-3xl border border-white/20">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Interested In *</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Status Message */}
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl relative ${
                    status.type === "success"
                      ? "bg-green-500/20 border border-green-500/50 text-green-100"
                      : "bg-red-500/20 border border-red-500/50 text-red-100"
                  }`}
                >
                  <button
                    onClick={() => setStatus({ type: null, message: "" })}
                    className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors p-1"
                    aria-label="Close message"
                  >
                    ✕
                  </button>
                  <div className="pr-6">{status.message}</div>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-lg shadow-2xl shadow-primary/50 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message →"
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-glass p-8 rounded-3xl border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-4xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-white/70 mb-3">Send us an email anytime!</p>
              <a 
                href="mailto:avtarvison@gmail.com"
                className="text-primary hover:text-secondary transition-colors font-semibold text-lg"
              >
                avtarvison@gmail.com
              </a>
            </motion.div>

            {/* Response Time Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-glass p-8 rounded-3xl border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Quick Response</h3>
              <p className="text-white/70">
                We typically respond within 24 hours during business days. Your message will be sent directly to{" "}
                <span className="text-primary font-semibold">avtarvison@gmail.com</span>
              </p>
            </motion.div>

            {/* Office Hours Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-glass p-8 rounded-3xl border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-4xl">🕒</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Office Hours</h3>
              <div className="text-white/70 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>

            {/* Social Connect */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-glass p-8 rounded-3xl border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-4xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Connect With Us</h3>
              <p className="text-white/70 mb-4">Follow us on social media for updates and insights</p>
              <div className="flex gap-3">
                {[
                  { icon: "📘", name: "Facebook" },
                  { icon: "🐦", name: "Twitter" },
                  { icon: "💼", name: "LinkedIn" },
                  { icon: "📸", name: "Instagram" },
                ].map((social) => (
                  <motion.button
                    key={social.name}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center border border-white/20 transition-all"
                    title={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
