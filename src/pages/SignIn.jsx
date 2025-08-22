import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa"; // Icons for the form

// --- BACKGROUND IMAGE ---
// You can change this to any image you like from your assets
import BgImage from "../assets/places/fort.jpg";

const SignIn = () => {
  // --- Your existing logic remains unchanged ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    // --- New, modern, full-screen background ---
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Glassmorphism Form Card */}
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold">Travelore</h1>
          <p className="mt-2 text-gray-200">
            Welcome Back! Sign in to continue
          </p>
        </div>

        <form onSubmit={handleSignIn}>
          {error && (
            <div className="text-red-300 mb-4 bg-red-900/40 p-3 rounded text-center">
              {error}
            </div>
          )}

          {/* Email Input with Icon */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaUserAlt className="text-gray-300" />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input with Icon */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaLock className="text-gray-300" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition-colors mb-4"
          >
            Sign In
          </button>

          <div className="flex justify-between text-sm text-gray-200">
            <Link to="/signup" className="hover:text-white hover:underline">
              Create an account
            </Link>
            <Link
              to="/forgot-password"
              className="hover:text-white hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
