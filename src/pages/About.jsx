// src/pages/About.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaUserFriends, FaCity } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// --- IMPORT YOUR LOCAL IMAGES ---
// These images are imported from your project's assets folder.
import HeroImage from "../assets/places/wall.jpg"; // Using Lahore Fort for the hero section
import MissionImg from "../assets/places/college.jpg"; // Using Shalimar Garden for the mission section
import ProfilePic from "../assets/places/gumbad.jpg"; // Your personal profile picture

const About = () => {
  // --- ASSIGN IMPORTED IMAGES TO VARIABLES ---
  const heroBgImage = HeroImage;
  const missionImage = MissionImg;
  const profileImage = ProfilePic;

  return (
    <div className="bg-gray-50 text-gray-800 pt-11">
      {/* 1. Hero Section */}
      // This is JUST the header part. Use this to replace your old header if
      you prefer this style.
      <header
        // Corrected Tailwind classes: pt-20 adds padding to account for a navbar.
        className="relative bg-cover bg-center h-[50vh] text-white flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url(${heroBgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Our Story
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            The passion behind building a unified digital guide for the
            magnificent city of Lahore.
          </p>
        </div>
      </header>
      <main className="container mx-auto py-16 px-6 md:px-12">
        {/* 2. Our Mission Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-content">
              <h2 className="text-3xl font-bold text-black mb-4">
                Why We Built This
              </h2>
              <p className="mb-4 text-lg leading-relaxed">
                In Lahore's vibrant tourism sector, we noticed a significant
                gap: information about attractions was scattered across
                countless websites, blogs, and apps. This fragmentation made
                trip planning inefficient and often overwhelming for visitors
                and residents alike.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission was to bridge this gap by creating a single,
                beautiful, and easy-to-use platform. We wanted to build a
                centralized hub where anyone could discover Lahore's historical
                gems, bustling markets, and delicious food points without the
                usual hassle.
              </p>
            </div>
            <div className="image-content">
              <img
                src={missionImage}
                alt="Lahore Culture"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* 3. Our Approach Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold text-black mb-10">
            Our Core Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaUserFriends size={48} className="mx-auto text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                User-Centric Design
              </h3>
              <p>
                Every feature, from the cards to the map popups, was designed
                with the user's experience as the top priority.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaLaptopCode size={48} className="mx-auto text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
              <p>
                Built with a modern tech stack including React.js and Tailwind
                CSS for a fast, responsive, and scalable application.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaCity size={48} className="mx-auto text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passion for Lahore</h3>
              <p>
                This project is driven by a deep appreciation for Lahore's rich
                culture and a desire to share its beauty with the world.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Meet the Creator Section */}
        <section className="bg-white py-16 px-8 rounded-xl shadow-xl mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-4">
              Meet the Creator
            </h2>
            <img
              src={profileImage} // <-- This now uses your local image
              alt="Your Name"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-black"
            />
            <h3 className="text-2xl font-semibold">
              Hamza <span className="text-gray-500">(Your Last Name)</span>
            </h3>{" "}
            {/* <-- REPLACE WITH YOUR NAME */}
            <p className="text-lg text-gray-600 mb-4">
              Lead Developer & Visionary
            </p>
            <p className="max-w-2xl mx-auto mb-6">
              "As a final year student, I developed this platform to solve a
              real-world problem while showcasing my skills in modern web
              development. My goal is to continue expanding this project to help
              digitize Pakistan's entire tourism industry."
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </section>

        {/* 5. Call to Action */}
        <section className="text-center py-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Dive into our curated lists of places and start planning your next
            adventure in Lahore.
          </p>
          <Link
            to="/places" // Assuming your places page is at this route
            className="bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-sky-700 transition-all duration-300 shadow-lg"
          >
            Browse Places
          </Link>
        </section>
      </main>
    </div>
  );
};

export default About;
