
import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap
} from "react-leaflet";

import { featureLayer } from "esri-leaflet";

import "leaflet/dist/leaflet.css";
import "./TelanganaDistrictMap.css";

// Official Telangana TGRAC district boundary layer
const DISTRICT_LAYER_URL =
  "https://tgrac.telangana.gov.in/arcgis/rest/services/EndowmentLands_Folder/EndowmentLands_Admin_2026/MapServer/8";

// Telangana's 33 districts
const districts = [
  "Adilabad",
  "Bhadradri Kothagudem",
  "Hanumakonda",
  "Hyderabad",
  "Jagtial",
  "Jangaon",
  "Jayashankar Bhupalpally",
  "Jogulamba Gadwal",
  "Kamareddy",
  "Karimnagar",
  "Khammam",
  "Kumuram Bheem Asifabad",
  "Mahabubabad",
  "Mahabubnagar",
  "Mancherial",
  "Medak",
  "Medchal Malkajgiri",
  "Mulugu",
  "Nagarkurnool",
  "Nalgonda",
  "Narayanpet",
  "Nirmal",
  "Nizamabad",
  "Peddapalli",
  "Rajanna Sircilla",
  "Rangareddy",
  "Sangareddy",
  "Siddipet",
  "Suryapet",
  "Vikarabad",
  "Wanaparthy",
  "Warangal",
  "Yadadri Bhuvanagiri"
];

// Text translations
const translations = {
  en: {
    eyebrow: "DISTRICT-WISE CLIMATE EXPLORER",
    title: "Explore El Niño across Telangana",
    subtitle:
      "Select a district on the map or from the list to explore its possible climate influences.",
    choose: "SELECT A DISTRICT",
    selected: "SELECTED DISTRICT",
    rainfall: "Rainfall & Monsoon",
    temperature: "Temperature & Heat",
    agriculture: "Agriculture",
    water: "Water Resources",
    noteTitle: "Important climate note",
    note:
      "El Niño can influence India's monsoon, but it does not guarantee low rainfall or drought in any particular district. These are possible effects, not a local weather forecast.",
    loading: "Loading district boundaries...",
    error: "Unable to load the district map. Please check your internet connection.",
    retry: "Retry map",
    mapHint: "Click a district on the map to explore it.",
    source: "Boundary source: Telangana Government TGRAC GIS service."
  },

  te: {
    eyebrow: "జిల్లాల వారీ వాతావరణ అన్వేషణ",
    title: "తెలంగాణలో ఎల్ నినో ప్రభావం",
    subtitle:
      "మ్యాప్‌లో లేదా జాబితాలో ఒక జిల్లాను ఎంచుకుని సాధ్యమైన వాతావరణ ప్రభావాలను తెలుసుకోండి.",
    choose: "జిల్లాను ఎంచుకోండి",
    selected: "ఎంచుకున్న జిల్లా",
    rainfall: "వర్షపాతం & రుతుపవనాలు",
    temperature: "ఉష్ణోగ్రత & వేడి",
    agriculture: "వ్యవసాయం",
    water: "నీటి వనరులు",
    noteTitle: "ముఖ్యమైన వాతావరణ గమనిక",
    note:
      "ఎల్ నినో భారత రుతుపవనాలను ప్రభావితం చేయవచ్చు. కానీ ప్రతి జిల్లాలో కరువు వస్తుందని ఖచ్చితంగా చెప్పలేము. ఇవి సాధ్యమైన ప్రభావాలు మాత్రమే.",
    loading: "జిల్లాల సరిహద్దులు లోడ్ అవుతున్నాయి...",
    error: "జిల్లాల మ్యాప్ లోడ్ కాలేదు. ఇంటర్నెట్ కనెక్షన్‌ను తనిఖీ చేయండి.",
    retry: "మళ్లీ ప్రయత్నించండి",
    mapHint: "ఒక జిల్లాను ఎంచుకోవడానికి మ్యాప్‌పై క్లిక్ చేయండి.",
    source: "సరిహద్దుల సమాచారం: తెలంగాణ ప్రభుత్వ TGRAC GIS సేవ."
  },

  hi: {
    eyebrow: "जिला-वार जलवायु अन्वेषण",
    title: "तेलंगाना में अल नीनो का प्रभाव",
    subtitle:
      "मानचित्र या सूची से कोई जिला चुनें और उसके संभावित जलवायु प्रभाव जानें।",
    choose: "जिला चुनें",
    selected: "चुना गया जिला",
    rainfall: "वर्षा और मानसून",
    temperature: "तापमान और गर्मी",
    agriculture: "कृषि",
    water: "जल संसाधन",
    noteTitle: "महत्वपूर्ण जलवायु सूचना",
    note:
      "अल नीनो भारत के मानसून को प्रभावित कर सकता है, लेकिन यह किसी जिले में सूखे की गारंटी नहीं देता। ये संभावित प्रभाव हैं।",
    loading: "जिला सीमाएँ लोड हो रही हैं...",
    error: "जिला मानचित्र लोड नहीं हो सका। इंटरनेट कनेक्शन जाँचें।",
    retry: "पुनः प्रयास करें",
    mapHint: "जिला चुनने के लिए मानचित्र पर क्लिक करें।",
    source: "सीमा डेटा: तेलंगाना सरकार की TGRAC GIS सेवा।"
  }
};

