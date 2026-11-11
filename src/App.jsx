
import React, { useState } from "react";

import Header from "./components/Header";
import FeaturedVideo from "./components/FeaturedVideo";
import LanguageSelector from "./components/LanguageSelector";
import IntroSection from "./components/IntroSection";
import translations from "./data/translations";
import LanguageVideo from "./components/LanguageVideo";
import VideoLibrary from "./components/VideoLibrary";
import TimelineSection from "./components/TimelineSection.jsx";

import TelanganaDistrictMap from "./components/TelanganaDistrictMap.jsx";

function App() {
  const [language, setLanguage] = useState("en");

  const content = translations[language];

  // Replace this with your actual video details.
  const videoType = "youtube";

  const videoUrl =
    "https://youtu.be/yw3XNZ1bRdE";

return (
  <>
    <Header />

    <FeaturedVideo
      type={videoType}
      videoUrl={videoUrl}
    />

    <LanguageSelector
      language={language}
      setLanguage={setLanguage}
    />

    <VideoLibrary language={language} />

    <IntroSection content={content} />
    <TimelineSection language={language} />

    <TelanganaDistrictMap language={language} />
  </>
);
}

export default App;
