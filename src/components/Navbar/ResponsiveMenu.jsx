import React, { useState, useRef, useEffect } from "react";
import { TbMapSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
// You are already importing the correct, shared list of links here.
import { NavbarLinks } from "./Navbar";

// --- FIX #1: DELETED the entire local 'navbarlinks' array. ---
// We will use the imported NavbarLinks array instead to keep all links in one place.
/*
const navbarlinks = [
  { name: "Home", link: "/" },
  { name: "Places", link: "/places" },
  { name: "Best Places", link: "/bestplacespage" },
  { name: "Blogs", link: "/blogs" },
  { name: "About", link: "/about" },
];
*/

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);
  return (
    <>
      <div
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-50 px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
      >
        <div className="Navbar-card">
          {/* top section  */}
          <div>
            <div className="flex items-center justify-start gap-4">
              <TbMapSearch size={50} className="text-gray-500" />
              <div className="text-gray-500">
                <h1>Welcome!</h1>
                <h1 className="text-sm text-slate-500">Let's Explore</h1>
              </div>
            </div>
          </div>
          {/* navlinks section */}
          <div className="text-black mt-12">
            <ul className="space-y-4 text-xl">
              {NavbarLinks.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  ref={item.submenu ? dropdownRef : null}
                >
                  {item.submenu ? (
                    <div>
                      <button
                        className="group flex items-center gap-2 w-full text-left mb-5 px-4 py-2 rounded-md transition-colors duration-200 hover:bg-sky-100 hover:text-sky-600 font-medium"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.name ? null : item.name
                          )
                        }
                      >
                        <span className="flex items-center">
                          {item.name}
                          <span
                            className={`transition-transform duration-300 ml-2 text-gray-500 ${
                              openDropdown === item.name ? "rotate-180" : ""
                            } group-hover:text-sky-600`}
                          >
                            ▼
                          </span>
                        </span>
                      </button>
                      {openDropdown === item.name && (
                        <ul className="ml-4 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                          {item.sublinks.map((sublink) => (
                            <li key={sublink.name}>
                              <Link
                                to={sublink.link}
                                onClick={() => {
                                  setShowMenu(false);
                                  setOpenDropdown(null);
                                }}
                                className="block px-4 py-2 text-gray-700 rounded-md transition-colors duration-200 hover:bg-sky-100 hover:text-sky-600 font-medium"
                              >
                                {sublink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={() => setShowMenu(false)}
                      className="mb-5 inline-block"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            {/* Dropdown section */}
            <div className="mt-8">
              <label
                htmlFor="dropdown-menu"
                className="block mb-2 text-lg font-semibold text-gray-700"
              >
                More Options
              </label>
              <select
                id="dropdown-menu"
                className="w-full p-2 border rounded-lg bg-white text-gray-700"
              >
                <option value="">Select an option</option>
                <option value="profile">Profile</option>
                <option value="settings">Settings</option>
                <option value="help">Help</option>
                <option value="logout">Logout</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