// Read district name from the GIS feature
function getDistrictName(feature) {
  const properties = feature?.properties || {};

  const possibleFields = [
    "Dist_Name",
    "DNAME1",
    "District",
    "DISTRICT",
    "DIST_NAME",
    "DISTRICT_NAME",
    "district",
    "name"
  ];

  for (const field of possibleFields) {
    const value = properties[field];

    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return "";
}

// Keep the map responsive
function MapResizeHandler() {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
}

// District boundary layer
function DistrictBoundaryLayer({
  selectedDistrict,
  onSelect,
  onLoad,
  onError
}) {
  const map = useMap();
  const layerRef = useRef(null);
  const selectedRef = useRef(selectedDistrict);

  selectedRef.current = selectedDistrict;

  useEffect(() => {
    const getStyle = (feature) => {
      const districtName = getDistrictName(feature);

      const isSelected =
        districtName.toLowerCase() ===
        selectedRef.current.toLowerCase();

      return {
        color: isSelected ? "#082f49" : "#ffffff",
        weight: isSelected ? 3 : 1.4,
        fillColor: isSelected ? "#0284c7" : "#7dd3fc",
        fillOpacity: isSelected ? 0.8 : 0.5
      };
    };

    const layer = featureLayer({
      url: DISTRICT_LAYER_URL,
      where: "1=1",
      fields: ["*"],
      simplifyFactor: 0.5,
      precision: 5,
      style: getStyle,

      onEachFeature: (feature, featureLayerInstance) => {
        const name = getDistrictName(feature);

        if (name) {
          featureLayerInstance.bindTooltip(name, {
            sticky: true,
            direction: "top"
          });

          featureLayerInstance.on("click", () => {
            onSelect(name);
          });
        }
      }
    });

    layer.on("requesterror", (error) => {
      console.error("TGRAC GIS request error:", error);
      onError();
    });

    layer.on("load", () => {
      onLoad();

      try {
        const bounds = layer.getBounds();

        if (bounds.isValid()) {
          map.fitBounds(bounds, {
            padding: [20, 20]
          });
        }
      } catch (error) {
        console.error("Map bounds error:", error);
      }
    });

    layer.addTo(map);
    layerRef.current = layer;

    return () => {
      map.removeLayer(layer);
      layerRef.current = null;
    };
  }, [map, onSelect, onLoad, onError]);

  // Update district highlighting without reloading the GIS layer
  useEffect(() => {
    if (layerRef.current) {
      layerRef.current.setStyle((feature) => {
        const name = getDistrictName(feature);

        const isSelected =
          name.toLowerCase() ===
          selectedDistrict.toLowerCase();

        return {
          color: isSelected ? "#082f49" : "#ffffff",
          weight: isSelected ? 3 : 1.4,
          fillColor: isSelected ? "#0284c7" : "#7dd3fc",
          fillOpacity: isSelected ? 0.8 : 0.5
        };
      });
    }
  }, [selectedDistrict]);

  return null;
}

// District-specific educational explanations
function getImpactDetails(district, language) {
  if (language === "te") {
    return [
      {
        title: "వర్షపాతం & రుతుపవనాలు",
        text:
          `${district} జిల్లాలో రుతుపవనాల వర్షాల సమయం, పంపిణీ మరియు పరిమాణంలో మార్పులు సంభవించవచ్చు.`
      },
      {
        title: "ఉష్ణోగ్రత & వేడి",
        text:
          "వేడి కాలంలో అధిక ఉష్ణోగ్రతలు కొనసాగితే ప్రజల ఆరోగ్యం మరియు నీటి అవసరాలపై ఒత్తిడి పెరగవచ్చు."
      },
      {
        title: "వ్యవసాయం",
        text:
          "వర్షాలు ఆలస్యమైతే లేదా ఎక్కువ రోజులు విరామం వస్తే విత్తనాలు వేయడం, పంటల పెరుగుదల మరియు సాగునీటి ప్రణాళిక ప్రభావితమవవచ్చు."
      },
      {
        title: "నీటి వనరులు",
        text:
          "దీర్ఘకాలం వర్షాలు తగ్గితే చెరువులు, జలాశయాలు మరియు భూగర్భ జలాలపై ఒత్తిడి పెరగవచ్చు."
      }
    ];
  }

  if (language === "hi") {
    return [
      {
        title: "वर्षा और मानसून",
        text:
          `${district} जिले में मानसूनी वर्षा के समय, वितरण और मात्रा में बदलाव हो सकता है।`
      },
      {
        title: "तापमान और गर्मी",
        text:
          "लंबे समय तक अधिक तापमान रहने से स्वास्थ्य और पानी की आवश्यकता पर दबाव बढ़ सकता है।"
      },
      {
        title: "कृषि",
        text:
          "बारिश में देरी या लंबे शुष्क अंतराल से बुवाई, फसलों की वृद्धि और सिंचाई प्रभावित हो सकती है।"
      },
      {
        title: "जल संसाधन",
        text:
          "लंबे समय तक कम वर्षा होने पर तालाबों, जलाशयों और भूजल पर दबाव बढ़ सकता है।"
      }
    ];
  }

  return [
    {
      title: "Rainfall & Monsoon",
      text:
        `${district} may experience changes in the timing, distribution or amount of seasonal monsoon rainfall. El Niño's influence varies from year to year.`
    },
    {
      title: "Temperature & Heat",
      text:
        "If hot conditions persist during the warm season, pressure on public health and water consumption may increase."
    },
    {
      title: "Agriculture",
      text:
        "Delayed rainfall or longer dry spells may affect sowing schedules, crop growth and irrigation planning."
    },
    {
      title: "Water Resources",
      text:
        "Prolonged rainfall deficits may put pressure on tanks, reservoirs and groundwater. Actual conditions depend on local rainfall and water management."
    }
  ];
}

// Main component
function TelanganaDistrictMap({ language = "en" }) {
  const [selectedDistrict, setSelectedDistrict] = useState("Hyderabad");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const text = translations[language] || translations.en;

  const impactDetails = getImpactDetails(
    selectedDistrict,
    language
  );

  const handleLoad = React.useCallback(() => {
    setLoading(false);
    setError(false);
  }, []);

  const handleError = React.useCallback(() => {
    setLoading(false);
    setError(true);
  }, []);

  const handleRetry = () => {
    setError(false);
    setLoading(true);
    window.location.reload();
  };

  return (
    <section className="district-explorer">
      <div className="district-heading">
        <span>{text.eyebrow}</span>

        <h2>{text.title}</h2>

        <p>{text.subtitle}</p>
      </div>

      <div className="district-layout">
        <div className="district-map-panel">
          <div className="district-map-top">
            <strong>Telangana</strong>
            <span>33 Districts</span>
          </div>

          <div className="district-map-wrapper">
            <MapContainer
              center={[17.85, 79.1]}
              zoom={7}
              scrollWheelZoom={false}
              className="district-leaflet-map"
            >
              <MapResizeHandler />

              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <DistrictBoundaryLayer
                selectedDistrict={selectedDistrict}
                onSelect={setSelectedDistrict}
                onLoad={handleLoad}
                onError={handleError}
              />
            </MapContainer>

            {loading && (
              <div className="district-map-overlay">
                {text.loading}
              </div>
            )}

            {error && (
              <div className="district-map-overlay district-error">
                <p>{text.error}</p>
                <button onClick={handleRetry}>
                  {text.retry}
                </button>
              </div>
            )}
          </div>

          <p className="map-hint">
            {text.mapHint}
          </p>
        </div>

        <aside className="district-information">
          <label htmlFor="district-select">
            {text.choose}
          </label>

          <select
            id="district-select"
            value={selectedDistrict}
            onChange={(event) =>
              setSelectedDistrict(event.target.value)
            }
          >
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>

          <div className="selected-district-heading">
            <span>{text.selected}</span>
            <h3>{selectedDistrict}</h3>
          </div>

          <div className="district-impact-list">
            {impactDetails.map((item, index) => {
              const titles = [
                text.rainfall,
                text.temperature,
                text.agriculture,
                text.water
              ];

              return (
                <article
                  className="district-impact-card"
                  key={index}
                >
                  <h4>{titles[index]}</h4>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </aside>
      </div>

      <div className="district-note">
        <strong>{text.noteTitle}</strong>
        <p>{text.note}</p>
      </div>

      <p className="district-source">
        {text.source}
      </p>
    </section>
  );
}

export default TelanganaDistrictMap;
