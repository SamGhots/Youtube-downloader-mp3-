// youtubeUrlParser.js
const youtubeUrl = "";

// Regex pattern สำหรับดึง Video ID จาก URL YouTube
const videoIdRegex = /[?&]v=([^&]+)/;

async function fetchVideoInfo() {
  const videoIdMatch = youtubeUrl.match(videoIdRegex);
  if (videoIdMatch) {
    const videoId = videoIdMatch[1];

    try {
      const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
      const data = await response.json();
      const title = data.title;

      // สร้าง URL ของรูปปกโดยใช้ Video ID
      const imageUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

      console.log("Video ID:", videoId);
      console.log("Title:", title);
      console.log("Cover Image URL:", imageUrl);
    } catch (error) {
      console.error('Error fetching video information:', error);
    }
  } else {
    console.error("Unable to extract video ID from the provided URL.");
  }
}

fetchVideoInfo();
