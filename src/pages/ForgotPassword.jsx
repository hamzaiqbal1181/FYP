import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase"; // Make sure this path is correct
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md"; // Email icon

// --- BACKGROUND IMAGE ---
// Using a different image for variety
import BgImage from "../assets/places/mosque.jpg";

const ForgotPassword = () => {
  // --- AAPKA PURANA LOGIC BILKUL WAISE HI HAI ---
  // Ismein koi change nahi kiya gaya hai.
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(
        "If an account with that email exists, a password reset link has been sent to your inbox."
      );
      setEmail("");
    } catch (err) {
      setError(
        "Failed to send reset email. Please check the address and try again."
      );
      console.error("Password Reset Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // --- NAYA, MODERN UI (SignIn/SignUp se match karta hua) ---
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Glassmorphism Form Card */}
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold">Travelore</h1>
          <p className="mt-2 text-gray-200">Reset Your Password</p>
        </div>

        <form onSubmit={handleResetPassword}>
          {message && (
            <div className="text-green-300 mb-4 bg-green-900/40 p-3 rounded text-center">
              {message}
            </div>
          )}
          {error && (
            <div className="text-red-300 mb-4 bg-red-900/40 p-3 rounded text-center">
              {error}
            </div>
          )}

          <p className="text-gray-200 text-center mb-4 text-sm">
            Don't worry! Just enter your email and we'll send you a reset link.
          </p>

          {/* Email Input with Icon */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MdEmail className="text-gray-300" />
            </div>
            <input
              id="email"
              type="email"
              placeholder="your-email@provider.com"
              className="w-full pl-10 px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition-colors mb-4 disabled:bg-sky-400/50"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>

          <div className="text-center text-sm text-gray-200">
            <Link to="/signin" className="hover:text-white hover:underline">
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
