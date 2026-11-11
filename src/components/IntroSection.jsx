
import React from "react";
import "./IntroSection.css";

function IntroSection({ content }) {
  const facts = [
    {
      number: "01",
      title: content.fact1Title,
      description: content.fact1Description
    },
    {
      number: "02",
      title: content.fact2Title,
      description: content.fact2Description
    },
    {
      number: "03",
      title: content.fact3Title,
      description: content.fact3Description
    }
  ];

  return (
    <section className="intro-section">
      <div className="intro-container">
        <span className="intro-eyebrow">
          {content.introEyebrow}
        </span>

        <h1>{content.introTitle}</h1>

        <p className="intro-description">
          {content.introDescription}
        </p>

        <div className="facts-grid">
          {facts.map((fact) => (
            <article className="fact-card" key={fact.number}>
              <span className="fact-number">{fact.number}</span>
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
