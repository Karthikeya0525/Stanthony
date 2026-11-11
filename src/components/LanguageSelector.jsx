
import React from "react";
import "./LanguageSelector.css";

function LanguageSelector({ language, setLanguage }) {
  const languages = [
    { code: "en", label: "English" },
    { code: "te", label: "తెలుగు" },
    { code: "hi", label: "हिन्दी" }
  ];

  return (
    <div className="language-wrapper">
      <span className="language-label">
        Select Language
      </span>

      <div className="language-options">
        {languages.map((item) => (
          <button
            key={item.code}
            className={`language-button ${
              language === item.code ? "active" : ""
            }`}
            onClick={() => setLanguage(item.code)}
            aria-pressed={language === item.code}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSelector;
