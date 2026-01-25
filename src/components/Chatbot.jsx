import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const quickReplies = [
    "Tell me about your services",
    "What are your pricing plans?",
    "How do I place an order?",
    "Talk to a human",
  ];

  const getBotResponse = (userMessage) => {
    const lower = userMessage.toLowerCase();

    if (lower.includes("service")) {
      return "We offer Full-Stack Development, App Development, Content Creation, Video Making, and Video Editing. Which service interests you?";
    } else if (lower.includes("price") || lower.includes("cost")) {
      return "Our pricing is project-based. Each service has custom pricing depending on scope and requirements. Would you like to get a quote?";
    } else if (lower.includes("order") || lower.includes("start")) {
      return "To place an order: 1) Browse our services, 2) Fill out the contact form or checkout, 3) We'll reach out within 24 hours. Need help with anything specific?";
    } else if (lower.includes("human") || lower.includes("support")) {
      return "I'll connect you with our team. Please visit the Contact page or email us at support@avtar.com";
    } else if (lower.includes("hello") || lower.includes("hi")) {
      return "Hello! Ready to bring your ideas to life? Ask me anything about our services!";
    } else {
      return "That's a great question! For detailed information, I recommend visiting our Services page or contacting our team directly. How else can I assist?";
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleQuickReply = (reply) => {
    setInput(reply);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center"
      >
        {isOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">💬</span>}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-125 card-glass shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-white/60">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-white/10 text-white/90"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-xs transition"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg bg-white/5 border border-white/20 px-3 py-2 text-sm outline-none focus:border-primary"
                />
                <button
                  onClick={handleSend}
                  className="btn-primary px-4 py-2 text-sm"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
