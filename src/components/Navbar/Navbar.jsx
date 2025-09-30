// import React, { useState, useEffect, useRef } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import useAuthState from "../../hooks/useAuthState";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase";
// // import { IoPaperPlaneOutline } from "react-icons/io5";
// import { MdOutlineTravelExplore } from "react-icons/md";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import { FaCaretDown } from "react-icons/fa";
// import ResponsiveMenu from "./ResponsiveMenu";
// import { motion, AnimatePresence } from "framer-motion"; // <-- Animation ke liye import

// export const NavbarLinks = [
//   { name: "Home", link: "/" },
//   {
//     name: "Places",
//     link: "/places",
//     submenu: true,
//     sublinks: [
//       { name: "Historical Places", link: "/places#historical" }, // Example with anchor link
//       { name: "Shopping Places", link: "/places#shopping" },
//       { name: "Local Food Points", link: "/places#food" },
//     ],
//   },
//   { name: "Best Places", link: "/bestplacesPage" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "About", link: "/about" },
// ];

// const Navbar = () => {
//   // --- AAPKA PURANA LOGIC BILKUL WAISE HI HAI ---
//   const [showMenu, setShowMenu] = useState(false);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();
//   const { user } = useAuthState();

//   const toggleMenu = () => setShowMenu(!showMenu);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [dropdownRef]);

//   const handleSignOut = async () => {
//     await signOut(auth);
//     navigate("/signin");
//   };

//   return (
//     <>
//       {/* --- STYLE UPDATE: Floating Glassmorphism Navbar --- */}
//       <nav className="fixed top-0 right-0 w-full bg-white/70 backdrop-blur-md shadow-md z-[99999]">
//         {/* --- REMOVED: Uppar wali skyblue border hata di gayi hai --- */}

//         <div className="container py-3 sm:py-0">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo Section */}
//             <div>
//               <Link
//                 to="/"
//                 onClick={() => window.scrollTo(0, 0)}
//                 className="pl-10 flex items-center gap-2 text-2xl font-bold text-gray-800"
//               >
//                 <MdOutlineTravelExplore className="text-black text-6xl" />
//                 <span>TRAVELORE</span>
//               </Link>
//             </div>

//             {/* Desktop Navlinks Section */}
//             <div className="hidden md:block">
//               <ul className="flex items-center gap-6">
//                 {NavbarLinks.map((item) => (
//                   <li key={item.name} className="relative group">
//                     {item.submenu ? (
//                       <div
//                         className="flex items-center gap-1"
//                         ref={dropdownRef}
//                       >
//                         <NavLink
//                           to={item.link}
//                           className="text-gray-700 hover:text-sky-600 font-medium pb-2"
//                         >
//                           {item.name}
//                         </NavLink>
//                         <button
//                           onClick={() => setDropdownOpen(!isDropdownOpen)}
//                         >
//                           <FaCaretDown
//                             className={`transition-transform duration-300 text-gray-500 ${
//                               isDropdownOpen ? "rotate-180" : ""
//                             }`}
//                           />
//                         </button>
//                       </div>
//                     ) : (
//                       <NavLink
//                         to={item.link}
//                         className={({ isActive }) =>
//                           `text-gray-700 hover:text-sky-600 font-medium pb-2 relative
//                            ${isActive ? "text-sky-600" : ""}`
//                         }
//                       >
//                         {item.name}
//                         {/* --- STYLE UPDATE: Animated Underline for Active Link --- */}
//                         <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//                         <NavLink
//                           to={item.link}
//                           className={({ isActive }) =>
//                             isActive
//                               ? "absolute bottom-0 left-0 w-full h-0.5 bg-sky-600"
//                               : ""
//                           }
//                         ></NavLink>
//                       </NavLink>
//                     )}

//                     {/* --- STYLE UPDATE: Animated Dropdown Menu --- */}
//                     <AnimatePresence>
//                       {item.submenu && isDropdownOpen && (
//                         <motion.ul
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 10 }}
//                           transition={{ duration: 0.2 }}
//                           className="absolute top-full left-0 mt-3 w-52 bg-white rounded-lg shadow-xl py-2 border"
//                         >
//                           {item.sublinks.map((sublink) => (
//                             <li key={sublink.name}>
//                               <Link
//                                 to={sublink.link}
//                                 onClick={() => setDropdownOpen(false)}
//                                 className="block px-4 py-2 text-gray-700 hover:bg-sky-100 font-medium"
//                               >
//                                 {sublink.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </motion.ul>
//                       )}
//                     </AnimatePresence>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Auth Buttons and Mobile Menu */}
//             <div className="flex items-center gap-4">
//               {user ? (
//                 <button
//                   onClick={handleSignOut}
//                   className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-600"
//                 >
//                   Sign Out
//                 </button>
//               ) : (
//                 <Link
//                   to="/signin"
//                   className="bg-sky-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-sky-600"
//                 >
//                   Sign In
//                 </Link>
//               )}
//               {/* Mobile Hamburger Menu */}
//               <div className="md:hidden">
//                 <button onClick={toggleMenu} className="text-2xl">
//                   {showMenu ? <HiMenuAlt1 /> : <HiMenuAlt3 />}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// File: src/components/Navbar/Navbar.jsx (Final Upgraded Version)

