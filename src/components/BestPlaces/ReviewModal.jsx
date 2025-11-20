// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaStar, FaTimes, FaUserCircle } from "react-icons/fa";
// import {
//   collection,
//   addDoc,
//   query,
//   where,
//   onSnapshot,
//   orderBy,
//   serverTimestamp
// } from "firebase/firestore";
// import { auth, db } from "../../firebase"; // Adjust path to your firebase.js
// import { useAuthState } from "react-firebase-hooks/auth"; // Helpful hook: npm install react-firebase-hooks

// const ReviewModal = ({ isOpen, onClose, place }) => {
//   const [user] = useAuthState(auth); // Get current logged-in user
//   const [reviews, setReviews] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const [newRating, setNewRating] = useState(0);
//   const [hover, setHover] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // 1. Fetch Reviews in Real-time
//   useEffect(() => {
//     if (place?.id && isOpen) {
//       const q = query(
//         collection(db, "reviews"),
//         where("placeId", "==", place.id),
//         orderBy("createdAt", "desc")
//       );

//       const unsubscribe = onSnapshot(q, (snapshot) => {
//         const reviewsData = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setReviews(reviewsData);
//       });

//       return () => unsubscribe();
//     }
//   }, [place, isOpen]);

//   // 2. Handle Submit Review
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user) return alert("Please sign in to leave a review!");
//     if (newRating === 0) return alert("Please select a star rating!");

//     setLoading(true);
//     try {
//       await addDoc(collection(db, "reviews"), {
//         placeId: place.id,
//         placeName: place.title,
//         userId: user.uid,
//         userEmail: user.email, // We will use email as name since you only have email
//         rating: newRating,
//         comment: newComment,
//         createdAt: serverTimestamp(),
//       });
//       setNewComment("");
//       setNewRating(0);
//     } catch (error) {
//       console.error("Error adding review: ", error);
//       alert("Failed to submit review.");
//     }
//     setLoading(false);
//   };

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
//         >
//           {/* Header */}
//           <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 flex justify-between items-center text-white">
//             <h3 className="text-xl font-bold">Reviews for {place?.title}</h3>
//             <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition">
//               <FaTimes size={20} />
//             </button>
//           </div>

//           {/* Body - Scrollable */}
//           <div className="p-6 overflow-y-auto flex-1">

