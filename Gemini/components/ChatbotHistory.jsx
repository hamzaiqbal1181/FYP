import React, { useEffect, useState } from "react";

const ChatbotHistory = ({ firebaseUid }) => {
  const [searches, setSearches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearches = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/users?uid=${firebaseUid}`);
        const data = await res.json();
        setSearches(data);
      } catch (err) {
        console.error("Error fetching chatbot history:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearches();
  }, [firebaseUid]);

  return (
    <div style={{ padding: "1rem", background: "#f9f9f9", borderRadius: "8px" }}>
      <h3>🧾 Chatbot Search History</h3>

      {loading ? (
        <p>Loading...</p>
      ) : searches.length === 0 ? (
        <p>No saved chatbot results for <strong>{firebaseUid}</strong>.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {searches
            .filter(search => search.query && Array.isArray(search.newResults))
            .map(search => (
              <li key={search._id} style={{ marginBottom: "1rem", padding: "1rem", background: "#fff", border: "1px solid #ddd", borderRadius: "6px" }}>
                <p><strong>Search:</strong> {search.query}</p>
                <div>
                  {search.newResults.map((resultObj, idx) => (
                    <div key={idx} style={{ marginTop: "0.5rem", paddingLeft: "1rem" }}>
                      {Object.entries(resultObj).map(([key, value]) => (
                        <div key={key}><strong>{key}:</strong> {String(value)}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ChatbotHistory;
