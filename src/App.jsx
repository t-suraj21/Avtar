import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      <div className="flex-1">
        <AppRoutes />
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