// File: src/components/Navbar/Navbar.jsx (Final Corrected Version)

//

// File: src/components/Navbar/Navbar.jsx (Final Corrected Version)

// File: src/components/Navbar/Navbar.jsx (Final Corrected Version)

// Previous updated file

// import React, { useState, useEffect, useRef } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase";
// import { MdOutlineTravelExplore } from "react-icons/md";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import { FaCaretDown } from "react-icons/fa";
// import ResponsiveMenu from "./ResponsiveMenu";
// import { motion, AnimatePresence } from "framer-motion";
// import { useAuth } from "../../contexts/AuthContext"; // Magic box import

// export const NavbarLinks = [
//   { name: "Home", link: "/" },
//   {
//     name: "Places",
//     link: "/places",
//     submenu: true,
//     sublinks: [
//       { name: "Historical Places", link: "/places#historical" },
//       { name: "Shopping Places", link: "/places#shopping" },
//       { name: "Local Food Points", link: "/places#food" },
//     ],
//   },
//   { name: "Best Places", link: "/bestplacesPage" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "About", link: "/about" },
// ];

// const Navbar = () => {
//   const { currentUser, userFirstName } = useAuth();
//   const [showMenu, setShowMenu] = useState(false);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [isProfileOpen, setProfileOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const profileRef = useRef(null);
//   const navigate = useNavigate();
//   const toggleMenu = () => setShowMenu(!showMenu);

//   // UseEffects aur handleSignOut function bilkul waisa hi hai
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [dropdownRef, profileRef]);

//   const handleSignOut = async () => {
//     await signOut(auth);
//     setProfileOpen(false);
//     navigate("/signin");
//   };

//   return (
//     <>
//       <nav className="fixed top-0 right-0 w-full bg-white/70 backdrop-blur-md shadow-md z-[99999]">
//         <div className="px-8 py-3 sm:py-0">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo Section */}
//             <div>
//               <Link
//                 to="/"
//                 className="pl-10 flex items-center gap-2 text-2xl font-bold text-gray-800"
//               >
//                 <MdOutlineTravelExplore className="text-black text-4xl" />
//                 <span>TRAVELORE</span>
//               </Link>
//             </div>

//             {/* --- THE FIX IS HERE --- */}
//             {/* Humne links ka poora code wapas yahan daal diya hai */}
//             <div className="hidden md:block">
//               <ul className="flex items-center gap-6">
//                 {NavbarLinks.map((item) => (
//                   <li key={item.name} className="relative group">
//                     {item.submenu ? (
//                       // Places Dropdown ka logic
//                       <div
//                         className="flex items-center gap-1"
//                         ref={dropdownRef}
//                       >
//                         <NavLink
//                           to={item.link}
//                           className="text-gray-700 hover:text-sky-600 font-medium px-3 py-2 rounded-md"
//                         >
//                           {item.name}
//                         </NavLink>
//                         <button
//                           onClick={() => setDropdownOpen(!isDropdownOpen)}
//                         >
//                           <FaCaretDown
//                             className={`transition-transform duration-300 text-gray-500 ${
//                               isDropdownOpen ? "rotate-180" : ""
//                             }`}
//                           />
//                         </button>
//                       </div>
//                     ) : (
//                       // Doosre links ka logic
//                       <NavLink
//                         to={item.link}
//                         className={({ isActive }) =>
//                           `font-medium px-3 py-2 rounded-md transition-colors duration-300 ${
//                             isActive
//                               ? "bg-sky-100 text-sky-600"
//                               : "text-gray-700 hover:text-sky-600"
//                           }`
//                         }
//                       >
//                         {item.name}
//                       </NavLink>
//                     )}