//             {/* Submission Form */}
//             <div className="mb-8 border-b pb-6">
//               <h4 className="font-semibold text-gray-700 mb-3">Share your experience</h4>
//               {user ? (
//                 <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//                   {/* Star Rating Input */}
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, index) => {
//                       const ratingValue = index + 1;
//                       return (
//                         <label key={index}>
//                           <input
//                             type="radio"
//                             className="hidden"
//                             value={ratingValue}
//                             onClick={() => setNewRating(ratingValue)}
//                           />
//                           <FaStar
//                             className="cursor-pointer transition-colors"
//                             color={ratingValue <= (hover || newRating) ? "#ffc107" : "#e4e5e9"}
//                             size={25}
//                             onMouseEnter={() => setHover(ratingValue)}
//                             onMouseLeave={() => setHover(null)}
//                           />
//                         </label>
//                       );
//                     })}
//                   </div>

//                   <textarea
//                     className="w-full p-3 border rounded-lg focus:outline-none focus:border-sky-500 resize-none"
//                     rows="3"
//                     placeholder="Write your thoughts here..."
//                     value={newComment}
//                     onChange={(e) => setNewComment(e.target.value)}
//                     required
//                   ></textarea>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition w-fit self-end disabled:bg-gray-400"
//                   >
//                     {loading ? "Posting..." : "Post Review"}
//                   </button>
//                 </form>
//               ) : (
//                 <p className="text-red-500 text-sm">Please log in to write a review.</p>
//               )}
//             </div>

//             {/* Existing Reviews List */}
//             <div className="space-y-4">
//               <h4 className="font-bold text-gray-800 text-lg">Community Reviews ({reviews.length})</h4>
//               {reviews.length === 0 ? (
//                 <p className="text-gray-500 italic">No reviews yet. Be the first!</p>
//               ) : (
//                 reviews.map((review) => (
//                   <div key={review.id} className="bg-gray-50 p-4 rounded-xl flex gap-4 items-start">
//                     <div className="mt-1 text-gray-400">
//                       <FaUserCircle size={32} />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex justify-between items-center">
//                         <span className="font-bold text-gray-800 text-sm">
//                           {review.userEmail.split('@')[0]} {/* Show part of email */}
//                         </span>
//                         <span className="text-xs text-gray-400">
//                           {review.createdAt?.toDate().toLocaleDateString()}
//                         </span>
//                       </div>
//                       <div className="flex text-yellow-400 text-xs my-1">
//                         {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
//                       </div>
//                       <p className="text-gray-600 text-sm">{review.comment}</p>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// };

// export default ReviewModal;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaTimes, FaUserCircle } from "react-icons/fa";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ReviewModal = ({ isOpen, onClose, place }) => {
  const [user] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1. Fetch Reviews
  useEffect(() => {
    if (place?.id && isOpen) {
      // console.log("Fetching reviews for:", place.id); // Debug Log

      const q = query(
        collection(db, "reviews"),
        where("placeId", "==", place.id),
        orderBy("createdAt", "desc")
      );

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const reviewsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          // console.log("Reviews fetched:", reviewsData); // Debug Log
          setReviews(reviewsData);
        },
        (error) => {
          console.error("Error fetching reviews:", error); // Check your console for this!
        }
      );

      return () => unsubscribe();
    }
  }, [place, isOpen]);

  // 2. Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please sign in to leave a review!");
    if (newRating === 0) return alert("Please select a star rating!");

    setLoading(true);
    try {
      await addDoc(collection(db, "reviews"), {
        placeId: place.id,
        placeName: place.title,
        userId: user.uid,
        // Safety check: if email is null, use 'Anonymous'
        userEmail: user.email || "Anonymous User",
        rating: newRating,
        comment: newComment,
        createdAt: serverTimestamp(),
      });
      setNewComment("");
      setNewRating(0);
    } catch (error) {
      console.error("Error adding review: ", error);
      alert("Failed to submit review.");
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 flex justify-between items-center text-white">
            <h3 className="text-xl font-bold">Reviews for {place?.title}</h3>
            <button
              onClick={onClose}
              className="hover:bg-white/20 p-2 rounded-full transition"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
            {/* Form */}
            <div className="mb-8 border-b pb-6">
              <h4 className="font-semibold text-gray-700 mb-3">
                Share your experience
              </h4>
              {user ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => {
                      const ratingValue = index + 1;
                      return (
                        <label key={index}>
                          <input
                            type="radio"
                            className="hidden"
                            value={ratingValue}
                            onClick={() => setNewRating(ratingValue)}
                          />
                          <FaStar
                            className="cursor-pointer transition-colors"
                            color={
                              ratingValue <= (hover || newRating)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            size={25}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                          />
                        </label>
                      );
                    })}
                  </div>

                  <textarea
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-sky-500 resize-none text-black"
                    rows="3"
                    placeholder="Write your thoughts here..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                  ></textarea>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition w-fit self-end disabled:bg-gray-400"
                  >
                    {loading ? "Posting..." : "Post Review"}
                  </button>
                </form>
              ) : (
                <p className="text-red-500 text-sm">
                  Please log in to write a review.
                </p>
              )}
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              <h4 className="font-bold text-gray-800 text-lg">
                Community Reviews ({reviews.length})
              </h4>

              {reviews.length === 0 ? (
                <p className="text-gray-500 italic">
                  No reviews yet. Be the first!
                </p>
              ) : (
                reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-gray-50 p-4 rounded-xl flex gap-4 items-start shadow-sm"
                  >
                    <div className="mt-1 text-gray-400">
                      <FaUserCircle size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-800 text-sm">
                          {/* Handle case where email is null */}
                          {review.userEmail
                            ? review.userEmail.split("@")[0]
                            : "User"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {/* FIX: Check if createdAt exists before calling toDate() */}
                          {review.createdAt
                            ? review.createdAt.toDate().toLocaleDateString()
                            : "Just now"}
                        </span>
                      </div>
                      <div className="flex text-yellow-400 text-xs my-1">
                        {[...Array(review.rating || 0)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm">{review.comment}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ReviewModal;
