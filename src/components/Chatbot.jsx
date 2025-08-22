// File: src/components/Chatbot.jsx

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import PageBgImage from "../assets/places/lahore-skyline.jpg";

// --- 1. SAHI IMPORTS YAHAN HAIN ---
import { auth } from "../firebase"; // Apne firebase config ka path check karein
import { onAuthStateChanged } from "firebase/auth";
import { saveSearch, getSearchHistory } from "../services/searchService"; // Apni nayi service file
import { chatWithGemini } from "../api/geminiApi"; // Aapki Gemini API file

const GEM_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Ask me about historical places in Lahore, Pakistan!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Yeh useEffect user ki login state ko check karta hai aur history fetch karta hai
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        getSearchHistory(user.uid)
          .then((res) => console.log("Fetched history:", res.data))
          .catch((err) => console.error("Could not fetch history:", err));
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      const prompt = `You are an expert... User: ${currentInput}`;
      const botReply = await chatWithGemini(prompt, GEM_API_KEY);
      setMessages((msgs) => [...msgs, { from: "bot", text: botReply }]);

      // Agar user login hai, to history save karein
      if (currentUser) {
        const searchData = {
          firebaseUid: currentUser.uid,
          term: currentInput.split(" ")[0],
          query: currentInput,
          newResults: [{ result: botReply }],
        };
        await saveSearch(searchData);
      }
    } catch (e) {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Sorry, I couldn't get a response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // --- AAPKA UI BILKUL WAISE HI RAHEGA ---
  return (
    <div
      className="rounded-lg w-full max-w-3xl mx-auto"
      style={{
        backgroundImage: `url(${PageBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "32rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
    >
      <div
        className="h-[24rem] overflow-y-auto mb-6 rounded p-4"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(2px)",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${
              msg.from === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded ${
                msg.from === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white/80 text-gray-800"
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </span>
          </div>
        ))}
        {loading && <div className="text-white">Gemini is typing...</div>}
      </div>
      <div className="flex p-2 gap-2">
        <input
          className="flex-1 rounded-l px-5 py-3 bg-white/90 text-gray-800 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about Lahore's historical places..."
        />
        <button
          className="bg-blue-600 px-6 py-3 rounded-r text-white hover:bg-blue-700"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
