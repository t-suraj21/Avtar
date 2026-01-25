import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Only show navbar on non-home pages (Home has its own integrated navbar) */}
      {!isHomePage && <Navbar />}
      <div className="flex-1">
        <AppRoutes />
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

