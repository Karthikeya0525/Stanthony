
import React, { useState } from "react";
import "./TelanganaExplorer.css";

const topics = {
  en: [
    {
      id: "hyderabad",
      icon: "🏙️",
      title: "Hyderabad",
      subtitle: "Heat & Urban Water",
      heading: "How could El Niño affect Hyderabad?",
      description:
        "El Niño can influence regional climate patterns. During some El Niño periods, parts of India experience weaker monsoon rainfall. In Hyderabad, prolonged hot and dry conditions can increase water demand and put pressure on urban water supplies.",
      points: [
        "Higher temperatures can increase water consumption.",
        "Longer dry periods may increase pressure on local water sources.",
        "Water conservation becomes especially important during dry spells."
      ],
      takeaway: "Every drop counts. Responsible water use helps communities prepare for periods of water stress."
    },
    {
      id: "agriculture",
      icon: "🌾",
      title: "Agriculture",
      subtitle: "Crops & Farmers",
      heading: "What could happen to Telangana agriculture?",
      description:
        "Agriculture in Telangana depends partly on seasonal monsoon rainfall. Changes in the timing, distribution and amount of rainfall can affect sowing schedules, crop growth and farming decisions.",
      points: [
        "Delayed rainfall can affect sowing schedules.",
        "Long dry spells can create moisture stress for crops.",
        "Farmers may need to plan irrigation and water storage carefully."
      ],
      takeaway: "Better rainfall information and efficient irrigation help farmers manage climate uncertainty."
    },
    {
      id: "water",
      icon: "💧",
      title: "Water Resources",
      subtitle: "Rivers & Reservoirs",
      heading: "Why are rivers and reservoirs important?",
      description:
        "Telangana depends on river systems such as the Godavari and Krishna, along with reservoirs, tanks and groundwater. Reduced rainfall over time can affect water availability, although actual reservoir levels also depend on inflows, releases and water management.",
      points: [
        "River inflows may change with seasonal rainfall.",
        "Reservoir storage depends on rainfall across their catchment areas.",
        "Groundwater conservation supports communities during dry periods."
      ],
      takeaway: "Protecting lakes, tanks and groundwater is important for long-term water security."
    },
    {
      id: "weather",
      icon: "🌦️",
      title: "Weather",
      subtitle: "Monsoon & Rainfall",
      heading: "Can El Niño change Telangana's monsoon?",
      description:
        "El Niño is associated with a tendency towards weaker Indian summer monsoon rainfall at the national scale. However, its influence varies by region and year. Telangana may still receive heavy rainfall in some places and periods.",
      points: [
        "Seasonal rainfall may be below or above normal.",
        "The timing and distribution of rainfall matter as much as the total.",
        "Local weather systems can produce heavy rain even during an El Niño year."
      ],
      takeaway: "El Niño is an important climate influence, not a guarantee of drought or poor rainfall."
    }
  ],

  te: [
    {
      id: "hyderabad",
      icon: "🏙️",
      title: "హైదరాబాద్",
      subtitle: "వేడి & నగర నీటి అవసరాలు",
      heading: "ఎల్ నినో హైదరాబాద్‌ను ఎలా ప్రభావితం చేయవచ్చు?",
      description:
        "ఎల్ నినో ప్రాంతీయ వాతావరణ పరిస్థితులను ప్రభావితం చేయవచ్చు. కొన్ని ఎల్ నినో కాలాల్లో భారతదేశంలోని కొన్ని ప్రాంతాల్లో వర్షపాతం తగ్గవచ్చు. వేడి, పొడి వాతావరణం కొనసాగితే నగరంలో నీటి అవసరం పెరగవచ్చు.",
      points: [
        "ఉష్ణోగ్రతలు పెరిగితే నీటి వినియోగం పెరగవచ్చు.",
        "ఎక్కువ రోజులు వర్షాలు లేకపోతే నీటి వనరులపై ఒత్తిడి పెరగవచ్చు.",
        "నీటిని పొదుపుగా వినియోగించడం ముఖ్యం."
      ],
      takeaway: "ప్రతి నీటి బొట్టూ విలువైనదే. నీటి సంరక్షణ అందరి బాధ్యత."
    },
    {
      id: "agriculture",
      icon: "🌾",
      title: "వ్యవసాయం",
      subtitle: "పంటలు & రైతులు",
      heading: "తెలంగాణ వ్యవసాయంపై ఎలాంటి ప్రభావం ఉండవచ్చు?",
      description:
        "తెలంగాణ వ్యవసాయం కొంతవరకు రుతుపవన వర్షాలపై ఆధారపడి ఉంటుంది. వర్షాల సమయం, పంపిణీ మరియు పరిమాణంలో మార్పులు విత్తనాలు వేయడం, పంటల పెరుగుదలపై ప్రభావం చూపవచ్చు.",
      points: [
        "వర్షాలు ఆలస్యమైతే విత్తనాలు వేసే సమయం మారవచ్చు.",
        "ఎక్కువ రోజులు వర్షాలు లేకపోతే పంటలకు నీటి ఒత్తిడి ఏర్పడవచ్చు.",
        "రైతులు సాగునీరు మరియు నీటి నిల్వలను జాగ్రత్తగా ప్రణాళిక చేసుకోవాలి."
      ],
      takeaway: "వాతావరణ సమాచారం మరియు సమర్థవంతమైన సాగునీటి వినియోగం రైతులకు సహాయపడతాయి."
    },
    {
      id: "water",
      icon: "💧",
      title: "నీటి వనరులు",
      subtitle: "నదులు & జలాశయాలు",
      heading: "నదులు మరియు జలాశయాలు ఎందుకు ముఖ్యం?",
      description:
        "తెలంగాణలో గోదావరి, కృష్ణా నదులతో పాటు జలాశయాలు, చెరువులు మరియు భూగర్భ జలాలు ముఖ్యమైన నీటి వనరులు. వర్షపాతం తగ్గితే నీటి లభ్యత ప్రభావితమవచ్చు. అయితే జలాశయాల నీటి మట్టాలు ఇతర అంశాలపై కూడా ఆధారపడి ఉంటాయి.",
      points: [
        "కాలానుగుణ వర్షాల ఆధారంగా నదుల్లో నీటి ప్రవాహం మారవచ్చు.",
        "జలాశయాల నీటి నిల్వలు వాటి పరివాహక ప్రాంతాల వర్షాలపై ఆధారపడతాయి.",
        "భూగర్భ జలాల సంరక్షణ చాలా ముఖ్యం."
      ],
      takeaway: "చెరువులు, సరస్సులు మరియు భూగర్భ జలాలను కాపాడుకోవాలి."
    },
    {
      id: "weather",
      icon: "🌦️",
      title: "వాతావరణం",
      subtitle: "రుతుపవనాలు & వర్షాలు",
      heading: "ఎల్ నినో తెలంగాణ రుతుపవనాలను మార్చగలదా?",
      description:
        "ఎల్ నినో భారతదేశంలో వేసవి రుతుపవనాల వర్షపాతాన్ని తగ్గించే ధోరణితో సంబంధం కలిగి ఉంటుంది. అయితే దీని ప్రభావం ప్రతి ప్రాంతంలో, ప్రతి సంవత్సరంలో ఒకేలా ఉండదు.",
      points: [
        "వర్షపాతం సాధారణం కంటే తక్కువగా లేదా ఎక్కువగా ఉండవచ్చు.",
        "మొత్తం వర్షపాతంతో పాటు వర్షాలు కురిసే సమయం కూడా ముఖ్యం.",
        "ఎల్ నినో సంవత్సరంలో కూడా కొన్ని ప్రాంతాల్లో భారీ వర్షాలు కురవవచ్చు."
      ],
      takeaway: "ఎల్ నినో వాతావరణాన్ని ప్రభావితం చేస్తుంది కానీ కరువును ఖచ్చితంగా సూచించదు."
    }
  ],

  hi: [
    {
      id: "hyderabad",
      icon: "🏙️",
      title: "हैदराबाद",
      subtitle: "गर्मी और शहरी जल",
      heading: "अल नीनो हैदराबाद को कैसे प्रभावित कर सकता है?",
      description:
        "अल नीनो क्षेत्रीय जलवायु को प्रभावित कर सकता है। कुछ अल नीनो वर्षों में भारत के कुछ हिस्सों में मानसूनी वर्षा कम हो सकती है। लंबे समय तक गर्म और शुष्क मौसम रहने पर शहर में पानी की मांग बढ़ सकती है।",
      points: [
        "तापमान बढ़ने पर पानी की खपत बढ़ सकती है।",
        "लंबे शुष्क समय से स्थानीय जल स्रोतों पर दबाव बढ़ सकता है।",
        "पानी बचाना बहुत महत्वपूर्ण है।"
      ],
      takeaway: "पानी की हर बूंद कीमती है। जल संरक्षण हम सभी की जिम्मेदारी है।"
    },
    {
      id: "agriculture",
      icon: "🌾",
      title: "कृषि",
      subtitle: "फसलें और किसान",
      heading: "तेलंगाना की कृषि पर क्या प्रभाव पड़ सकता है?",
      description:
        "तेलंगाना की कृषि कुछ हद तक मानसूनी वर्षा पर निर्भर करती है। वर्षा के समय, वितरण और मात्रा में बदलाव बुवाई और फसलों की वृद्धि को प्रभावित कर सकते हैं।",
      points: [
        "वर्षा में देरी से बुवाई का समय बदल सकता है।",
        "लंबे सूखे समय से फसलों में पानी की कमी हो सकती है।",
        "किसानों को सिंचाई और जल भंडारण की योजना बनानी पड़ सकती है।"
      ],
      takeaway: "मौसम की जानकारी और कुशल सिंचाई किसानों की मदद करती है।"
    },
    {
      id: "water",
      icon: "💧",
      title: "जल संसाधन",
      subtitle: "नदियाँ और जलाशय",
      heading: "नदियाँ और जलाशय क्यों महत्वपूर्ण हैं?",
      description:
        "तेलंगाना में गोदावरी और कृष्णा नदियों के साथ जलाशय, तालाब और भूजल महत्वपूर्ण जल स्रोत हैं। वर्षा में कमी से पानी की उपलब्धता प्रभावित हो सकती है।",
      points: [
        "मौसमी वर्षा के अनुसार नदियों का जल प्रवाह बदल सकता है।",
        "जलाशयों का भंडारण उनके जलग्रहण क्षेत्रों की वर्षा पर निर्भर करता है।",
        "भूजल संरक्षण बहुत जरूरी है।"
      ],
      takeaway: "तालाबों, झीलों और भूजल की रक्षा करना जरूरी है।"
    },
    {
      id: "weather",
      icon: "🌦️",
      title: "मौसम",
      subtitle: "मानसून और वर्षा",
      heading: "क्या अल नीनो तेलंगाना के मानसून को बदल सकता है?",
      description:
        "अल नीनो का संबंध भारत में कमजोर दक्षिण-पश्चिम मानसूनी वर्षा की प्रवृत्ति से है। हालांकि इसका प्रभाव हर क्षेत्र और हर वर्ष में एक जैसा नहीं होता।",
      points: [
        "वर्षा सामान्य से कम या अधिक हो सकती है।",
        "वर्षा की कुल मात्रा के साथ उसका समय भी महत्वपूर्ण है।",
        "अल नीनो वर्ष में भी कुछ स्थानों पर भारी बारिश हो सकती है।"
      ],
      takeaway: "अल नीनो जलवायु को प्रभावित करता है, लेकिन सूखे की गारंटी नहीं देता।"
    }
  ]
};

