
import React from "react";
import "./FeaturedVideo.css";

function FeaturedVideo({ type, videoUrl }) {
  const getEmbedUrl = (url) => {
    try {
      const parsed = new URL(url);

      if (parsed.hostname.includes("youtu.be")) {
        return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
      }

      if (
        parsed.hostname.includes("youtube.com") ||
        parsed.hostname.includes("m.youtube.com")
      ) {
        const videoId =
          parsed.searchParams.get("v") ||
          parsed.pathname.split("/").filter(Boolean).pop();

        return `https://www.youtube.com/embed/${videoId}`;
      }

      return url;
    } catch {
      return url;
    }
  };

  return (
    <section className="featured-video-section">
      <div className="video-container">
        {type === "youtube" ? (
          <iframe
            src={getEmbedUrl(videoUrl)}
            title="El Niño Featured Video"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <video controls playsInline preload="metadata">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        )}
      </div>
    </section>
  );
}

export default FeaturedVideo;
