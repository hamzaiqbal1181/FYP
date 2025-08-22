import React from "react";
import FooterLogo from "../../assets/logo.png";
import FooterImg from "../../assets/lahorebanner.jpg"; // Use any image you prefer
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Places",
    link: "/places",
  },
  {
    name: "Best Places",
    link: "/bestplacesPage",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Footer = () => {
  return (
    <>
      <div className="py-10 relative overflow-hidden">
        <img
          src={FooterImg}
          alt="Footer Banner"
          className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
        />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 py-5 bg-white/10 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4 ">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-h-[60px]" />
              </h1>
              <p className="text-left sm:text-justify mt-3 ">
                A majestic tapestry of Mughal history and vibrant street life,
                woven with warm hospitality and the soulful taste of tradition.
              </p>
              <br />
              <div className="flex items-center gap-3 ">
                <FaLocationArrow />
                <p>Lahore, Pakistan</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+92 123456789</p>
              </div>
              {/* Social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            {/* footer links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.name}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-sky-500 space-x-1 text-gray-700 dark:text-gray-200"
                      >
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>⮚</span>
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.name}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-sky-500 space-x-1 text-gray-700 dark:text-gray-200"
                      >
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>⮚</span>
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.name}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-sky-500 space-x-1 text-gray-700 dark:text-gray-200"
                      >
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>⮚</span>
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 from-sky-200 to-sky-500 bg-gradient-to-r text-white">
              @copyright 2025 All rights reserved || The ❤️ OF PAKISTAN
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
