import React, { useState } from "react";
import { IoClose, IoNavigate } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

// Note: MapPopup ko yahan se import karne ki zaroorat nahi hai

const PlaceDetailPopup = ({ place, onClose, onShowMap }) => {
  // State to manage which image is currently featured in the gallery
  const [activeImage, setActiveImage] = useState(place.images[0]);

  return (
    // Backdrop
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // --- THE FIX IS HERE ---
      // 'items-center' ko hata kar 'pt-24' (padding-top) add kiya hai
      // taake popup header ke neeche se shuru ho.
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center pt-20 p-4"
      onClick={onClose}
    >
      {/* Popup Container */}
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6 flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors z-20"
          >
            <IoClose size={32} />
          </button>

          {/* Left Column: Image Gallery */}
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={activeImage}
                alt={place.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </AnimatePresence>
            <div className="grid grid-cols-4 gap-2">
              {place.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${place.title} thumbnail ${index + 1}`}
                  onClick={() => setActiveImage(img)}
                  className={`w-full h-20 object-cover rounded-md cursor-pointer border-4 transition-all
                    ${
                      activeImage === img
                        ? "border-sky-500"
                        : "border-transparent hover:border-sky-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {place.title}
            </h1>
            <span className="bg-sky-100 text-sky-700 text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
              {place.type}
            </span>
            <div className="flex-grow overflow-y-auto pr-4 text-gray-600 text-lg leading-relaxed">
              <p>{place.description}</p>
            </div>
            {/* Button ab 'onShowMap' ko call karega jo parent (Places.jsx) se aa raha hai */}
            <button
              onClick={onShowMap}
              className="mt-6 w-full bg-sky-600 text-white font-bold py-3 px-6 rounded-lg text-lg
                         hover:bg-sky-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <IoNavigate size={22} />
              Get Direction
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PlaceDetailPopup;
