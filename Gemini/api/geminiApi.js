import axios from "axios";

const GEMINI_API_URL = "https://api.gemini.com/v1/chat"; // 🔁 Replace with actual Gemini API endpoint
// const BACKEND_API_URL = "http://localhost:5000/api/users"; // Your Express backend
const BACKEND_API_URL = "https://fyp-b.onrender.com"; // Your Express backend

export const fetchHistoricalPlaces = async (query, firebaseUid) => {
  try {
    // 1. Send request to Gemini API
    const geminiResponse = await axios.post(GEMINI_API_URL, {
      prompt: `Tell me about historical places in Lahore, Pakistan. ${query}`,
      // Include other params as needed (e.g., model, temperature, etc.)
    });

    const aiResult =
      geminiResponse.data?.text ||
      geminiResponse.data?.result ||
      "No response received.";

    // 2. Prepare payload to save to backend
    const payload = {
      firebaseUid,
      query,
      newResults: [{ result: aiResult }],
    };

    // 3. Save to backend
    const backendResponse = await axios.post(BACKEND_API_URL, payload);

    // 4. Return both AI and backend response (if needed)
    return {
      aiResponse: aiResult,
      savedSearch: backendResponse.data,
    };
  } catch (error) {
    console.error("❌ Error in AI or backend request:", error);
    throw error;
  }
};

// const GEMINI_API_URL =
//   "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
//   import.meta.env.VITE_GEMINI_API_KEY;

// export const fetchHistoricalPlaces = async (query) => {
//   try {
//     const response = await fetch(GEMINI_API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [
//               {
//                 text: `Tell me about historical places in Lahore, Pakistan. ${query}`,
//               },
//             ],
//           },
//         ],
//       }),
//     });

//     const data = await response.json();
//     console.log("Gemini raw response:", data);

//     return (
//       data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "No response received from Gemini."
//     );
//   } catch (error) {
//     console.error("❌ Error calling Gemini API:", error);
//     return "Sorry, I couldn't fetch information from Gemini.";
//   }
// };
