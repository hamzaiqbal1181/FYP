// import React from "react";
// import { motion } from "framer-motion";

// const PlacesBanner = ({ image, title, description, reverse = false }) => {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, x: reverse ? 50 : -50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
//   };

//   return (
//     <motion.div
//       className={`relative rounded-3xl overflow-hidden shadow-xl my-10 p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center ${
//         reverse ? "md:flex-row-reverse" : "md:flex-row"
//       } bg-white transition-all duration-500 hover:shadow-2xl`}
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.div className="w-full md:w-1/2 flex justify-center p-4" variants={imageVariants}>
//         <img
//           src={image}
//           alt={title}
//           className="rounded-xl shadow-lg max-w-full h-auto object-cover max-h-[300px] w-full"
//         />
//       </motion.div>
//       <motion.div className="w-full md:w-1/2 text-center md:text-left p-4" variants={textVariants}>
//         <h3 className="text-3xl sm:text-4xl font-extrabold text-black mb-4 leading-tight">
//           {title}
//         </h3>
//         <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
//           {description}
//         </p>
//         {/* <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
//           Explore More
//         </button> */}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default PlacesBanner;

import React from "react";
import { motion } from "framer-motion";

// Helper function to generate Cloudinary video URL
const getCloudinaryVideoUrl = (publicId) =>
  `https://res.cloudinary.com/de12mwphp/video/upload/f_auto,q_auto/${publicId}.mp4`; // Replace 'your-cloud-name' with your actual Cloudinary cloud name

const PlacesBanner = ({ videoPublicId, title, description, reverse = false }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const videoVariants = { // Renamed from imageVariants to videoVariants
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: reverse ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
  };

  return (
    <motion.div
      className={`relative rounded-3xl overflow-hidden shadow-xl my-10 p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } bg-white transition-all duration-500 hover:shadow-2xl`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="w-full md:w-1/2 flex justify-center p-4" variants={videoVariants}>
        {videoPublicId && ( // Render video only if publicId is provided
          <video
            src={getCloudinaryVideoUrl(videoPublicId)}
            className="rounded-xl shadow-lg max-w-full h-auto object-cover max-h-[300px] w-full"
            controls // Add controls for play/pause, volume etc.
            autoPlay // Autoplay the video
            loop // Loop the video
            muted // Mute the video by default (good practice for autoplay)
            alt={title} // Use alt for accessibility
          >
            Your browser does not support the video tag.
          </video>
        )}
      </motion.div>
      <motion.div className="w-full md:w-1/2 text-center md:text-left p-4" variants={textVariants}>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-black mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
          {description}
        </p>
        {/* <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          Explore More
        </button> */}
      </motion.div>
    </motion.div>
  );
};

export default PlacesBanner;