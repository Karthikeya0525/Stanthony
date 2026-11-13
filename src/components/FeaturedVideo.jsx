
import React from "react";
import "./FeaturedVideo.css";

function FeaturedVideo() {
  return (
    <section className="featured-video">
      <video
        className="featured-video-player"
        src="/videos/school-intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
      >
        Your browser does not support HTML5 video.
      </video>
    </section>
  );
}

export default FeaturedVideo;