//                     {/* Dropdown Menu ka logic */}
//                     <AnimatePresence>
//                       {item.submenu && isDropdownOpen && (
//                         <motion.ul
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 10 }}
//                           transition={{ duration: 0.2 }}
//                           className="absolute top-full left-0 mt-3 w-52 bg-white rounded-lg shadow-xl py-2 border"
//                         >
//                           {item.sublinks.map((sublink) => (
//                             <li key={sublink.name}>
//                               <Link
//                                 to={sublink.link}
//                                 onClick={() => setDropdownOpen(false)}
//                                 className="block px-4 py-2 text-gray-700 hover:bg-sky-100 font-medium"
//                               >
//                                 {sublink.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </motion.ul>
//                       )}
//                     </AnimatePresence>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Auth Buttons aur Mobile Menu (yeh hissa bilkul theek hai) */}
//             <div className="flex items-center gap-4">
//               {currentUser ? (
//                 <div className="relative" ref={profileRef}>
//                   <button
//                     onClick={() => setProfileOpen(!isProfileOpen)}
//                     className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center text-xl font-bold border-2 border-white shadow-md hover:bg-sky-600 transition"
//                   >
//                     {userFirstName
//                       ? userFirstName.charAt(0).toUpperCase()
//                       : "U"}
//                   </button>
//                   <AnimatePresence>
//                     {isProfileOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 10 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute top-full right-0 mt-3 w-64 bg-white rounded-lg shadow-xl p-4 border"
//                       >
//                         <p className="font-bold text-lg text-gray-800">
//                           Hi, {userFirstName || "User"}!
//                         </p>
//                         <p className="text-sm text-gray-500 mb-4">
//                           Welcome to Travelore
//                         </p>
//                         <button
//                           onClick={handleSignOut}
//                           className="w-full bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
//                         >
//                           Sign Out
//                         </button>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ) : (
//                 <Link
//                   to="/signin"
//                   className="bg-sky-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-sky-600"
//                 >
//                   Sign In
//                 </Link>
//               )}
//               <div className="md:hidden">
//                 <button onClick={toggleMenu} className="text-2xl">
//                   {showMenu ? <HiMenuAlt1 /> : <HiMenuAlt3 />}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// File: src/components/Navbar/Navbar.jsx (Complete Updated Version)

import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { MdOutlineTravelExplore } from "react-icons/md";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";

export const NavbarLinks = [
  { name: "Home", link: "/" },
  {
    name: "Places",
    link: "/places",
    submenu: true,
    sublinks: [
      { name: "Historical Places", link: "/places#historical" },
      { name: "Shopping Places", link: "/places#shopping" },
      { name: "Local Food Points", link: "/places#food" },
    ],
  },
  { name: "Best Places", link: "/bestplacesPage" },
  { name: "Blogs", link: "/blogs" },
  { name: "About", link: "/about" },
];

const Navbar = () => {
  const { currentUser, userFirstName } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef, profileRef]);

  const handleSignOut = async () => {
    await signOut(auth);
    setProfileOpen(false);
    navigate("/signin");
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full bg-white/70 backdrop-blur-md shadow-md z-[99999]">
        <div className="px-8 py-3 sm:py-0">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div>
              <Link
                to="/"
                className="pl-10 flex items-center gap-2 text-2xl font-bold text-gray-800"
              >
                <MdOutlineTravelExplore className="text-black text-4xl" />
                <span>TRAVELORE</span>
              </Link>
            </div>

            {/* Desktop Navlinks Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarLinks.map((item) => (
                  <li key={item.name} className="relative group">
                    {item.submenu ? (
                      <div
                        className="flex items-center gap-1"
                        ref={dropdownRef}
                      >
                        <NavLink
                          to={item.link}
                          className="text-gray-700 hover:text-sky-600 font-medium px-3 py-2 rounded-md"
                        >
                          {item.name}
                        </NavLink>
                        <button
                          onClick={() => setDropdownOpen(!isDropdownOpen)}
                        >
                          <FaCaretDown
                            className={`transition-transform duration-300 text-gray-500 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    ) : (
                      <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                          `font-medium px-3 py-2 rounded-md transition-colors duration-300 ${
                            isActive
                              ? "bg-sky-100 text-sky-600"
                              : "text-gray-700 hover:text-sky-600"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    )}
                    <AnimatePresence>
                      {item.submenu && isDropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-3 w-52 bg-white rounded-lg shadow-xl py-2 border"
                        >
                          {item.sublinks.map((sublink) => (
                            <li key={sublink.name}>
                              <Link
                                to={sublink.link}
                                onClick={() => setDropdownOpen(false)}
                                className="block px-4 py-2 text-gray-700 hover:bg-sky-100 font-medium"
                              >
                                {sublink.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>

            {/* Auth Buttons and Mobile Menu */}
            <div className="flex items-center gap-4">
              {currentUser ? (
                // This is the user profile button (avatar)
                <div className="relative hidden md:block" ref={profileRef}>
                  <button
                    onClick={() => setProfileOpen(!isProfileOpen)}
                    className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center text-xl font-bold border-2 border-white shadow-md hover:bg-sky-600 transition"
                  >
                    {userFirstName
                      ? userFirstName.charAt(0).toUpperCase()
                      : "U"}
                  </button>
                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-3 w-64 bg-white rounded-lg shadow-xl p-4 border"
                      >
                        <p className="font-bold text-lg text-gray-800">
                          Hi, {userFirstName || "User"}!
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          Welcome to Travelore
                        </p>
                        <button
                          onClick={handleSignOut}
                          className="w-full bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                        >
                          Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // This is the Sign In button
                <Link
                  to="/signin"
                  className="hidden md:inline-block bg-sky-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-sky-600"
                >
                  Sign In
                </Link>
              )}
              {/* Mobile Hamburger Menu */}
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl">
                  {showMenu ? <HiMenuAlt1 /> : <HiMenuAlt3 />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          currentUser={currentUser}
          handleSignOut={handleSignOut}
        />
      </nav>
    </>
  );
};

export default Navbar;
