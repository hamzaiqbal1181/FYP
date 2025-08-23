import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // Apne firebase config ka path check karein

// 1. Magic Box banayein
const AuthContext = createContext();

// 2. Ek aasan tareeqa banayein is box ko istemal karne ke liye
export const useAuth = () => {
  return useContext(AuthContext);
};

// 3. Provider component banayein jo poore app ko data dega
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userFirstName, setUserFirstName] = useState(null);
  const [loading, setLoading] = useState(true); // Taake page load hote waqt glitch na ho

  useEffect(() => {
    // Yeh Firebase ka "listening ear" hai jo hamesha sunta rehta hai
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      if (user) {
        // Agar user login hota hai, to uska naam browser ki memory se uthayein
        const storedName = localStorage.getItem("userFirstName");
        if (storedName) {
          setUserFirstName(storedName);
        }
      } else {
        // Agar user logout hota hai, to naam memory se remove kar dein
        localStorage.removeItem("userFirstName");
        setUserFirstName(null);
      }

      setLoading(false); // Check mukammal ho gaya
    });

    // Jab component khatam ho to "listening ear" ko band kar dein
    return unsubscribe;
  }, []);

  // Yeh woh data packet hai jo hum poore app ko denge
  const value = {
    currentUser,
    userFirstName,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* Jab tak check ho raha hai, app ko na dikhayein */}
      {!loading && children}
    </AuthContext.Provider>
  );
};
