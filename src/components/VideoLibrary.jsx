
import React from "react";
import "./VideoLibrary.css";

const videoLibrary = {
  en: {
    heading: "Explore El Niño in English",
    subtitle: "Learn about El Niño through educational videos.",
    videos: [
      {
        id: "AcwpLNi70ts",
        title: "El Niño – Animated Explanation",
        channel: "World Meteorological Organization",
        description: "An animated explanation of El Niño."
      },
      {
        id: "57S0Rw9L_hw",
        title: "What Is El Niño?",
        channel: "NOAA",
        description: "Understand ocean warming and its effects on weather."
      },
      {
        id: "69N494UIlS8",
        title: "The Birth and Death of an El Niño",
        channel: "NASA Earth Observatory",
        description: "See how an El Niño event develops and fades."
      },
      {
        id: "d6s0T0m3F8s",
        title: "El Niño",
        channel: "National Geographic",
        description: "Learn about this important climate phenomenon."
      },
      {
        id: "VvEqBYWubJY",
        title: "Visualizing El Niño",
        channel: "NASA Scientific Visualization Studio",
        description: "Visualize changing ocean temperatures."
      }
    ]
  },

  te: {
    heading: "తెలుగులో ఎల్ నినో వీడియోలు",
    subtitle: "ఎల్ నినో గురించి తెలుగులో తెలుసుకోండి.",
    videos: [
      {
        id: "i8Wk9KshOQQ",
        title: "ఎల్ నినో ఎలా వస్తుంది?",
        channel: "TV9 Telugu",
        description: "ఎల్ నినో ఏర్పడే విధానం గురించి వివరణ."
      },
      {
        id: "NVmsIRiGJqo",
        title: "ముంచేసిన ఎల్ నినో",
        channel: "TV9 Telugu",
        description: "ఎల్ నినో ప్రభావాలపై చర్చ."
      },
      {
        id: "X1JYU9fpaaM",
        title: "ఎల్ నినో – లా నినా అంటే ఏమిటి?",
        channel: "Naveen Tips and Tricks",
        description: "ఎల్ నినో మరియు లా నినా మధ్య తేడాలు."
      },
      {
        id: "N5XU5Xzyp1c",
        title: "భారతదేశంపై ఎల్ నినో ప్రభావం",
        channel: "Telugu Geography",
        description: "ఎల్ నినో మరియు భారత వర్షాకాలం."
      },
      {
        id: "cNhThSVCtaE",
        title: "ఎల్ నినో ప్రభావం – నీటి కొరత",
        channel: "AIKooKoo",
        description: "వర్షాలు, వ్యవసాయం మరియు నీటి సరఫరాపై ప్రభావం."
      },
    
      {
        id: "i8Wk9KshOQQ",
        title: "ఎల్ నినో ఎలా వస్తుంది?",
        channel: "TV9 Telugu",
        description: "ఎల్ నినో ఏర్పడే విధానం గురించి వివరణ."
      },
      {
        id: "NVmsIRiGJqo",
        title: "ముంచేసిన ఎల్ నినో",
        channel: "TV9 Telugu",
        description: "ఎల్ నినో ప్రభావాలపై చర్చ."
      },
      {
        id: "PyefNGJIkr4",
        title: "తెలంగాణపై ఎల్ నినో ప్రభావం?",
        channel: "Tolivelugu",
        description: "తెలంగాణ జిల్లాల్లో వర్షాభావ పరిస్థితులపై నివేదిక."
      },
      {
        id: "_SHu8bG_FEM",
        title: "తెలంగాణలో వర్షాలపై ఎల్ నినో ప్రభావం",
        channel: "V6 News",
        description: "రాబోయే రోజుల్లో వర్షపాతంలో మార్పులపై నివేదిక."
      },
      {
        id: "FyBXqvAn5GA",
        title: "తెలంగాణలో తగ్గుతున్న వర్షపాతం",
        channel: "V6 News",
        description: "ఎల్ నినో మరియు వర్షపాత మార్పులపై వార్తా కథనం."
      },
      {
        id: "IO96Rywwd9I",
        title: "ఎల్ నినోను ఎదుర్కొనేందుకు వ్యవసాయ ప్రణాళికలు",
        channel: "YSTV Telugu",
        description: "వ్యవసాయ చెరువులు మరియు నీటి సంరక్షణ చర్యలు."
      },
      {
        id: "vZ97O3X3zR8",
        title: "హైదరాబాద్‌కు నీటి గండం?",
        channel: "RTV",
        description: "హైదరాబాద్ నీటి లభ్యతపై ఎల్ నినో ప్రభావం."
      }
]

  },

  hi: {
    heading: "अल नीनो के बारे में हिंदी वीडियो",
    subtitle: "इन वीडियो से अल नीनो को समझें।",
    videos: [
      {
        id: "BRyH8xs3kpE",
        title: "एल नीनो क्या होता है?",
        channel: "Magnet Brains Hindi",
        description: "अल नीनो की मूल वैज्ञानिक जानकारी।"
      },
      {
        id: "HhOasA5cG-g",
        title: "अल नीनो और ला नीना कैसे बनते हैं?",
        channel: "Quick IAS",
        description: "अल नीनो बनने की प्रक्रिया और मानसून पर प्रभाव।"
      },
      {
        id: "iVsMjfJKVus",
        title: "अल नीनो क्या है?",
        channel: "TV9 Bharatvarsh",
        description: "अल नीनो और भारत के मौसम पर संभावित प्रभाव।"
      },
      {
        id: "GlWMLhdEL4I",
        title: "अल नीनो 2027 – मौसम पर प्रभाव",
        channel: "India News",
        description: "अल नीनो से जुड़े संभावित वैश्विक मौसम परिवर्तन।"
      }
    ]
  }
};

function VideoLibrary({ language }) {
  const content = videoLibrary[language] || videoLibrary.en;

  return (
    <section className="video-library">
      <div className="video-library-container">

        <div className="video-library-heading">
          <span className="video-library-label">
            VIDEO LIBRARY
          </span>

          <h2>{content.heading}</h2>

          <p>{content.subtitle}</p>
        </div>

        <div className="video-grid">
          {content.videos.map((video) => (
            <a
              className="video-card"
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="video-thumbnail">
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`Thumbnail for ${video.title}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <span className="play-icon">▶</span>
              </div>

              <div className="video-card-content">
                <span className="video-channel">
                  {video.channel}
                </span>

                <h3>{video.title}</h3>

                <p>{video.description}</p>

                <span className="watch-link">
                  Watch Video ↗
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default VideoLibrary;
