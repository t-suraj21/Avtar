import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive 
        ? "bg-white/15 text-[#E8E8E8] shadow-lg" 
        : "text-[#94A3B8] hover:text-[#E8E8E8] hover:bg-white/10"
    }`;

  return (
    <motion.div 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-4 md:px-8 pt-3 sm:pt-4 md:pt-6"
    >
      <nav className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-[#E8E8E8] font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-poppins font-bold text-[#E8E8E8]">Avtar</span>
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
              to="/contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-[#FFFFFF] shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm"
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
              <svg className="w-6 h-6 text-[#E8E8E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-[#E8E8E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="px-3 py-3 flex flex-col gap-1.5">
            <NavLink onClick={() => setMobileMenuOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
            <NavLink onClick={() => setMobileMenuOpen(false)} to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink onClick={() => setMobileMenuOpen(false)} to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
            <NavLink onClick={() => setMobileMenuOpen(false)} to="/blog" className={navLinkClass}>Blog</NavLink>
            <NavLink onClick={() => setMobileMenuOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
            <NavLink onClick={() => setMobileMenuOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink 
              onClick={() => setMobileMenuOpen(false)} 
              to="/contact" 
              className="mt-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-[#FFFFFF] text-center shadow-lg"
            >
              Get Started
            </NavLink>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
