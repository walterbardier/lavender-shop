import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PageWrapper.css";

export default function PageWrapper({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setStage("fadeOut");
      setTimeout(() => {
        setDisplayLocation(location);
        setStage("fadeIn");
      }, 200);
    }
  }, [location, displayLocation]);

  return (
    <div className={`page ${stage}`}>
      {children}
    </div>
  );
}