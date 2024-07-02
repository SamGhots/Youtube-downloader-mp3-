import React, { useState } from 'react';
import icon_download from "./download.svg";
import './content.css';

const Content = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState(""); // State for storing the MP3 URL

  const handleDownload = async () => {
    try {
      if (!videoUrl) {
        throw new Error("Please enter a YouTube video URL");
      }

      const downloadUrl = `http://localhost:3001/download?url=${encodeURIComponent(videoUrl)}`;
      const response = await fetch(downloadUrl, {
        method: "GET",
        credentials: "include", // Include credentials if using cookies or sessions
      });

      if (!response.ok) {
        throw new Error("Failed to download audio");
      }

      const data = await response.json(); // Parse JSON response
      if (data.url) {
        window.location.href = data.url; // Redirect to the audio URL
      } else {
        throw new Error("Invalid response format - missing audio URL");
      }
    } catch (error) {
      console.error("Error initiating download:", error);
      // Handle error state in your application (e.g., show error message)
    }
  };

  return (
    <div className="content">
      <div className="linkField">
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter YouTube video URL"
          style={{ width: "40%" }}
        />
        <button onClick={handleDownload} style={{ width: "30%", backgroundColor: "#FF8B00" }}>
          <img src={icon_download} alt="Download icon" /> Download
        </button>
        {/* Optionally display the audio player */}
        {audioUrl && (
          <div>
            <audio controls>
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