function TelanganaExplorer({ language = "en" }) {
  const [selected, setSelected] = useState("hyderabad");

  const content = topics[language] || topics.en;
  const activeTopic =
    content.find((topic) => topic.id === selected) || content[0];

  return (
    <section className="telangana-explorer">
      <div className="telangana-container">

        <div className="telangana-heading">
          <span>OUR REGION · OUR CLIMATE</span>
          <h2>
            {language === "te"
              ? "తెలంగాణపై ఎల్ నినో ప్రభావం"
              : language === "hi"
              ? "तेलंगाना पर अल नीनो का प्रभाव"
              : "El Niño & Telangana"}
          </h2>

          <p>
            {language === "te"
              ? "మన రాష్ట్రంలోని వాతావరణం, వ్యవసాయం మరియు నీటి వనరులపై తెలుసుకుందాం."
              : language === "hi"
              ? "आइए जानें कि यह जलवायु घटना हमारे राज्य को कैसे प्रभावित कर सकती है।"
              : "Explore how this climate phenomenon could influence our state's weather, agriculture and water resources."}
          </p>
        </div>

        <div className="telangana-layout">

          <div className="telangana-topics">
            {content.map((topic) => (
              <button
                key={topic.id}
                className={`telangana-topic ${
                  selected === topic.id ? "active" : ""
                }`}
                onClick={() => setSelected(topic.id)}
                aria-pressed={selected === topic.id}
              >
                <span className="topic-icon">{topic.icon}</span>

                <span className="topic-text">
                  <strong>{topic.title}</strong>
                  <small>{topic.subtitle}</small>
                </span>

                <span className="topic-arrow">→</span>
              </button>
            ))}
          </div>

          <article className="telangana-detail" key={`${language}-${selected}`}>
            <div className="detail-icon">{activeTopic.icon}</div>

            <span className="detail-eyebrow">
              {activeTopic.subtitle}
            </span>

            <h3>{activeTopic.heading}</h3>

            <p className="detail-description">
              {activeTopic.description}
            </p>

            <div className="detail-points">
              {activeTopic.points.map((point, index) => (
                <div className="detail-point" key={index}>
                  <span>✓</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>

            <div className="detail-takeaway">
              <strong>
                {language === "te"
                  ? "ముఖ్యమైన విషయం"
                  : language === "hi"
                  ? "मुख्य बात"
                  : "KEY TAKEAWAY"}
              </strong>
              <p>{activeTopic.takeaway}</p>
            </div>
          </article>

        </div>

        <p className="telangana-disclaimer">
          {language === "te"
            ? "గమనిక: ఇవి సాధ్యమైన వాతావరణ ప్రభావాలు మాత్రమే. ఖచ్చితమైన స్థానిక అంచనాల కోసం అధికారిక వాతావరణ సమాచారాన్ని చూడండి."
            : language === "hi"
            ? "ध्यान दें: ये संभावित जलवायु प्रभाव हैं। स्थानीय पूर्वानुमान के लिए आधिकारिक मौसम जानकारी देखें।"
            : "Note: These are possible climate influences, not local weather forecasts. Consult official meteorological updates for current conditions."}
        </p>

      </div>
    </section>
  );
}

export default TelanganaExplorer;
