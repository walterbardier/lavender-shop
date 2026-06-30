import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./FloatingLogo.css";

export default function FloatingLogo() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      to="/"
      className={`floating-logo ${visible ? "show" : "hide"}`}
    >
      <img
        src="../images/logo.png"
        alt="LORA"
      />
    </Link>
  );
}