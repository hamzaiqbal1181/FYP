import React from "react";
import { IoClose } from "react-icons/io5";
import Chatbot from "../Chatbot";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Popup = ({ onClose }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleRedirect = () => {
    navigate("/search-history"); // Redirect to the specified route
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center pt-20 z-50">
      <div className="bg-[#1e1f22] text-white rounded-xl shadow-lg w-full max-w-4xl relative animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close popup"
        >
          <IoClose size={28} />
        </button>

        <Chatbot />

        {/* Button for redirect */}
        <div className="mt-4">
          <button
            onClick={handleRedirect} // Handle the button click event
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get History Records
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
