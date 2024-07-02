const cors = require("cors");
const express = require("express");
const app = express();
const ytdl = require("ytdl-core");

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend URL
  credentials: true, // Enable credentials (if using cookies or sessions)
};

app.use(cors(corsOptions));

// Rest of your routes and middleware

// Example download route
app.get("/download", async (req, res, next) => {
  try {
    const videoUrl = req.query.url;
    const videoInfo = await ytdl.getInfo(videoUrl);
    const audioFormats = ytdl.filterFormats(videoInfo.formats, "audioonly");

    if (audioFormats.length > 0) {
      const audioUrl = audioFormats[0].url; // Assuming you want the first available audio format
      res.json({ url: audioUrl }); // Respond with JSON
    } else {
      throw new Error("No audio formats available");
    }
  } catch (error) {
    next(error); // Pass errors to the error handler middleware
  }
});

const port = 3001; // Change to your desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
