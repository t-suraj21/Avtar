export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container-custom py-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <p className="text-[#94A3B8]">© {new Date().getFullYear()} Avtar Agency. All rights reserved.</p>
        <div className="text-sm text-[#7A8A99]">Built with React, Vite, Tailwind.</div>
      </div>
    </footer>
  );
}
