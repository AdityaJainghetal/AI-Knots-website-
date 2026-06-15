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
  const chatRef = useRef(null);

  const quickReplies = [
    "Tell me about your services",
    "How can you help my business?",
    "What is your pricing?",
    "Contact support",
  ];

  // Scroll to Top visibility
  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sendMessage = (text = input) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text }]);
    setInput("");

    setTimeout(() => {
      let reply =
        "Thanks for reaching out! Our team will get back to you shortly.";

      const lowerText = text.toLowerCase();

      if (lowerText.includes("service") || lowerText.includes("offer")) {
        reply =
          "We offer Web & Mobile Development, Testing, L2 Support, Voice/Chat/Email BPO, Cataloguing, Quality Assurance, and complete Infrastructure Setup.";
      } else if (lowerText.includes("help") || lowerText.includes("business")) {
        reply =
          "We help businesses with cost-effective IT solutions, digital transformation, and scalable BPO services.";
      } else if (
        lowerText.includes("price") ||
        lowerText.includes("cost") ||
        lowerText.includes("pricing")
      ) {
        reply =
          "Our pricing is flexible and project-based. Would you like a free consultation?";
      } else if (
        lowerText.includes("contact") ||
        lowerText.includes("support")
      ) {
        reply =
          "You can email us at support@atlaknots.com or call our 24×7 support team.";
      }

      setMessages((prev) => [...prev, { type: "bot", text: reply }]);
    }, 700);
  };

  // Auto-scroll to latest message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[90] p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/40 transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-24 z-[100] p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-900/50 transition-all duration-300 flex items-center justify-center"
        aria-label="Open Chatbot"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window - Reduced Height */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-24 right-8 z-[110] w-full max-w-[380px] border rounded-3xl shadow-2xl overflow-hidden ${isDark ? "bg-gray-950 border-red-900/50" : "bg-white border-gray-200"}`}
          >
            {/* Header */}
            <div className="bg-red-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Atlas Assistant</h3>
                  <p className="text-xs text-red-100">Online • AI Knots IT</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-red-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area - Reduced Height */}
            <div
              ref={chatRef}
              className={`h-80 overflow-y-auto p-4 space-y-4 ${isDark ? "bg-black/60" : "bg-gray-50"}`} // ← Height reduced here
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
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
            <div
              className={`p-3 border-t flex flex-wrap gap-2 ${isDark ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-white"}`}
            >
              {quickReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(reply)}
                  className={`text-xs px-4 py-2 rounded-full transition-all ${isDark ? "bg-gray-900 hover:bg-red-950 border border-gray-700" : "bg-gray-100 hover:bg-red-50 border border-gray-300"}`}
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div
              className={`p-4 border-t flex gap-2 ${isDark ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-white"}`}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className={`flex-1 rounded-full px-5 py-3 text-sm focus:outline-none ${isDark ? "bg-gray-900 border border-gray-700 focus:border-red-600" : "bg-gray-100 border border-gray-300 focus:border-red-500"}`}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim()}
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

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MessageCircle, X, Send } from "lucide-react";

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { type: "bot", text: "Hi! I'm Atlas, your AI assistant at AI Knots IT Solutions. How can I help you today?" }
//   ]);
//   const [input, setInput] = useState("");
//   const chatRef = useRef(null);

//   const quickReplies = [
//     "Tell me about your services",
//     "How can you help my business?",
//     "What is your pricing?",
//     "Contact support"
//   ];

//   const sendMessage = (text = input) => {
//     if (!text.trim()) return;

//     setMessages(prev => [...prev, { type: "user", text }]);
//     setInput("");

//     setTimeout(() => {
//       let reply = "Thanks for reaching out! Our team will get back to you shortly.";

//       const lowerText = text.toLowerCase();

//       if (lowerText.includes("service") || lowerText.includes("offer")) {
//         reply = "We offer Web & Mobile Development, Testing, L2 Support, Voice/Chat/Email BPO, Cataloguing, Quality Assurance, and complete Infrastructure Setup.";
//       } else if (lowerText.includes("help") || lowerText.includes("business")) {
//         reply = "We help businesses with cost-effective IT solutions, digital transformation, and scalable BPO services.";
//       } else if (lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("pricing")) {
//         reply = "Our pricing is flexible and project-based. Would you like a free consultation?";
//       } else if (lowerText.includes("contact") || lowerText.includes("support")) {
//         reply = "You can email us at support@atlaknots.com or call our 24×7 support team.";
//       }

//       setMessages(prev => [...prev, { type: "bot", text: reply }]);
//     }, 700);
//   };

//   // Auto-scroll to latest message
//   useEffect(() => {
//     if (chatRef.current) {
//       chatRef.current.scrollTop = chatRef.current.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <>
//       {/* Floating Chat Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-8 right-8 z-[100] p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-900/50 transition-all duration-300 flex items-center justify-center"
//         aria-label="Open Chatbot"
//       >
//         <MessageCircle className="w-6 h-6" />
//       </button>

//       {/* Chat Window */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 100, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 100, scale: 0.95 }}
//             transition={{ duration: 0.3 }}
//             className="fixed bottom-24 right-8 z-[110] w-full max-w-[380px] bg-gray-950 border border-red-900/50 rounded-3xl shadow-2xl overflow-hidden"
//           >
//             {/* Header */}
//             <div className="bg-red-600 p-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
//                   <MessageCircle className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-white">Atlas Assistant</h3>
//                   <p className="text-xs text-red-100">Online • AI Knots IT</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-white hover:text-red-200 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Messages */}
//             <div
//               ref={chatRef}
//               className="h-80 overflow-y-auto p-4 space-y-4 bg-black/60"
//             >
//               {messages.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
//                 >
//                   <div
//                     className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
//                       msg.type === "user"
//                         ? "bg-red-600 text-white"
//                         : "bg-gray-900 text-gray-200 border border-gray-800"
//                     }`}
//                   >
//                     {msg.text}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Quick Replies */}
//             <div className="p-3 border-t border-gray-800 flex flex-wrap gap-2 bg-gray-950">
//               {quickReplies.map((reply, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => sendMessage(reply)}
//                   className="text-xs px-4 py-2 bg-gray-900 hover:bg-red-950 border border-gray-700 rounded-full transition-all"
//                 >
//                   {reply}
//                 </button>
//               ))}
//             </div>

//             {/* Input */}
//             <div className="p-4 border-t border-gray-800 bg-gray-950 flex gap-2">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//                 placeholder="Type your message..."
//                 className="flex-1 bg-gray-900 border border-gray-700 focus:border-red-600 rounded-full px-5 py-3 text-sm focus:outline-none"
//               />
//               <button
//                 onClick={() => sendMessage()}
//                 disabled={!input.trim()}
//                 className="bg-red-600 hover:bg-red-700 disabled:bg-gray-700 p-3 rounded-full"
//               >
//                 <Send className="w-5 h-5" />
//               </button>
//             </div>

//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Chatbot;
