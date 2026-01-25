import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <AppRoutes />
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

