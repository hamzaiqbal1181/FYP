// src/components/SearchForm.jsx
import React, { useState } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [resultText, setResultText] = useState("");
  const [firebaseUid, setFirebaseUid] = useState("KOI_BHI_UNIQUE_USER_23"); // Normally from auth

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchData = {
      firebaseUid,
      query,
      newResults: [{ result: resultText }],
    };

    try {
      const res = await fetch("http://localhost:5000/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchData),
      });

      const data = await res.json();
      console.log("Saved search:", data);
      alert("✅ Search saved successfully!");
      setQuery("");
      setResultText("");
    } catch (err) {
      console.error("❌ Error saving search:", err);
      alert("Something went wrong while saving search.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "600px", margin: "1rem auto" }}
    >
      <h2>🔍 Save New Search</h2>

      <input
        type="text"
        placeholder="Search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
        style={{
          display: "block",
          marginBottom: "0.5rem",
          width: "100%",
          padding: "0.5rem",
        }}
      />

      <input
        type="text"
        placeholder="Result text"
        value={resultText}
        onChange={(e) => setResultText(e.target.value)}
        required
        style={{
          display: "block",
          marginBottom: "0.5rem",
          width: "100%",
          padding: "0.5rem",
        }}
      />

      <button type="submit" style={{ padding: "0.5rem 1rem" }}>
        Save Search
      </button>
    </form>
  );
};

export default SearchForm;
