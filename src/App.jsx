// // import React from "react";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";

// // // Page Components
// // import Layout from "./pages/Layout";
// // import Home from "./pages/Home";
// // import Blogs from "./pages/Blogs";
// // import BlogsDetails from "./pages/BlogsDetails";
// // import PlacesRoute from "./pages/PlacesRoute";
// // import About from "./pages/About";
// // import NoPage from "./pages/NoPage";
// // import BestPlacesPage from "./pages/BestPlacesPage";
// // import SignIn from "./pages/SignIn";
// // import SignUp from "./pages/SignUp";
// // import ForgotPassword from "./pages/ForgotPassword";

// // // Feature Components
// // import SearchForm from "./components/SearchForm";
// // import SearchHistory from "./components/SearchHistory";

// // const App = () => {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         {/* Auth Routes */}
// //         <Route path="/signin" element={<SignIn />} />
// //         <Route path="/signup" element={<SignUp />} />
// //         <Route path="/forgot-password" element={<ForgotPassword />} />

// //         {/* Main layout with nested routes */}
// //         <Route path="/" element={<Layout />}>
// //           <Route index element={<Home />} />
// //           <Route path="blogs" element={<Blogs />} />
// //           <Route path="blogs/:id" element={<BlogsDetails />} />
// //           <Route path="places" element={<PlacesRoute />} />
// //           <Route path="bestplacespage" element={<BestPlacesPage />} />
// //           <Route path="about" element={<About />} />
// //           <Route path="search-form" element={<SearchForm />} />
// //           <Route path="search-history" element={<SearchHistory />} />
// //           <Route path="*" element={<NoPage />} />
// //         </Route>
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // };

// // export default App;
// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// // --- 1. Apne naye AuthProvider ko import karein ---
// import { AuthProvider } from "./contexts/AuthContext";
// // New Hook for dropdown
// import useHashScroll from "./hooks/useHashScroll";

// // Page Components
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import BlogsDetails from "./pages/BlogsDetails";
// import PlacesRoute from "./pages/PlacesRoute";
// import About from "./pages/About";
// import NoPage from "./pages/NoPage";
// import BestPlacesPage from "./pages/BestPlacesPage";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import ForgotPassword from "./pages/ForgotPassword";

// // Feature Components
// import SearchForm from "./components/SearchForm";
// import SearchHistory from "./components/SearchHistory";

// // A small helper component to activate the hook
// const ScrollManager = () => {
//   useHashScroll();
//   return null;
// };

// const App = () => {
//   return (
//     // --- 2. Poore BrowserRouter ko AuthProvider ke andar "wrap" kar dein ---
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Auth Routes */}
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />

//           {/* Main layout with nested routes */}
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="blogs/:id" element={<BlogsDetails />} />
//             <Route path="places" element={<PlacesRoute />} />
//             <Route path="bestplacespage" element={<BestPlacesPage />} />
//             <Route path="about" element={<About />} />
//             <Route path="search-form" element={<SearchForm />} />
//             <Route path="search-history" element={<SearchHistory />} />
//             <Route path="*" element={<NoPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// export default App;

// File: src/App.js (Complete Updated Version)

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// --- 1. Import all necessary providers and hooks ---
import { AuthProvider } from "./contexts/AuthContext";
import useHashScroll from "./hooks/useHashScroll";

// --- 2. Import all your page and feature components ---
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./pages/BlogsDetails";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import BestPlacesPage from "./pages/BestPlacesPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import SearchForm from "./components/SearchForm";
import SearchHistory from "./components/SearchHistory";

/**
 * A small helper component that activates the scroll-to-hash functionality.
 * It must be placed inside the BrowserRouter to have access to the URL location.
 */
const ScrollManager = () => {
  useHashScroll();
  return null;
};

const App = () => {
  return (
    // The AuthProvider wraps the entire application, making user data
    // available to all components that need it.
    <AuthProvider>
      <BrowserRouter>
        {/* The ScrollManager is placed here to listen for URL hash changes */}
        <ScrollManager />

        <Routes>
          {/* Authentication routes are kept separate from the main layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* The main Layout component contains the Navbar and Footer.
              All other main pages are rendered as its children. */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="places" element={<PlacesRoute />} />
            <Route path="bestplacespage" element={<BestPlacesPage />} />
            <Route path="about" element={<About />} />
            <Route path="search-form" element={<SearchForm />} />
            <Route path="search-history" element={<SearchHistory />} />

            {/* The NoPage route catches any undefined URLs */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
