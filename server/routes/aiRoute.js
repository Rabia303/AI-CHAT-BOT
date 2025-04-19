const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/generate', async (req, res) => {
  const { message } = req.body;
  console.log("Received message from frontend:", message); // ✅ Log it

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY`,
      {
        contents: [{ parts: [{ text: message }] }],
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply found.";
    console.log("Gemini response:", reply);
    res.json({ response: reply });

  } catch (err) {
    console.error("Gemini API error:", err.message);
    res.status(500).json({ error: "AI failed to respond." });
  }
});

module.exports = router;
