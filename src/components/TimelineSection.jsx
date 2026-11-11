
import React, { useState } from "react";
import "./TimelineSection.css";

const events = [
  {
    year: "1982–83",
    label: "Major El Niño",
    title: "A major global climate event",
    description:
      "One of the major El Niño events of the twentieth century. It was associated with severe droughts and fires in some regions and flooding in others.",
    fact: "El Niño can produce very different weather impacts in different parts of the world."
  },
  {
    year: "1997–98",
    label: "Major El Niño",
    title: "The 1997–98 El Niño",
    description:
      "A major event that affected weather patterns around the world. Its impacts included heavy rainfall in some regions and drought conditions in others.",
    fact: "The effects of El Niño depend on geography, season and other climate factors."
  },
  {
    year: "2015–16",
    label: "Major El Niño",
    title: "The 2015–16 El Niño",
    description:
      "One of the major El Niño events of recent decades. Scientists studied its influence on global temperature, rainfall and extreme weather.",
    fact: "Satellites and ocean observations help scientists monitor El Niño."
  },
  {
    year: "2023–24",
    label: "Strong El Niño",
    title: "The 2023–24 El Niño",
    description:
      "A strong El Niño event that influenced global climate conditions and contributed to unusually warm global temperatures.",
    fact: "Modern forecasting systems help scientists monitor the development and weakening of El Niño."
  }
];

const translations = {
  en: {
    eyebrow: "EXPLORE CLIMATE HISTORY",
    title: "The El Niño Timeline",
    subtitle: "Travel through some of the major El Niño events in modern history. Select a year to explore.",
    impact: "Why it matters",
    select: "SELECT AN EVENT",
    note: "Historical climate events are not exact predictions of future conditions."
  },
  te: {
    eyebrow: "వాతావరణ చరిత్రను తెలుసుకోండి",
    title: "ఎల్ నినో కాలక్రమం",
    subtitle: "చరిత్రలోని ముఖ్యమైన ఎల్ నినో సంఘటనలను తెలుసుకోండి. ఒక సంవత్సరాన్ని ఎంచుకోండి.",
    impact: "ఇది ఎందుకు ముఖ్యం?",
    select: "ఒక సంఘటనను ఎంచుకోండి",
    note: "గత వాతావరణ సంఘటనలు భవిష్యత్తు పరిస్థితులకు ఖచ్చితమైన అంచనాలు కావు."
  },
  hi: {
    eyebrow: "जलवायु का इतिहास जानें",
    title: "अल नीनो की समयरेखा",
    subtitle: "इतिहास की प्रमुख अल नीनो घटनाओं को जानें। किसी वर्ष को चुनें।",
    impact: "यह क्यों महत्वपूर्ण है?",
    select: "एक घटना चुनें",
    note: "ऐतिहासिक घटनाएँ भविष्य के मौसम की सटीक भविष्यवाणी नहीं करतीं।"
  }
};

function TimelineSection({ language = "en" }) {
  const [selected, setSelected] = useState(1);

  const text = translations[language] || translations.en;
  const event = events[selected];

  return (
    <section className="timeline-section">
      <div className="timeline-container">

        <div className="timeline-heading">
          <span>{text.eyebrow}</span>
          <h2>{text.title}</h2>
          <p>{text.subtitle}</p>
        </div>

        <div className="timeline-track">
          {events.map((item, index) => (
            <button
              key={item.year}
              className={`timeline-point ${
                selected === index ? "selected" : ""
              }`}
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
            >
              <span className="timeline-dot"></span>
              <strong>{item.year}</strong>
              <small>{item.label}</small>
            </button>
          ))}
        </div>

        <article className="timeline-detail">
          <div className="timeline-detail-top">
            <span>{text.select}</span>
            <strong>{event.year}</strong>
          </div>

          <h3>{event.title}</h3>
          <p>{event.description}</p>

          <div className="timeline-fact">
            <strong>{text.impact}</strong>
            <p>{event.fact}</p>
          </div>
        </article>

        <p className="timeline-note">{text.note}</p>

      </div>
    </section>
  );
}

export default TimelineSection;
