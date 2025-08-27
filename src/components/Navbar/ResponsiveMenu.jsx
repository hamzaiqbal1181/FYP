import React, { useState, useRef, useEffect } from "react";
// import { TbMapSearch } from "react-icons/tb";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";

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
        } fixed bottom-0 top-0 z-20 flex h-screen w-[80%] max-w-xs flex-col justify-between bg-gray-50 px-6 pb-6 pt-10 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-lg`}
      >
        <div className="Navbar-card">
          {/* top section  */}
          <div className="flex items-center gap-3 mb-8">
            <MdOutlineTravelExplore size={60} className="text-sky-600" />
            <div>
              <h1 className="text-lg font-semibold text-gray-800">TRAVELORE</h1>
              <h1 className="text-xs text-slate-500">
                Let's Explore Historic Nature
              </h1>
            </div>
          </div>
          {/* navlinks section */}
          <div className="text-black">
            <ul className="space-y-2 text-base font-medium">
              {NavbarLinks.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  ref={item.submenu ? dropdownRef : null}
                >
                  {item.submenu ? (
                    <div>
                      <button
                        className="group flex items-center gap-2 w-full text-left px-3 py-2 rounded-md transition-colors duration-200 hover:bg-sky-100 hover:text-sky-600"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.name ? null : item.name
                          )
                        }
                      >
                        <span>{item.name}</span>
                        <span
                          className={`transition-transform duration-300 ml-1 text-gray-500 ${
                            openDropdown === item.name ? "rotate-180" : ""
                          } group-hover:text-sky-600`}
                        >
                          ▼
                        </span>
                      </button>
                      {openDropdown === item.name && (
                        <ul className="ml-2 mt-2 bg-white rounded-lg shadow border border-gray-100 py-2">
                          {item.sublinks.map((sublink) => (
                            <li key={sublink.name}>
                              <Link
                                to={sublink.link}
                                onClick={() => {
                                  setShowMenu(false);
                                  setOpenDropdown(null);
                                }}
                                className="block px-4 py-2 text-gray-700 rounded-md transition-colors duration-200 hover:bg-sky-100 hover:text-sky-600"
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
                      className="block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-sky-100 hover:text-sky-600"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            {/* Dropdown section */}
            {/* <div className="mt-8">
              <label
                htmlFor="dropdown-menu"
                className="block mb-2 text-base font-semibold text-gray-700"
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
            </div> */}
            <div className="mt-10 text-center px-2">
              <p className="italic text-gray-800 text-base font-semibold">
                Travel is the only thing you buy that makes you richer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
