export default function Footer() {
  return (
    <footer className="mt-16 border-t border-primary/10">
      <div className="container-custom py-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <p className="text-[#64748B]">© {new Date().getFullYear()} Avtar Agency. All rights reserved.</p>
        <div className="text-sm text-[#94A3B8]">Built with React, Vite, Tailwind.</div>
      </div>
    </footer>
  );
}
