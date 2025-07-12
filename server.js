const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/api/generate', (req, res) => {
  const { text } = req.body;

  // Simulate processing (Replace with real API later)
  console.log("Received:", text);
  
  return res.json({
    message: "Short video generated successfully!",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" // Dummy video URL
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});