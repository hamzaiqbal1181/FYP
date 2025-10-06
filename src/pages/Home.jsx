// import React from "react";
// import Hero from "../components/Hero/Hero";
// import Places from "../components/Places/Places";
// import BannerImg from "../components/BannerImg/BannerImg";
// import Poster from "../assets/lahorebanner.jpg";
// import Posters from "../assets/fort.jpg";
// import Blogs from "./Blogs";
// import Banner from "../components/Banner/Banner";
// import Banner2 from "../assets/banner2.png";
// import Testimonial from "../components/Testimonial/Testimonial";

// const Home = () => {
//   return (
//     <>
//       <div className="w-full">
//         {/* <div className="relative h-[350px] sm:h-[500px] md:h-[700px]">
//           <img
//             src={Posters}
//             alt="Hero Banner"
//             className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
//           />
//           <div className="relative z-10 flex items-center justify-center h-full px-2 sm:px-6">
//             <Hero />
//           </div>
//         </div> */}
//         <div className="relative h-[700px]">
//           <img
//             src={Posters}
//             alt="Hero Banner"
//             className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
//           />
//           <Hero />
//         </div>
//         <div className="px-2 sm:px-6">
//           <Places />
//         </div>
//         <div className="px-2 sm:px-6">
//           <BannerImg img={Poster} />
//         </div>
//         <div className="px-2 sm:px-6">
//           <Blogs />
//         </div>
//         <div className="px-2 sm:px-6">
//           <Banner />
//         </div>
//         <div className="px-2 sm:px-6">
//           <BannerImg img={Banner2} />
//         </div>
//         <div className="px-2 sm:px-6">
//           <Testimonial />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

// File: src/pages/Home.jsx (Complete Updated Version)

import React from "react";

// --- All your component imports are preserved ---
import Hero from "../components/Hero/Hero";
import Places from "../components/Places/Places";
import BannerImg from "../components/BannerImg/BannerImg";
import Blogs from "./Blogs";
import Banner from "../components/Banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial";

// --- All your asset imports are preserved ---
import Poster from "../assets/lahorebanner.jpg";
import Banner2 from "../assets/banner2.png";
// The `Posters` import for the old background image is no longer needed.

const Home = () => {
  return (
    <>
      <div>
        {/* --- THE ONLY CHANGE IS HERE --- */}
        {/* The Hero component is now called directly. It handles its own video background. */}
        {/* The old wrapper div and extra <img> tag have been removed. */}
        <Hero />

        {/* --- ALL THE CONTENT BELOW REMAINS EXACTLY THE SAME --- */}
        {/* We are just wrapping them in a standard container for better layout */}
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="px-2 sm:px-6">
            <Places />
          </div>

          <div className="px-2 sm:px-6">
            <BannerImg img={Poster} />
          </div>

          <div className="px-2 sm:px-6">
            <Blogs />
          </div>

          <div className="px-2 sm:px-6">
            <Banner />
          </div>

          <div className="px-2 sm:px-6">
            <BannerImg img={Banner2} />
          </div>

          <div className="px-2 sm:px-6">
            <Testimonial />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
