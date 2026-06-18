

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Chatbot = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm Atlas, your AI assistant at AI Knots IT Solution. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef(null);

  const quickReplies = [
    "Tell me about your services",
    "How can you help my business?",
    "What is your pricing?",
    "Contact information",
  ];

  // Scroll to Top
  useEffect(() => {
    const toggleVisibility = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Auto-scroll chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (text = input) => {
    if (!text.trim() || isLoading) return;

    const userText = text.trim();
    setInput("");
    setIsLoading(true);
    const tempId = Date.now();

    setMessages((prev) => [
      ...prev,
      { type: "user", text: userText },
      { type: "bot", text: "Thinking...", id: tempId },
    ]);

    try {
      // Optional: Fetch latest website content (you can move this to backend later)
      let websiteContext = "";
      try {
        const siteRes = await fetch("https://www.aiknotsit.com/");
        if (siteRes.ok) {
          const html = await siteRes.text();
          // Simple extraction (you can improve this with a backend scraper)
          websiteContext = html.slice(0, 8000); // limit size
        }
      } catch (e) {
        console.warn("Could not fetch website content");
      }

      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3.2:3b",
          prompt: `
You are Atlas, the official friendly and professional AI Assistant of AI Knots IT Solution.

Company Website: https://www.aiknotsit.com/

Latest website content (use this as primary knowledge source):
${websiteContext || "No fresh data available. Use your trained knowledge."}

Core Services:
- Web Development
- Mobile App Development
- QA Testing & Quality Assurance
- L2 Support
- Voice, Chat & Email BPO
- Infrastructure Setup
- Digital Transformation
- Digital Marketing

Contact:
- Office: 103, Goyal Vihar, Plot No 31-C, Zone 2, M.P. Nagar, Bhopal - 462011, Madhya Pradesh, India
- Phone: +91 78696 36070
- Email: support@aiknotsit.com (or support@atlaknots.com)

Rules:
- Always be helpful, professional and concise.
- Prefer information from the website context above.
- If you don't know something, say: "I don't have that information right now. Please contact the AI Knots team at +91 78696 36070."
- Never make up information.

User Question: ${userText}
`,
          stream: false,
        }),
      });

      if (!response.ok) throw new Error("Failed to connect to Ollama");

      const data = await response.json();

      setMessages((prev) =>
        prev
          .filter((msg) => msg.id !== tempId)
          .concat({
            type: "bot",
            text: data.response || "Sorry, I couldn't generate a response.",
          })
      );
    } catch (error) {
      console.error("Ollama Error:", error);
      setMessages((prev) =>
        prev
          .filter((msg) => msg.id !== tempId)
          .concat({
            type: "bot",
            text: "❌ Can't connect to Ollama. Make sure it's running with 'llama3.2:3b'.",
          })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[90] p-4 rounded-full bg-[#8B6B4A] text-white shadow-lg shadow-red-900/40 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-24 z-[100] p-4 rounded-full bg-[#8B6B4A] hover:bg-[#6B4B3A] text-white shadow-xl shadow-red-900/50 transition-all duration-300 flex items-center justify-center"
        aria-label="Open Chatbot"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-24 right-8 z-[110] w-full max-w-[380px] border rounded-3xl shadow-2xl overflow-hidden ${
              isDark ? "bg-gray-950 border-[#8B6B4A]/50" : "bg-white border-gray-200"
            }`}
          >
            {/* Header */}
            <div className="bg-[#8B6B4A] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Atlas Assistant</h3>
                  <p className="text-xs text-red-100">Online • AI Knots IT</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-red-200 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={chatRef}
              className={`h-80 overflow-y-auto p-4 space-y-4 ${isDark ? "bg-black/60" : "bg-gray-50"}`}
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.type === "user"
                        ? "bg-red-600 text-white"
                        : isDark
                        ? "bg-gray-900 text-gray-200 border border-gray-800"
                        : "bg-gray-100 text-gray-800 border border-gray-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className={`p-3 border-t flex flex-wrap gap-2 ${isDark ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-white"}`}>
              {quickReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(reply)}
                  disabled={isLoading}
                  className={`text-xs px-4 py-2 rounded-full transition-all ${
                    isDark ? "bg-gray-900 hover:bg-red-950 border border-gray-700" : "bg-gray-100 hover:bg-red-50 border border-gray-300"
                  }`}
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className={`p-4 border-t flex gap-2 ${isDark ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-white"}`}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className={`flex-1 rounded-full px-5 py-3 text-sm focus:outline-none ${
                  isDark
                    ? "bg-gray-900 border border-gray-700 focus:border-red-600"
                    : "bg-gray-100 border border-gray-300 focus:border-red-500"
                }`}
                disabled={isLoading}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isLoading}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-700 p-3 rounded-full transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;