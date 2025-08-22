const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export async function chatWithGemini(message, apiKey) {
  const response = await fetch(GEMINI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: message }],
        },
      ],
    }),
  });

  let data;
  try {
    data = await response.json();
  } catch (e) {
    throw new Error("Invalid JSON response from Gemini API");
  }

  if (!response.ok) {
    // Log the error details for debugging
    console.error("Gemini API error:", data);
    throw new Error(data.error?.message || "Failed to fetch from Gemini API");
  }

  return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
}
