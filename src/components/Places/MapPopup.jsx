// import React from "react";
// import { motion } from "framer-motion";
// import { IoClose } from "react-icons/io5";

// const MapPopup = ({ onClose, place }) => {
//   // Debug: Uncomment to check what is being passed
//   // console.log("MapPopup place:", place);
//   console.log("Data received in MapPopup:", place);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-white/40 backdrop-blur-sm z-50 flex justify-center pt-24 p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, y: 50 }}
//         animate={{ scale: 1, y: 0 }}
//         exit={{ scale: 0.9, y: 50 }}
//         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl h-[80vh] flex flex-col overflow-hidden relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors z-20"
//         >
//           <IoClose size={32} />
//         </button>
//         {/* Popup Content */}
//         <div className="flex-1 w-full h-full p-0">
//           <div className="w-full h-full">
//             {place && place.mapUrl ? (
//               <iframe
//                 title={place.title + " Map"}
//                 src={place.mapUrl}
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0, minHeight: "100%", minWidth: "100%" }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             ) : (
//               <div className="flex items-center justify-center h-full text-gray-500">
//                 Map not available.
//               </div>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default MapPopup;

// File: src/components/Places/MapPopup.jsx (Responsive Version)

import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const MapPopup = ({ onClose, place }) => {
  // Debugging line (optional, you can remove it)
  // console.log("Data received in MapPopup:", place);

  return (
    // Backdrop
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // FIX 1: 'items-start' add kiya taake mobile par popup upar se shuru ho
      // 'overflow-y-auto' add kiya hai taake agar zaroorat ho to poora page scroll ho
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-start pt-20 p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* Popup Container */}
      <motion.div
        initial={{ scale: 0.9, y: -50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: -50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        // FIX 2: Height ko flexible banaya gaya hai
        // Desktop par yeh 85vh height lega, lekin mobile par content ke mutabiq adjust hoga
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* FIX 3: Ek proper, responsive header add kiya gaya hai */}
        <header className="flex justify-between items-center p-4 border-b shrink-0">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 truncate pr-8">
            Directions to {place?.title || "Selected Place"}
          </h2>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black bg-white/50 rounded-full p-1 transition-colors z-20"
            aria-label="Close Map"
          >
            <IoClose size={28} />
          </button>
        </header>

        {/* Map Content */}
        <div className="flex-1 w-full h-full">
          {place && place.mapUrl ? (
            <iframe
              title={place.title + " Map"}
              src={place.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>Map not available for this location.</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MapPopup;
