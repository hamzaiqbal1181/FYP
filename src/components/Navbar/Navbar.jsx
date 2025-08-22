import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthState from "../../hooks/useAuthState";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
// import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion, AnimatePresence } from "framer-motion"; // <-- Animation ke liye import

export const NavbarLinks = [
  { name: "Home", link: "/" },
  {
    name: "Places",
    link: "/places",
    submenu: true,
    sublinks: [
      { name: "Historical Places", link: "/places#historical" }, // Example with anchor link
      { name: "Shopping Places", link: "/places#shopping" },
      { name: "Local Food Points", link: "/places#food" },
    ],
  },
  { name: "Best Places", link: "/bestplacesPage" },
  { name: "Blogs", link: "/blogs" },
  { name: "About", link: "/about" },
];

const Navbar = () => {
  // --- AAPKA PURANA LOGIC BILKUL WAISE HI HAI ---
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useAuthState();

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  return (
    <>
      {/* --- STYLE UPDATE: Floating Glassmorphism Navbar --- */}
      <nav className="fixed top-0 right-0 w-full bg-white/70 backdrop-blur-md shadow-md z-[99999]">
        {/* --- REMOVED: Uppar wali skyblue border hata di gayi hai --- */}

        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div>
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="pl-10 flex items-center gap-2 text-2xl font-bold text-gray-800"
              >
                <MdOutlineTravelExplore className="text-black text-6xl" />
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
                          className="text-gray-700 hover:text-sky-600 font-medium pb-2"
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
                          `text-gray-700 hover:text-sky-600 font-medium pb-2 relative
                           ${isActive ? "text-sky-600" : ""}`
                        }
                      >
                        {item.name}
                        {/* --- STYLE UPDATE: Animated Underline for Active Link --- */}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                        <NavLink
                          to={item.link}
                          className={({ isActive }) =>
                            isActive
                              ? "absolute bottom-0 left-0 w-full h-0.5 bg-sky-600"
                              : ""
                          }
                        ></NavLink>
                      </NavLink>
                    )}

                    {/* --- STYLE UPDATE: Animated Dropdown Menu --- */}
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
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-600"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/signin"
                  className="bg-sky-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-sky-600"
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
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
