import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../Popup/Popup";

const Hero = () => {
  // State to manage the visibility of the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200, // You can adjust AOS settings here
    });
  }, []);

  return (
    <>
      <div className="relative bg-black/20 h-full">
        <div className="h-full flex justify-center items-center p-4 bg-gray/10">
          <div className="container grid grid-cols-1 gap-4">
            {/* Text area - UPDATED */}
            <div className="text-white">
              <p data-aos="fade-up" className="text-2xl sm:text-3xl font-serif">
                Lahore
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-bold text-3xl sm:text-3xl"
              >
                Where Every Street Tells a Story
              </p>
            </div>
            {/* Input section - UPDATED */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              // The classes below have been updated for transparency, rounded edges, and a border
              className="bg-white/10 backdrop-blur-sm rounded-full p-3 border-2 border-white/50 cursor-pointer hover:bg-white/40 transition"
              onClick={() => setIsPopupOpen(true)}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 py-1 items-center">
                {/* Text is now centered and styled to look better on a transparent background */}
                <div className="col-span-3 text-white/90 font-semibold text-lg">
                  Ask the AI Historian Anything...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Conditionally render the popup - NO CHANGE HERE */}
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </>
  );
};
export default Hero;

// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Popup from "../Popup/Popup";

// const Hero = () => {
//   // State to manage the visibility of the popup
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1200, // You can adjust AOS settings here
//     });
//   }, []);

//   return (
//     <>
//       <div className="relative bg-black/20 h-full">
//         <div className="h-full flex justify-center items-center p-4 bg-gray/10">
//           <div className="container grid grid-cols-1 gap-4">
//             {/* Text area  */}
//             <div className="text-white">
//               <p data-aos="fade-up">Our Services</p>
//               <p
//                 data-aos="fade-up"
//                 data-aos-delay="300"
//                 className="font-bold text-3xl"
//               >
//                 Search your Destination
//               </p>
//             </div>
//             {/* Input section */}
//             <div
//               data-aos="fade-up"
//               data-aos-delay="600"
//               className="space-y-3 bg-white rounded-md p-4 cursor-pointer hover:bg-gray-200 transition"
//               onClick={() => setIsPopupOpen(true)}
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-3 py-1">
//                 <div>
//                   <label htmlFor="destination" className="opacity-70">
//                     Ask Anything
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Conditionally render the popup */}
//       {/* It will only be displayed when isPopupOpen is true */}
//       {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
//     </>
//   );
// };
// export default Hero;
