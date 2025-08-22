// import React, { useState } from "react";
// import { IoClose } from "react-icons/io5";

// const PlacePopup = ({ place, onClose }) => {
//   // State to manage the expanded description
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Check if the description is long enough to need truncation
//   const needsTruncation = place.description.length > 200;

//   // Handler to prevent closing the popup when clicking on the content
//   const handleContentClick = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     // Backdrop
//     <div
//       className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
//       onClick={onClose} // Close popup when backdrop is clicked
//     >
//       {/* Popup Container */}
//       <div
//         className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
//         onClick={handleContentClick} // Prevent closing when clicking inside
//       >
//         <div className="relative p-6">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
//           >
//             <IoClose size={28} />
//           </button>

//           {/* Content Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Left Column: Details */}
//             <div className="flex flex-col">
//               <h1 className="text-3xl font-bold text-gray-800 mb-4">
//                 {place.title}
//               </h1>
//               <div className="text-gray-600 pr-4">
//                 <p>
//                   {needsTruncation && !isExpanded
//                     ? `${place.description.substring(0, 200)}...`
//                     : place.description}
//                 </p>
//                 {needsTruncation && (
//                   <button
//                     onClick={() => setIsExpanded(!isExpanded)}
//                     className="text-sky-600 hover:text-sky-800 font-semibold mt-2"
//                   >
//                     {isExpanded ? "Read Less" : "Read More"}
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Right Column: Map */}
//             <div className="flex flex-col">
//               <h2 className="text-xl font-semibold text-gray-700 mb-3">
//                 Direction
//               </h2>
//               <div className="w-full h-64 md:h-full rounded-lg overflow-hidden border">
//                 <iframe
//                   src={place.mapUrl}
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlacePopup;
