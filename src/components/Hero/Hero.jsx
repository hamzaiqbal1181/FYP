// File: src/components/Hero/Hero.jsx (FINAL, SIMPLIFIED, AND CORRECT VERSION)

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../Popup/Popup";

// --- THE FINAL, CORRECT IMPORTS ARE HERE ---
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const Hero = () => {
  // Your existing state and logic - NO CHANGES
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Create a Cloudinary instance
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
  });

  // Get your video's Public ID
  const videoPublicId = "Lahore_vitw83"; // e.g., 'videos/lahore_drone_shot'

  // Get the video source from Cloudinary
  const myVideo = cld.video(videoPublicId);

  return (
    <>
      <div className="relative h-screen sm:h-[700px] overflow-hidden">
        {/* Render the Cloudinary Video using AdvancedVideo */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <AdvancedVideo
            cldVid={myVideo}
            className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover w-auto h-auto -translate-x-1/2 -translate-y-1/2"
            // --- THE FIX IS HERE: Use simple props instead of the plugins array ---
            autoPlay
            loop
            muted
          />
        </div>

        {/* Your existing content overlay - NO CHANGES */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center p-4">
          <div className="container grid grid-cols-1 gap-4">
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
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="bg-white/10 backdrop-blur-sm rounded-full p-3 border-2 border-white/50 cursor-pointer hover:bg-white/40 transition"
              onClick={() => setIsPopupOpen(true)}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 py-1 items-center">
                <div className="col-span-3 text-white/90 font-semibold text-lg">
                  Ask the AI Historian Anything...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your existing popup logic - NO CHANGES */}
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </>
  );
};

export default Hero;

// Last Updated
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
//             {/* Text area - UPDATED */}
//             <div className="text-white">
//               <p data-aos="fade-up" className="text-2xl sm:text-3xl font-serif">
//                 Lahore
//               </p>
//               <p
//                 data-aos="fade-up"
//                 data-aos-delay="300"
//                 className="font-bold text-3xl sm:text-3xl"
//               >
//                 Where Every Street Tells a Story
//               </p>
//             </div>
//             {/* Input section - UPDATED */}
//             <div
//               data-aos="fade-up"
//               data-aos-delay="600"
//               // The classes below have been updated for transparency, rounded edges, and a border
//               className="bg-white/10 backdrop-blur-sm rounded-full p-3 border-2 border-white/50 cursor-pointer hover:bg-white/40 transition"
//               onClick={() => setIsPopupOpen(true)}
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-3 py-1 items-center">
//                 {/* Text is now centered and styled to look better on a transparent background */}
//                 <div className="col-span-3 text-white/90 font-semibold text-lg">
//                   Ask the AI Historian Anything...
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Conditionally render the popup - NO CHANGE HERE */}
//       {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
//     </>
//   );
// };
// export default Hero;

// most Previous
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
