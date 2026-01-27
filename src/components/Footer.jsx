export default function Footer() {
  return (
    <footer className="mt-16 border-t border-orange-500/10">
      <div className="container-custom py-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <p className="text-gray-400">© {new Date().getFullYear()} Avtar Agency. All rights reserved.</p>
        <div className="text-sm text-gray-500">Built with React, Vite, Tailwind.</div>
      </div>
    </footer>
  );
}
