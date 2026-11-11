
import React from "react";
import "./LanguageVideo.css";

const videos = {
  en: {
    title: "Learn El Niño in English",
    description: "An animated explanation by the World Meteorological Organization.",
    url: "https://www.youtube.com/watch?v=AcwpLNi70ts",
    button: "Watch English Video"
  },
  te: {
    title: "తెలుగులో ఎల్ నినో గురించి తెలుసుకోండి",
    description: "ఎల్ నినో ఏర్పడే విధానం మరియు దాని వాతావరణ ప్రభావాల గురించి తెలుసుకోండి.",
    url: "https://www.youtube.com/watch?v=i8Wk9KshOQQ",
    button: "తెలుగు వీడియో చూడండి"
  },
  hi: {
    title: "अल नीनो को हिंदी में समझें",
    description: "अल नीनो कैसे बनता है और भारत के मानसून पर इसका क्या प्रभाव हो सकता है।",
    url: "https://www.youtube.com/watch?v=NX_SELUkAQU",
    button: "हिंदी वीडियो देखें"
  }
};

function LanguageVideo({ language }) {
  const video = videos[language];

  return (
    <section className="language-video-section">
      <div className="language-video-container">
        <span className="video-eyebrow">
          LEARN MORE
        </span>

        <h2>{video.title}</h2>

        <p>{video.description}</p>

        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="language-video-link"
        >
          {video.button} ↗
        </a>
      </div>
    </section>
  );
}

export default LanguageVideo;
