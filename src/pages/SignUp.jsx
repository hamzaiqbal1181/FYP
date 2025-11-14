// import React, { useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
// } from "firebase/auth";
// import { auth } from "../firebase";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUserAlt, FaLock } from "react-icons/fa"; // Icons for the form

// // --- BACKGROUND IMAGE ---
// // Using a different image for variety, you can use the same one if you prefer
// import BgImage from "../assets/places/shalimar.jpg";

// // --- Your existing domain validation logic remains unchanged ---
// const allowedDomains = [
//   "gmail.com",
//   "hotmail.com",
//   "yahoo.com",
//   "outlook.com",
//   "icloud.com",
//   "mul.edu.pk",
//   "protonmail.com",
// ];
// function isValidDomain(email) {
//   const domain = email.split("@")[1]?.toLowerCase();
//   return allowedDomains.includes(domain);
// }

// const SignUp = () => {
//   // --- Your existing logic remains unchanged ---
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (!isValidDomain(email)) {
//       setError("Only approved email providers are allowed.");
//       return;
//     }
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       await sendEmailVerification(userCredential.user);
//       alert(
//         "Signup successful! A verification email has been sent to your inbox."
//       );
//       navigate("/signin");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     // --- New, modern, full-screen background ---
//     <div
//       className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center"
//       style={{ backgroundImage: `url(${BgImage})` }}
//     >
//       {/* Glassmorphism Form Card */}
//       <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md">
//         <div className="text-center text-white mb-8">
//           <h1 className="text-4xl font-bold">Travelore</h1>
//           <p className="mt-2 text-gray-200">Join Us and Explore Lahore</p>
//         </div>

//         <form onSubmit={handleSignUp}>
//           {error && (
//             <div className="text-red-300 mb-4 bg-red-900/40 p-3 rounded text-center">
//               {error}
//             </div>
//           )}

//           {/* Email Input with Icon */}
//           <div className="relative mb-4">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <FaUserAlt className="text-gray-300" />
//             </div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full pl-10 px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition-colors"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           {/* Password Input with Icon */}
//           <div className="relative mb-6">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <FaLock className="text-gray-300" />
//             </div>
//             <input
//               type="password"
//               placeholder="Password (at least 6 characters)"
//               className="w-full pl-10 px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition-colors"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition-colors mb-4"
//           >
//             Create Account
//           </button>

//           <div className="text-center text-sm text-gray-200">
//             <span>Already have an account? </span>
//             <Link to="/signin" className="hover:text-white hover:underline">
//               Sign In
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
// File: src/pages/SignUp.jsx (Updated Version with New Fields)

import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
// --- Naye icons import karein ---
import { FaUserAlt, FaLock, FaAddressBook, FaEnvelope } from "react-icons/fa";
import BgImage from "../assets/places/fort.jpg"; // Background image

// Domain validation logic waisi hi rahegi
const allowedDomains = [
  "gmail.com",
  "hotmail.com",
  "yahoo.com",
  "outlook.com",
  "icloud.com",
  "mul.edu.pk",
  "protonmail.com",
];
function isValidDomain(email) {
  const domain = email.split("@")[1]?.toLowerCase();
  return allowedDomains.includes(domain);
}

const SignUp = () => {
  // --- 1. NAYI STATES ADD KAREIN ---
  // Har naye input field ke liye ek alag state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    if (!isValidDomain(email)) {
      setError("Only approved email providers are allowed.");
      return;
    }

    // --- YEH SAB SE AHEM CHANGE HAI ---
    // Hum user ka first name local storage mein save kar rahe hain
    // taake poora app (jaise Navbar) isko baad mein istemal kar sake.
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // User create hone ke baad, uska naam save karein
      localStorage.setItem("userFirstName", firstName);

      await sendEmailVerification(userCredential.user);
      alert(
        "Signup successful! A verification email has been sent to your inbox."
      );
      // navigate("/signin");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold">Travelore</h1>
          <p className="mt-2 text-gray-200">Join Us and Explore Lahore</p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">
          {error && (
            <div className="text-red-300 bg-red-900/40 p-3 rounded text-center">
              {error}
            </div>
          )}

          {/* --- 2. NAYE INPUT FIELDS (Responsive Grid ke saath) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaUserAlt className="text-gray-300" />
              </div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full pl-10 px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            {/* Last Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaUserAlt className="text-gray-300" />
              </div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full pl-10 px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaAddressBook className="text-gray-300" />
            </div>
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full pl-10 px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaEnvelope className="text-gray-300" />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaLock className="text-gray-300" />
            </div>
            <input
              type="password"
              placeholder="Password (at least 6 characters)"
              className="w-full pl-10 px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition-colors"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-gray-200">
            <span>Already have an account? </span>
            <Link to="/signin" className="hover:text-white hover:underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
