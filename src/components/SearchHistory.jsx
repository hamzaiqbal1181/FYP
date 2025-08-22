// src/components/SearchHistory.jsx
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { saveSearch } from "../services/searchService";
import { auth } from "../firebase";

const sanitizeInput = (str) => str.trim().replace(/\s+/g, " ");

const SearchHistory = () => {
  const [searches, setSearches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firebaseUid, setFirebaseUid] = useState(null);

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFirebaseUid(user.uid.trim());
      } else {
        setFirebaseUid(null);
        setSearches([]);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  // Fetch searches
  useEffect(() => {
    if (!firebaseUid) return;

    const fetchSearches = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:5000/api/users?uid=${firebaseUid}`
        );
        if (!res.ok) throw new Error("Failed to fetch search history");
        const data = await res.json();
        console.log("Fetched searches:", data); // Debug log
        setSearches(data);
      } catch (err) {
        console.error("Error fetching searches:", err);
        setSearches([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSearches();
  }, [firebaseUid]);

  const handleSaveSearch = async (query, botReply) => {
    if (!firebaseUid) return;

    const cleanedQuery = sanitizeInput(query);
    const cleanedTerm = cleanedQuery.split(" ")[0];

    const searchData = {
      firebaseUid: firebaseUid.trim(),
      term: cleanedTerm,
      query: cleanedQuery,
      newResults: [{ result: botReply }],
    };

    try {
      await saveSearch(searchData);
      setSearches((prev) => [searchData, ...prev]);
    } catch (err) {
      console.error("Failed to save search:", err);
    }
  };

  if (!firebaseUid) {
    return <p>Please log in to view your search history.</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="container mx-auto p-4 pt-24"
      // style={{
      //   padding: "1rem",
      //   maxWidth: "800px",
      //   margin: "0 auto",
      //   backgroundColor: "#1e1f22", // Change the background color here
      // }}
    >
      <h2>📚 Search History</h2>

      {searches.length === 0 ? (
        <p>
          No saved searches for <strong>{firebaseUid}</strong>.
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {searches
            .filter(
              (search) =>
                (search.query || search.term) &&
                Array.isArray(search.newResults)
            )
            .map((search, idx) => (
              <li
                key={search._id || idx}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "1rem",
                  marginBottom: "1rem",
                  background: "#fafafa",
                }}
              >
                <p>
                  <strong>Search:</strong>{" "}
                  {search.query || search.term || "[No query]"}
                </p>

                <div style={{ marginTop: "0.5rem" }}>
                  <strong>Results:</strong>
                  <ul style={{ paddingLeft: "1rem", marginTop: "0.25rem" }}>
                    {search.newResults.map((res, i) => {
                      const resultText =
                        res.result || res.new || "[No result text]";
                      return <li key={i}>{resultText}</li>;
                    })}
                  </ul>
                </div>
              </li>
            ))}
        </ul>
      )}

      <button
        onClick={() =>
          handleSaveSearch("Example query", "Example Gemini AI result")
        }
        style={{ marginTop: "1rem" }}
      >
        Save Example Search
      </button>
    </div>
  );
};

export default SearchHistory;
