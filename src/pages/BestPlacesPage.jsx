import React from "react";
// import Navbar from "../components/Navbar/Navbar"; // Adjust path if needed
import BestPlaces from "../components/BestPlaces/BestPlaces"; // Adjust path if needed
// import Footer from "../components/Footer/Footer"; // Example, if you have a footer
import Location from "../components/Location/Location";

const BestPlacesPage = () => {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <div className="pt-20">
          {" "}
          {/* Add padding-top to avoid content being hidden by fixed navbar */}
          <BestPlaces />
        </div>
        <Location />
        {/* <Footer /> */}
      </div>
    </>
  );
};

// export default BestPlacesPage;
// // src/pages/BestPlacesPage.jsx

// import React from "react";
// // import BestPlaces from "../components/BestPlaces/BestPlaces";

// const BestPlacesPage = () => {
//   return (
// <div>
//   {/* --- ADD THIS LINE --- */}
//   <h1 className="text-[100px] text-red-500 relative z-[99999]">
//     IS THIS VISIBLE?
//   </h1>

//   <div className="pt-20">{/* <BestPlaces /> */}</div>
// </div>
// <div className="container pt-14 px-12 ">
//   <div className="py-10">
//     <h1 className="my-8 border-l-8 border-blue-500 py-2 pl-2 text-3xl font-bold">
//       About us
//     </h1>
//   </div>
// </div>
//   );
// };

export default BestPlacesPage;
