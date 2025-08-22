import React, { useState, useEffect } from "react";
import Message from "./Message";
import { fetchHistoricalPlaces } from "../../../Gemini/api/geminiApi";
import ChatbotHistory from "./ChatbotHistory";
import { auth } from "../firebaseConfig"; // adjust path to your firebase config
import { onAuthStateChanged } from "firebase/auth";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "" || !firebaseUid) return;

    const userMessage = { content: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetchHistoricalPlaces(input, firebaseUid);
      const botMessage = { content: response.aiResponse, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        content: "Sorry, I couldn't fetch the information.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput("");
  };

  if (!firebaseUid) {
    return <p>Please log in to use the chatbot.</p>;
  }

  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} content={msg.content} sender={msg.sender} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about historical places in Lahore..."
          className="input-field"
        />
        <button
          onClick={handleSend}
          className="send-button"
          disabled={!firebaseUid}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

// import React, { useState } from "react";
// import Message from "./Message";
// import { fetchHistoricalPlaces } from "../api/geminiApi";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { content: input, sender: "user" };
//     setMessages((prev) => [...prev, userMessage]);

//     const aiResponse = await fetchHistoricalPlaces(input);
//     const botMessage = { content: aiResponse, sender: "bot" };
//     setMessages((prev) => [...prev, botMessage]);

//     setInput("");
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="messages">
//         {messages.map((msg, index) => (
//           <Message key={index} content={msg.content} sender={msg.sender} />
//         ))}
//       </div>

//       <div className="input-area">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask about historical places in Lahore..."
//           className="input-field"
//         />
//         <button onClick={handleSend} className="send-button">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
